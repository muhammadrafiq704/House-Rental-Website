import UIButton from "@/components/Button/UIButton";
import { FlexBetween, StyledTypography } from "@/styled";
import { ImageGettingURL } from "@/utils/ImageGettingURL";
import { Box, Chip, Tooltip } from "@mui/material";
import { useNavigate, useNavigation } from "react-router-dom";
import { BlogsCardWrapper } from "./styled";

const BlogsCard = ({ items }) => {
	const navigate = useNavigate();
	const navigating = useNavigation();

	const isLoading =
		navigating.state === "loading" || navigating.state === "submitting";
	return (
		<BlogsCardWrapper
			key={items._id}
			sx={{ width: { xs: "180px", md: "300px" } }}
		>
			<FlexBetween gap={10} direction="column">
				<Box sx={{ position: "relative" }}>
					<Box
						component="img"
						src={ImageGettingURL(items.file[0])}
						alt="blogs-img"
						sx={{
							width: {
								xs: "100%",
								md: 270,
							},
							height: {
								xs: 150,
								md: 270,
							},
							objectFit: "cover",
						}}
					/>

					{items?.purpose ? (
						<Chip
							label={
								items.purpose === "sell"
									? "Selling"
									: items.purpose === "featured"
										? "Featured"
										: "Renting"
							}
							sx={{
								position: "absolute",
								top: 10,
								right: 20,
								fontWeight: 600,
								backgroundImage:
									items.purpose === "featured"
										? "radial-gradient(at top left,rgb(252, 248, 226),rgb(187, 31, 3) 80%)"
										: "radial-gradient(at top left,rgb(252, 248, 226),rgb(207, 170, 4) 80%)",
								color: "#fff",
								textAlign: "center",
							}}
						/>
					) : null}
				</Box>

				<StyledTypography
					fs={1.1}
					fw={600}
					styletype="default"
					maxlines={1}
					sx={{ textTransform: "capitalize" }}
				>
					{items.property_type}
				</StyledTypography>
				<Tooltip
					title={items.desc}
					arrow
					sx={{ display: { xs: "none", md: "block" } }}
				>
					<StyledTypography fs={0.9} styletype="default" maxlines={2}>
						{items.desc}
					</StyledTypography>
				</Tooltip>
				<StyledTypography fs={0.9} styletype="default" fw={600}>
					PKR <strong>{items.price}</strong>
				</StyledTypography>
				<UIButton
					label="Read More"
					variant="contained"
					isLoading={isLoading}
					onClick={() => navigate(`/blogs-details/${items._id}`)}
				/>
			</FlexBetween>
		</BlogsCardWrapper>
	);
};

export default BlogsCard;
