import {getSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import LoadingSpinner from "@/components/ui/spinner/LoadingSpinner";
import {autoSignIn} from "@/store/actions/userAction";

/*
    If issues, instead of finally, consider moving the setLoading into each block and add
    dispatch(autoSignIn()).unwrap().then(()=>setLoading(false))
 */

/**
 *  If there's a session, dispatches auto-login
 *  Used in _app.js as a wrapper
 * @param props used for props.children
 * @returns {JSX.Element}
 * @constructor
 */
const SessionCheck = props => {

    // const [loading, setLoading] = useState(true);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
            getSession()
                .then(session => {
                    if (session) {
                        dispatch(autoSignIn());
                    }
                })
                .catch(err => console.error(err))
                .finally(() => setLoading(false));
        }, [dispatch]
    );

    // show Loading Spinner until token verification
    if (loading) return <LoadingSpinner />

    return props.children;
};

export default SessionCheck;