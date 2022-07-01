function solution(word) {
    const dict = ['A', 'E', 'I', 'O', 'U'];
    const dicts = [];
    
    function multiPermutation(arr, n, bucket) {
      if(n === 0) {
        dicts.push(bucket);
        return;
      }
      for(let i = 0; i < arr.length; i++){
        multiPermutation(arr, n - 1, bucket + arr[i])
      }
    }
    
    for (let i = 1; i <= 5; i++) {
        multiPermutation(dict, i, '')
    }
    
    dicts.sort();
    
    return dicts.indexOf(word) + 1
}