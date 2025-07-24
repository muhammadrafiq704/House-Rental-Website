import { icons } from "@/assets";
import UIButton from "@/components/Button/UIButton";
import { useAuth } from "@/context/AuthContext";
import { FlexBetween, StyledNavlink, StyledTypography } from "@/styled";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Box, Drawer } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderData } from "../utils/HeaderData";

const AppDrawer = ({ isOpen, onClose }) => {
	const { logout } = useAuth();
	const navigate = useNavigate();

	return (
		<Drawer open={isOpen} onClose={onClose} anchor="left">
			<Box
				sx={{
					width: 300,
					overflowY: "auto",
					overflowX: "hidden",
					display: "flex",
					alignItems: "baseline",
					flexDirection: "column",
					height: "100%",
					// border:'1px solid red'
				}}
			>
				<Box
					sx={{
						textAlign: "center",
						width: "100%",
						borderBottom: "1px dashed #006A71",
					}}
				>
					<img
						src={icons.brangsaa}
						alt="House Rental"
						style={{ height: 120, objectFit: "contain" }}
					/>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "16px",
						pl: 2,
						mt: 2,
					}}
				>
					{HeaderData.map((data) => (
						<StyledNavlink
							onClick={() => onClose()}
							to={
								data.title === "Home" ||
								data.title === "About Us" ||
								data.title === "Contact Us"
									? data.href
									: `/${data.title.toLowerCase()}`
							}
							key={data.id}
							style={({ isActive }) => ({
								fontSize: isActive ? "24px" : "18px",
								fontWeight: isActive ? "800" : "600",
								color: "#006A71",
								// for active underline
								...(isActive && {
									borderBottom: "2px solid #006A71",
								}),
							})}
						>
							<Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
								<img src={data.icon} alt={data.title} height={24} />
								{data.title}
							</Box>
						</StyledNavlink>
					))}
				</Box>
			</Box>
			<Box
				sx={{
					height: "60px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					padding: "2em 2em",
					borderTop: "1px dashed #ccc",
				}}
			>
				<UIButton
					label="Logout"
					variant="contained"
					icon={<LogoutRoundedIcon />}
					iconPosition="start"
					size="large"
					imgWidth={20}
					sx={{ width: "100%" }}
					onClick={() => {
						logout();
						return navigate("/sign-in");
					}}
				/>
			</Box>
		</Drawer>
	);
};

export default AppDrawer;
