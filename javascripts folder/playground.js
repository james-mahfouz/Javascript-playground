window.onload = function(){
    
    let merge_button = document.getElementById('merge_button')
    let palindrome_button = document.getElementById('palindrome_button')
    let prime_button = document.getElementById('prime_button')
    let course_button = document.getElementById('course_button')
    let magic_button = document.getElementById('magic_button')

    merge_button.addEventListener('click', merge_numbers)
    palindrome_button.addEventListener('click', check_palindrome)
    prime_button.addEventListener('click', check_prime_age)
    course_button.addEventListener('click', create_course)
    magic_button.addEventListener('click', reverse_numb_string)

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
        let sorted_array = merge_sort(numbers_array)

        console.log(sorted_array)
        for (var i =0; i<sorted_array.length; i++){
            console.log(sorted_array[i])
            display_result.innerHTML = display_result.innerHTML + sorted_array[i]+"      "
        }

        function merge_sort(array) {
            if (array.length <= 1) {
                return array;
            }
            let middle = Math.floor(array.length / 2);
            let left = array.slice(0, middle);
            let right = array.slice(middle);
        
            const sorted_left = merge_sort(left);
            const sorted_right = merge_sort(right);
        
            return merge(sorted_left, sorted_right);
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

        if(is_prime(age)){
            display.innerHTML = `Nice, You are ${age} years old, which is a prime number`
        }else{
            display.innerHTML = `Nice, You are ${age} years old, but it isn't a prime number`
        }

        function is_prime(age_input){
            let is_prime = true
            for(let i = 2; i<= age/2; i++){
                if(age_input % i==0){
                    is_prime=false
                    break;
                }
            }
            return is_prime
        }
    }

    function create_course(){
        event.preventDefault()
        class Course{
                constructor(code, instructor, name, credits){
                this.code = code
                this.instructor = instructor
                this.name = name
                this.credits = credits
            }
        }
        let c_code = document.getElementById('c_code').value
        let c_instructor = document.getElementById('c_instructor').value
        let c_name = document.getElementById('c_name').value
        let c_credits = document.getElementById('c_credits').value
        let display = document.getElementById('course_result')

        let course = new Course(c_code, c_instructor, c_name, c_credits)
        console.log(course.code, course.instructor, course.name , course.credits)
        display.innerHTML = `This course ${course.name} with ${course.instructor} seems borring that is why you are ditching to play in the Javascript playground. I can suggest the FSW as a replacement BEST BOOTCAMP EVER`
    }

    function reverse_numb_string(){
        let string_input = document.getElementById('magic_input')

        let digit_check = /\d/
        let digits = string_input.matches(digit_check)
        if (!digits){
            return string_input
        }
        let reversed_digits = digits.reverse().join('')
        console.log(reversed_digits)
    }
}
