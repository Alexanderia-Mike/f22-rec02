"use strict";
exports.__esModule = true;
exports.newLine = void 0;
function newLine(point1, point2) {
    return {
        draw: function () {
            var x1 = point1.computeX();
            var y1 = point1.computeY();
            var x2 = point2.computeX();
            var y2 = point2.computeY();
            // assume implementation 
            console.log("Line drawn from (" + x1 + ", " + y1 +
                ") to (" + x2 + ", " + y2 + ")");
        }
    };
}
exports.newLine = newLine;
