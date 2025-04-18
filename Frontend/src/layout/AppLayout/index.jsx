import UIButton from "@/components/Button/UIButton";
import { Box } from "@mui/material";
import { Scrollbars } from "react-custom-scrollbars-2";
import { NavLink, Outlet } from "react-router-dom";
import { HeaderData } from "../utils/HeaderData";
import { StyleHeaderWrapper, StyledAppWrapper } from "./styled";

const AppLayout = () => {
	return (
		<StyledAppWrapper>
			<StyleHeaderWrapper>
				<Box sx={{ textAlign: "left" }}>logo</Box>
				<Box sx={{ display: "flex", alignItems: "center", gap: "80px" }}>
					<Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
						{HeaderData.map((head) => (
							<NavLink
								to={head.href}
								key={head.id}
								style={({ isActive }) => ({
									textDecoration: isActive ? "underline" : "none",
									color: isActive ? "#006A71" : "#006A71",
									fontWeight: isActive ? "800" : "",
								})}
							>
								{head.title}
							</NavLink>
						))}
					</Box>
					<UIButton
						fs={14}
						styletype="inverted"
						label="Get Tour"
						variant="contained"
					/>
				</Box>
			</StyleHeaderWrapper>
			<Box sx={{ flex: 1, height: "calc(100vh - 70px)" }}>
				<Scrollbars autoHide style={{ width: "100%", height: "100%" }}>
					<Box p={2}>
						<Outlet />
					</Box>
				</Scrollbars>
			</Box>
		</StyledAppWrapper>
	);
};
export default AppLayout;
