function getPlaces() {
    return fetch("http://localhost:3000/api/v1/places")
        .then(res => res.json())
        .then(places => {
            return places;
        });
}

module.exports = {
    getPlaces,
};
