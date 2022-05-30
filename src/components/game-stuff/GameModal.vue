<script setup>

import { ref, onMounted, onUnmounted } from "vue";
import { Motion, Presence } from "motion/vue";
import { useGameState } from "../../store";

const gameState = useGameState();

const counter = ref(3);
let counterInterval = null;

onMounted(() => {
  counterInterval = setInterval(() => {
    if (counter.value === 1) {
      gameState.changeStatus('playing-start');
      return;
    }
    counter.value--;
  }, 1000)
});

onUnmounted(() => {
  clearInterval(counterInterval);
});

</script>

<template>
  <div id="game-modal">
    <div class="counter-box">
      <Presence>
        <Motion :key="counter" tag="h3" :initial="{ opacity: 0, y: '-100%' }" :animate="{ opacity: 1, y: '15%' }"
          :exit="{ opacity: 0, y: '100%' }" :transition="{ duration: 0.4, easing: 'ease-in-out' }">{{ counter }}
        </Motion>
      </Presence>
    </div>
  </div>
</template>


<style lang="scss" scoped>
#game-modal {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: #0A0E26;
  display: flex;
  align-items: center;
  justify-content: center;

  .counter-box {
    position: relative;
    width: 6.5rem;
    height: 6.5rem;
    background: #F3F3F3;
    border-radius: 50%;
    text-align: center;

    h3 {
      position: absolute;
      width: 100%;
      height: 100%;
      inset: 0;
      margin: auto;
      color: #111;
      font-size: 3rem;
    }
  }
}
</style>