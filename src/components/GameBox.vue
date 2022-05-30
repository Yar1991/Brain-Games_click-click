<script setup>

import { useGameState } from "../store";
import Header from './game-stuff/Header.vue';
import TrainingModal from "./game-stuff/TrainingModal.vue";
import GameField from "./game-stuff/GameField.vue";
import GameModal from "./game-stuff/GameModal.vue";


const gameState = useGameState();
</script>

<template>
  <div id="game-box">
    <Header />
    <GameField />
    <Transition name="training-fade" mode="out-in">
      <TrainingModal v-if="gameState.gameStatus === 'training' || gameState.gameStatus === 'training-end'" />
    </Transition>
    <Transition name="playing-fade" mode="out-in">
      <GameModal v-if="gameState.gameStatus === 'playing-modal'" />
    </Transition>
  </div>
</template>


<style lang="scss" scoped>
#game-box {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 95%;
  height: 95%;
  background-color: #333A5F;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.training-fade-move,
.training-fade-enter-active,
.training-fade-leave-active {
  transition: all 0.7s ease-in-out;
}

.training-fade-enter-from,
.training-fade-leave-to {
  opacity: 0;
}

.training-fade-enter-to,
.training-fade-leave-from {
  opacity: 1;
}

.playing-fade-move,
.playing-fade-enter-active,
.playing-fade-leave-active {
  transition: all 0.7s ease-in-out;
}

.playing-fade-enter-from,
.playing-fade-leave-to {
  opacity: 0;
}

.playing-fade-enter-to,
.playing-fade-leave-from {
  opacity: 1;
}
</style>