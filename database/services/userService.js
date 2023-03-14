import User from "@/models/userModel.js";
import {hash, compare} from "bcryptjs";

export const userExists = async email => {
    const foundUser = await User.findOne({email})
    return foundUser ? true : false;
}

export const findUserByEmail = async (email, select) => await User.findOne({email}).select(select)

export const hashPassword = async password => await hash(password, 12);

export const passwordsEqual = async (plainTextPw, hashedPw) => await compare(plainTextPw, hashedPw);

