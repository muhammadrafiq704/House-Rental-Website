import { StyledTypography } from "@/styled";
import { Grid } from "@mui/material";
import React from "react";
import SolutionsCard from "./SolutionsCard";
import { StyledSolutionsWrapper } from "./styled";

const Solutions = () => {
	return (
		<StyledSolutionsWrapper>
			<Grid
				container
				spacing={2}
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					//   gap: "2px",
				}}
			>
				<Grid
					size={{ xs: 12 }}
					display="flex"
					flexDirection="column"
					alignItems="center"
				>
					<StyledTypography fs={0.9} styletype="default" fw={500}>
						learn more about our features and services
						<hr />
					</StyledTypography>
					<StyledTypography
						fs={1.8}
						styletype="default"
						fw={650}
						sx={{ textAlign: "center" }}
					>
						Complete solution for owners
					</StyledTypography>
				</Grid>
				<SolutionsCard />
			</Grid>
		</StyledSolutionsWrapper>
	);
};

export default Solutions;
