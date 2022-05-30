import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameState = defineStore("game", () => {
  const gameStatus = ref("start");
  const points = ref(0);

  function changeStatus(val) {
    gameStatus.value = val;
  }

  function incrementPoints() {
    points.value += 50;
  }

  function resetPoints() {
    points.value = 0;
  }

  return { gameStatus, changeStatus, points, incrementPoints, resetPoints };
});
