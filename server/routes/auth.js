const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt')

//REGISTER
router.post("/register",async (req, res) => {
    try{

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            location: req.body.location,
            password: hashedPass,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

//LOGIN
router.post("/login", async (req, res) => {
    try{
        const email = await User.findOne({ email: req.body.email});
        !email && res.status(400).json("Wrong credentials!");

        const validated = await bcrypt.compare(req.body.password, email.password);
        !validated && res.status(400).json("Wrong credentials!");

        const { password, ...others} = email._doc;
        res.status(200).json(others);
    } catch (err){
        res.status(500).json(err);
    }
})

module.exports = router