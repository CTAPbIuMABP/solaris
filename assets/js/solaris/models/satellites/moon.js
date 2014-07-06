define(function (require) {
    "use strict";

    var AbstractPlanet = require("./satellite");

    var Moon = function () {
        return this.init.apply(this, Array.prototype.slice.call(arguments));
    };

    Moon.prototype = new AbstractPlanet();

    _.extend(Moon.prototype, {
        _optionsDefault: {
            color: "#00ff00"
        },
        _params: {
            name: "Moon",
            index: 10,
            mass: 0.073,
            diameter: 3475,
            days: 27.3,
            orbit: {
                aphelion: 0.406,
                perihelion: 0.363
            }
        }
    });

    return Moon;
});