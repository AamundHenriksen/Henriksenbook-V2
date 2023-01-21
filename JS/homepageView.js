"use strict"

function homepageView() {
    app.innerHTML = `
    <h1>Homepage</h1>
    <hr>

    <ul>
        ${myUser()}
        ${myFriends()}
    </ul>
    `
}

function myUser() {
    return `<li class="x1">${model.current_user.username}</li>`
}

function myFriends() {
    let friendsList = ""

    for (let i = 0; i < model.current_user.friends_id.length; i++) {
        const friendIdIndex = model.users.findIndex(function(obj) { return obj.id === model.current_user.friends_id[i] })

        friendsList += `<li class="x1">${model.users[friendIdIndex].username}</li>`
    }
    
    return friendsList
}