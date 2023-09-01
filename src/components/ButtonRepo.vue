<template>
  <div v-if="show" class="redirecting">
    <div class="redirecting-animation">
      <img class="w-[400px] h-[300px] object-cover" src="@/assets/images/123.jpg" alt="loading animation" />
      <h1 class="redirecting-title">Redirecting...</h1>
      <p class="redirecting-subtitle">You will be redirected in:</p>
      <div class="redirecting-countdown">{{ countdown }}</div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  props: {
    destination: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const show = ref(true);
    const countdown = ref(5);
    const logoUrl = 'https://example.com/logo.png';

    const redirectToDestination = () => {
      show.value = false;
      const newWindow = window.open(props.destination, "_blank", "noopener");
      setTimeout(() => {
        ///window.location.href = document.referrer;
        if (newWindow && !newWindow.closed) {
      newWindow.close();
    }
    window.history.back();
      }, 500);
    };

    onMounted(() => {
      let timer = setInterval(() => {
        countdown.value--;
        if (countdown.value === 0) {
          clearInterval(timer);
          redirectToDestination();
        }
      }, 1000);
    });

    return {
      show,
      countdown,
      logoUrl,
    };
  },
};
</script>

<style scoped>
.redirecting {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.redirecting-animation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.redirecting-title {
  font-size: 4rem;
  margin: 0;
}

.redirecting-subtitle {
  font-size: 2rem;
  margin: 0;
}

.redirecting-countdown {
  font-size: 8rem;
  margin: 0;
  animation: fadein 1s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
