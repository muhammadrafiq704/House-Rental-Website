import { icons } from "@/assets";
import UIButton from "@/components/Button/UIButton";
import { useAuth } from "@/context/AuthContext";
import { StyledTypography } from "@/styled";
import { ImageGettingURL } from "@/utils/ImageGettingURL";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Chip, Grid, IconButton, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ToggleFavorite from "../FavoriteToggle/ToggleFavorite";
import { StyledHousesCardWrapper } from "./styled";

const PropertyTypeCard = ({ property }) => {
	const navigate = useNavigate();
	const { user, favorites, fetchFavorites } = useAuth();

	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		fetchFavorites();
	}, [fetchFavorites]);

	useEffect(() => {
		if (favorites && property?._id) {
			const found = favorites.some(
				(fav) =>
					fav.propertyId?._id === property._id && fav.isFavorite === true,
			);
			setIsFavorite(found);
		}
	}, [favorites, property]);

	const handleClickToggleFavorite = async (userId, propertyId, isFavorite) => {
		try {
			await ToggleFavorite(userId, propertyId, !isFavorite);
			setIsFavorite((prev) => !prev);
		} catch (error) {
			console.log("Failed to toggle favorite", error);
		}
	};

	return (
		<StyledHousesCardWrapper key={property._id}>
			<Grid
				container
				sx={{ display: "flex", gap: "20px", p: 1, position: "relative" }}
				key={property._id}
			>
				<IconButton
					aria-label="favorite"
					onClick={() =>
						handleClickToggleFavorite(user._id, property._id, isFavorite)
					}
					sx={{
						position: "absolute",
						top: 10,
						right: 10,
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
				<Grid
					sx={{ display: "flex", alignItems: "center", position: "relative" }}
					size={{ md: 4, xl: 6, sm: 3 }}
				>
					{" "}
					<img
						src={ImageGettingURL(property.file[0])}
						alt="cover-img"
						width={250}
						height={200}
					/>
					{property?.purpose ? (
						<Chip
							label={
								property.purpose === "sell"
									? "Selling"
									: property.purpose === "featured"
										? "Featured"
										: "Renting"
							}
							color="#006A71"
							sx={{
								position: "absolute",
								top: 10,
								right: 40,
								fontWeight: 600,
								backgroundImage:
									property.purpose === "featured"
										? "radial-gradient(at top left,rgb(252, 248, 226),rgb(187, 31, 3) 80%)"
										: "radial-gradient(at top left,rgb(252, 248, 226),rgb(207, 170, 4) 80%)",
								color: "#fff",
								textAlign: "center",
							}}
						/>
					) : null}
				</Grid>
				<Grid
					size={{ md: 7, xl: 6, sm: 3 }}
					sx={{
						width: "60%",
						display: "flex",
						flexDirection: "column",
						gap: "16px",
						// border: "2px solid red",
					}}
				>
					<StyledTypography
						fs={1.5}
						styletype="default"
						fw={600}
						sx={{ textTransform: "capitalize" }}
					>
						{property.property_type}
					</StyledTypography>

					<Tooltip title={property.desc} arrow>
						<StyledTypography
							fs={0.9}
							styletype="default"
							light
							maxlines={2}
							sx={{ textTransform: "capitalize" }}
						>
							{property.desc}
						</StyledTypography>
					</Tooltip>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							gap: "10px",
						}}
					>
						<StyledTypography
							fs={0.9}
							styletype="default"
							light
							maxlines={2}
							fw={600}
						>
							PKR <strong>{property.price}</strong>
						</StyledTypography>
						<StyledTypography
							fs={0.9}
							styletype="default"
							light
							maxlines={3}
							fw={600}
							sx={{
								textTransform: "capitalize",
								display: "flex",
								alignItems: "center",
								gap: "4px",
							}}
						>
							<img src={icons.location} alt="icon" style={{ width: "18px" }} />{" "}
							{property.location}
						</StyledTypography>
					</Box>
					<Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
						<StyledTypography
							fs={0.9}
							styletype="default"
							light
							fw={600}
							sx={{
								textTransform: "capitalize",
								display: "flex",
								alignItems: "center",
								gap: "6px",
							}}
						>
							<img src={icons.room} alt="icon" style={{ width: "24px" }} />
							{property.bedroom ? property.bedroom : 0} Bedroom
						</StyledTypography>
						<StyledTypography
							fs={0.9}
							styletype="default"
							light
							fw={600}
							sx={{
								textTransform: "capitalize",
								display: "flex",
								alignItems: "center",
								gap: "6px",
							}}
						>
							<img src={icons.room} alt="icon" style={{ width: "24px" }} />
							{property.room ? property.room : 0} Rooms
						</StyledTypography>
						<StyledTypography
							fs={0.9}
							styletype="default"
							light
							fw={600}
							sx={{
								textTransform: "capitalize",
								display: "flex",
								alignItems: "center",
								gap: "6px",
							}}
						>
							<img src={icons.room} alt="icon" style={{ width: "24px" }} />
							{property.kitchen ? property.kitchen : 0} Kitchen
						</StyledTypography>
						<StyledTypography
							fs={0.9}
							styletype="default"
							light
							fw={600}
							sx={{
								textTransform: "capitalize",
								display: "flex",
								alignItems: "center",
								gap: "6px",
							}}
						>
							<img src={icons.room} alt="icon" style={{ width: "24px" }} />
							{property.bathroom ? property.bathroom : 0} Bathroom
						</StyledTypography>
					</Box>
					<UIButton
						variant="contained"
						label="Read More"
						icon={icons.right_up}
						iconPosition="end"
						sx={{ fontSize: "16px" }}
						onClick={() => navigate(`${property._id}`)}
					/>
				</Grid>
			</Grid>
		</StyledHousesCardWrapper>
	);
};

export default PropertyTypeCard;
