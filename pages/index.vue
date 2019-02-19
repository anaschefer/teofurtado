<template>
  <main :class="$style.contain">

    <section :class="$style.text">

      <div :class="$style.clicker"
      @mousedown="showImages"/>

        <p :class="$style.para">
          <span class="fc-u">Teo Furtado</span>
          is a graphic designer based in London and is currently a senior designer at
          <a
          href="https://zak.group/"
          target="_blank"
          >Zak Group</a>.
          He specialises in type and book design, visual identities and web design, working in close collaboration with artists, publishers and cultural institutions. He often collaborates with designer
          <a
          class="fc-u"
          href="https://anaschefer.com/"
          >
            Ana Schefer
          </a>
          on multidisciplinary projects, including the 
          <span :class="$style.project">
            Travelogue Summer School
          </span>
          and the publication
          <span :class="$style.project">Project&nbsp;Paper</span>.
        </p>

        <p :class="$style.para">
          <span class="fc-u">Selected Work </span>
          <span :class="$style.project">Metaflop</span>,
          <span :class="$style.project">Venice Biennale</span>,
          <span :class="$style.project">Anne Imhof</span>,
          <span :class="$style.project">Sternberg Press</span>,
          <span :class="$style.project">Astrup Fearnley Museum of Modern Art</span>,
          <span :class="$style.project">Tony&nbsp;Oursler</span>.
        </p>

        <aside :class="$style.last">
          <div>
            <a href="mailto:teojafo@gmail.com">
              teojafo@gmail.com</a>
          </div>
          <div>
            <span>+44(0)787990259</span>
            <span>&thinsp;&thinsp;</span>
            <a
            href="https://twitter.com/teozeu/"
            target="_blank"
            >twitter</a>
            <span>&thinsp;&thinsp;</span>
            <a
            href="https://www.instagram.com/teofurtado/"
            target="_blank"
            >instagram</a>
          </div>
        </aside>
    </section>

    <section v-show="mode === 'images'"
    :class="$style.images">
      <img v-for="(src, i) of images"
      :key="src"
      :src="src"
      v-show="i === index">
    </section>

  </main>
</template>

<script>
import imgone from '~/assets/img/TIP_PARA_1.jpg';
import imgtwo from '~/assets/img/TIP_PARA_2.jpg';
import imgthree from '~/assets/img/TIP_PPAP_1.jpg';
import imgfour from '~/assets/img/TIP_PPAP_2.jpg';
import imgfive from '~/assets/img/TIP_ROV_1.jpg';
import imgsix from '~/assets/img/TIP_ROV_2.jpg';
import imgseven from '~/assets/img/TIP_ROV_3.jpg';
import imgeight from '~/assets/img/TIP_ROV_4.jpg';
import imgnine from '~/assets/img/TIP_SCE16_2.jpg';
import imgten from '~/assets/img/TIP_SCE16_4.jpg';
import imgeleven from '~/assets/img/TIP_SCE16_5.jpg';
import imgtwelve from '~/assets/img/TIP_SCE16_7.jpg';
import imgthirteen from '~/assets/img/TIP_SCE17_1.jpg';
import imgfourteen from '~/assets/img/TIP_SCE17_2.jpg';
import imgfifteen from '~/assets/img/TIP_TRAV_2.jpg';
import imgsixteen from '~/assets/img/TIP_TRAV_4.jpg';

export default {
  data() {
    return {
      mode: 'text',
      interval: false,
      index: 0,
      images: [
        imgone,
        imgtwo,
        imgthree,
        imgfour,
        imgfive,
        imgsix,
        imgseven,
        imgeight,
        imgnine,
        imgten,
        imgeleven,
        imgtwelve,
        imgthirteen,
        imgfourteen,
        imgfifteen,
        imgsixteen,
      ],
    };
  },
  mounted() {
    window.addEventListener('mouseup', this.hideImages);
    window.addEventListener('touchend', this.hideImages);
  },
  methods: {
    showImages() {
      this.mode = 'images';
      this.startSlideshow();
    },
    hideImages() {
      this.mode = 'text';
      this.stopSlideshow();
    },
    startSlideshow() {
      this.interval = setInterval(() => {
        const length = this.images.length;
        const currentIndex = this.index;
        if (currentIndex >= this.images.length - 1) this.index = 0;
        else this.index = currentIndex + 1;
      }, 200);
    },
    stopSlideshow() {
      clearInterval(this.interval);
    },
  },
};
</script>

<style lang="sass" module>
.clicker
  height: 100%
  left: 0
  position: fixed
  top: 0
  width: 100%
  z-index: 0
  cursor: pointer

.text
  display: flex
  flex-direction: column
  justify-content: space-between
  min-height: 100vh
  padding: 0.5em 1em
  perspective: 100px

.para,
.last
  position: relative
  z-index: 1
  cursor: auto

.contain

.images
  left: 0
  top: 0
  width: 100%
  height: 100%
  position: fixed
  z-index: 101
  background: black
  img
    height: 100%
    left: 0
    object-fit: cover
    position: absolute
    top: 0
    width: 100%


.last
  margin-top: auto

a
  animation: psych 1s linear infinite 
  animation-play-state: paused
  &:hover
    animation-play-state: running

@keyframes psych
  0%
    color: #000000
  15%
    color: #ff00ff
  30%
    color: #0000ff
  45%
    color: #00ffff
  60%
    color: #00ff00
  75%
    color: #ffff00
  90%
    color: #ff0000
  100%
    color: #000000


</style>
