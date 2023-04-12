<template>
  <div class="timer">
    Vue Timer
  </div>
  <div>
    <section class="flex text-6xl justify-center content-center">
      <div class="days mr-2 relative">
        {{ displayDays }}
        <div class="label text-sm absolute bottom-0">days</div>
      </div>
      <span class="leading-snug">:</span>
      <div class="hours mx-2 relative">
        {{ displayHours }}
        <div class="label text-sm absolute bottom-0">hours</div>
      </div>
      <span class="leading-snug">:</span>
      <div class="minutes mx-2 relative">
        {{ displayMinutes }}
        <div class="label text-sm absolute bottom-0">minutes</div>
      </div>
      <span class="leading-snug">:</span>
      <div class="seconds ml-2 relative">
        {{ displaySeconds }}
        <div class="label text-sm absolute bottom-0">seconds</div>
      </div>
    </section>
  </div>
</template>
  
<script>

export default {
  props: ['year', 'month', 'date', 'hour', 'minute', 'second', 'millisecond'],
  data: () => ({
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0,
  }),
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    },
    end() {
      return new Date(
        this.year,
        this.month,
        this.date,
        this.hour,
        this.minute,
        this.second,
        this.millisecond
      )
    }
  },  
  mounted() {
    this.showRemaining();
  },
  methods: {
    formatNum: num => (num <10 ? "0" + num : num), 
 
    showRemaining(){
      const timer = setInterval(()=> {
        const now = new Date();
        const distance = this.end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          return
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days)/ this._hours) ;
        const minutes = Math.floor((distance % this._hours)/ this._minutes);
        const seconds = Math.floor((distance % this._minutes)/ this._seconds);
        this.displaySeconds = this.formatNum(seconds);
        this.displayMinutes = this.formatNum(minutes);
        this.displayHours = this.formatNum(hours);
        this.displayDays = this.formatNum(days);
      }, 1000);
    }
  },
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
  