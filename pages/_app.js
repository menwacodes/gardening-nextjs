import Head from "next/head";
import {Provider} from "react-redux";
import {store} from "@/store";

import '@/styles/main.scss';

export default function App({Component, pageProps}) {
    return (
        <>
            <Provider store={store}>
                <Head>
                    <title>Gardening</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <meta name={"description"} content={"Simple site for the gardening I do"}/>
                    <meta name={"keywords"} content={"herbs, vegetables, fertilizer"}/>
                    <meta name={"author"} content={"Mike O'Brien-Walker"}/>
                </Head>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}
