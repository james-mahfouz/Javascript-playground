window.onload = function(){
    let merge_button = document.getElementById('merge_button')

    merge_button.addEventListener('click', merge_numbers)

    function merge_numbers(){
        event.preventDefault()
        let display_result = document.getElementById('result')
        display_result.innerHTML=""
        let numbers_input = document.getElementsByClassName('number_input')
        let numbers_array =[]
        for (let i=0; i <numbers_input.length; i++){
            numbers_array.push(parseInt(numbers_input[i].value))
        }

        console.log(numbers_array)
        let sorted_array = mergeSort(numbers_array)

        console.log(sorted_array)
        for (var i =0; i<sorted_array.length; i++){
            console.log(sorted_array[i])
            display_result.innerHTML = display_result.innerHTML + sorted_array[i]+"      "
        }

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
}
