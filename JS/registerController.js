"use strict"

function registerUsername(username) {
    model.inputs.register.username = username
}

function registerPassword(password) {
    model.inputs.register.password = password
}

function registerConfirmPassword(confirmPassword) {
    model.inputs.register.confirm_password = confirmPassword
}

function registerAccount() {
    const register = {
        username: model.inputs.register.username,
        password: model.inputs.register.password,
        confirm_password: model.inputs.register.confirm_password
    }

    if (!register.username || !register.password || !register.confirm_password) { return }

    if (register.username && register.password === register.confirm_password) {

        model.users.push({
            id: 2,
            username: register.username,
            password: register.password
        })

        model.current_page = "login"
        updateView()

        model.inputs.register = {
            username: "",
            password: "",
            confirm_password: ""
        }
    }
}