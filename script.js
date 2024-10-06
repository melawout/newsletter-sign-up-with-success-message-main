document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('email');
  const errorField = document.querySelector('.error');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const email = emailInput.value.trim();

    if(validateEmail(email)){
      errorField.style.display = 'none';
      
      window.location.href = "success.html?email=" + encodeURIComponent(email);
    }else {
      errorField.style.display = 'block';
    }

  })

  function validateEmail(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(emailPattern.test(email));
    return emailPattern.test(email);
  }

})