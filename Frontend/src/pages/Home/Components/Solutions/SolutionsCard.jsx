import { StyledTypography } from "@/styled";
import { Box } from "@mui/material";
import { StyledSolutionsCard } from "./styled";
import { dummySolutions } from "./utils";

const SolutionsCard = () => {
	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",
				flexWrap: "wrap",
				rowGap: "20px",
				columnGap: "10px",
				alignItems: "center",
				pl: { xs: 0, md: 2 },
				pr: { xs: 0, md: 2 },
			}}
		>
			{dummySolutions.map((solution) => (
				<StyledSolutionsCard
					key={solution.id}
					size={{ xs: 12 }}
					display="flex"
					flexDirection="column"
					flexWrap="wrap"
					gap="8px"
					p={2}
				>
					<img src={solution.icon} alt="icon" style={{ width: "42px" }} />
					<StyledTypography fs={1} styletype="default" fw={600}>
						{solution.title}
					</StyledTypography>
					<StyledTypography
						fs={0.9}
						styletype="default"
						fw={500}
						light
						maxlines={3}
					>
						{solution.desc}
					</StyledTypography>
				</StyledSolutionsCard>
			))}
		</Box>
	);
};

export default SolutionsCard;
