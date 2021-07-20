<template>
    <li class="sidebar__list__element list-group-item">
        <p>
            <strong>Lugar:</strong> <span>{{ place.place }}</span>
        </p>
        <p>
            <strong>Lat:</strong> <span>{{ place.lat }}</span>
        </p>

        <p>
            <strong>Lng:</strong> <span>{{ place.lng }}</span>
        </p>
        <p>
            <strong>Estado:</strong> <span>{{ place.status }}</span>
        </p>
    </li>
</template>

<script>
export default {
    props: {
        place: {
            type: Object,
        },
    },
};
</script>

<style lang="scss" scoped>
.sidebar__list__element {
    list-style: none;
}
</style>
