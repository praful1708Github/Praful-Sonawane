function register(event) {
    event.preventDefault();
    alert("Worked..!!")
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
    var userData = { name: userName, email: userEmail, password: userPassword }

    var dataFromLS = JSON.parse(localStorage.getItem("userData")) || [];
    console.log(dataFromLS, 'dataFromLS')
    var flag = false;
    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].email === userEmail) {
            flag = true;
        }
    }
    if (flag === true) {
        alert("Email is already USed, Please Choose other E-mail.")
    } else if (userPassword.length < 1 && userName.length < 1 && userEmail < 1) {
        alert("Please Fill All The Feilds!")
    } else if (userPassword.length < 8) {
        alert("Password should be more than 8 Digit!")
    } else {
        dataFromLS.push(userData);
        localStorage.setItem("userData", JSON.stringify(dataFromLS));
        document.getElementById("userName").value = '';
        document.getElementById("userEmail").value = '';
        document.getElementById("userPassword").value = '';
        window.location.href = "/Login.html";
        alert("Registration Done.");
    }
}

function login(event) {
    event.preventDefault();
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    
    var datafromLS = JSON.parse(localStorage.getItem("userData"));

    var flag = false;
    for (var i = 0; i < datafromLS.length; i++) {
        if (datafromLS[i].email === userEmail && datafromLS[i].password === userPassword) {
            flag = true;
        }
    }
    if (flag === true) {
        document.getElementById("email").value = '';
        document.getElementById("password").value = '';
        var user = {};
        user["current-user-email"] = userEmail ;
        localStorage.setItem("current-user", JSON.stringify(user))
        window.location.href = '/snapdeal.html';
        alert("Logged in successfull.")
    } else {
        alert("Wrong Email or PassWord....please check Again");
    }
}
function addToLS(){
    alert("worked")

    var proName = document.getElementById("name").value;
    var proImage = document.getElementById("image").value;
    var proPrice = document.getElementById("price").value;

    var product = { name :proName, price :proPrice , image:proImage }

    var dataFromLS = JSON.parse(localStorage.getItem("products")) || [] ; 
    dataFromLS.push(product);

    localStorage.setItem("products", JSON.stringify(dataFromLS));
    alert("Product is submited!")

}


