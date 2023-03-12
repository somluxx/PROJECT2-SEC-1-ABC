<template>
  <div>
    <div class="px-14 py-4 flex items-center justify-center text-8xl bg-red-400 text-white rounded-lg">
      {{ minutes }}:{{ seconds < 10 ? '0' + seconds : seconds }}
    </div>

    <div class="flex items-center justify-center text-4xl rounded-lg">
      <button @click="startCountdown" class="italic bg-red-400 m-14 p-5 px-10 rounded-lg text-white">
        Start
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minutes: 25,
      seconds: 0,
      countdownInterval: null,
    };
  },
  methods: {
    startCountdown() {
      this.countdownInterval = setInterval(() => {
        if (this.seconds === 0) {
          this.minutes--;
          this.seconds = 59;
        } else {
          this.seconds--;
        }

        if (this.minutes === 0 && this.seconds === 0) {
          clearInterval(this.countdownInterval);
          this.countdownInterval = null;
        }
      }, 1000);
    },
  },
};
</script>