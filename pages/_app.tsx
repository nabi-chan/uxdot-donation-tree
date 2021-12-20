import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";
import { Light } from "../styles/Theme";
import MarqueeBanner from "../components/MarqueeBanner";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Reset />
			<ThemeProvider theme={Light}>
				<GlobalStyle />
				<MarqueeBanner />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
