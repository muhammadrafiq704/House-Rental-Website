import { StyledTypography } from "@/styled";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StyledCategoriesCard } from "./styled";
import { CategoriesData } from "./utils";

const CategoriesCard = () => {
	const navigate = useNavigate();
	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
				gap: "20px",
			}}
		>
			{" "}
			{CategoriesData.map((category) => (
				<StyledCategoriesCard
					key={category.id}
					onClick={() => navigate(`/categories/${category.title}`)}
				>
					<img src={category.icon} alt="icon" width={42} />
					<StyledTypography fs={1.1} styletype="default">
						{category.title}
					</StyledTypography>
				</StyledCategoriesCard>
			))}
			;
		</Box>
	);
};

export default CategoriesCard;
