// Returns true if ${grid} is a valid sudoku solution or false otherwise

const isValidSudoku = (grid) => {
    const rows = grid[0].map((col, i) => grid.map(row => row[i]));
    const squares = grid.reduce((r, v, i, arr) => {
        let y = Math.floor(i/3) * 3, x = (i % 3) * 3;
        r.push([
            arr[y][x], arr[y][x+1], arr[y][x+2],
            arr[y+1][x], arr[y+1][x+1], arr[y+1][x+2],
            arr[y+2][x], arr[y+2][x+1], arr[y+2][x+2]
        ]);
        return r;
    }, []);

    return [grid, rows, squares].every(arr => arr.every(v => new Set(v).size === 9));
}
