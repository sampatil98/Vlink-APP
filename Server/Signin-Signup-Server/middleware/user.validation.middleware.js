const nameRegex = /^[a-zA-Z0-9_]{3,20}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{8,}$/;

function validation(req, res, next) {
    const { name, email, password } = req.body;

    if (!nameRegex.test(name)) {
        return res.status(400).send({ msg: "Invalid username format. Usernames must be 3 to 20 characters long and can only contain letters, numbers, and underscores." });
    }

    if (!emailRegex.test(email)) {
        return res.status(400).send({ msg: "Invalid email format. Please provide a valid email address." });
    }

    if (!passwordRegex.test(password)) {
        return res.status(400).send({ msg: "Weak password. Passwords must be at least 8 characters long and contain at least one letter, one number, and may include special characters like !@#$%^&*()_+." });
    }

    next();
}

module.exports = { validation };
