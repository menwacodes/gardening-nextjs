import connectMongoose from "@/database/mongoose-connect.js";
import User from "@/models/userModel.js";
import {userExists, hashPassword} from "@/database/services/userService.js";

export default async function handler(req, res) {
    await connectMongoose();

    if (req.method === "POST") {
        const {email, password, firstName} = req.body;

        // check to see if user exists
        if (await userExists(email)) return res.status(422).json({message: "User Exists"});

        // hash pw
        const hashedPw = await hashPassword(password);

        // save user
        try {
            const user = await User.create({email, password: hashedPw, firstName});
            console.log(user);
            return res.status(201).json({message: "success", data: user});
        } catch (error) {
            console.error(error);
            return res.status(500).json({message: "fail", data: error});
        }
    }
}