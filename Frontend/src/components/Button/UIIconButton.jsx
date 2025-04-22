import { CircularProgress } from "@mui/material";
import { StyledContainedIconButton, StyledOutlinedIconButton } from "./styled";

const UIIconButton = ({
	variant,
	icon,
	alt,
	isLoading,
	imgW,
	imgH,
	...props
}) => {
	const renderIcon = () => {
		if (typeof icon === "string") {
			return <img src={icon} alt={alt} style={{ width: imgW, height: imgH }} />;
		}
		return icon;
	};
	return variant === "outlined" ? (
		<StyledOutlinedIconButton {...props}>
			{isLoading ? (
				<CircularProgress size="26px" thickness={6} color="warning" />
			) : (
				renderIcon()
			)}
		</StyledOutlinedIconButton>
	) : (
		<StyledContainedIconButton {...props}>
			{isLoading ? (
				<CircularProgress size="26px" thickness={6} sx={{ color: "#999999" }} />
			) : (
				renderIcon()
			)}
		</StyledContainedIconButton>
	);
};
export default UIIconButton;
