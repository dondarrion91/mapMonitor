const places = require("../data/places.json");

const getAllPlaces = async (req, res) => {
    try {
        res.json(places);
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

module.exports = {
    getAllPlaces,
};
