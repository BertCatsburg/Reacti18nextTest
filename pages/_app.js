import React, {useEffect} from "react";
import '../components/i18n';
import {CssBaseline} from "@material-ui/core";

function MyApp({Component, pageProps}) {

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <Component {...pageProps} />
        </React.Fragment>
    )
}

export default MyApp
