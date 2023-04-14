<template>
    <vueCountriesCities @country='selectedCountry = $event' @city='selectedCity = $event' />
    <button class="... ring-2 ring-pink-300 ring-inset px-20">
        {{ selectedCountry }}
    </button> |
    <button class="... ring-2 ring-pink-300 ring-inset px-20">
        {{ selectedCity }}
    </button>
</template>
  
<script>
import vueCountriesCities from "vue-countries-cities";
export default {
    data() {
        return {
            selectedCountry: '',
            selectedCity: ''
        }
    },
    components: { vueCountriesCities }
}
</script>
  
<style>
.directory {
    text-align: center;
    font-size: 40px;
}

.countries-cities {
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;

    .select-box {
        height: 40px;
        min-width: 300px;
        background: #fff;
        border: 1px solid #e9e9e9;
        position: relative;

        select {
            background: none;
            border: none;
            outline: none;
            padding-left: 7px;
            padding-right: 65px;
            appearance: none;
            width: 100%;
            height: 100%;
        }

        svg {
            position: absolute;
            right: 0;
            top: 0;
            width: 50px;
            height: 100%;
            background: darken(#fff, 3%);
            pointer-events: none;
            box-sizing: border-box;
            padding: 5px;

            path {
                fill: rgba(black, .7);
            }
        }
    }
}
</style>
  