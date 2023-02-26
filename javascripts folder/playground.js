window.onload = function(){
    let merge_button = document.getElementById('merge_button')
    let palindrome_button = document.getElementById('palindrome_button')
    let prime_button = document.getElementById('prime_button')

    merge_button.addEventListener('click', merge_numbers)
    palindrome_button.addEventListener('click', check_palindrome)
    prime_button.addEventListener('click', check_prime_age)

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

    function check_palindrome(){
        event.preventDefault()
        let palindrome_string = document.getElementById('user_palindrome_input').value
        let display = document.getElementById('palindrome-output')
        console.log(palindrome_string)
        console.log(display.innerHTML)
        console.log(display.innerHTML)
        display.innerHTML = palindrome_string + " is " + palindrome(palindrome_string)
        console.log(palindrome(palindrome_string))

        function palindrome_helper(string, begin, end) {
            console.log(string, begin, end)
            if (string[begin] != string[end]) {
                return false;
            } else if (string.length == 1) {

                return true;
            } else if (begin > end) {
                return true;
            } else {
                return palindrome_helper(string, begin + 1, end - 1);
            }
        }
            
        function palindrome(string) {
            return palindrome_helper(string, 0, string.length - 1);
        }
    }

    function check_prime_age(){
        let year_of_birth = document.getElementById('user_prime_input').value
        let age = new Date().getFullYear() - parseInt(year_of_birth)
        let display = document.getElementById('prime-output')
        age=parseInt(age)
        console.log(age)

        if(isPrime(age)){
            display.innerHTML = `Nice, You are ${age} years old, which is a prime number`
        }else{
            display.innerHTML = `Nice, You are ${age} years old, but it isn't a prime number`
        }

        function isPrime(age_input){
            let is_prime = true
            for(let i = 2; i<= age/2; i++){
                if(age % i==0){
                    is_prime=false
                    break;
                }
            }
            return is_prime
        }
    }
}
