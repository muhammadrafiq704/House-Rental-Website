import useIsMobile from "@/hooks/isMobile";
import { StyledNavlink, StyledTypography } from "@/styled";
import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StyledCategoriesCard } from "./styled";
import { CategoriesData } from "./utils";

const CategoriesCard = () => {
	const navigate = useNavigate();
	const isMobile = useIsMobile();
	return (
		<Grid
			container
			spacing={2}
			sx={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
				alignItems: "center",
				paddingLeft: isMobile ? "" : "20px",
				paddingRight: isMobile ? "" : "20px",
			}}
		>
			{CategoriesData.map((category) => (
				<StyledCategoriesCard
					//   size={{ xs: 2, md: 2.4, sm: 6 }}
					key={category.id}
					onClick={() => navigate(`/${category.title.toLowerCase()}`)}
					sx={{
						height: isMobile ? 160 : { xs: 150, sm: 200, md: 270 },
						width: isMobile ? 150 : { xs: 120, sm: 150, md: 270 },
					}}
				>
					<img src={category.image} alt="icon" />
					<StyledTypography
						fs={1.2}
						styletype="default"
						fw={600}
						sx={{
							position: "absolute",
							bottom: 20,
							left: 20,
							color: "white",
						}}
					>
						{category.title}
					</StyledTypography>
				</StyledCategoriesCard>
			))}
		</Grid>
	);
};

export default CategoriesCard;
