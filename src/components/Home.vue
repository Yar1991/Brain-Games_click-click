<script setup>
import { ref } from 'vue'


</script>

<template>
  <section id="home">
    <div class="lightning">
      <svg viewBox="0 0 642 720" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_12_2)">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M0.127815 -5.99142L232.554 -79.3103L510.068 395.367L393.855 432.027L583.936 832.063L131.828 310.24L276.948 264.461L0.127815 -5.99142Z"
            fill="black" fill-opacity="0.07" />
        </g>
        <defs>
          <clipPath id="clip0_12_2">
            <rect width="365.574" height="974.864" fill="white"
              transform="matrix(-0.953675 0.300838 0.300838 0.953675 348.639 -116)" />
          </clipPath>
        </defs>
      </svg>

    </div>
    <div class="home-content">
      <h1>Click-Click</h1>
      <p>Challange yourself and enhance the speed of your reaction. </p>
      <div class="btns">
        <button class="training">Training</button>
        <button class="play">Play</button>
      </div>
    </div>
  </section>


</template>

<style lang="scss" scoped>
#home {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: min(800px, 95%);
  height: min(600px, 95%);
  background-color: #F2F2F2;
  border-radius: 1rem;
  box-shadow: 1px 3px 5px hsla(0, 0%, 0%, 0.4), 1px 0px 10px hsla(282, 46%, 12%, 0.2);

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

      button {
        width: 7rem;
        border: none;
        padding: 0.7rem 0rem;
        border-radius: 1rem;
        color: #fff;
        transition: background-color 0.3s ease;

        &.training {
          background-color: #5E5392;
          position: relative;

          &:hover {
            background-color: #6e62a7;
          }

          &::before {
            position: absolute;
            content: "";
            width: 102%;
            height: 100%;
            top: 0;
            left: -1%;
            background: #45317d;
            border-radius: 1rem;
            z-index: -1;
            transform: translateY(0.2rem);
            box-shadow: 0 0 5px hsla(0, 0%, 0%, 0.5);
          }
        }

        &.play {
          background-color: #4999B0;
          position: relative;

          &:hover {
            background-color: #59acc3;
          }

          &::before {
            position: absolute;
            content: "";
            width: 102%;
            height: 100%;
            top: 0;
            left: -1%;
            background: #34728b;
            border-radius: 1rem;
            z-index: -1;
            transform: translateY(0.2rem);
            box-shadow: 0 0 5px hsla(0, 0%, 0%, 0.5);


          }
        }
      }
    }
  }
}
</style>
