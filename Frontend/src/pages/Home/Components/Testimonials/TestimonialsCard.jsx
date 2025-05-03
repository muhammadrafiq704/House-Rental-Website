// src/components/TestimonialsCard.jsx

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import default styles
import "./carousel.css"; // Custom styles (optional)

import { StyledTypography } from "@/styled";
import { Box } from "@mui/material";
import { TestimonialsCardWrapper } from "./styled"; // Make sure this is styled correctly
import { TestimonialsData } from "./utils";

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const TestimonialsCard = () => {
	return (
		<Box className="carousel-container">
			<Carousel
				responsive={responsive}
				swipeable
				draggable
				autoPlay
				infinite
				keyBoardControl
				containerClass="carousel-container"
				dotListClass="react-multi-carousel-dot-list"
				itemClass="carousel-item-padding-40-px"
			>
				{TestimonialsData.map((testimonial) => (
					<TestimonialsCardWrapper key={testimonial.id}>
						<img src={testimonial.icon} alt="icon" width={84} />
						<StyledTypography
							fs={0.9}
							styletype="default"
							maxlines={3}
							sx={{ textAlign: "center" }}
						>
							{testimonial.desc}
						</StyledTypography>
						<Box sx={{ display: "flex", gap: "4px" }}>
							<img src={testimonial.rating} alt="icon" width={16} />
							<img src={testimonial.rating} alt="icon" width={16} />
							<img src={testimonial.rating} alt="icon" width={16} />
							<img src={testimonial.rating} alt="icon" width={16} />
							<img src={testimonial.rating} alt="icon" width={16} />
						</Box>
						<Box
							sx={{
								display: "flex",
								alignItems: "baseline",
								gap: "8px",
								fontStyle: "italic",
							}}
						>
							<StyledTypography fs={1} styletype="default" maxlines={1}>
								{testimonial.name}
							</StyledTypography>
							<StyledTypography fs={0.7} styletype="default" maxlines={1}>
								{testimonial.createdAt}
							</StyledTypography>
						</Box>
					</TestimonialsCardWrapper>
				))}
			</Carousel>
		</Box>
	);
};

export default TestimonialsCard;
