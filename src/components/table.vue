<template>
  <el-table
      :data="peopleData"
      border
      :row-key = "(row)=>row.id"
      style="width: 100%" :class="['treeTable']"
      @expand-change="exChange"
      :expand-row-keys="expends">
      <el-table-column type="expand" prop="children">
        <template slot-scope="props" v-if="props.row.children">
          <el-table
            :data="props.row.children"
            :show-header="false"
            style="width: 100%">
            <el-table-column
              prop="userName"
              label="用户名/组名"
              align="left"
              width="200px">
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
      </el-table-column>
      <el-table-column
        type="selection"
        fixed
        align="center"
        width="55">
      </el-table-column>
      <el-table-column
        prop="userName"
        label="用户名/组名"
        align="left"
        width="200">
        <template slot-scope="scope">
          <div v-if="scope.row.children">
            <i class="el-icon-arrow-right" @click="extendRow(scope.$index, scope.row, this)"></i>
            {{scope.row.userName }}
            <i class='el-icon-news'></i>
          </div>
          <div v-else>{{scope.row.userName}}</div>
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
      <!--<el-table-column label="操作">-->
      <!--<template slot-scope="scope">-->
      <!--<el-button-->
      <!--size="mini"-->
      <!--@click="extendRow(scope.$index, scope.row)">编辑</el-button>-->
      <!--</template>-->
      <!--</el-table-column>-->
    </el-table>
</template>

<script>
  export default {
    data() {
      return {

        peopleData: [
          {
            userName: 'nkjgk1111',
            name: '王晓晓',
            phone: '13255632547',
            id: '1'
          },
          {
            userName: 'nkjgk',
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
                id: '22'
              }
            ]
          },
          {
            userName: 'nkjgk',
            name: '王晓晓',
            phone: '13255632547',
            id: '3'
          }
        ],
        expends: []
      }
    },
    methods: {
      exChange(row, expanded){
        console.log(row)
      },
      extendRow(index,row,scope){
        if(this.expends[0] == row.id){
          this.expends = [];
        }else{
          this.expends.push(row.id);
        }


        console.log(scope)
        // if(row.children){
        //   for(let i=0;i<row.children.length;i++){
        //     this.expends.push(row.children[i].id)
        //   }
        // }
        // console.log(this.expends)
      },
      rowId(row){
        return row.id;
      }
    },

    computed: {

    }
  }
</script>

<style>
  .treeTable .el-table__expanded-cell[class*=cell] {
    padding: 0 0 0 103px !important;
  }
</style>
