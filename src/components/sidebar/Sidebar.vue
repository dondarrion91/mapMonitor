<template>
    <div class="sidebar bg-light border-end">
        <p class="h4 p-2">Titulo</p>

        <list :places="places"></list>
    </div>
</template>

<script>
import List from "./List.vue";
export default {
    name: "Sidebar",
    components: {
        List,
    },
    props: {
        places: {
            type: Array,
        },
    },
};
</script>

<style lang="scss" scoped>
.sidebar {
    height: 100vh;
}
</style>
