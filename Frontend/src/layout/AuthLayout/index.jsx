import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { StyledAuthWrapper } from "./styled";

const AuthLayout = () => {
	return (
		<StyledAuthWrapper>
			<Box sx={{ p: 2 }}>
				<Outlet />
			</Box>
		</StyledAuthWrapper>
	);
};
export default AuthLayout;
