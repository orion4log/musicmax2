function validate(){    
if (document.Form1.password.value == "") {
  alert("Введите ответ");
  document.Form1.password.focus();
  return false;
} 
if (document.Form1.password.value == "ats")  {  
window.location.href='autoprokr.html';
} else  {   
window.location.href='animbukv11.html';
}
}
