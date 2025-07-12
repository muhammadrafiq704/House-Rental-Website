import { icons } from "@/assets";

export const privacyData = [
	{
		id: 1,
		title: "Consent",
		desc: "By accessing or using Brangsaa.com, you consent to our Privacy Policy and agree to its terms. If you do not agree with any part of this policy, please do not use our website.",
	},
	{
		id: 2,
		title: "Information We Collect",
		desc: "We collect both personal and non-personal information. Below is a breakdown of what we collect and why:",
		icon: icons.hand,
		subtitleA: {
			id: 1,
			title: "Personal Information",
			icon: icons.hand,
			desc: "Personal information is data that can be used to identify you as an individual. This includes:",
			infos: [
				"Full Name",
				"Email Address",
				"Phone Number",
				"Location/Address",
				"Business Name or Affiliation (if any)",
				"Any other information you voluntarily submit",
			],
		},
		subtitleB: {
			id: 2,
			title: "Non-Personal Information",
			desc: "This includes technical data such as:",
			infos: [
				"IP address",
				"Browser type and version",
				"Device type",
				"Operating system",
				"Time zone",
				"Referring URLs",
				"Pages visited and interaction data",
			],
		},
	},
];

export const userInfo = [
	{
		id: 1,
		title: "To Operate the Website",
		icon: icons.hand,
		desc: "Ensuring the smooth functioning of the website, managing accounts, enabling communication between users, and providing requested services.",
	},
	{
		id: 2,
		title: "To Improve and Personalize User Experience",
		icon: icons.hand,
		desc: "Analyzing user behavior and preferences to enhance features and design.",
	},
	{
		id: 3,
		title: "To Provide Customer Support",
		icon: icons.hand,
		desc: "Responding to inquiries, solving problems, and ensuring satisfaction.",
	},
	{
		id: 4,
		title: "To Send Notifications",
		icon: icons.hand,
		desc: "Sending emails or messages related to your account, listings, or updates you subscribe to.",
	},
	{
		id: 5,
		title: "To Prevent Fraud and Enhance Security",
		icon: icons.hand,
		desc: "Monitoring for suspicious activities and protecting user data.",
	},
	{
		id: 6,
		title: "For Legal and Regulatory Compliance",
		icon: icons.hand,
		desc: "Meeting legal obligations and responding to lawful requests from authorities.",
	},
];

export const disclaimerData = [
	{ id: 1, title: "Financial loss", icon: icons.hand },
	{ id: 2, title: "Scams or fraud", icon: icons.hand },
	{ id: 3, title: "Misrepresentation of property details", icon: icons.hand },
	{ id: 4, title: "Legal issues or disputes between users", icon: icons.hand },
	{
		id: 5,
		title: "Damages of any kind resulting from site usage",
		icon: icons.hand,
	},
];
