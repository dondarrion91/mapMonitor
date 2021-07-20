<template>
    <div class="map" id="map"></div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader";
import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";

export default {
    name: "Map",
    props: {
        places: {
            type: Array,
        },
    },
    setup(props) {
        let map = ref(null);
        let markers = ref([]);

        const loader = new Loader({
            apiKey: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
            version: "weekly",
        });

        loader.load().then(maps => {
            map.value = new maps.maps.Map(document.getElementById("map"), {
                center: { lat: -31.423024, lng: -64.190797 },
                zoom: 13,
            });

            watchEffect(() => {
                if (props.places) {
                    props.places.forEach(place => {
                        markers.value.push(
                            new maps.maps.Marker({
                                position: {
                                    lat: place.lat,
                                    lng: place.lng,
                                },
                                icon: place.status
                                    ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                                    : "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                                map: map.value,
                            })
                        );
                    });
                }
            });
        });

        return {
            map,
            markers,
        };
    },
};
</script>

<style lang="scss">
.map {
    height: 100vh;
}
</style>
