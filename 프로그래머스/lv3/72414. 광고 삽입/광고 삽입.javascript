function solution(play_time, adv_time, logs) {
    function calc(h, m, s) {
        return Number(h*60*60) + Number(m*60) + Number(s)
    }
    
    function clock(s) {
        const h = Math.floor(s/3600) < 10 ? '0' + Math.floor(s/3600) : Math.floor(s/3600)
        s = s - h * 3600
        const m = Math.floor(s/60) < 10 ? '0' + Math.floor(s/60) : Math.floor(s/60)
        s = s - m * 60 < 10 ? '0' + String(s - m * 60) : s - m * 60
        
        return `${h}:${m}:${s}` 
    }
    
    const [ph, pm, ps] = play_time.split(":")
    const pt = calc(ph, pm, ps)
    const [ah, am, as] = adv_time.split(":")
    const at = calc(ah, am, as)
    const times = new Array(pt).fill(0);
    
    if (pt === at) {
        return '00:00:00'
    }
    
    const logtimes = []
    
    logs.forEach((log, i) => {
        const [start, end] = log.split("-")
        const [sh, sm, ss] = start.split(":")
        const [eh, em, es] = end.split(":")
        times[calc(sh, sm, ss)]++;
        times[calc(eh, em, es)]--;
    })
    
    // 시청자 수
    for(let i = 0; i < pt; i++)
        times[i+1] += times[i];
  
    // 누적 재생 횟수
    for(let i = 0; i < pt; i++)
        times[i+1] += times[i];
  
    let max = times[at-1];
    let ans = 0;
  
    for(let i = at-1; i < pt; i++) {
        if(max < times[i] - times[i-at]) {
            max = times[i] - times[i-at];
            ans = i - at + 1;
        }
    }
  
    return clock(ans);
}