const validation=()=>{
    var name = document.getElementById('name')
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    var submit = document.getElementById('submit')

    if(name.value === ""){
        alert('Please Enter YOur Name')
        document.loginForm.name.focus()
        return false
    }else if(email.value === ""){
        alert('Please Enter YOur email')
        document.loginForm.email.focus()
        return false
    }else if(name.password === ""){
        alert('Please Add YOur Password')
        document.loginForm.password.focus()
        return false
    }
    return true
}