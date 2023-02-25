window.onload = function(){
    let button = document.getElementById('register_btn') 
    button.addEventListener('click', function(){
        let first_name = document.getElementById('f_name').value
        let last_name = document.getElementById('l_name').value
        let gender = document.getElementById('gender').value
        let email = document.getElementById('e_mail').value
        let password = document.getElementById('pass_code').value
        let conf_password = document.getElementById('re_pass_code').value

        alert(gender)
    })
    
    
    //function checkEmptyValue(){
        //if(first_name == ''|| last_name == '' || gender == )
    //}
}