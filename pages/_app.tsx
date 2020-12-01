// --------------------- Packages -----------------------

import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import 'tailwindcss/tailwind.css'

// --------------------- Locals -------------------------

import { useStore } from '../redux'

// ------------------------------------------------------

function MyApp({ Component, pageProps }: AppProps) {
	const store = useStore(pageProps.initialReduxState)
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}

// ------------------------------------------------------

export default MyApp
