import { Box, styled } from "@mui/material";

const StyledAppWrapper = styled("div")(({ theme }) => ({
	minWidth: "100dvw",
	minHeight: "100vh",
	backgroundColor: theme.palette.primary.main,
	fontFamily: theme.typography.fontFamily,
	background: "linear-gradient(to bottom right, #e0f7fa, #ffffff)",
	// border:'3px solid red',
}));

const StyleHeaderWrapper = styled(Box)(({ theme }) => ({
	minWidth: "100dvw",
	minHeight: "10dvh",
	backgroundColor: theme.palette.primary.shade1,
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: "0 20px",
	position: "sticky",
	top: 0,
	zIndex: 999,
	gap: "10px",
	boxShadow: theme.shadows[1],
	"& a": {
		textDecoration: "none",
		fontWeight: 600,
		fontSize: "16px",
	},
}));

const StyledFooterWrapper = styled("div")(({ theme }) => ({
	width: "100%",
	height: "auto",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	boxShadow: theme.shadows[1],
	marginBottom: "8px",
	borderRadius: theme.shape.customRadius.halfRounded,
	overflowX: "hidden",
}));

const FooterContent = styled("div")({
	padding: "20px",
	display: "flex",
	gap: "60px",
});

const FooterLogo = styled("div")({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	alignItems: "flex-start",
	justifyContent: "center",
	padding: "4px",
});

const FooterLinks = styled("div")({
	width: "100%",
	height: "200px",
	//   border: "1px solid green",
	padding: "4px",
	display: "flex",
	flexWrap: "wrap",
	flexDirection: "column",
	columnCount: "5",
	rowGap: "10px",
	columnGap: "24px",
	transition: "ease-in",
	"& a": {},
});
const FooterContact = styled("div")({
	width: "100%",
	//   border: "1px solid green",
	padding: "4px",
	display: "flex",
	flexDirection: "column",
	alignItems: "cent",
	gap: "20px",
});
const FooterContactInfo = styled("div")({
	width: "100%",
	//   border: "1px solid green",
	padding: "4px",
});

export {
	StyledAppWrapper,
	StyleHeaderWrapper,
	StyledFooterWrapper,
	FooterLogo,
	FooterContent,
	FooterLinks,
	FooterContact,
	FooterContactInfo,
};
