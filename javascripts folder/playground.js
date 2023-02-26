window.onload = function(){
    let account = JSON.parse(localStorage.getItem('account'))
    let title = document.getElementById('title')
    title.innerHTML = title.innerHTML +" "+ IDs[1][0].toUpperCase()
    
    
    function mergeSort(array) {
        if (array.length <= 1) {
            return array;
        }
        let middle = Math.floor(array.length / 2);
        let left = array.slice(0, middle);
        let right = array.slice(middle);
      
        const sortedLeft = mergeSort(left);
        const sortedRight = mergeSort(right);
      
        return merge(sortedLeft, sortedRight);
    }
      
    function merge(left, right) {
        let result = [];
        while (left.length && right.length) {
            if (left[0] <= right[0]) {
                result.push(left.shift());
            }
            else {
                result.push(right.shift());
            }
        }

        while (left.length) {
          result.push(left.shift());
        }
        while (right.length) {
          result.push(right.shift());
        }
      
        return result;
    }
      
}
