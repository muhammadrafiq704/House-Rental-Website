import { icons } from "@/assets";
import UIButton from "@/components/Button/UIButton";
import { useAuth } from "@/context/AuthContext";
import { FlexBetween, StyledTypography } from "@/styled";
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
				{HeaderData.map((data) => (
					<FlexBetween key={data.id} gap={2} sx={{ pl: 2, overflowY: "auto" }}>
						<StyledTypography
							fs={1.1}
							fw={700}
							styletype="default"
							sx={{ mt: 1, textTransform: "capitalize" }}
						>
							{data.title}
						</StyledTypography>
					</FlexBetween>
				))}
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
