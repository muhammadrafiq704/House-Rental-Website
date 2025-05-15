import { StyledTypography } from "@/styled";
import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StyledCategoriesCard } from "./styled";
import { CategoriesData } from "./utils";

const CategoriesCard = () => {
	const navigate = useNavigate();
	return (
		<Grid
			container
			spacing={2}
			sx={{
				display: "flex",
				flexWrap: "wrap",
				paddingLeft: "20px",
				paddingRight: "20px",
			}}
		>
			{CategoriesData.map((category) => (
				<StyledCategoriesCard
					size={{ xs: 2, md: 2.4, sm: 6 }}
					key={category.id}
					onClick={() => navigate(`/categories/${category.title}`)}
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
