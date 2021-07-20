<template>
    <div class="home">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 p-0">
                    <sidebar :places="places"></sidebar>
                </div>

                <div class="col-md-9 p-0">
                    <Map :places="places"></Map>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import Map from "@/components/map/Map.vue";
import { getPlaces } from "../services/places";

export default {
    name: "Home",
    components: {
        Sidebar,
        Map,
    },
    setup() {
        let places = ref(null);

        getPlaces().then(dataPlaces => {
            places.value = dataPlaces;
        });

        return {
            places,
        };
    },
};
</script>

<style lang="scss" scoped></style>
