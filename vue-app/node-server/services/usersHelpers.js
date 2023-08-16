const crypto = require("crypto")
const db = require('./db')

function register(body) {
    try {
        checkCredentialsReq(body);
    } catch (err) {
        // console.log("Error detected!")
        return err.message
    }
    // console.log(userExists(body.username))
    if (userExists(body.username)) {
        return "User with given username already exists";
    }
    var shaPass = crypto.createHash("sha256").update(body.password).digest("hex")
    return addUser(body.username, shaPass)
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
    const res = db.query('SELECT count(username) FROM accounts where username = (@username)', {username})
    // console.log(Object.values(res[0])[0])
    if (Object.values(res[0])[0]) {
        return true
    }
    return false
}

function addUser(username, hashPassword) {
    const result = db.run('INSERT INTO accounts (username, password_hash, is_admin) VALUES (@username, @hashPassword, 0)', {username, hashPassword});
    // console.log(result)
    if (result.changes == 1) {
        return "Added user succesfully";
    }
    return "Error with adding user to database"
}

module.exports = {
    register
}