const spiralNumbers = (n) => {
    const walls = [n, n, -1, -1], r = Array.from(Array(n), () => new Array(n));

    let direction = 'r', x = 0, y = 0;
    for (let i = 1; i <= n*n; ++i) {
        r[y][x] = i;
        if (direction === 'r') {
            ++x;
            if (walls[0] === x + 1) walls[3] = y, direction = 'd';
        } 
        else if (direction === 'd') {
            ++y;
            if (walls[1] === y + 1) walls[0] = x, direction = 'l';
        }
        else if (direction === 'l') {
            --x;
            if (walls[2] === x - 1) walls[1] = y, direction = 'u';
        }
        else if (direction === 'u') {
            --y;
            if (walls[3] === y - 1) walls[2] = x, direction = 'r';
        }
    }
    
    return r;
}
