import { CircularProgress } from "@mui/material";
import { StyledContainedButton, StyledOutlinedButton } from "./styled";

const UIButton = ({
	label,
	icon,
	variant,
	iconPosition,
	styletype,
	fs,
	imgHeight,
	imgWidth,
	isLoading = false,
	...props
}) => {
	const renderIcon = () => {
		if (typeof icon === "string") {
			return (
				<img
					src={icon}
					alt={label}
					style={{ width: imgWidth, height: imgHeight }}
				/>
			);
		}
		return icon;
	};
	return (
		<>
			{variant === "contained" ? (
				<StyledContainedButton
					fs={fs}
					startIcon={iconPosition === "start" && renderIcon()}
					endIcon={iconPosition === "end" && renderIcon()}
					disabled={isLoading}
					styletype={styletype}
					{...props}
				>
					{isLoading ? (
						<CircularProgress
							size="26px"
							thickness={6}
							sx={{ color: "#999999" }}
						/>
					) : (
						label
					)}
				</StyledContainedButton>
			) : variant === "outlined" ? (
				<StyledOutlinedButton
					startIcon={iconPosition === "start" && renderIcon()}
					endIcon={iconPosition === "end" && renderIcon()}
					fs={fs}
					styleType={styletype}
					disabled={isLoading}
					{...props}
				>
					{isLoading ? (
						<CircularProgress
							size="26px"
							thickness={6}
							sx={{ color: "#999999" }}
						/>
					) : (
						label
					)}
				</StyledOutlinedButton>
			) : null}
		</>
	);
};

export default UIButton;
