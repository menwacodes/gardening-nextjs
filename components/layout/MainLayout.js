import Header from "@/components/layout/Header";
import Head from "next/head";
import classes from "./MainLayout.module.scss"

const MainLayout = props => {
    return (
        <>
            <Head>
                <title>Gardening</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta name="author" content="Mike O'Brien-Walker"/>
                <meta name="description" content="A gardening site with food, flowers, soil, and fertilizer"/>
                <meta name="keywords" content="food, herbs, flowers, soil, fertilizer"/>
            </Head>
            <Header />
            <div className={classes.site__container}>
                {props.children}
            </div>

        </>
    );
};

export default MainLayout;