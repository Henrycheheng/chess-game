<script setup lang='ts'>
import { onMounted } from '@vue/runtime-core';
import { COL, ROW } from '../config/config';
import { camps } from '../libs/gameInfo';
import { GEBI } from '../utils/utils';

const initMap = () => {
  for (const [k, camp] of Object.entries(camps)) {
    // entries对象名值转换为数组
    camp.get().forEach(chess => {
      GEBI(`${chess.positon}`)!.innerText = chess.name;
      GEBI(`${chess.positon}`)!.classList.add('chess');
    })
    // camp 方法会返回所有的棋子
  }
};

onMounted(initMap)

</script>


<template>
  <div class="Game">
    <div class="board">
      <div v-for="(row,index) in ROW" :key="row" class="row">
        <div
          class="block"
          :id="(ROW - index - 1) * COL + i + 1 + ''"
          v-for="(col,i) in COL"
          :key="col"
        ></div>
      </div>
    </div>
  </div>
  <!-- 7种棋子  -->
</template>


<style scoped lang="scss">
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