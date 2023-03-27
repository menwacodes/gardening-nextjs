import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongoose from "@/database/mongoose-connect.js";
import {findUserByEmail, passwordsEqual} from "@/database/services/userService.js";

export default NextAuth({
    session: {jwt: true},
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                await connectMongoose();
                // get user
                const user = await findUserByEmail(credentials.email, {});
                // check user exists
                if (!user) {
                    throw new Error("Email bad")
                }
                // check password
                if (!await passwordsEqual(credentials.password, user.password)) {
                    throw new Error("Pass bad")
                }

                // user good
                return {email: user.email}
            }
        })
    ]
});