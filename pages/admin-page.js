import {isAdmin} from "@/database/services/isAdmin";
// import {getToken} from "next-auth/jwt";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

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
// export async function getServerSideProps(context) {
//     const req = context.req;
//     const decryptedToken = await getToken({ req });
//     const email = decryptedToken.email;
//     const admin = await isAdmin(email);
//     console.log(admin);
//     // here is where you return some other data
//     return { props: { admin } };
// }

export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions)
    const email = session.user.email
    const admin = await isAdmin(email)

    return {props: { admin }}
}

export default AdminPage;