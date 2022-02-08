<template>
  <div>
    <table border="1" cellpadding="0" cellspacing="0" style="width: 100%" :class="['treeTable']">
      <thead>
      <tr>
        <th><input type="checkbox" v-model="checkAll"></th>
        <th>用户名</th>
        <th>姓名</th>
        <th>电话</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in treeData" v-show="item.trShow" :id="item.id" :pId="item.pId">
        <td><input type="checkbox" v-model="tabChecked" :value="item.id" v-if="!item.pId"></td>
        <td>
          <i :class="[item.trClass]" v-if="item.children" @click="showChild(item)"></i>
          {{item.userName}}
          <i class="el-icon-star-on" v-if="item.children"></i>
        </td>
        <td>{{item.name}}</td>
        <td>{{item.phone}}</td>
      </tr>
      </tbody>
    </table>


    <!--<span>{{tabChecked}}</span>-->
  </div>

</template>

<script>
  export default {
    data() {
      return {
        peopleData: [
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
                id: '22'
              }
            ]
          },
          {
            userName: 'nkjgk3',
            name: '王晓晓',
            phone: '13255632547',
            id: '3'
          }
        ],
        treeData: [],
        expends: [],
        tabChecked: [],
        checkAll: false
      }
    },
    methods: {
      cancelTree() {
        let arr = [];
        this.peopleData.forEach(function (item, index) {
          arr.push({
            userName: item.userName,
            name: item.name,
            phone: item.phone,
            id: item.id,
            children: item.children,
            trShow: true,
            trClass: 'el-icon-arrow-right'
          });
          let pId = item.id;
          if (item.children && item.children.length > 0) {
            let chi = item.children;
            chi.forEach(function (item, index) {
              arr.push({
                userName: item.userName,
                name: item.name,
                phone: item.phone,
                id: item.id,
                pId: pId,
                trShow: false
              });
            })
          }
        });
        this.treeData = arr;
      },

      showChild(fatObj) {
        console.log(fatObj);
        if (fatObj.trClass == 'el-icon-arrow-right') {
          this.treeData.forEach(function (item, index) {
            if (item.pId == fatObj.id) {
              item.trShow = true;
            }
          })
          fatObj.trClass = 'el-icon-arrow-down'
        } else {
          this.treeData.forEach(function (item, index) {
            if (item.pId == fatObj.id) {
              item.trShow = false;
            }
          })
          fatObj.trClass = 'el-icon-arrow-right'
        }
      },

    },
    created() {
      this.cancelTree();
    },

    watch: {
      checkAll(val) {
        let self = this;
        if (val && self.tabChecked.length == 0) {
          this.peopleData.forEach(function (item, index) {
            if (!item.pId) {
              self.tabChecked.push(item.id);
            }
          })
        } else{
          self.tabChecked = [];
        }
      },

      tabChecked(val) {

        // let self = this, num = 0;
        // this.peopleData.forEach(function(item,index){
        //   if(!item.pId){
        //     num ++;
        //   }
        // });
        //
        // console.log(self.tabChecked.length);
        // console.log(num)
        // //  console.log(fatArr.length);
        console.log(this.tabChecked.length)
        if (this.tabChecked.length == 3) {
          this.checkAll = true
        }


      }
    }
  }
</script>

<style scoped>
  .treeTable td,.treeTable th,.treeTable {
    border: 1px solid #ebeef5;
  }
  .treeTable td,.treeTable th {
    padding: 10px 0;
  }
</style>
