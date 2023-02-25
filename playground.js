window.onload = function(){
    let button = document.getElementById('register_btn')
    button.addEventListener('click', handleClick)

    function handleClick() {
        let first_name = document.getElementById('f_name').value
        let last_name = document.getElementById('l_name').value
        let gender = document.getElementById('gender').value
        let email = document.getElementById('e_mail').value
        let password = document.getElementById('pass_code').value
        let conf_password = document.getElementById('re_pass_code').value
        let last_ID = 0
        let data = {}

        if (checkEmptyValue() || checkEmail() || checkPassword()) {
            button.removeEventListener('click', handleClick)
        }
        else{
            ID = generateID()
            values = [first_name, last_name, gender, email, password]
            data[ID] = values
            window.location.href = "playground.html"
        }
        

        function checkEmptyValue() {
            if (first_name.trim() == '' || last_name.trim() == '' || gender.trim() == '' || email.trim() == '' || password.trim() == '' || conf_password.trim() == '') {
                alert("There is an empty field")
                return true
            }
            else {
                return false
            }
        }

        function generateID(){
            last_ID++
            return last_ID
        }

        function checkEmail(){
            let email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!email_regex.test(email)) {
                alert("Invalid email format")
                console.log("Invalid email")
                return true
            }
            else{
                return false
            }
        }

        function checkPassword() {
            let pass_regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/
            if (!pass_regex.test(password) || password != conf_password) {
                alert("Password should contain 8 characters minimum, one special character minimum, at least one upper case letter.")
                return true
            } 
            else {
                return false
            }
        }


    } 
}