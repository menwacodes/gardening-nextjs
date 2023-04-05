import MainLayout from "@/components/layout/MainLayout";
import {Provider} from "react-redux";
import {store} from "@/store";

import '@/styles/main.scss';

export default function App({Component, pageProps}) {
    return (
        <>
            <Provider store={store}>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </Provider>
        </>
    );
}
