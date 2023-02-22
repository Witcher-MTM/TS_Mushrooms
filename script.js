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
var Figure = /** @class */ (function () {
    function Figure(name, color) {
        this.name = name;
        this.color = color;
    }
    Figure.prototype.setName = function (name) {
        this.name = name;
    };
    Figure.prototype.getName = function () {
        return this.name;
    };
    Figure.prototype.setColor = function (color) {
        this.color = color;
    };
    Figure.prototype.getColor = function () {
        return this.color;
    };
    Figure.prototype.toString = function () {
        return "Name - ".concat(this.getName(), "\nColor - ").concat(this.getColor());
    };
    return Figure;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(name, color, radius) {
        var _this = _super.call(this, name, color) || this;
        _this.radius = radius;
        _this.diametr = radius * 2;
        return _this;
    }
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
        this.diametr = radius * 2;
    };
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setDiametr = function (diametr) {
        this.diametr = diametr;
        this.radius = diametr / 2;
    };
    Circle.prototype.getDiametr = function () {
        return this.diametr;
    };
    Circle.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), "\nRadius - ").concat(this.getRadius(), "\nDiametr - ").concat(this.getDiametr());
    };
    return Circle;
}(Figure));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(name, color, sizeSide) {
        var _this = _super.call(this, name, color) || this;
        _this.sizeSide = sizeSide;
        return _this;
    }
    Square.prototype.setSizeSide = function (sizeSide) {
        this.sizeSide = sizeSide;
    };
    Square.prototype.getSizeSide = function () {
        return this.sizeSide;
    };
    Square.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), "\nSizeSide - ").concat(this.getSizeSide());
    };
    return Square;
}(Figure));
