import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameState = defineStore("game", () => {
  const gameStatus = ref("start");
  const points = ref(0);

  function changeStatus(val) {
    gameStatus.value = val;
  }

  return { gameStatus, changeStatus, points };
});
