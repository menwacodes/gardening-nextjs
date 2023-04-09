import checkAuth from "@/database/middleware/checkAuth";
import nc from 'next-connect';
import connectMongoose from "@/database/db";
import {findUserByEmail} from "@/database/services/userService";

const handler = nc();

handler
    .use(checkAuth)
    .get(async (req, res) => {
        try {
            await connectMongoose();
            // get user
            const user = await findUserByEmail(req.session.user.email, { password: 0 });
            console.log(user)
            return res.status(200).json(user);
        } catch (error) {
            console.error(error);
            return res.status(400).json({ message: "fail" });
        }
    });

export default handler;