import Head from 'next/head'

const Layout = ({ children, title }) => {
	const t = `${title} - Ricardo Ramos`

	return (
		<>
			{title && (
				<Head>
					<title>{t}</title>
				</Head>
			)}
			{children}
		</>
	)
}

export default Layout
