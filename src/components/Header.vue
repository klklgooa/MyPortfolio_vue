<template>
  <header>
    <span id="header_span">
      <router-link to="/">Inchan's&nbsp; Portfolio</router-link>
    </span>
    <details id="music_details" @click="toggleDetails">
      <summary>Music</summary>
      <ul style="float: left;">
        <li>
          <div>
            <input type="radio" id="Milky" name="music1" value="../music/Milky.mp3" v-model="selectedMusic" />
            <label for="Milky">mStone_Milky </label>
          </div>
        </li>

        <li>
          <div>
            <input type="radio" id="Gatron" name="music2" value="../music/Gatron.mp3" v-model="selectedMusic" />
            <label for="Gatron">Gatron_Brown</label>
          </div>
        </li>

        <li>
          <div>
            <input type="radio" id="Meteor" name="music3" value="../music/Meteor_white.mp3" v-model="selectedMusic" />
            <label for="Meteor">SP-star_Meteor_white</label>
          </div>
        </li>
      </ul>
      <span>
        <input id="play_button" class="music_button" type="button" value="Play" @click="check" />
        <input id="stop_button" class="music_button" type="button" value="Stop" @click="stop" />
      </span>
    </details>
  </header>
</template>

<script>
import { onMounted } from 'vue';

export default {
  data() {
    return {
      selectedMusic: null,
      audio: new Audio(),
    };
  },
  methods: {
    playMusic() {
      if (this.selectedMusic) {
        this.audio.src = this.selectedMusic;
        this.audio.load();
        this.audio.play();
      }
    },
    stopMusic() {
      this.audio.pause();
    
    },
  },
};

</script>

<style scoped>
@import './CSS/Header.css';
</style>

<!-- <script>
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
</script> -->