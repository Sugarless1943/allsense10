<template>
  <el-dialog
    title="选择受理人/组"
    :visible.sync="dialogVisible"
    @close="diaClean"
    width="30%">
    <div>
      <el-radio-group v-model="radio">
        <el-radio-button :label="true">受理人</el-radio-button>
        <el-radio-button :label="false">受理组</el-radio-button>
      </el-radio-group>
      <div style="max-height: 500px;overflow: auto;padding: 10px 0">
        <el-input
          v-show="radio"
          placeholder="输入关键字进行过滤"
          v-model="filterTextAll">
        </el-input>
        <el-input
          v-show="!radio"
          placeholder="输入关键字进行过滤"
          v-model="filterTextGroup">
        </el-input>
        <el-tree
          v-show="radio"
          :data="treeDataAll"
          :show-checkbox="true"
          :default-expanded-keys="['false_2']"
          :filter-node-method="filterNode"
          node-key="treeKey"
          ref="treeAll">
        </el-tree>
        <el-tree
          v-show="!radio"
          :data="treeDataGroup"
          :show-checkbox="true"
          :check-strictly="true"
          :default-expanded-keys="[2]"
          :filter-node-method="filterNode"
          node-key="id"
          ref="treeGroup">
        </el-tree>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="acceptSet">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>

  import PersonService from './api/organization'

  export default {

    props: ['accepterLoad'],

    data() {
      return {
        filterTextAll: '',
        filterTextGroup: '',
        radio: true,
        dialogVisible: false,

        treeDataAll: [],
        treeDataGroup: [],
        defaultCheckKeys: []
      }
    },


    methods: {

      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },

      open() {
        const self = this
        if(self.accepterLoad.accepterIds && self.accepterLoad.accepterIds.length > 0){
          if(self.accepterLoad.accepterType == 'user'){
            self.radio = true
            setTimeout(function(){
              self.$refs.treeAll.setCheckedKeys(self.accepterLoad.accepterIds.map(item => {
                return 'true_' + item
              }),true)
              // self.$refs.treeAll.getCheckedNodes().forEach(item => {
              //   item.disabled = true
              // })
            },0)
          }else if(self.accepterLoad.accepterType == 'group'){
            self.radio = false
            setTimeout(function(){
              self.$refs.treeGroup.setCheckedKeys(self.accepterLoad.accepterIds,true)
              // self.$refs.treeGroup.getCheckedNodes().forEach(item => {
              //   item.disabled = true
              // })
            })
          }
        }

        this.dialogVisible = true
      },

      //清空对勾，disabled状态
      diaClean() {
        let userIds = []
        this.$refs.treeAll.getCheckedNodes().forEach(item => {
          userIds.push(item.data.id)
        })
        this.$refs.treeAll.setCheckedNodes(userIds,false)

        let groupIds = []
        this.$refs.treeGroup.getCheckedNodes().forEach(item => {
          groupIds.push(item.data.id)
        })
        console.log(this.$refs.treeGroup,'this.$refs.treeGroup.getCheckedNodes()')
        this.$refs.treeGroup.setCheckedNodes(groupIds,false)

        function allInitialize(obj){
          obj.forEach(item => {
            if(item.user){
              item.disabled = false
            }else{
              item.disabled = true
            }
            if(item.children){
              allInitialize(item.children)
            }
          })
        }
        allInitialize(this.treeDataAll)

        function groupInitialize(obj){
          obj.forEach(item => {
            item.disabled = false
            if(item.children){
              groupInitialize(item.children)
            }
          })
        }
        groupInitialize(this.treeDataGroup)
      },

      init() {
        console.log('treeInit')
        PersonService.findTree({ pid: 2 }).then(res => {
          this.treeDataAll = res.all
          this.treeDataGroup = res.group
        })
      },

      acceptSet() {
        let obj = {
          accepterType: '',
          accepterIds: [],
          accepterLabels: []
        }
        if(this.radio) {
          obj.accepterType = 'user'
          let userNodes = this.$refs.treeAll.getCheckedNodes().filter(item => {
            return item.user
          })
          userNodes.forEach((item,index) => {
            obj.accepterIds.push(item.data.id)
            obj.accepterLabels.push({name: item.data.label || '用户资料未完善！'})
          })
        } else {
          obj.accepterType = 'group'
          let groupNodes = this.$refs.treeGroup.getCheckedNodes()
          groupNodes.forEach((item,index) => {
            obj.accepterIds.push(item.data.id)
            obj.accepterLabels.push({name: item.data.label})
          })
        }

        this.$emit('accepterObj',obj)
        this.dialogVisible = false
      },

    },

    mounted() {
      this.init()
    },

    watch: {
      filterTextAll(val) {
        this.$refs.treeAll.filter(val);
      },
      filterTextGroup(val) {
        this.$refs.treeGroup.filter(val);
      }
    },

  }
</script>

<style scoped>

</style>
