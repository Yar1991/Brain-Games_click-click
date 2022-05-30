<script setup>
import { ref, watch, onUnmounted } from "vue";
import { useGameState } from "../../store"

const gameState = useGameState();
let timer = ref(29);

const watchState = watch(() => gameState.gameStatus, () => {
  if (['training-start', 'playing-start'].includes(gameState.gameStatus)) {
    const interval = setInterval(() => {
      if (timer.value === 0) {
        gameState.gameStatus === 'training-start' ? gameState.changeStatus('training-end') : gameState.changeStatus('playing-end');
        timer.value = 29;
        gameState.points = 0;
        return clearInterval(interval);
      }
      timer.value--;
    }, 1000);

  }
})

onUnmounted(() => {
  watchState();
})
</script>

<template>
  <div class="header-box">
    <h4 class="timer">00:{{ timer < 10 ? `0${timer}` : timer }}</h4>
        <span class="svg-box">
          <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M26.9454 12.7937L16.0059 12.8348C15.7353 12.8358 15.5596 12.55 15.6827 12.3089L21.7293 0.470151C21.9111 0.114194 21.466 -0.229986 21.1673 0.0355613L2.34081 16.7661C2.09349 16.9859 2.24694 17.3949 2.57782 17.3977L12.5648 17.4831C12.8251 17.4853 12.9978 17.7537 12.8919 17.9916L7.81165 29.3982C7.65415 29.7519 8.08757 30.0721 8.37936 29.8178L27.1843 13.4276C27.4366 13.2077 27.2802 12.7925 26.9454 12.7937Z"
              fill="#FAFAFA" />
          </svg>
        </span>
        <h4 class="points">{{ gameState.points }}</h4>
  </div>
</template>


<style lang="scss" scoped>
.header-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: #b0b0b086;
  color: #fff;
  border-radius: 1rem 1rem 0 0;
  margin-bottom: 2.5rem;

  &>* {
    flex: 1;
  }


  h4 {
    font-weight: 500;
  }

  .points {
    text-align: end;
  }

  .svg-box {
    width: 1.5rem;
    height: 1.5rem;

    svg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>