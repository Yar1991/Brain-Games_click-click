<script setup>
import { ref, watch, onUnmounted } from "vue";
import { useGameState } from "../../store";

const gameState = useGameState();
const gridRef = ref();
const clicked = ref();
const randomIndex = ref();
const getRandom = () => Math.floor(Math.random() * 60);
const getTarget = () => {
  const random = getRandom();
  const gridList = gridRef.value && [...gridRef.value.children];
  if (randomIndex?.value >= 0 && gridList?.length > 0) {
    gridList[randomIndex?.value].classList.remove("target");
  }
  gridList?.length > 0 && gridList[random].classList.add("target");
  randomIndex.value = random;
  return;
}

function clickCell(target) {
  if (target - 1 === randomIndex.value) {
    clicked.value = target;
    gameState.incrementPoints();
    getTarget();
  } else {
    return;
  }
}

const watchState = watch(() => gameState.gameStatus, () => {
  if (['training-start', 'playing-start'].includes(gameState.gameStatus)) {
    getTarget();
  }
})


onUnmounted(() => {
  watchState();
})

</script>

<template>
  <div id="game-grid" ref="gridRef">
    <div @click="clickCell(i)" class="game-cell" v-for="i in 60" :key="i">
      <div class="arrow" v-if="i - 1 === randomIndex && gameState.gameStatus === 'training-start'">
        <svg viewBox="0 0 144 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M26.207 30.2191L87.6696 30.5749L73.1393 47.3297L128.512 95.4095L105.217 122.271L49.815 74.2246L35.2556 91.013L26.207 30.2191Z"
            fill="#B43FEB" />
        </svg>

      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
#game-grid {
  width: 90%;
  background-color: #333A5F;
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.4), 0 0 15px hsla(0, 0%, 0%, 0.4);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
  gap: 3px;
  border-radius: 1rem;
  align-self: center;

  .game-cell {
    background-color: #ededed;
    width: 4rem;
    height: 4rem;
    cursor: pointer;

    &.target {
      position: relative;
      background-color: #4ba1b9;
      transition: background-color 0.4s ease;

      &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: #64d6f5;
        border-radius: 50%;
        filter: blur(10px);
        transform: scale(0);
        transition: transform 0.2s ease, opacity 0.4s ease;
      }

      &:active::after {
        transform: scale(2);
        opacity: 0;
      }
    }
  }

  .arrow {
    width: 6rem;
    height: 6rem;
    position: absolute;
    transform: translate(30%, 30%);
    pointer-events: none;

    svg {
      width: 100%;
      height: 100%;

      path {
        filter: drop-shadow(0 0 5px hsla(0, 0%, 0%, 0.4));
      }
    }
  }
}
</style>