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

        if (checkEmptyValue()) {
            button.removeEventListener('click', handleClick)
        }
        else{
            ID = generateID()
            values = [first_name, last_name, gender, email, password]
            data[ID] = values
            for (var i =0 ; i<7; i++){
                console.log(data[ID][i])
            }
        }

        function checkEmptyValue() {
            if (first_name.trim() == '' || last_name.trim() == '' || gender.trim() == '' || email.trim() == '' || password.trim() == '' || conf_password.trim() == '') {
                return true;
            }
            else {
                return false;
            }
        }

        function generateID(){
            last_ID++;
            return last_ID;
        }
    }
    
    function checkEmail(){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Invalid email format");
        return;
        }
    }
 
}