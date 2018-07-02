// A rectangle with sides equal to even integers a and b is drawn on the Cartesian plane. 
// Its center (the intersection point of its diagonals) coincides with the point (0, 0)
// but the sides of the rectangle are not parallel to the axes; instead, they are forming 45 degree angles with the axes.
// How many points with integer coordinates are located inside the given rectangle (including on its sides)?

// Rotate point ${x, y} from origin by ${angle} degrees
const rotatePoint = (x, y, angle) => {
    const radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x)) + (sin * (y)),
        ny = (cos * (y)) - (sin * (x));
    return [nx, ny];
}

// Count integer coordinates inside 45° rotated rectangle of height ${a} and length ${b} with its center on origin
const rectangleRotation = (a, b) => {
    const max = Math.ceil(rotatePoint(b/2, a/2, 45)[0]);
    const l = b/2;
    const h = a/2;
    
    let s = 0;
    for (let x = -max; x <= max; ++x) {
        for (let y = 0; y <= max; ++y) {
            const r = rotatePoint(x, y, -45);
            if (r[0] >= -l && r[0] <= l && r[1] >= -h && r[1] <= h) {
                if (y != 0) ++s;
                ++s;
            }
        }
    }
    
    return s;
}
