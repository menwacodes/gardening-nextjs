import {getSession} from "next-auth/react";

export default async function checkAuth(req, res, next) {
    // get token from request
    const session = await getSession({ req });
    if (!session) return res.status(401).json({ message: "fail", data: "Not auth'd" });

    req.session = session; // put session onto request so it's returned by next()
    return next();
}