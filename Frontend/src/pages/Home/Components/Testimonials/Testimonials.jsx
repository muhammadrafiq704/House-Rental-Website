import { StyledTypography } from "@/styled";
import { Box } from "@mui/material";
import TestimonialsCard from "./TestimonialsCard";
import { StyledTestimonialsWrapper } from "./styled";

const Testimonials = () => {
	return (
		<StyledTestimonialsWrapper>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
					gap: "2px",
				}}
			>
				<StyledTypography fs={0.9} styletype="default">
					We are committed to making our clients happy with our services
					<hr />
				</StyledTypography>
				<StyledTypography fs={1.8} styletype="default" fw={650}>
					What Our Clients Says!
				</StyledTypography>
			</Box>
			<TestimonialsCard />
		</StyledTestimonialsWrapper>
	);
};

export default Testimonials;
