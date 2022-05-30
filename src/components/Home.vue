<script setup>

import { useGameState } from "../store.js";
import GameBox from "./GameBox.vue";

const gameState = useGameState();

function startTraining() {
  gameState.changeStatus("training");
}

function startPlaying() {
  gameState.changeStatus("playing-modal");

}

</script>

<template>
  <section id="home">
    <div class="lightning">
      <svg viewBox="0 0 895 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path pathLength="1"
          d="M1.15234 -32.618L324.738 -134.693L711.096 526.157L549.303 577.195L813.935 1134.13L184.506 407.642L386.545 343.909L1.15234 -32.618Z"
          fill="black" fill-opacity="0.07" />
      </svg>
    </div>
    <Transition name="fade" mode="out-in">
      <div v-if="gameState.gameStatus === 'start'" class="home-content">
        <h1>Click-Click</h1>
        <p>Challange yourself and enhance the speed of your reaction. </p>
        <div class="btns">
          <div class="btn-box training-box">
            <button class="training" @click="startTraining">Training</button>
            <span class="btn-layer"></span>
          </div>
          <div class="btn-box play-box">
            <button class="play" @click="startPlaying">Play</button>
            <span class="btn-layer"></span>
          </div>
        </div>
      </div>
      <div class="results" v-else-if="gameState.gameStatus === 'playing-end'">
        <h2 class="heading">Results</h2>
        <div class="stats">
          <div class="stats-block">
            <h4>points scored:</h4>
            <span>{{ gameState.points }}</span>
          </div>
          <div class="stats-block">
            <h4>speed level:</h4>
            <svg></svg>
          </div>
        </div>
        <div class="btns">
          <div class="btn-box play-box">
            <button class="play" @click="startPlaying">Play Again</button>
            <span class="btn-layer"></span>
          </div>
          <div class="btn-box play-box">
            <button class="play" @click="gameState.changeStatus('start')">Home</button>
            <span class="btn-layer"></span>
          </div>
        </div>
      </div>
      <GameBox v-else />
    </Transition>
  </section>


</template>

<style lang="scss" scoped>
#home {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: min(800px, 95%);
  height: min(550px, 95%);
  background-color: #F2F2F2;
  border-radius: 1rem;
  box-shadow: 1px 3px 5px hsla(0, 0%, 0%, 0.4), 1px 0px 10px hsla(282, 46%, 12%, 0.2);
  transform-origin: center center;
  will-change: transform;
  animation: anim-home 1s both;

  @keyframes anim-home {
    from {
      opacity: 0;
      transform: scale(0.8) translateY(-40%);
    }

    to {
      opacity: 1;
      transform: scale(1) translateY(0%);
    }
  }

  /* lightning svg element */
  .lightning {
    position: absolute;
    inset: 0;
    margin: auto;
    width: 100%;
    height: 100%;

    svg {
      width: 100%;
      height: 100%;

    }
  }

  /* -------------------- */


  .home-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    z-index: 2;

    h1 {
      font-size: 2.5rem;
    }

    p {
      margin-bottom: 1rem;
      font-weight: 400;
    }

    .btns {
      display: flex;
      align-items: center;
      gap: 3rem;

      .btn-box {
        position: relative;
        border-radius: 1rem;

        button {
          width: 7rem;
          border: none;
          padding: 0.7rem 0rem;
          border-radius: 1rem;
          color: #fff;
          transition: background-color 0.3s ease, transform 0.2s ease;

          &:active {
            transition: transform 0.1s ease;
            transform: translateY(0.2rem);
          }

          &.training {
            background-color: #5E5392;

            &:hover {
              background-color: #6e62a7;
            }
          }

          &.play {
            background-color: #4999B0;
            position: relative;

            &:hover {
              background-color: #59acc3;
            }
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
          box-shadow: 0 0 5px hsla(0, 0%, 0%, 0.5);
        }

        &.training-box .btn-layer {
          background-color: #39325a;
        }

        &.play-box .btn-layer {
          background-color: #34728b;
        }
      }

    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.6s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }
}
</style>
