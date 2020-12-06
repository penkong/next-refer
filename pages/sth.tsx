import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
// ------------------------------ ---------------------- --------

interface PassingProps {}

// type AppProps = NextPage & PassingProps & GetServerSideProps
interface AppProps extends PassingProps, GetServerSideProps {}

// ---------------------------------------------------------------------

const Sth: NextPage<AppProps, PassingProps> = props => {
	return <div>hellow</div>
}

export const getServerSideProps: GetServerSideProps = async context => {
	// const reduxStore = initializeStore()

	// const { dispatch } = reduxStore
	// dispatch({
	//   type: 'TICK',
	//   light: false,
	//   lastUpdate: Date.now(),
	// })

	// return { props: { initialReduxState: reduxStore.getState() } }
	// console.log(context, 'from home page')
	return {
		props: {} // will be passed to the page component as props
	}
}

export default Sth
