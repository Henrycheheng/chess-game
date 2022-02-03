<script setup lang='ts'>
import { onMounted } from '@vue/runtime-core';
import { chessInterface } from '../chesses/Chesses';
import { COL, ROW } from '../config/config';
import { camps } from '../libs/gameInfo';
import { GEBI } from '../utils/utils';

// 定义map 来存储棋盘

const map: Map<number, chessInterface> = new Map();

// 滑动进入的棋子
let hoverChess: chessInterface;

// 棋子的位置
const getId = (row: number, col: number) => (ROW - row - 1) * COL + col + 1

// 进入
const hover = (position: number) => {
  if (!map.has(position)) return
  //  如果这个棋子的文本是空字符串代表没有任何内容
  // 遍历棋子可以移动的区域
  hoverChess = map.get(position) as chessInterface

  hoverChess!.canMove().forEach(posi => {
    GEBI(posi + '')!.classList.add('moviable')
  })
}

// 离开
const out = (position: number) => {
  if (!map.has(position)) return
  // console.log(2);

  hoverChess!.canMove().forEach(posi => {
    GEBI(posi + '')!.classList.remove('moviable')
  })
}

// 初始化渲染棋盘
const initMap = () => {
  for (const [k, camp] of Object.entries(camps)) {
    // entries对象名值转换为数组
    camp.get().forEach(chess => {
      GEBI(`${chess.positon}`)!.innerText = chess.name;
      GEBI(`${chess.positon}`)!.classList.add('chess');
      map.set(chess.positon, chess) // 设置的棋子的位置,保存的是棋子本身
    })
    // camp 方法会返回所有的棋子
  }
};

onMounted(initMap)

</script>


<template>
  <div class="Game">
    <div class="board">
      <div v-for="(row, index) in ROW" :key="row" class="row">
        <div
          class="block"
          :id="(ROW - index - 1) * COL + i + 1 + ''"
          v-for="(col, i) in COL"
          :key="col"
          @mouseover="hover(getId(index, i))"
          @mouseout="out(getId(index, i))"
        ></div>
      </div>
    </div>
  </div>
  <!-- 7种棋子  -->
</template>


<style scoped lang="scss">
@keyframes fade {
  0% {
    background-color: rgba(powderblue, 0.1);
  }
  50% {
    background-color: rgba(powderblue, 1);
  }
  100% {
    background-color: rgba(powderblue, 0.1);
  }
}
.moviable {
  // background-color: powderblue;
  animation: fade 2s;
  animation-iteration-count: infinite;
}

.chess {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: peru !important;
  color: white;
  // border-radius: 50%;
}
.row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.block {
  height: 50px;
  width: 50px;
  border: 1px solid skyblue;
  &:hover {
    background-color: teal;
  }
}
</style>