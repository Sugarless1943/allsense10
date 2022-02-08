<template>
  <div>
    <ul :class="['steps',{'lastRowLeft': isLeft , 'lastRowRight': isRight}]">
      <li v-for="(item,index) in list" ref="steps">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
        isLeft: false,
        isRight: false,
        width: 0,
        height: 0
      }
    },

    computed: {},

    watch: {},

    created() {
      for (let i = 1; i <= 20; i++) {
        this.list.push(i)
      }
    },

    mounted() {

      let self = this;

      // window.onresize = function () {
      let steps = self.$refs.steps;
      let firstTop = steps[0].offsetTop;

      //排序方法
      let colNum = 0;
      steps.forEach(function (item, i) {
        if (item.offsetTop == firstTop) {
          colNum++;
        }
      });

      let rowNum = 0;
      if (self.list.length % colNum == 0) {
        rowNum = self.list.length / colNum
      } else {
        rowNum = parseInt(self.list.length / colNum + 1);
      }

      console.log('行:' + rowNum + ' 列:' + colNum);

      //判断最后一行元素归于左还是右
      if(rowNum%2 == 0){
        this.isLeft = false;
        this.isRight = true;
      } else{
        this.isLeft = true;
        this.isRight = false;
      }

      //标记行class
      self.list.forEach(function (item, i) {
        self.$refs.steps[i].setAttribute('class','')
        for (let j = 0; j < rowNum; j++) {
          if (i >= colNum * j && i < colNum * (j + 1)) {
            self.$refs.steps[i].setAttribute('row', (j + 1))
            if ((i == (colNum * (j + 1) - 1) && (j + 1) % 2 != 0)) {
              self.$refs.steps[i].classList.add('down')
            } else if (i == colNum * j && j % 2 != 0 && self.$refs.steps[i].getAttribute('row') != rowNum) {
              self.$refs.steps[i].classList.add('down')
              self.$refs.steps[i].classList.add('right')
            } else if (i != (colNum * (j + 1) - 1) && i != (self.list.length - 1)) {
              self.$refs.steps[i].classList.add('right')
            }
          }
        }
      });

      //奇数偶数行分组
      let newList = [];
      for (let i = 1; i <= rowNum; i++) {
        let arr = [];
        self.list.forEach(function (item, j) {
          if (self.$refs.steps[j].getAttribute('row') == i) {
            arr.push(item);
          }
        });
        newList.push(arr);
      }

      for (let i = 1; i <= newList.length; i++) {
        if (i % 2 == 0) {
          newList[i - 1].reverse();
        }
      }
      console.log(newList)    //获得新顺序下的二维数组

      self.list = newList.join(',').split(',');   //这个地方二期优化


      //获取宽度和高度
      //宽度
      if(this.list && this.list.length > 1){
        this.width = steps[1].offsetLeft - steps[0].offsetLeft - 50
        console.log(this.width, 'width')
      }
      //高度
      if(rowNum > 1){
        this.height = steps[newList[1][0]-1].offsetTop - steps[newList[0][0]-1].offsetTop
        console.log(this.height, 'height')
      }

      //写入class中


    // }
    }

  }
</script>

<style scoped>
  .steps {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
    border: 1px solid red;
  }

  .lastRowLeft {
    justify-content: flex-start;
  }

  .lastRowRight {
    justify-content: flex-end;
  }

  .steps li {
    width: 50px;
    height: 50px;
    background: #ccc;
    line-height: 50px;
    border-radius: 50px;
    margin: 1% 5%;
    position: relative;
  }

  .right:after {
    content: '';
    width: 120px;
    height: 2px;
    background: #ccc;
    position: absolute;
    left: 50px;
    top: 25px;
  }

  .down:before {
    content: '';
    width: 2px;
    height: 60px;
    background: #ccc;
    position: absolute;
    left: 25px;
    top: 50px;
  }
</style>
