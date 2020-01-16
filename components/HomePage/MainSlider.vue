<template>
  <section>
    <div>
      <section class="no-margin">
        <div>
          <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators>
            <b-carousel-slide img-src="~/assets/images/bg/bg1.jpg"></b-carousel-slide>
            <b-carousel-slide img-src="~/assets/images/bg/bg1.jpg"></b-carousel-slide>
            <b-carousel-slide img-src="~/assets/images/bg/bg1.jpg"></b-carousel-slide>
          </b-carousel>
        </div>
      </section>
      <!--/#main-slider-->
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      imageUrl: "~/assets/images/bg/"
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>