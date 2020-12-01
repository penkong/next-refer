import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<head>
						<meta charSet="utf-8" />
						<meta name="text" content="" />
						<meta name="author" content="" />
						<meta name="description" content="" />
						<meta name="keywords" content="" />
						<title>Minal - Minimal One Page Portfolio Template</title>
						<meta
							http-equiv="content-type"
							content="text/html; charset=utf-8"
						/>
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1.0"
						/>
						<link rel="shortcut icon" href="favicon.ico" />
						<link rel="icon" href="favicon.ico" type="image/x-icon" />
						<link
							rel="apple-touch-icon"
							href="images/apple-touch-icon-57x57.html"
						/>
						<link
							rel="apple-touch-icon"
							sizes="72x72"
							href="images/apple-touch-icon-72x72.html"
						/>
						<link
							rel="apple-touch-icon"
							sizes="114x114"
							href="images/apple-touch-icon-114x114.html"
						/>
						{/* <link rel="stylesheet" href="/css/uikit.min.css" /> */}
						{/* <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script> */}
					</head>
				</Head>
				<body>
					<Main />
					<NextScript />
					{/* <script src="/js/jquery.min.js"></script> */}
				</body>
			</Html>
		)
	}
}
