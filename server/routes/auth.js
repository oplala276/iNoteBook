import express from "express";
const router = express.Router();
import User from "../models/User.js"
import { body, validationResult } from "express-validator";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import fetchuser from "../middleware/fetchuser.js";


const JWT_SECRET = 'hartbrokeniam'

router.post('/createuser', [
    body('email', "Email must be valid").isEmail(),
    body('name', "Min lenght should be 3").isLength({ min: 3 }),
    body('password', "Password length should be at least 3").isLength({ min: 5 }),

], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "sorry a user exist" })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)
        user = User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        });
        const data = {
            user: {
                id: user.id
            }
        }

        const jwtData = jwt.sign(data, JWT_SECRET);
        // console.log(jwtData)
        res.json({ jwtData })


        res.json(user)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("some error occured")
    }
})
router.post('/login', [
    body('email', "Email must be valid").isEmail(),
    body('password', "password cannot be blank").exists(),

], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: "login with valid creadential" })
        }
        const comparePassword = await bcrypt.compare(password, user.password)
        if (!comparePassword) {
            return res.status(400).json({ error: "login with valid creadential" })

        }
        const data = {
            user: {
                id: user.id
            }
        }
        const jwtData = jwt.sign(data, JWT_SECRET);
        res.json({ jwtData })
    } catch (error) {
        console.log(error.message);
        res.status(500).send("internal servddder error occured")
    }
});
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user)
    }

    catch (error) {
        console.log(error.message);
        res.status(500).send("internal server error occured")
    }
});

export default router;