import { StyledContainedButton } from "./styled";

const UIButton = ({
	label,
	icon,
	variant,
	iconPositon,
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
		} else {
			return icon;
		}
	};
	return (
		<>
			{variant === "contained" ? (
				<StyledContainedButton
					fs={fs}
					startIcon={iconPositon === "start" && renderIcon()}
					endIcon={iconPositon === "end" && renderIcon()}
					disabled={isLoading}
					styletype={styletype}
					{...props}
				>
					{label}
				</StyledContainedButton>
			) : null}
		</>
	);
};

export default UIButton;
