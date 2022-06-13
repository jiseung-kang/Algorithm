function solution(n, edge) {
    const graph = Array.from({length: n}, () => [])
    
    edge.forEach(v => {
        const [a, b] = v
        graph[a-1].push(b-1)
        graph[b-1].push(a-1)
    })

    function bfs(graph) {
        const visited = Array.from({length: n}, () => -1)
        visited[0] = 0
        const queue = [0]
        let answer = queue.length; 
        while (queue.length > 0) {
            for (let i = 0; i < queue.length; i++) {
                const cur = queue.shift();
                graph[cur].forEach(c => {
                    if (visited[c] === -1) {
                        queue.push(c)
                        visited[c] = visited[cur] + 1
                    }
                })
            }
        }
        return visited.filter((v) => v === Math.max(...visited))
    }
    
    return bfs(graph).length;
}