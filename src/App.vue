<script setup> 

// const progressBar = ref(null);
// const progressText = ref(null);
// const width = ref(0);
//  const loading = ref(true);

// onMounted(() => {
//   const totalDuration = 2000; // 5 seconds in milliseconds
//   const startingWidth = 0;
//   const targetWidth = 100;
//   const increment = (targetWidth - startingWidth) / totalDuration * 20;

//   const animation = setInterval(() => {
//     width.value += increment;
//     progressBar.value.style.width = `${width.value}%`;
//     progressText.value.textContent = `${Math.round(width.value)}%`;

//     if (width.value >= targetWidth) {
//       clearInterval(animation);
//       loading.value = false;
//     }
//   }, 20);
// });

// setTimeout(() => {
//   loading.value = false
// }, 3000);
 </script>

<template>

  <!-- <div v-if="loading" class="w-full h-screen flex justify-center items-center bg-[#212121
]">
 	<div   class="progress-container">
     <div class="progress-bar" ref="progressBar"></div>
    <div class="progress-text" ref="progressText">{{ width }}%</div>
 </div>
 </div>  -->
 <!-- <div v-if="loading" class="w-full h-screen flex justify-center items-center bg-black">
 <div   class="loader ">
    <div class="face">
        <div class="circle"></div>
    </div>
    <div class="face">
        <div class="circle"></div>
    </div>
</div>
 </div> -->

  <div >
    <main class="main">
      <router-view />
    </main>
  </div>

</template>

<style>
body {
    touch-action: manipulation;
    /* Prevent double tap zoom on iOS */
    -webkit-touch-callout: none; /* Disable long press */
    -ms-touch-action: manipulation;
    /* Prevent double tap zoom on Windows devices */
}
.main{
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100%;
}

section {
	position: relative;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background: #001300;
	animation: changeColor 5s linear infinite;
}

@keyframes changeColor {
	0%
	{
		filter: hue-rotate(0deg);
	}
	100%
	{
		filter: hue-rotate(360deg);
	}
}

section h2 {
	color: #00ff0a;
	font-family: consolas;
	font-weight: 300;
	letter-spacing: 10px;
}

section .loader {
	position: relative;
	display: flex;
}

section .loader .dot {
	position: relative;
	display: block;
	width: 20px;
	height: 20px;
	background: #00ff0a;
	box-shadow: 0 0 10px #00ff0a, 0 0 20px #00ff0a,0 0 40px #00ff0a,0 0 60px #00ff0a,0 0 80px #00ff0a,0 0 100px #00ff0a;
	margin: 20px 10px;
	transform: scale(0.1);
	border-radius: 50%;
	animation: animateDot 2s linear calc(0.1s * var(--i)) infinite;
}

section .loader:last-child .dot {
	animation-delay: calc(-0.1s * var(--i));
}

@keyframes animateDot {
	0%
	{
		transform: scale(0.1);
	}
	10%
	{
		transform: scale(1);
	}
	50%,100%
	{
		transform: scale(0.1);
	}
}

/* .progress-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
}

.progress-bar {
  width: 0%;
  height: 100%;
  background-color: #4287f5;
  transition: width 0.3s linear;

}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  font-weight: bold;
} */

.progress-container {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: #8b3131;
  border-radius: 50%;
  overflow: hidden;
}

.progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 50%;
  clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, 50% 0%, 0% 0%, 0% 100%, 50% 100%);
  animation: progressAnimation 2s ease-in-out infinite;
  transform-origin: center center;
  transform: rotate(-90deg);
  background: linear-gradient(to right, #4287f5, #ffa500);
}

@keyframes progressAnimation {
  0% {
    transform: rotate(-90deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: bold;
  color: #fff;
}

.loader {
  width: 6em;
  height: 6em;
  font-size: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.loader .face {
  position: absolute;
  border-radius: 50%;
  border-style: solid;
  animation: animate023845 3s linear infinite;
}

.loader .face:nth-child(1) {
  width: 100%;
  height: 100%;
  color: gold;
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.2em 0.2em 0em 0em;
  --deg: -45deg;
  animation-direction: normal;
}

.loader .face:nth-child(2) {
  width: 70%;
  height: 70%;
  color: lime;
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.2em 0em 0em 0.2em;
  --deg: -135deg;
  animation-direction: reverse;
}

.loader .face .circle {
  position: absolute;
  width: 50%;
  height: 0.1em;
  top: 50%;
  left: 50%;
  background-color: transparent;
  transform: rotate(var(--deg));
  transform-origin: left;
}

.loader .face .circle::before {
  position: absolute;
  top: -0.5em;
  right: -0.5em;
  content: '';
  width: 1em;
  height: 1em;
  background-color: currentColor;
  border-radius: 50%;
  box-shadow: 0 0 2em,
                0 0 4em,
                0 0 6em,
                0 0 8em,
                0 0 10em,
                0 0 0 0.5em rgba(255, 255, 0, 0.1);
}

@keyframes animate023845 {
  to {
    transform: rotate(1turn);
  }
}

</style>
