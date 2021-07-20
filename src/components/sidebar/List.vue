<template>
    <ul class="sidebar__list p-0 list-group">
        <ElementList v-for="place in places" :key="place.id" :place="place" />
    </ul>
</template>

<script>
import ElementList from "./Element.vue";
export default {
    name: "List",
    components: {
        ElementList,
    },
    props: {
        places: {
            type: Array,
        },
    },
};
</script>

<style></style>
