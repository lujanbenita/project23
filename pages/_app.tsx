import type { AppProps } from "next/app"
import { ReactElement } from "react"
import "../styles/index.scss"

function MyApp({ Component, pageProps }: AppProps): ReactElement {
	return <Component {...pageProps} />
}

export default MyApp
