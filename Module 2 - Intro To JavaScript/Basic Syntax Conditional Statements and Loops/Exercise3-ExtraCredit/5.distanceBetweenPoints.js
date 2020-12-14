/*
5. Distance Between Points
Write a JS function that calculates the distance between 
two points by given x and y coordinates.
The input comes as four number elements in the format x1, y1, x2, y2. 
Each pair of elements are the coordinates of
a point in 2D space.
The output should be returned as a result of your function.
Examples
Input Output
2, 4, 5, 0 5
Input Output
2.34, 15.66, -13.55, -2.9985 24.50778901186315
*/
function main(x1, y1, x2, y2) {
    let d = distance(x1, y1, x2, y2);
    console.log(d);
}
function distance(xx, yy, xxx, yyy) {
    return Math.sqrt((xxx-xx)*(xxx-xx) + (yyy-yy)*(yyy-yy));
}
main(2,4,5,0);
main(2.34, 15.66, -13.55, -2.9985);