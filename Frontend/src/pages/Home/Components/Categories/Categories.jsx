import { StyledTypography } from "@/styled";
import { Box } from "@mui/material";
import CategoriesCard from "./CategoriesCard";
import { StyledCategoriesWrapper } from "./styled";

const Categories = () => {
	return (
		<StyledCategoriesWrapper>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "2px",
				}}
			>
				<StyledTypography fs={2.2} styletype="default" fw={500}>
					Our Services <hr />
				</StyledTypography>
				<StyledTypography fs={0.9} styletype="default" fw={500}>
					Services we provide for customers satisfaction
				</StyledTypography>
			</Box>
			<CategoriesCard />
		</StyledCategoriesWrapper>
	);
};

export default Categories;
