import UIButton from "@/components/Button/UIButton";
import { FlexBetween, StyledTypography } from "@/styled";
import { ImageGettingURL } from "@/utils/ImageGettingURL";
import { Box, Chip } from "@mui/material";
import { useNavigate, useNavigation } from "react-router-dom";
import { BlogsCardWrapper } from "./styled";

const BlogsCard = ({ items }) => {
	const navigate = useNavigate();
	const navigating = useNavigation();

	const isLoading =
		navigating.state === "loading" || navigating.state === "submitting";
	return (
		<BlogsCardWrapper>
			<FlexBetween gap={10} direction="column">
				<Box sx={{ position: "relative" }}>
					<img
						src={ImageGettingURL(items.file[0])}
						alt="blogs-img"
						style={{
							width: 270,
							height: 200,
							objectFit: "cover",
						}}
					/>
					{items.purpose ? (
						<Chip
							label={items.purpose === "sell" ? "Selling" : "Renting"}
							color="#006A71"
							sx={{
								position: "absolute",
								top: 10,
								right: 20,
								fontWeight: 600,
								backgroundImage:
									"radial-gradient(at top left, #9ACBD0, #006A71 80%)",
								color: "#fff",
								textAlign: "center",
							}}
						/>
					) : null}
				</Box>
				<StyledTypography
					fs={1.1}
					styletype="default"
					maxlines={1}
					sx={{ textTransform: "capitalize" }}
				>
					{items.property_type}
				</StyledTypography>
				<StyledTypography
					fs={0.9}
					styletype="default"
					maxlines={2}
					sx={{ textTransform: "capitalize" }}
				>
					{items.desc}
				</StyledTypography>
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
