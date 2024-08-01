/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	output: 'export'
}


// module.exports = nextConfig

module.exports = {
	compiler: {
		styledComponents: true,
	},
}
