import BasicButton from "@/components/ui/buttons/BasicButton";
import {getSession} from "next-auth/react";
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {registerUser, signInUser} from "@/store/actions/userAction";
import LoadingSpinner from "@/components/ui/spinner/LoadingSpinner";
import classes from "./authForm.module.scss";

export default function AuthForm() {
    const router = useRouter();
    /*
        FORM STUFF
     */
    const [isSignIn, setIsSignIn] = useState(true);
    const [verifyingSession, setVerifyingSession] = useState(true);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    /*
        REDUX STUFF
     */
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);


    const switchAuthModeHandler = () => setIsSignIn(pv => !pv);


    /*
        useEffect to try to load session
        - if session exists, user is logged in, redirect to home page
        - if session doesn't exist, form will load
     */
    // useEffect(() => {
    //         getSession()
    //             .then(session => {
    //                 if (session) {
    //                     router.push("/");
    //                 } else {
    //                     setVerifyingSession(false);
    //                 }
    //             });
    //     }, []
    // );
    useEffect( () => {
        setVerifyingSession(false)
    }, []
    )

    const submitHandler = async event => {
        event.preventDefault();

        const values = {
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
        };
        // credential stuff
        if (isSignIn) {
            dispatch(signInUser({ values, router }));
        } else {
            dispatch(registerUser({ values, router }));
        }

        // clear form

        setVerifyingSession(false);
    };

    return (
        <div>
            {verifyingSession || user.loading
                ? <LoadingSpinner />
                :
                <main className={classes.main}>
                    <h1>{ isSignIn ? "Sign In" : "Sign Up" }</h1>
                    <form className={classes.form} onSubmit={ submitHandler }>
                        <div className={classes.form__group}>
                            <label className={classes.form__label} htmlFor={ "email" }>Enter email</label>
                            <input className={classes.form__control} type={ "email" } id={ "email" } required ref={ emailInputRef }
                                   defaultValue={ "mikeobw@gmail.com" }/>
                        </div>
                        <div className={classes.form__group}>
                            <label className={classes.form__label} htmlFor={ "password" }>Enter password</label>
                            <input className={classes.form__control} type={ "password" } id={ "password" } required ref={ passwordInputRef }
                                   defaultValue={ "password" }/>
                        </div>
                        <div className={classes.form__buttons}>
                            <BasicButton type={"submit"}>{ isSignIn ? "Login" : "Create Account" }</BasicButton>
                            <BasicButton onClick={switchAuthModeHandler}>{ isSignIn ? "Sign Up" : "Sign In" }</BasicButton>
                        </div>
                    </form>
                </main>
            }
        </div>
    );
}
