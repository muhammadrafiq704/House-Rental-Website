import { icons } from "@/assets";
import UIButton from "@/components/Button/UIButton";
import { StyledNavlink, StyledTypography } from "@/styled";
import { Box } from "@mui/material";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { HeaderData } from "../utils/HeaderData";
import Footer from "./Footer";
import { NameFormatter } from "./logic";
import {
	StyleHeaderWrapper,
	StyledAppWrapper,
	StyledFooterWrapper,
} from "./styled";

const AppLayout = () => {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<StyledAppWrapper>
			<StyleHeaderWrapper>
				<Box sx={{ textAlign: "left" }}>logo</Box>
				<Box sx={{ display: "flex", alignItems: "center", gap: "80px" }}>
					<Box sx={{ display: "flex", alignItems: "center", gap: "22px" }}>
						{HeaderData.map((head) => (
							<StyledNavlink
								to={head.href}
								key={head.id}
								style={({ isActive }) => ({
									fontSize: isActive ? "18px" : "16px",
									fontWeight: isActive ? "800" : "600",
									color: "#006A71",
									// for active underline
									...(isActive && {
										borderBottom: "2px solid #006A71",
									}),
								})}
							>
								{head.title}
							</StyledNavlink>
						))}
					</Box>
					<Box sx={{ display: "flex", gap: "10px" }}>
						<UIButton
							fs={14}
							label="Register Now"
							variant="contained"
							icon={icons.house}
							iconPosition="end"
							imgWidth={18}
							onClick={() => navigate("/register")}
						/>
						<UIButton
							fs={14}
							label="Login"
							variant="contained"
							icon={icons.login}
							iconPosition="end"
							imgWidth={20}
							onClick={() => navigate("/sing-in")}
						/>
					</Box>
				</Box>
			</StyleHeaderWrapper>
			<Box sx={{ flex: 1, height: "calc(100vh - 70px)" }}>
				<Scrollbars
					autoHide
					style={{ width: "100%", height: "100%" }}
					renderThumbVertical={({ style, ...props }) => (
						<div
							{...props}
							style={{
								...style,
								backgroundColor: "#006A71",
								borderRadius: "6px",
							}}
						/>
					)}
					renderTrackVertical={({ style, ...props }) => (
						<div
							{...props}
							style={{
								...style,
								backgroundColor: "#e0e0e0",
								borderRadius: "6px",
								width: "8px",
								right: 2,
								bottom: 2,
								top: 2,
							}}
						/>
					)}
				>
					<Box
						// p={2}
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							// gap: "20px",
						}}
					>
						{location.pathname === "/" || location.pathname === "" ? null : (
							<StyledTypography
								fs={2.2}
								fw={600}
								styletype="default"
								sx={{ textTransform: "capitalize", pt: 2, pl: 3 }}
							>
								{NameFormatter(location.pathname)}
							</StyledTypography>
						)}
						<Outlet />
						<StyledFooterWrapper>
							<Footer />
						</StyledFooterWrapper>
					</Box>
				</Scrollbars>
			</Box>
		</StyledAppWrapper>
	);
};
export default AppLayout;
