import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { StyledAuthWrapper } from "./styled";

const AuthLayout = () => {
	return (
		<StyledAuthWrapper>
			<Box>
				<Outlet />
			</Box>
		</StyledAuthWrapper>
	);
};
export default AuthLayout;
