<template>
  <div class="item-root">
    <div class="item-header">
      <div class="item-title">
        <span class="el-icon-back headerIcon" @click="toHome"></span>
        {{pageState == 'add' ? '创建告警配置项' : pageState == 'view' ? '告警配置项详情' : '告警配置项编辑'}}
      </div>
      <div v-if="pageState != 'add' && buttonState">
        <el-button @click="stateChange">{{this.alarmForm.state ? '禁用' : '启用'}}</el-button>
        <el-button @click="del">删除</el-button>
        <el-button @click="toEdit">编辑</el-button>
      </div>
    </div>
    <div class="item-details-main">
      <el-form ref="alarmForm" :model="alarmForm" :rules="rules" label-width="100px">
        <el-form-item label="告警组">
          {{alarmForm.groupLabel}}
        </el-form-item>
        <el-form-item label="状态" prop="state">
          <el-radio-group v-model="alarmForm.state" :disabled="pageState == 'view'"
                          style="height: 40px;vertical-align: baseline">
            <el-radio :label="true">启用</el-radio>
            <el-radio :label="false">禁用</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="关联数据表" prop="datasource">
          <span v-if="pageState == 'view'">{{alarmForm.datasource}}</span>
          <el-select v-model="alarmForm.datasource" filterable placeholder="请选择" @change="datSouChange" v-else>
            <el-option
              v-for="(item,index) in dataSourceTableData"
              :key="item.id"
              :label="item.name"
              :value="item.id">
              <span style="float: left">{{ index }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.name }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分组字段" prop="groupFields">
          <el-select
            v-model="alarmForm.groupFields"
            multiple
            collapse-tags
            filterable
            placeholder="请选择"
            @visible-change="groFieChange"
            v-if="pageState != 'view'">
            <el-option
              v-for="item in nominalList"
              :key="item.id"
              :disabled="item.disabled"
              :label="item.name"
              :value="item.name">
            </el-option>
          </el-select>
          <el-tag
            v-for="tag in alarmForm.groupFields"
            :key="tag"
            :closable="pageState != 'view'"
            :disable-transitions="false"
            @close="handleClose(tag,'groupFields')">
            {{tag}}
          </el-tag>
        </el-form-item>
        <el-form-item label="告警字段" prop="alarmConditionArray" class="is-required">
          <el-select
            v-model="alarmConditionArray"
            multiple
            collapse-tags
            filterable
            placeholder="请选择"
            @visible-change="alConChange"
            v-if="pageState != 'view'">
            <el-option
              v-for="item in continueList"
              :key="item.id"
              :disabled="item.disabled"
              :label="item.label"
              :value="item.name">
            </el-option>
          </el-select>
          <el-tag
            v-for="tag in alarmConditionArrayTag"
            :key="tag"
            :closable="pageState != 'view'"
            :disable-transitions="false"
            @close="handleClose(tag,'alarmCondition')">
            {{tag}}
          </el-tag>
        </el-form-item>
        <div class="fields" v-for="(item,index) in fields" :key="index" :class="{errorFields: item.isError}">
          <p class="fieldsTitle">{{alarmConditionArrayTag[index] || index}}</p>
          <i class="el-icon-delete" v-if="pageState != 'view'" @click="delFieldsIcon(index)"></i>
          <el-row :gutter="50" class="formItem">
            <el-col :span="16" style="padding-right: 0" v-if="item.type=='BOOL'">
              <el-form-item label="取值" prop="type" class="is-required">
                <el-checkbox-group v-model="item.boolShow" :disabled="pageState == 'view'">
                  <el-checkbox label="0→1" name="0→1"></el-checkbox>
                  <el-checkbox label="1→0" name="1→0"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="告警级别" prop="levels">
                <el-radio-group v-model="item.alarmLevel" :disabled="pageState == 'view'">
                  <el-radio-button label="1">I级</el-radio-button>
                  <el-radio-button label="2">II级</el-radio-button>
                  <el-radio-button label="3">III级</el-radio-button>
                  <el-radio-button label="4">IV级</el-radio-button>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="16" style="padding-right: 0" v-else-if="item.type=='CONTINUOUS'">
              <el-form-item label="告警级别设置" prop="alarmSet" label-width="180px" style="width: 100%" class="is-required">
                <alarm-set ref="alarmLevelSet" :stickData="item" :pageState="pageState"></alarm-set>
              </el-form-item>
            </el-col>
            <el-col :span="8" style="padding: 0">
              <el-form-item label="告警延迟" prop="delay" label-width="150px" class="is-required">
                <span v-if="pageState == 'view'">{{item.delay}}</span>
                <el-input-number
                  placeholder="请输入内容"
                  type="number"
                  :min="0"
                  controls-position="right"
                  v-model="item.delay"
                  v-else>
                </el-input-number>
                <span>秒</span>
              </el-form-item>
            </el-col>
          </el-row>
        </div>

        <el-form-item style="display: flex;justify-content: center" v-if="pageState != 'view'">
          <el-button @click="toHome">取消</el-button>
          <el-button type="primary" @click="onSubmit()" style="margin-left: 20px">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import AlarmSet from './AlarmSet'
  import AlarmConfigurationService from '../api/configurationApi'
  import { Authorization } from 'as-modules-utils'

  export default {
    components: {AlarmSet},
    data() {

      // alarmFields
      var alarmFields = (rule, value, callback) => {
        if (this.alarmConditionArray.length == 0) {
          callback(new Error('请选择告警字段'));
        } else {
          callback();
        }
      }

      return {
        //告警组相关data
        treeConfig: {
          filterable: true,                    // 是否对树节点进行筛选操作
          editable: false,                     // 是否在树节点上显示操作按钮
          editIconShow: true,               // 操作按钮类型 true=操作按钮；false=省略号
          currentNodeKey: 2,                // 当前选中节点
          defaultExpandKeys: [1, 2],           // 当前展开节点
          customIcon: false,
          treeData: []
        },
        btnDown: true,
        btnUp: false,

        //新增字段
        alarmForm: {
          groupId: sessionStorage.getItem('groupId'),
          groupLabel: sessionStorage.getItem('groupLabel'),
          datasource: '',
          state: true,
          groupFields: [],
          alarmCondition: {},
          corpId: Authorization.getCorpId()
        },

        rules: {
          state: [
            {required: true, message: '请选择状态', trigger: 'change'}
          ],
          datasource: [
            {required: true, message: '请选择关联数据表', trigger: 'change'}
          ],
          alarmConditionArray: [
            {validator: alarmFields, trigger: 'change'}
          ]
        },

        alarmConditionArray: [],
        alarmConditionArrayTag: [],
        fields: [],
        doubleDefault: {
          type: 'CONTINUOUS',
          0: {
            low: 0,
            high: 0
          },
          1: {
            low: 0,
            high: 0
          },
          2: {
            low: 0,
            high: 0
          },
          3: {
            low: 0,
            high: 0
          },
          4: {
            low: 0,
            high: 0
          },
          delay: 5,
          isError: false
        },
        boolDefault: {
          type: 'BOOL',
          expression: [],
          boolShow: [],
          alarmLevel: '4',
          delay: 5,
          isError: false
        },

        dataSourceTableData: [],
        nominalList: [],
        continueList: [],
        fieldsMap: {},

        resultObj: {},

        //页面状态切换
        pageState: '',
        buttonState: false

      }
    },
    methods: {
      /**
       * 告警组选择
       */

      handleClose(tag, type) {
        const self = this
        if (type == 'groupFields') {
          this.alarmForm[type].splice(this.alarmForm[type].indexOf(tag), 1)
        }
        if (type == 'alarmCondition') {
          let index = this.alarmConditionArray.indexOf(tag)
          self.delFields(index)
          this.alarmConditionArray.splice(index, 1)
        }
      },

      /**
       * 表单
       */
      onSubmit() {
        const self = this;
        this.$refs.alarmForm.validate((valid) => {
          if (valid) {
            this.alarmForm.alarmCondition = []
            let num = 0, flag = true
            for (let i = 0; i < self.fields.length; i++) {
              if (self.fields[i].type == 'BOOL') {
                let thisBool = JSON.parse(JSON.stringify(self.fields[i].boolShow))
                let isEmpty = true
                if (!thisBool.includes('0→1') && !thisBool.includes('1→0')) {
                  self.fields[i].expression = [0, 0]
                }
                if (thisBool.includes('0→1') && !thisBool.includes('1→0')) {
                  self.fields[i].expression = [1, 0]
                  isEmpty = false
                }
                if (!thisBool.includes('0→1') && thisBool.includes('1→0')) {
                  self.fields[i].expression = [0, 1]
                  isEmpty = false
                }
                if (thisBool.includes('0→1') && thisBool.includes('1→0')) {
                  self.fields[i].expression = [1, 1]
                  isEmpty = false
                }
                if (self.fields[i].delay >= 0 && !isEmpty) {
                  let boolResult = JSON.parse(JSON.stringify(self.fields[i]))
                  delete boolResult.boolShow
                  delete boolResult.isError
                  delete boolResult.type
                  self.alarmForm.alarmCondition.push({field:self.alarmConditionArray[i],rule:boolResult,type:'BOOL'})
                  self.fields[i].isError = false
                } else {
                  self.fields[i].isError = true
                  flag = false
                }
              } else if (self.fields[i].type == 'CONTINUOUS') {
                if (self.$refs.alarmLevelSet[num].result() && self.$refs.alarmLevelSet[num].verify() && self.fields[i].delay >= 0) {
                  self.alarmForm.alarmCondition.push({field:self.alarmConditionArray[i],rule:self.$refs.alarmLevelSet[num].result(),type:'CONTINUOUS'})
                  self.fields[i].isError = false
                } else {
                  self.fields[i].isError = true
                  flag = false
                }
                num++;
              }

              if (self.fields[i].delay < 0) {
                self.fields[i].isError = true
                flag = false
              }
            }

            for (let i = 0; i < self.dataSourceTableData.length; i++) {
              if (self.alarmForm.datasource == self.dataSourceTableData[i].id) {
                self.alarmForm.datasource = self.dataSourceTableData[i].name
              }
            }

            console.log(this.alarmForm, 'this.alarmForm')
            if (flag) {
              if (this.$route.params.id === 'null') {
                AlarmConfigurationService.addAlarmSetting(this.alarmForm).then(res => {
                  this.$message({
                    type: 'success',
                    message: '新增告警配置项成功'
                  })
                  this.toHome()
                }).catch(err => {
                  this.$message({
                    type: 'error',
                    message: '新增告警配置项失败'
                  })
                })
              } else {
                AlarmConfigurationService.updateAlarmSetting(Object.assign({id: this.$route.params.id,corpId: Authorization.getCorpId()}, this.alarmForm)).then(res => {
                  this.$message({
                    type: 'success',
                    message: '编辑告警配置项成功'
                  })
                  this.toHome()
                  // this.$refs.alarmForm.resetField()
                }).catch(err => {
                  this.$message({
                    type: 'error',
                    message: '编辑告警配置项失败'
                  })
                })
              }
            } else {
              this.$message({
                type: 'error',
                message: '请规则填写正确后再进行保存'
              })
            }
          }
        })
      },

      toHome() {
        this.$router.push({path: '/Configuration'})
        // this.$refs.alarmForm.resetField()
      },

      //修改状态
      stateChange() {
        const self = this
        this.$confirm(`确定要${this.alarmForm.state ? '禁用' : '启用'}当前配置吗？`, '状态提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let data = {
            operation: !this.alarmForm.state,
            ids: [Number(this.$route.params.id)]
          }
          AlarmConfigurationService.stateAlarmSetting(data).then(res => {
            this.$message({
              type: 'success',
              message: `${this.alarmForm.state ? '禁用' : '启用'}成功!`
            })
            self.init()
          }).catch(err => {
            this.$message({
              type: 'error',
              message: `${this.alarmForm.state ? '禁用' : '启用'}失败!`
            })
          })
        })
      },

      //删除
      del() {
        const self = this
        this.$confirm('删除后，该告警配置将被移除，不再进行检测和发送通知，确认删除吗？', '删除提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          AlarmConfigurationService.deleteOneAlarmSetting(this.$route.params.id).then(res => {
            this.$message({
              type: 'success',
              message: '删除成功'
            })
            self.toHome();
          }).catch(err => {
            this.$message({
              type: 'error',
              message: '删除失败'
            })
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
          return false
        })
      },

      //编辑
      toEdit() {
        const self = this
        self.pageState = 'edit';
        //
        let dataSourceId = ''
        self.dataSourceTableData.forEach(item => {
          if (item.name == self.alarmForm.datasource) {
            dataSourceId = item.id
          }
        })
        //
        let param = {
          datasourceId: dataSourceId,
          pageIndex: 0,
          pageSize: 10000
        }
        this.nominalList = []
        this.continueList = []
        this.fieldsMap = {}
        //
        AlarmConfigurationService.getGroupAndAlarmFields(param).then(res => {
          if (res && res.length > 0) {
            res.forEach(item => {
              if (item.measure == 'CONTINUOUS' || item.measure == 'NOMINAL' || item.measure == 'FLAG') {
                if (item.dataType.includes('DOUBLE') || item.dataType.includes('FLOAT') || item.dataType.includes('INT') || item.dataType.includes('LONG') || item.dataType.includes('BOOL')) {
                  self.continueList.push(item)
                  self.fieldsMap[item.name] = {
                    type: item.dataType,
                    label: item.label
                  }
                }
              }
              if (item.measure == 'NOMINAL') {
                self.nominalList.push(item)
              }
            })
          }
        })

      },

      datSouChange(val) {
        const self = this
        let param = {
          datasourceId: val,
          pageIndex: 0,
          pageSize: 10000
        }

        this.nominalList = []
        this.continueList = []
        this.alarmForm.groupFields = []
        this.alarmConditionArray = []
        this.fields = []
        this.fieldsMap = {}

        AlarmConfigurationService.getGroupAndAlarmFields(param).then(res => {
          if (res && res.length > 0) {
            res.forEach(item => {
              if (item.measure == 'CONTINUOUS' || item.measure == 'NOMINAL' || item.measure == 'FLAG') {
                if (item.dataType.includes('DOUBLE') || item.dataType.includes('FLOAT') || item.dataType.includes('INT') || item.dataType.includes('LONG') || item.dataType.includes('BOOL')) {
                  self.continueList.push(item)
                  self.fieldsMap[item.name] = {
                    type: item.dataType,
                    label: item.label
                  }
                }
              }
              if (item.measure == 'NOMINAL') {
                self.nominalList.push(item)
              }
            })
          }
        })
      },

      init() {
        const self = this
        AlarmConfigurationService.findOneAlarmSetting(this.$route.params.id).then(res => {
          this.alarmForm = res
          this.alarmForm.groupLabel = sessionStorage.getItem('groupLabel')

          this.alarmConditionArray = []
          this.fields = []

          let num = 0
          res.alarmCondition.forEach(item => {
            if(item.type == 'BOOL'){
              let boolShow = []
              if(item.rule.expression[0] == 1){
                boolShow.push('0→1')
              }
              if(item.rule.expression[1] == 1){
                boolShow.push('1→0')
              }
              item.rule.type = 'BOOL'
              self.fields.push(Object.assign({isError: false, boolShow: boolShow}, item.rule))
            }else if(item.type == 'CONTINUOUS'){
              new Promise((resolve,reject) => {
                item.rule.type = 'CONTINUOUS'
                self.fields.push(Object.assign({isError: false}, item.rule))
                resolve()
              }).then(() => {
                self.$refs.alarmLevelSet[num].init(item.rule)
                num++
              })
            }
            self.alarmConditionArray.push(item.field)
          })
        })
      },

      initSets() {
        const self = this
        let param = {
          pageIndex: 0,
          pageSize: 10000
        }

        AlarmConfigurationService.getSourceTableData(param).then(res => {
          let dataSourceTableData = res

          AlarmConfigurationService.getSettingItem().then(res => {
            for(let i=0;i<dataSourceTableData.length;i++){
              for(let j=0;j<res.length;j++){
                if(dataSourceTableData[i] && dataSourceTableData[i].name == res[j]){
                  if(self.pageState == 'view' && dataSourceTableData[i].name == self.alarmForm.datasource){
                    break
                  }else{
                    dataSourceTableData.splice(i,1)
                    i--
                    break
                  }
                }
              }
            }

            this.dataSourceTableData = dataSourceTableData
          })

        })
      },

      delFields(index) {
        const self = this

        //1.所有控件的结果先取出来
        let results = []
        if (self.$refs.alarmLevelSet) {
          for (let i = 0; i < self.$refs.alarmLevelSet.length; i++) { //记录删除前所有条结果
            results.push(self.$refs.alarmLevelSet[i].result())
          }
        }

        //2.判断是不是删了有控件的条目,如果是,在results中去掉带有结果的那一条
        if (self.fields[index].type == 'CONTINUOUS') {
          let num = 0
          for (let i = 0; i < self.fields.length; i++) {
            if (self.fields[i].type == 'CONTINUOUS') {
              self.fields[i].asIndex = num
              num++
            }
          }
          results.splice(self.fields[index].asIndex, 1)
        }

        //3.全部赋值回去
        if (self.$refs.alarmLevelSet) {
          setTimeout(() => {
            for (let j = 0; j < self.$refs.alarmLevelSet.length; j++) {
              self.$refs.alarmLevelSet[j].init(results[j])
            }
          }, 0)
        }

        self.fields.splice(index, 1)

      },

      delFieldsIcon(index) {
        this.delFields(index)
        this.alarmConditionArray.splice(index, 1)
      },

      groFieChange(state) {
        let arr = this.nominalList.slice(0)
        if(state){
          let alarmConditionArray = this.alarmConditionArray
          if(alarmConditionArray.length > 0){
            arr.forEach(item => {
              for(let i=0;i<alarmConditionArray.length;i++){
                if(item.label == alarmConditionArray[i]){
                  item.disabled = true
                }
              }
            })
          }
        }else{
          arr.forEach(item => {
            delete item.disabled
          })
        }
        this.nominalList = arr
      },

      alConChange(state) {    //Tag
        let arr = this.continueList.slice(0)
        if(state){
          let groupFields = this.alarmForm.groupFields
          if(groupFields.length > 0){
            arr.forEach(item => {
              for(let i=0;i<groupFields.length;i++){
                if(item.label == groupFields[i]){
                  item.disabled = true
                }
              }
            })
          }
        }else{
          arr.forEach(item => {
            delete item.disabled
          })
        }
        this.continueList = arr
      }
    },

    created() {
      if (this.$store.state.user) {
        const user = this.$store.state.user
        if (user.permissions.includes('alarm:configuration:mutation')) {
          this.buttonState = true
        } else {
          this.buttonState = false
        }
      }
    },

    mounted() {
      const self = this
      if (this.$route.params.id === 'null') {
        this.pageState = 'add';

        let num = 0
        let fields = this.fields
        for (let i in fields) {
          if (fields[i].type == 'CONTINUE') {
            self.$refs.alarmLevelSet[num].init(fields[i])
            num++
          }
        }
      } else {
        this.pageState = 'view';
        this.init()
      }
      this.initSets()
    },

    watch: {
      alarmConditionArray(newValue, oldValue) {
        const self = this
        console.log(self.fieldsMap)
        if (Object.keys(self.fieldsMap).length > 0) {
          let type = self.fieldsMap[newValue[newValue.length - 1]].type
          if (type) {
            console.log(type)
            if (newValue.length - oldValue.length > 0) {
              if (type.includes('DOUBLE') || type.includes('FLOAT') || type.includes('INT') || type.includes('LONG')) {
                self.fields.push(JSON.parse(JSON.stringify(self.doubleDefault)))
                setTimeout(() => {
                  self.$refs.alarmLevelSet[self.$refs.alarmLevelSet.length - 1].init(self.fields[self.fields.length - 1])
                }, 0)
              } else if (type.includes('BOOL')) {
                self.fields.push(JSON.parse(JSON.stringify(self.boolDefault)))
              } else if (newValue.length > 0) {
                this.$message({
                  message: '该字段不能作为告警字段',
                  type: 'error'
                })
                self.alarmConditionArray.pop()
              }
            } else {
              for (let i = 0; i < oldValue.length; i++) {
                if (newValue.indexOf(oldValue[i]) == -1) {
                  self.delFields(i)
                }
              }
            }
          } else {
            for (let i = 0; i < oldValue.length; i++) {
              if (newValue.indexOf(oldValue[i]) == -1) {
                self.delFields(i)
              }
            }
          }
        }

        self.alarmConditionArrayTag = []
        this.alarmConditionArray.forEach(item => {
          if(self.fieldsMap[item]){
            self.alarmConditionArrayTag.push(self.fieldsMap[item].label)
          }
        })
      }
    }


  }
</script>

<style lang="scss" scoped>
  .el-tag {
    margin: 0 5px;
  }

  .el-form-item__content > .el-tag:first-child {
    margin-left: 0;
  }

  .fieldsTitle {
    width: 100%;
    text-align: left;
    text-indent: 50px;
  }

  .errorFields {
    border: 1px solid red;
    &::after {
      content: '请校验该字段配置设置正确性';
      color: red;
      position: absolute;
      top: 0;
      text-align: center;
      width: 100%;
    }
  }

</style>
