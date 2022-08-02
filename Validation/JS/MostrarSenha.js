const check = document.getElementById("check");
check.addEventListener('change', () => {
     if(check.checked == true) {
        document.getElementById("password").type = "text"
    } else {
        document.getElementById("password").type = "password"
    }
})
