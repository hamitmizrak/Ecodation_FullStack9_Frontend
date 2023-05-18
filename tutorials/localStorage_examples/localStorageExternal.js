const submitButton = (event) => {
    // browser submit işlemlerinde
    //event.preventDefault();

    // JAVASCRIPT
    let emailData =document.getElementById("email_data").value;
    //console.log(emailData);
    
    // localStorage
    let localStorageEmail=localStorage.setItem("email",emailData);
    let localStorageGetEmail=localStorage.getItem("email");
    console.log(localStorageGetEmail);

    /////////////////////////////////////////////////////

    // JQUERY
    // jQuery.trim()
    // $.trim()
    let passwordData =jQuery.trim($("#password_data").val());
    // console.log(`${passwordData}`);

    // localStorage
    let localStoragePassword=localStorage.setItem("password",passwordData);
    console.log(localStorage); 
    let localStorageGetPassword=localStorage.getItem("password");
    console.log(localStorageGetPassword); 
}