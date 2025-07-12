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
	PRIVACY_POLICY: "/privacy-policy",
	TERMS_AND_CONDITIONS: "/terms-and-conditions",

	//profile routes
	PROFILE_DASHBOARD: "/profile-dashboard",
	UPDATE_PROFILE: "/update-profile",
	NOTIFICATION_SETTINGS: "notification-settings",
	UPDATE_EMAIL: "update-email",
	CHANGE_PASSWORD: "/change-password",

	//blogs
	BLOGS: "/blogs",
	BLOGS_DETAILS: "/blogs-details/:id",

	ERROR: "/error",

	//house register
	PROPERTY_REGISTER: "/property-register",
};
export default appPaths;
