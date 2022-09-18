const password = document.getElementById('password');
const check = document.getElementById('check');
const username = document.getElementById('username');
const savePassword = document.getElementById('save');
const form = document.getElementById('form');

if(localStorage.getItem('loginDetails') === null) {

    const loginCred = JSON.stringify(
        {
            username: '',
            password: ''
        } 
    )
    localStorage.setItem('loginDetails', loginCred)

}   else {
    
    const rawData = localStorage.getItem('loginDetails');
    const parseCred = JSON.parse(rawData);

    if(parseCred.username !== '' || parseCred.password !== '') {

        savePassword.setAttribute('checked', true);
    }

    username.value = parseCred.username;
    password.value = parseCred.password;
}

savePassword.addEventListener('click', (e) => {

    if(e.target.checked) {

        const loginCred = JSON.stringify(
            {
               username: username.value,
               password: password.value
           } 
       )
       localStorage.setItem('loginDetils', loginCred)
   
    }   else {

        const loginCred = JSON.stringify(
            {
                username: '',
                password: ''
            } 
        )
        localStorage.setItem('loginDetils', loginCred);
    }
})

check.addEventListener('click', (e) => {

    if(password.type == 'password') {
        
        password.type = 'text';

    }   else {
        password.type = 'password';
    }
})

form.addEventListener('submit', (e) => {

    e.preventDefault();
}); 