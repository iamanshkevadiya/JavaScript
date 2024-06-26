function signUp() {

    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let com_pass = document.getElementById('com-pass').value;

    if (pass !== com_pass) {
        alert('Passwords do not match!');
        return;
    }

    localStorage.setItem('email-inp', email);
    localStorage.setItem('pass-inp', pass);
    window.location.href = 'login.html';

    document.getElementById('btn').addEventListener('click', function () {
        window.location.href = 'login.html';
    });
}