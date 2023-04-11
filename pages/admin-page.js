// import packages
// import files with relative reference

import {isAdmin} from "@/pages/api/users/isAdmin";
import {getToken} from "next-auth/jwt";

const AdminPage = (props) => {
    console.log(props);
    return (
        <>
            { props.admin ?
                <h1>I am admin page</h1>
                : <p>Not authorized</p>
            }
        </>
    );
};

// serverside props with context to pull user from session
export async function getServerSideProps(context) {
    const req = context.req;
    const decryptedToken = await getToken({ req });
    const email = decryptedToken.email;
    const admin = await isAdmin(email);
    console.log(admin);
    // here is where you return some other data
    return { props: { admin } };
}


export default AdminPage;