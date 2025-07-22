import { icons } from "@/assets";
import UIButton from "@/components/Button/UIButton";
import { StyledTypography } from "@/styled";
import { Box, Grid } from "@mui/material";
import { StyledHeroWrapper } from "./styled/styled";

const Hero = () => {
	return (
		<StyledHeroWrapper sx={{ display: { xs: "none", md: "block" } }}>
			<Box
				sx={{
					position: "relative",
					zIndex: 1,
					width: "100%",
					pl: 4,
				}}
			>
				<Grid
					container
					spacing={2}
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						width: "100%",
					}}
				>
					<Grid item size={{ xs: 12 }}>
						<StyledTypography fs={3.3} sx={{ textAlign: "center" }}>
							Find Your Dream Property <br /> With Us!
						</StyledTypography>
						<pre
							style={{ fontSize: "16px", color: "white", textAlign: "center" }}
						>
							We are dealing with all kinds of saling, rental, and commercial
							plots.
						</pre>
					</Grid>
					<Grid item>
						<UIButton
							label="Read More"
							variant="contained"
							iconPosition="end"
							icon={icons.right_up}
							href="/about-us"
						/>
					</Grid>
				</Grid>
			</Box>
		</StyledHeroWrapper>
	);
};

export default Hero;
