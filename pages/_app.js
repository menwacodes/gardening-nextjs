import MainLayout from "@/components/layout/MainLayout";
import SessionCheck from "@/lib/sessionCheck";
import {Provider} from "react-redux";
import {store} from "@/store";

import '@/styles/main.scss';

export default function App({Component, pageProps}) {
    return (
        <>
            <Provider store={store}>
                <SessionCheck>
                    <MainLayout>
                        <Component { ...pageProps } />
                    </MainLayout>
                </SessionCheck>
            </Provider>
        </>
    );
}
