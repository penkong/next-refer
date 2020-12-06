// --------------------- Packages -----------------------

import { NextPageContext } from 'next'
import { AppContext, AppProps } from 'next/app'
import { Router } from 'next/dist/client/router'
import { Provider } from 'react-redux'
import 'tailwindcss/tailwind.css'

// --------------------- Locals -------------------------

import { useStore } from '../redux'
import {
	AppContextType,
	AppInitialProps
} from 'next/dist/next-server/lib/utils'

// ------------------------------------------------------

interface IPassingProps {
	currentUser: string | null
}

// also there is err field on AppProps
interface IProps extends IPassingProps, AppProps {}
function MyApp({ Component, pageProps, router, currentUser }: IProps) {
	const store = useStore(pageProps.initialReduxState)
	return (
		<Provider store={store}>
			{/*<Header currentUser={currentUser}/>*/}
			<Component {...pageProps} />
		</Provider>
	)
}
// read utility types typescript
// ------------------------------------------------------
// prefer use AppContext rather than AppContextType
// AppContext is with advanced Router
MyApp.getInitialProps = async (
	appContext: AppContext
): Promise<AppInitialProps> => {
	// how add current user to header
	// const { data } = await buildClient(appContext.ctx).get(
	//   '/api/users/currentuser'
	// )
	const data = { currentUser: null }
	let pageProps = {}
	// console.log(appContext.router.isSsr)
	if (appContext.Component.getInitialProps) {
		// this call on each page if we want with ctx
		pageProps = await appContext.Component.getInitialProps(appContext.ctx)
	}

	// ...data == currentUser: data.currentUser
	return { pageProps, ...data }
}
export default MyApp
