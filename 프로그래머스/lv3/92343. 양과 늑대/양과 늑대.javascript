function solution(info, edges) {
    let answer = 1;
    const graph = Array.from({length : info.length}, () => []);
    
    edges.forEach((edge) => {
        graph[edge[0]].push(edge[1]);
    })
    
    function DFS(cur, sheep, wolf, roads) {
        info[cur] ? wolf++ : sheep++;
        if(sheep === wolf) return;
        answer = Math.max(answer, sheep);
        
        let nextNodes = [...roads];
        graph[cur].length > 0 && nextNodes.push(...graph[cur]);
        nextNodes = nextNodes.filter((element) => element !== cur);
        
        for(const nextNode of nextNodes){   
            DFS(nextNode, sheep, wolf, nextNodes);
        }
    }
    
    DFS(0, 0, 0, [0])
    return answer;
}