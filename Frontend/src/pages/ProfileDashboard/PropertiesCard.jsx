import { images } from "@/assets";
import { useAuth } from "@/context/AuthContext";
import { StyledTypography } from "@/styled";
import { ImageGettingURL } from "@/utils/ImageGettingURL";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import { useState } from "react";
import ToggleFavorite from "../FavoriteToggle/ToggleFavorite";
import { StyledPropertiesCardWrapper } from "./styled";

const PropertiesCard = ({ items }) => {
	const { user, fetchFavorites } = useAuth();

	const [isFavorite, setIsFavorite] = useState(items.isFavorite || false);

	const handleClickToggleFavorite = async () => {
		try {
			await ToggleFavorite(user._id, items.propertyId._id, !isFavorite);
			setIsFavorite((prev) => !prev);
			await fetchFavorites();
		} catch (error) {
			console.log("Failed to toggle favorite", error);
		}
	};

	return (
		<StyledPropertiesCardWrapper>
			<img
				src={
					items.propertyId
						? ImageGettingURL(items?.propertyId.file[0])
						: images.DummyHouse
				}
				alt="property-img"
				width={250}
				height={180}
			/>
			<StyledTypography
				fs={1}
				fw={600}
				styletype="default"
				light
				maxlines={1}
				sx={{ textTransform: "capitalize" }}
			>
				{items.propertyId?.property_type || ""}
			</StyledTypography>
			<StyledTypography
				fs={0.8}
				styletype="default"
				light
				maxlines={1}
				sx={{ textTransform: "capitalize" }}
			>
				{items.propertyId?.desc}
			</StyledTypography>

			<IconButton
				aria-label="favorite"
				onClick={handleClickToggleFavorite}
				sx={{
					position: "absolute",
					top: 20,
					right: 20,
					backgroundImage:
						"radial-gradient(at top left,rgb(252, 248, 226),rgb(207, 170, 4) 80%)",
				}}
			>
				{isFavorite ? (
					<FavoriteIcon sx={{ fontSize: "24px", color: "red" }} />
				) : (
					<FavoriteBorderIcon sx={{ fontSize: "24px", color: "#333" }} />
				)}
			</IconButton>
		</StyledPropertiesCardWrapper>
	);
};

export default PropertiesCard;
