var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mushroom = /** @class */ (function () {
    function Mushroom(name, shape, color, poisonous, hat) {
        this._name = name;
        this._shape = shape;
        this._color = color;
        this._poisonous = poisonous;
        this._Hat = hat;
    }
    Mushroom.prototype.identify = function () {
        console.log("This is a ".concat(this._name, " mushroom, it is ").concat(this._color, " and has a ").concat(this._shape, " shape."));
        if (this._poisonous) {
            console.log("Warning: this mushroom is poisonous!");
        }
        else {
            console.log("This mushroom is safe to eat.");
        }
    };
    Object.defineProperty(Mushroom.prototype, "name", {
        // Getters
        get: function () {
            return this._name;
        },
        // Setters
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mushroom.prototype, "shape", {
        get: function () {
            return this._shape;
        },
        set: function (shape) {
            this._shape = shape;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mushroom.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mushroom.prototype, "poisonous", {
        get: function () {
            return this._poisonous;
        },
        set: function (poisonous) {
            this._poisonous = poisonous;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mushroom.prototype, "Hat", {
        get: function () {
            return this._Hat;
        },
        set: function (Hat) {
            this.Hat = Hat;
        },
        enumerable: false,
        configurable: true
    });
    return Mushroom;
}());
var Hat = /** @class */ (function () {
    function Hat(size) {
        this._size = size;
    }
    Object.defineProperty(Hat.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (size) {
            this._size = size;
        },
        enumerable: false,
        configurable: true
    });
    return Hat;
}());
var Foot = /** @class */ (function () {
    function Foot(length) {
        this._length = length;
    }
    Object.defineProperty(Foot.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (length) {
            this._length = length;
        },
        enumerable: false,
        configurable: true
    });
    return Foot;
}());
var Chanterelle = /** @class */ (function (_super) {
    __extends(Chanterelle, _super);
    function Chanterelle(color, poisonous, hat) {
        return _super.call(this, "Chanterelle", "funnel-shaped", color, poisonous, hat) || this;
    }
    return Chanterelle;
}(Mushroom));
var Morel = /** @class */ (function (_super) {
    __extends(Morel, _super);
    function Morel(color, poisonous, hat) {
        return _super.call(this, "Morel", "honeycomb-shaped", color, poisonous, hat) || this;
    }
    return Morel;
}(Mushroom));
var Amanita = /** @class */ (function (_super) {
    __extends(Amanita, _super);
    function Amanita(color, hat) {
        return _super.call(this, "Amanita", "umbrella-shaped", color, true, hat) || this;
    }
    return Amanita;
}(Mushroom));
var Portobello = /** @class */ (function (_super) {
    __extends(Portobello, _super);
    function Portobello(poisonous, hat) {
        return _super.call(this, "Portobello", "broad and flat", "brown", poisonous, hat) || this;
    }
    return Portobello;
}(Mushroom));
var Shitake = /** @class */ (function (_super) {
    __extends(Shitake, _super);
    function Shitake(poisonous, hat) {
        return _super.call(this, "Shitake", "umbrella-shaped", "brown", poisonous, hat) || this;
    }
    return Shitake;
}(Mushroom));
var MushroomController = /** @class */ (function () {
    function MushroomController(mushrooms) {
        this._musrooms = mushrooms;
    }
    MushroomController.prototype.ToString = function () {
        this._musrooms.forEach(function (element) {
            console.log(element.identify());
        });
    };
    MushroomController.prototype.Biggest = function () {
        console.log(this._musrooms.sort(function (a, b) { return b.Hat.size - a.Hat.size; })[0]);
    };
    return MushroomController;
}());
var mushrooms = [
    new Shitake(false, new Hat(1)),
    new Portobello(true, new Hat(2)),
    new Amanita('red', new Hat(3)),
    new Morel('green', true, new Hat(4)),
    new Chanterelle('yellow', false, new Hat(5)),
    new Morel('black', true, new Hat(6)),
    new Shitake(true, new Hat(9))
];
var contr = new MushroomController(mushrooms);
contr.Biggest();
