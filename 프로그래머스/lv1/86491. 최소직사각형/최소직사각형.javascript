function solution(sizes) {
    var w = h =0;
    sizes.map((size) => {
        var [width, height] = size
        if (width < height) {
            let tmp = null;
            tmp = width;
            width = height;
            height = tmp;
        }
        if (w < width) {
            w = width
        }
        if (h < height) {
            h = height
        }
    })
    
    return w * h;
}