
function check_Alpha(letters){
    var regex = /^[a-zA-Z]+$/;
    if(regex.test(letters.yourname.value) == false){
   alert("Name must be in alphabets only");
   letters.yourname.focus();
   return false;
    }
    if(letters.yourname.value == " "){
      alert("Name Field cannot be left empty");
      letters.yourname.focus();
      return false;
    }
    return true;
  }

function check_Email(mail){
    var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    if(regex.test(mail.myemail.value)){
      return true;
      alert("Congrats! This is a valid Email email");
    }
    else{
      alert("This is not a valid email address");
      return false;
    }
  }