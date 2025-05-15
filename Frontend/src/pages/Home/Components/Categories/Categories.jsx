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
				<StyledTypography fs={0.9} styletype="default" fw={500}>
					Services we provide for customers satisfaction
					<hr />
				</StyledTypography>
				<StyledTypography fs={1.8} styletype="default" fw={650}>
					Best Places for Rent
				</StyledTypography>
			</Box>
			<CategoriesCard />
		</StyledCategoriesWrapper>
	);
};

export default Categories;
