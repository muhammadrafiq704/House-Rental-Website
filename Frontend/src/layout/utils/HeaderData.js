import { icons } from "@/assets";
import appPaths from "@/utils/appRoutePaths";

export const HeaderData = [
	{ id: 1, title: "Home", href: appPaths.ROOT, icon: icons.dashboard },
	{ id: 1, title: "House", icon: icons.home },
	{ id: 1, title: "Rooms", icon: icons.room },
	{ id: 1, title: "Shops", icon: icons.shop },
	{ id: 1, title: "Plots", icon: icons.plot },
	{ id: 1, title: "Apartment", icon: icons.residential },
	{ id: 1, title: "About Us", icon: icons.about_us, href: appPaths.ABOUT_US },
	{ id: 1, title: "Blogs", icon: icons.blog, href: appPaths.BLOGS },
	{
		id: 1,
		title: "Contact Us",
		icon: icons.phone_call,
		href: appPaths.CONTACT_US,
	},
];
