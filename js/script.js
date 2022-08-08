function deleteUser(element){
    var ans = window.confirm("Are You Sure?");
    if(ans == true){

        var d = element.parentNode.parentNode.rowIndex;
        document.getElementById('tableId').deleteRow(d);
    }
    else{
        window.alert("You didnt delete user")
    }
}

//function func_logout(){
    //window.alert("logged out");
    //window.location.href = "C:/Users/priya/OneDrive/Desktop/Priyanka/WEB_DEV/Project/Project1-CollegeWebsite/welcomePage.html";
   // document.getElementById("msg").innerHTML = "Hello World";
//}

function log_msg(){
    document.getElementById("msg").innerHTML = "logged out";
}


function login_success(){
    var email = document.getElementById("exampleInputEmail1").value;
    window.location.href = "C:/Users/priya/OneDrive/Desktop/Priyanka/WEB_DEV/Project/Project1-CollegeWebsite/login-success.html?email=" + email;    
}


function tab_change(element){
    //alert("selected ele:" + element.id)
    tableEle = document.getElementById('tablediv')
    if (element.id == 'manage-user'){
        tableEle.style.display = 'block'
    }else{
        tableEle.style.display = 'none'
    }
}

function loginPage(){
    window.location.href = "C:/Users/priya/OneDrive/Desktop/Priyanka/WEB_DEV/Project/Project1-CollegeWebsite/loginPage.html";
}
function registerPage(){
    window.location.href = "C:/Users/priya/OneDrive/Desktop/Priyanka/WEB_DEV/Project/Project1-CollegeWebsite/registrationPage.html";
}
function gotoHome(){
    window.location.href = "C:/Users/priya/OneDrive/Desktop/Priyanka/WEB_DEV/Project/Project1-CollegeWebsite/homePage.html";
}
function registerUser(){
    window.location.href = "C:/Users/priya/OneDrive/Desktop/Priyanka/WEB_DEV/Project/Project1-CollegeWebsite/registation-success.html";
}