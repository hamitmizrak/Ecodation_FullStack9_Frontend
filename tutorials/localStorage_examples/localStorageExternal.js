const submitButton = (e) => {
    // browser submit işlemlerinde
    e.preventDefault();

    // JAVASCRIPT
    let emailData =document.getElementById("email_data").value;
    //console.log(emailData);
    
    // localStorage
    let localStorageSetEmail=localStorage.setItem("email",emailData);
    let localStorageGetEmail=localStorage.getItem("email");
    console.log(localStorageGetEmail);

    /////////////////////////////////////////////////////

    // JQUERY
    // jQuery.trim()
    // $.trim()
    let passwordData =jQuery.trim($("#password_data").val());
    // console.log(`${passwordData}`);

    // localStorage
    let localStorageSetPassword=localStorage.setItem("password",passwordData);
    console.log(localStorage); 
    let localStorageGetPassword=localStorage.getItem("password");
    console.log(localStorageGetPassword); 
}


const submitHide=()=>{
    $("#form_data").hide(2000);
}

const submitShow=()=>{
    $("#form_data").show(2000);
    $("#form_data").css("backgroundColor","red")
    $("#form_data").css("padding","2rem")
}