<script setup>
import { useGameState } from "../../store";
import { ref } from "vue";

const gameState = useGameState();


</script>

<template>
  <div id="training-modal">
    <div class="modal-layer">
    </div>
    <div v-if="gameState.gameStatus === 'training'" class="modal-popup training-start">
      <h3>You need to click as many highlighted squares in the given time as you can. </h3>
      <div class="btn-box">
        <button @click="gameState.changeStatus('training-start')">Let's go</button>
        <span class="btn-layer"></span>
      </div>
    </div>
    <div v-if="gameState.gameStatus === 'training-end'" class="modal-popup training-end">
      <div class="btn-box">
        <button @click="gameState.changeStatus('training-start')">Try Again</button>
        <span class="btn-layer"></span>
      </div>
      <div class="btn-box">
        <button @click="gameState.changeStatus('start')">Home</button>
        <span class="btn-layer"></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#training-modal {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-layer {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(231, 58%, 9%, 0.9);
  }

  .modal-popup {
    width: 50%;
    padding: 1.5rem;
    background-color: #F1F1F1;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    z-index: 2;
    box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.4), 0 0 15px hsla(0, 0%, 0%, 0.4);
    animation: anim-popup 0.8s ease both;


    @keyframes anim-popup {
      from {
        opacity: 0;
        transform: translateY(200%);
      }

      to {
        opacity: 1;
        transform: translateY(0%);
      }
    }

    &.training-end {
      width: 40%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 2rem;
    }

    h3 {
      font-size: 1rem;
      font-weight: 400;
      text-align: center;
    }

    .btn-box {
      position: relative;
      border-radius: 1rem;

      button {
        width: 7rem;
        border: none;
        padding: 0.7rem 0rem;
        border-radius: 1rem;
        color: #fff;
        background-color: #5E5392;
        transition: background-color 0.3s ease, transform 0.2s ease;

        &:active {
          transition: transform 0.1s ease;
          transform: translateY(0.2rem);
        }

        &:hover {
          background-color: #6e62a7;
        }
      }

      .btn-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        inset: 0;
        border-radius: 1rem;
        z-index: -1;
        transform: translateY(0.2rem);
        background-color: #39325a;
        box-shadow: 0 0 5px hsla(0, 0%, 0%, 0.5);
      }
    }
  }
}
</style>