<template>
    <div id="app" class="container">
        <ToDoList>

        </ToDoList>
    </div>
</template>
  
<script>
import ToDoList from "../components/ToDoList.vue";

export default {
    name: "App",
    components: {
        ToDoList,
    },
};
</script>
  
<style>
* {
    box-sizing: border-box;
}

.container {
    max-width: 600px;
    margin: 0 auto;
}

#app {
    font-family: 'Avenir', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 20px;
}
</style>