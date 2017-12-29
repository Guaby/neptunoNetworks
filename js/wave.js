// Just change behavor on variables values.

var width, height, center;
var points = 3;
var smooth = true;
var path = new Path();
var mousePos = view.center / 2;
var pathHeight = mousePos.y;
var topLeft = view.center - [80, 100];
var bottomRight = view.center + [80, 100];
path.fillColor = '#ffffff';

initializePath();

function initializePath() {
    center = view.center;
    width = view.size.width;
    height = view.size.height / 6;
    path.segments = [];
    path.add(view.bounds.bottomLeft);
    path.add(view.bounds.topLeft);
    for (var i = 1; i < points; i++) {
        var point = new Point(width / points * i, center.y);
        path.add(point);
    }
    path.add(view.bounds.topRight);
    path.add(view.bounds.bottomRight);
    //path.fullySelected= true; 
    console.log('The handel curve is: ' + path.segments[4]);
    console.log(path.segment);
}
function onFrame(event) {
    pathHeight += (center.y - mousePos.y - pathHeight);
    for (var i = 1; i <= points + 1; i++) {
        var sinSeed = event.count + (i + i % 10) * 100;
        var sinHeight = Math.sin(sinSeed / 100) * pathHeight / 5 * 3;
        var yPos = Math.sin(sinSeed / 100) * sinHeight + height;
        path.segments[i].point.y = yPos;
    }
    if (smooth) path.smooth({ type: 'continuous' });
}
// Reposition the path whenever the window is resized: 
function onResize(event) {
    initializePath();
}