import {createSlice} from "@reduxjs/toolkit";
import {signOut} from "next-auth/react";
import {autoSignIn, registerUser, signInUser} from "@/store/actions/userAction";

const DEFAULT_STATE = {
    loading: false,
    data: {
        _id: '',
        email: '',
        firstName: '',
        lastName: '',
        role: 'user'
    },
    auth: false
};

export const userSlice = createSlice({
    name: 'user',
    initialState: DEFAULT_STATE,
    reducers: {
        signOutUser: state => {
            signOut({ redirect: false });
            state.data = DEFAULT_STATE.data;
            state.auth = DEFAULT_STATE.auth;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, state => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                delete action.payload.password;
                state.data = action.payload;
                state.auth = true;
            })
            .addCase(registerUser.rejected, state => {
                state.loading = false;
            })
            .addCase(signInUser.pending, state => {
                state.loading = true;
            })
            .addCase(signInUser.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.auth = true;
            })
            .addCase(signInUser.rejected, state => {
                state.loading = false;
            })
            .addCase(autoSignIn.fulfilled, (state, action) => {
                state.data = action.payload;
                state.auth = true;
            })
        ;
    }
});

export const {signOutUser} = userSlice.actions;

export default userSlice.reducer;