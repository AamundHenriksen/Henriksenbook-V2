"use strict"

function loginView() {
    app.innerHTML = `
    <h1>Login</h1>
    <hr>

    <input type="text" placeholder="Username" oninput="loginUsername(this.value)"> <br>
    <input type="password" placeholder="Password" oninput="loginPassword(this.value)"> <br>
    <button onclick="loginAccount()">Log in</button> <br>

    <span>Don't have an account yet?</span> <br>
    <button onclick="changeCurrentPageTo('register')">Create a new account</button>
    `
}