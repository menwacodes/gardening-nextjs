import {useRef, useState} from "react";


export default function AuthForm() {
    const [isSignIn, setIsSignIn] = useState(true);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const fNameInputRef = useRef();

    const switchAuthModeHandler = () => setIsSignIn(pv => !pv);

    const submitHandler = async event => {
        event.preventDefault();

        const values = {
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value
        }
        // credential stuff
    }

    return (
        <div>
            <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor={"email"}>Enter email</label>
                    <input type={"email"} id={"email"} required ref={emailInputRef} defaultValue={"mikeobw@gmail.com"}/>
                </div>
                <div>
                    <label htmlFor={"password"}>Enter password</label>
                    <input type={"password"} id={"password"} required ref={passwordInputRef} defaultValue={"password"}/>
                </div>
                {
                    !isSignIn &&
                    <div>
                        <label htmlFor={"fName"}>First Name (optional)</label>
                    <input type={"text"} id={"fName"} required ref={fNameInputRef}/>
                    </div>
                }
                <div>
                    <button>{isSignIn ? "Login" : "Create Account"}</button>
                    <button
                        type={"button"}
                        onClick={switchAuthModeHandler}
                    >
                        {isSignIn ? "Gimme Sign Up" : "Gimme Sign In"}
                    </button>
                </div>
            </form>
        </div>
    );
}
