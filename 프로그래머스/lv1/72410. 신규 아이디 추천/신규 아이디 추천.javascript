function solution(new_id) {
    var valid = ""
    new_id = new_id.toLowerCase()
    for (n in new_id) {
        var i = new_id[n] + ''
        if (n > 0) {
            if (new_id[n-1] === '.' && new_id[n] === '.') {
                continue
            }
        }
        if (('a' <= i && i <= 'z') || ('0' <= i && '9' >= i) || i === '.' || i === '_' || i === '-') {
            valid = valid + i
        }
    }
    while (valid.includes('..')) {
        valid = valid.replace('..', '.');
    }
    while(valid.length > 0 && valid[0] === "." || valid[valid.length - 1] === ".") {
        if (valid[0] === ".") {
            valid = valid.slice(1, valid.length)
        }
        else if (valid[valid.length - 1] === ".") {
            valid = valid.slice(0, valid.length - 1)
        }
    }
    
    if (valid.length > 15) {
        valid = valid.slice(0, 15)
        while (valid[valid.length - 1] === ".") {
            valid = valid.slice(0, valid.length - 1)
        }
    }
    
    if (valid.length === 0) {
        valid = 'a'
    }
    
    while (valid && valid.length < 3) {
        valid = valid + valid[valid.length - 1]
    }
    
    return valid;
}