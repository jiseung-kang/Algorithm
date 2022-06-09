function solution(maps) {
    const row = maps.length
    const col = maps[0].length
    const dx = [0, 0, -1, 1]
    const dy = [-1, 1, 0, 0]
    
    const queue = [[0,0]]
    
    while (queue.length > 0) {
        const [x, y] = queue.shift()
        
        if (x === row - 1 && y === col - 1) {
            return maps[x][y];
        }
        
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i]
            let ny = y + dy[i]
            
            if (nx >= 0 && ny >= 0 && nx < row && ny < col && maps[nx][ny] === 1) {
                if (maps[nx][ny] === 1) {
                    maps[nx][ny] = maps[x][y] + 1
                } 
                queue.push([nx, ny])
            }
        }
    }
    
    return -1;
}