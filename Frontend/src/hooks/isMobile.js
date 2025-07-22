import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

const isMobile = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const theme = useTheme();

	// eslint-disable-next-line react-hooks/rules-of-hooks
	return useMediaQuery(theme.breakpoints.down("sm"));
};

export default isMobile;
