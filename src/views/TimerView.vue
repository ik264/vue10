<template>
    <CounterTimer :year="2023" :month="4" :date="23" :hour="10" :minute="10" :second="10" :millisecond="10" />
</template>
  
<script>
import CounterTimer from '../components/CounterTimer.vue';

export default {
    components: {
        CounterTimer
    }
}
</script>
  
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
  