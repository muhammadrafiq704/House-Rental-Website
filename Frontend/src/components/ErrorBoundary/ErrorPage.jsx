import { StyledTypography } from "@/styled";
import { Box } from "@mui/material";
import React from "react";

const ErrorPage = ({ error }) => {
	const displayMessage =
		error?.response?.data?.message ||
		error?.message ||
		"Unexpected error occurred";

	return (
		<Box sx={{ textAlign: "center", mt: 4 }}>
			<StyledTypography
				fs={1.2}
				styletype="default"
				sx={{ fontStyle: "italic" }}
			>
				{displayMessage}
			</StyledTypography>
		</Box>
	);
};

export default ErrorPage;
