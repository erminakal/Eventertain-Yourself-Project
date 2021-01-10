<template>
  <div class="home">
    <div id="body">
      <!--sto carousel tha valw events pou prokeitai na pragmatopoih8oun kai isws kapoia venues-->
      <div>
        <b-container fluid>
          <b-row id="row1">
            <b-col cols="2" id="col1">
              <b-carousel
              
                id="carousel"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#006080"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
              >
                <b-carousel-slide>
                  <template v-slot:img>
                    <h4>Reconnect the Exhibition by Z Empire Global</h4>
                    <h5>May 26, 2021 Wednesday 8:00 AM - 6:00 PM</h5>
                    <a
                      href="https://eventful.com/athens/events/reconnect-exhibition-z-empire-global-/E0-001-135306099-1"
                      target="_blank"
                    >
                      <img src="@/assets/reconnect-exhibition2.jpg"
                        alt="image slot"
                      />
                    </a>
                  </template>
                </b-carousel-slide>

                <b-carousel-slide>
                  <template v-slot:img>
                    <h4>
                      Afro Black Multi Kulti PARTY @ SURPRISE Club Berlin
                    </h4>
                    <h5>
                      October 2-3, 2020 Friday 10:00 PM - Saturday 6:00 AM
                    </h5>
                    <a
                      href="https://berlin.eventful.com/events/afro-black-multi-kulti-pa-/E0-001-048556490-0@2020100222"
                      target="_blank"
                    >
                      <img src="@/assets/afro-black4.png" alt="image slot" />
                    </a>
                  </template>
                </b-carousel-slide>
                <b-carousel-slide>
                  <template v-slot:img>
                    <h4>Ozzy Osbourne - Judas Priest in Greenwich</h4>
                    <h5>Wednesday October 28, 2020 - 7:30 PM</h5>
                    <a
                      href="https://london.eventful.com/events/ozzy-osbourne-judas-priest-/E0-001-117697525-4"
                      target="_blank"
                    >
                      <img src="@/assets/judas-priest.jpeg" alt="image slot" />
                    </a>
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </b-col>
            <b-col></b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  data() {
    return {
      slide: 0,
      sliding: null
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

<style>
#carousel {
  margin: auto;
  height: 350px;
  width: 600px;
  scroll-behavior: smooth;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-left: 400px;
  overflow: hidden;

}

.carousel-inner {
  height: 200px;
  width: 400px;
  color: goldenrod;
  background-position: center;
  position: relative;
}
.carousel-inner > .item > img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 900px;
  height: 500px;
}
#row1 {
  height: 100px;
  width: 800px;
  margin-left: 20px;
  margin-bottom: 200px;
  margin-right: 20px;
}

#row2 {
  height: 100px;
  width: 800px;
  margin-left: 20px;
  margin-top: 200px;
  margin-right: 20px;
}

#col1 {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
}
</style>

      