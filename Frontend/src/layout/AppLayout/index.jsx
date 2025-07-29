import { icons } from "@/assets";
import UIButton from "@/components/Button/UIButton";
import { useAuth } from "@/context/AuthContext";
import useIsMobile from "@/hooks/isMobile";
import { StyledNavlink, StyledTypography } from "@/styled";
import { ImageGettingURL } from "@/utils/ImageGettingURL";
import appPaths from "@/utils/appRoutePaths";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Avatar, Box, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import AppDrawer from "../AppDrawer";
import { HeaderData } from "../utils/HeaderData";
import Footer from "./Footer";
import ProfileMenu from "./ProfileMenu";
import { NameFormatter } from "./logic";
import {
	StyleHeaderWrapper,
	StyledAppWrapper,
	StyledFooterWrapper,
} from "./styled";

const AppLayout = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [anchorEl, setAnchorEl] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	const isMobile = useIsMobile();
	const { user, token } = useAuth();

	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleDrawerClose = () => {
		setIsOpen(false);
	};
	// console.log("user", user);
	return (
		<StyledAppWrapper>
			<StyleHeaderWrapper>
				<Box
					sx={{
						textAlign: "left",
						// border: "1px solid red",
						display: { xs: "none", md: "flex" },
						justifyContent: "center",
						alignItems: "center",
						mt: 2,
					}}
				>
					<Link to="/" style={{ display: "inline-block" }}>
						<img
							src={icons.brangsaa}
							alt="logo"
							style={{
								width: "150px",
								height: "50px",
								objectFit: "cover",
								cursor: "pointer",
							}}
						/>
					</Link>
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						// border: "1px solid red",
						gap: "80px",
						width: "100%",
					}}
				>
					{/* header #1 */}
					<Box
						sx={{
							display: { xs: "none", md: "flex" },
							alignItems: "center",
							gap: "22px",
						}}
					>
						{HeaderData.map((head) => (
							<StyledNavlink
								to={
									head.title === "Home" ||
									head.title === "About Us" ||
									head.title === "Contact Us"
										? head.href
										: `/${head.title.toLowerCase()}`
								}
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

					{/* header #2 */}
					<IconButton
						onClick={() => setIsOpen(true)}
						sx={{ display: { xs: "block", md: "none" }, color: "#006A71" }}
					>
						<MenuRoundedIcon sx={{ fontSize: "2.5rem" }} />
					</IconButton>
					<AppDrawer isOpen={isOpen} onClose={handleDrawerClose} />
					<Box sx={{ display: "flex", gap: "10px" }}>
						<UIButton
							fs={14}
							label="Register Now"
							variant="contained"
							icon={icons.house}
							iconPosition="end"
							imgWidth={18}
							onClick={() => navigate(appPaths.PROPERTY_REGISTER)}
							sx={{
								width: isMobile ? "120px" : "auto",
								fontSize: isMobile && "12px",
							}}
						/>
						{!token && (
							<UIButton
								fs={14}
								label="Login"
								variant="contained"
								icon={icons.login}
								iconPosition="end"
								imgWidth={20}
								onClick={() => navigate(appPaths.SIGN_IN)}
								sx={{ fontSize: isMobile && "12px" }}
							/>
						)}
						{user && token && (
							<>
								<Tooltip
									title={user?.username}
									componentsProps={{
										tooltip: {
											sx: {
												backgroundColor: "#006A71",
												color: "#fff",
												fontSize: "0.8rem",
												textTransform: "capitalize",
											},
										},
									}}
								>
									<IconButton
										onClick={handleClick}
										size="small"
										sx={{ ml: 2 }}
										aria-controls={open ? "account-menu" : undefined}
										aria-haspopup="true"
										aria-expanded={open ? "true" : undefined}
									>
										<Avatar sx={{ width: 32, height: 32 }}>
											{" "}
											<img
												src={ImageGettingURL(user.file)}
												alt="profile img"
												style={{
													width: "32px",
													height: "32px",
													objectFit: "cover",
												}}
											/>{" "}
										</Avatar>
									</IconButton>
								</Tooltip>
								<ProfileMenu
									handleClose={handleClose}
									anchorEl={anchorEl}
									open={open}
									user={user}
								/>
							</>
						)}
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
