"use strict"

function loginUsername(username) {
    model.inputs.login.username = username
}

function loginPassword(password) {
    model.inputs.login.password = password
}

function loginAccount() {
    const login = {
        username: model.inputs.login.username,
        password: model.inputs.login.password
    }

    if (!login.username || !login.password) { return }

    for (let i = 0; i < model.users.length; i++) {

        if (login.username === model.users[i].username && login.password === model.users[i].password) {
            model.current_user = model.users[i]
            model.current_page = "homepage"
            updateView()

            model.inputs.login = {
                username: "",
                password: ""
            }
        }
    }
}