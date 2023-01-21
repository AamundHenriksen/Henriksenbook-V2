"use strict"

function registerView() {
    app.innerHTML = `
    <h1>Register</h1>
    <hr>

    <input type="text" placeholder="Username" oninput="registerUsername(this.value)"> <br>
    <input type="password" placeholder="Password" oninput="registerPassword(this.value)"> <br>
    <input type="password" placeholder="Confirm password" oninput="registerConfirmPassword(this.value)"> <br>
    <button onclick="registerAccount()">Register</button>
    `
}