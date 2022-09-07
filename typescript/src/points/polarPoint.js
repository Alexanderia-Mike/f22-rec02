"use strict";
exports.__esModule = true;
exports.newPolarPoint = void 0;
function newPolarPoint(len, angle) {
    return {
        len: len,
        angle: angle,
        computeX: function () {
            return Math.round(len * Math.cos(angle));
        },
        computeY: function () {
            return Math.round(len * Math.sin(angle));
        }
    };
}
exports.newPolarPoint = newPolarPoint;
