// require("mongoose");
const { Schema } = require("mongoose");
const User = require("./database/schemas/users")

const createUser = async (email, fullName, username, password) => {
    console.log(fullName);
    const newUser = await User.create({
        email: email, 
        fullname: fullName, 
        username: username, 
        password: password
    });
    console.log(newUser);
}

module.exports = { createUser };