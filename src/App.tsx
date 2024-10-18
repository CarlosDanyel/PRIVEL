import { ThemeProvider } from "styled-components";
import { themeDefault } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Routes } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function App() {
    return (
        <>
            <HelmetProvider>
                <Helmet titleTemplate="%s | Privel" />
                <ThemeProvider theme={themeDefault}>
                    <GlobalStyle />
                    <Routes />
                </ThemeProvider>
            </HelmetProvider>
        </>
    );
}
