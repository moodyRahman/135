import adapter from '@sveltejs/adapter-static';



console.log("base is ", ((process.env.NODE_ENV === 'development') ? '' : '/135'))
export default {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: "index.html",
			precompress: false,
			strict: true,

		}),
		paths: {
			base: ((process.env.NODE_ENV === 'development') ? '' : '/135')
			// base: ""

		},
		prerender: {
			handleHttpError: "ignore",
		}
	}
};