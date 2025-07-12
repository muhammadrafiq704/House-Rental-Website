import { StyledTypography } from "@/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { StyledPropertiesCardWrapper } from "./styled";

const PropertiesCard = ({ items }) => {
	return (
		<StyledPropertiesCardWrapper>
			<img src={items.image} alt="property-img" />
			<StyledTypography fs={1} fw={600} styletype="default" light maxlines={1}>
				{items.title}
			</StyledTypography>
			<StyledTypography
				fs={0.8}
				styletype="default"
				light
				maxlines={1}
				sx={{ textTransform: "capitalize" }}
			>
				{items.desc}
			</StyledTypography>
			<IconButton
				aria-label="favorite"
				sx={{
					position: "absolute",
					top: 10,
					right: 20,
				}}
			>
				<FavoriteIcon fontSize="large" sx={{ color: "red" }} />
			</IconButton>
		</StyledPropertiesCardWrapper>
	);
};

export default PropertiesCard;
