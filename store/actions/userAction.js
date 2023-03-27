import {createAsyncThunk} from "@reduxjs/toolkit";
import {signIn} from "next-auth/react";

export const registerUser = createAsyncThunk('user/register',
    async ({values, router}, {dispatch}) => {
        try {
            // register user
            const response = await fetch("/api/auth/register", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {"Content-Type": "application/json"}
            });
            const user = await response.json();

            // sign user in
            await signIn('credentials', {
                redirect: false,
                email: user.data.email,
                password: values.password
            });

            await router.push("/");

            return user.data;

        } catch (error) {
            console.error(error.response.data.message);
            throw error;
        }
    }
);