const crypto = require("crypto")
const db = require('./db')

let usersSession = {}

function register(body) {
    try {
        checkCredentialsReq(body);
    } catch (err) {
        // console.log("Error detected!")
        return { body: err.message, code: 10 };
    }
    // console.log(userExists(body.username))
    if (userExists(body.username)) {
        return { body: "User with given username already exists", code: 11 };
    }
    var shaPass = crypto.createHash("sha256").update(body.password).digest("hex")
    return addUser(body.username, shaPass)
}

function login(body) {
    try {
        checkCredentialsReq(body)
    } catch (err) {
        return { body: err.message, code: 10 };
    }

    if (!userExists(body.username)) {
        return { body: "Cannot login to non-existing account", code: 11 };
    }
    var shaPass = crypto.createHash("sha256").update(body.password).digest("hex")
    var res = db.query('SELECT password_hash FROM accounts where username = (@username)', { username: body.username })
    res = Object.values(res[0])[0]
    // console.log(res, " - ", shaPass, res === shaPass)
    if (res === shaPass) {
        createSession(body.username)
        return { body: "Correct credentials given - logging in...", code: 0, sessionCounter: usersSession[body.username] }
    }
    return { body: "Incorrect password to given username", code: 12 };
}

function logout(body) {
    if (!body) {
        return { body: "No request body provided", code: 10 };
    }
    else if (!body.username) {
        return { body: "Missing username in request body", code: 10 };
    }

    if (!userExists(body.username)) {
        return { body: "Cannot login to non-existing account", code: 11 };
    }
    deleteSession(body.username)
    return {body: "Logged out", code: 0 }
}

function checkCredentialsReq(body) {
    if (!body) {
        throw new Error("No request body provided")
    }
    else if (!body.username) {
        throw new Error("Missing username in request body");
    }
    else if (!body.password) {
        throw new Error("Missing password in request body");
    }
}

function userExists(username) {
    const res = db.query('SELECT count(username) FROM accounts where username = (@username)', { username })
    // console.log(Object.values(res[0])[0])
    if (Object.values(res[0])[0]) {
        return true;
    }
    return false;
}

function addUser(username, hashPassword) {
    const result = db.run('INSERT INTO accounts (username, password_hash, is_admin) VALUES (@username, @hashPassword, 0)', { username, hashPassword });
    // console.log(result)
    if (result.changes == 1) {
        return { body: "Added user succesfully", code: 0 };
    }
    return { body: "Error with adding user to database", code: 12 };
}

function createSession(username) { // template for start
    if (!usersSession[username]) {
        usersSession[username] = 1
    } else {
        usersSession[username]++
    }
}

function deleteSession(username) {
    usersSession[username] = undefined
}

module.exports = {
    register,
    login,
    logout,
}