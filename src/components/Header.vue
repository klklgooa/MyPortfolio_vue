<template>
  <header>
    <span id="header_span">
      <router-link to="/">Inchan's&nbsp; Portpolio</router-link>
    </span>
    <details id="music_details">
      <summary>Music</summary>
      <ul style="float: left;">
        <li>
          <div>
            <input
              type="radio"
              id="Milky"
              name="music"
              value="../music/Milky.mp3"
            />
            <label for="Milky">mStone_Milky </label>
          </div>
        </li>

        <li>
          <div>
            <input
              type="radio"
              id="Gatron"
              name="music"
              value="../music/Gatron.mp3"
            />
            <label for="Gatron">Gatron_Brown</label>
          </div>
        </li>

        <li>
          <div>
            <input
              type="radio"
              id="Meteor"
              name="music"
              value="../music/Meteor_white.mp3"
            />
            <label for="Meteor">SP-star_Meteor_white</label>
          </div>
        </li>
      </ul>
      <span>
        <input
          id="play_button"
          class="music_button"
          type="button"
          value="Play"
          @click="check"
        />
        <input
          id="stop_button"
          class="music_button"
          type="button"
          value="Stop"
          @click="stop"
        />
      </span>
    </details>
  </header>
</template>

<script>
export default {
  methods: {
    check() {
      if (this.audio.paused === false) this.stop();

      const musicNodeList = document.getElementsByName('music');

      musicNodeList.forEach((node) => {
        if (node.checked) {
          this.playMusic(node.value);
        }
      });
    },
    playMusic(choice) {
      this.audio = new Audio(choice);
      this.audio.load();
      this.audio.play();
    },
    stop() {
      this.audio.pause();
    },
  },
  data() {
    return {
      audio: new Audio(),
    };
  },
};
</script>

<style scoped>
/* 여기에 스타일을 추가하세요. */
</style>
