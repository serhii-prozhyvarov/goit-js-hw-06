const refs = {
    loginForm: document.querySelector(".login-form"),
    emailInput: document.querySelector('input[type="email"]'),
    passwordInput: document.querySelector('input[type="password"]'),
    submitBtn: document.querySelector('button[type="submit"]'),
};


function handleSubmit(event) {
    event.preventDefault();
    const email = refs.emailInput.value;
    const password = refs.passwordInput.value;
    if (email === "") {
        alert("Заполните email")
    } else if (password === "") {
        alert("Заполните password");
    } else {
      console.log({
        email,
        password,
      });
    }
      
    refs.loginForm.reset()
}


refs.loginForm.addEventListener('submit', handleSubmit)