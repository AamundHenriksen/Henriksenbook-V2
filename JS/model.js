"use strict"

const model = {
    // App
    current_page: "login",
    current_user: null,

    // Inputs
    inputs: {
        register: {
            username: "",
            password: "",
            confirm_password: ""
        },
        login: {
            username: "",
            password: ""
        }
    },

    // Data
    users: [
        {
            id: 1,
            username: "Åmund",
            password: "123",
            friends_id: [2, 3]
        },

        {
            id: 2,
            username: "Peder",
            password: "321",
            friends_id: [1, 3]
        },

        {
            id: 3,
            username: "Herman",
            password: "101",
            friends_id: [1, 2]
        }
    ]
}