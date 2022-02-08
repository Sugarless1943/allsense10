<template>
  <el-table
      :data="treeData"
      border
      :row-style="showTr"
      style="width: 100%">
      <el-table-column
        type="selection"
        fixed
        align="center"
        :selectable="selectable"
        width="55">
      </el-table-column>
      <el-table-column
        prop="userName"
        label="用户名/组名"
        align="left"
        width="200">
        <template slot-scope="scope">
          <div v-if="scope.row.children && !scope.row.pId">
            <i :class="[scope.row.trClass]" @click="showChild(scope.row)" style="cursor: pointer;color: #409EFF"></i>
            {{scope.row.userName}}
            <!--<i class='el-icon-menu'></i>-->
          </div>
          <div v-else style="padding-left: 17px">{{scope.row.userName}}</div>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="用户名"
        align="left">
      </el-table-column>
      <el-table-column
        prop="phone"
        align="left"
        label="电话">
      </el-table-column>
    </el-table>
</template>

<script>
    export default {
      data() {
        return {
          peopleData: [         //后台请求的数据
            {
              userName: 'nkjgk1',
              name: '王晓晓',
              phone: '13255632547',
              id: '1'
            },
            {
              userName: 'nkjgk2',
              name: '',
              phone: '',
              id: '2',
              children: [
                {
                  userName: 'nkjgk',
                  name: '王晓晓1',
                  phone: '13255632547',
                  type: 'peo',
                  id: '21'
                },
                {
                  userName: 'nkjgk',
                  name: '王晓晓2',
                  phone: '13255632547',
                  type: 'peo',
                  id: '22',
                }
              ]
            },
            {
              userName: 'nkjgk3',
              name: '王晓晓',
              phone: '13255632547',
              id: '3',
              children: [
                {
                  userName: 'nkjgk',
                  name: '王晓晓1',
                  phone: '13255632547',
                  type: 'peo',
                  id: '31'
                },
                {
                  userName: 'nkjgk',
                  name: '王晓晓2',
                  phone: '13255632547',
                  type: 'peo',
                  id: '32'
                },

              ]
            },
            {
              userName: 'nkjgk4',
              name: '王晓晓',
              phone: '13255632547',
              id: '4'
            },
          ],
        }
      },

      computed: {
        treeData(){     //将来源数据抹平，隐藏子行
          let arr = [];
          this.peopleData.forEach(function (item, index) {
            arr.push(Object.assign({},item,{
              trShow: true,
              trClass: 'el-icon-caret-right'
            }));
            let pId = item.id;
            if (item.children && item.children.length > 0) {
              let chi = item.children;
              chi.forEach(function (item, index) {
                arr.push(Object.assign({},item,{
                  pId: pId,
                  trShow: false
                }))
              })
            }
          });
          return arr;
        }
      },

      methods: {

        showTr(row, index) {    //是否显示行
          if(row.row.trShow){
            return ''
          }else{
            return 'display: none'
          }
        },

        showChild(row) {     //展开子行的方法
          if (row.trClass == 'el-icon-caret-right') {
            this.treeData.forEach(function (item, index) {
              if (item.pId == row.id) {
                item.trShow = true;
              }
            });
            row.trClass = 'el-icon-caret-bottom';
          } else {
            this.treeData.forEach(function (item, index) {
              if (item.pId == row.id) {
                item.trShow = false;
              }
            });
            row.trClass = 'el-icon-caret-right';
          }
        },

        selectable(row){  //禁用checked
          if(row.pId){
            return false;
          }else{
            return true
          }
        }
      },
    }
</script>

<style scoped>
  .marLeft {
    margin-left: 10px;
  }
</style>
