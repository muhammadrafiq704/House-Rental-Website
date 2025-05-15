const appPaths = {
	ROOT: "/",

	// auth routes
	SIGN_IN: "/sign-in",
	SIGN_UP: "/sign-up",
	FORGOT_PASSWORD: "/forgot-password",

	// pages routes
	HOME: "/home",
	ABOUT_US: "/about-us",
	CONTACT_US: "/contact-us",
	PROPERTY_TYPE: "/:type",
	PROPERTY_DETAILS: "/:type/:id",

	//blogs
	BLOGS: "/blogs",
	BLOGS_DETAILS: "/blogs-details/:id",

	ERROR: "/error",

	//house register
	PROPERTY_REGISTER: "/property-register",
};
export default appPaths;
