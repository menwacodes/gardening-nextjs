import {createAsyncThunk} from "@reduxjs/toolkit";
import {signIn} from "next-auth/react";

export const registerUser = createAsyncThunk('user/register',
    async ({ values, router }, { dispatch }) => {
        try {
            // register user
            const response = await fetch("/api/auth/register", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-Type": "application/json" }
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

// Cant sign in yet
export const signInUser = createAsyncThunk('user/signInUser',
    async ({ values, router }, { dispatch }) => {
        try {
            const result = await signIn('credentials', {
                redirect: false,
                email: values.email,
                password: values.password
            });

            if (result.error) {
                throw new Error(result.error);
            }

            // Get user data for Redux
            const response = await fetch('/api/users/user')
            const user = await response.json();
            await router.push('/')
            return user;

        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);

export const autoSignIn = createAsyncThunk('user/autoSignIn',
    async (obj, {dispatch}) => {
        try {
            // fetch info from db about the user
            const response = await fetch('/api/users/user');
            return await response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
)

//            const tempRes = await response.json()
//             console.log(tempRes)