import { icons } from "@/assets";
import UIButton from "@/components/Button/UIButton";
import { StyledTypography } from "@/styled";
import { ImageGettingURL } from "@/utils/ImageGettingURL";
import { Box, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledHousesCardWrapper } from "./styled";

const PropertyTypeCard = ({ property }) => {
	const navigate = useNavigate();
	return (
		<StyledHousesCardWrapper>
			<Grid container sx={{ display: "flex", gap: "20px", p: 1 }}>
				<Grid sx={{ display: "flex", alignItems: "center" }}>
					{" "}
					<img
						src={ImageGettingURL(property.file[0])}
						alt="cover-img"
						width={250}
						height={200}
					/>
				</Grid>
				<Grid
					sx={{
						width: "60%",
						display: "flex",
						flexDirection: "column",
						gap: "10px",
					}}
				>
					<StyledTypography
						fs={1.5}
						styletype="default"
						fw={600}
						sx={{ textTransform: "capitalize" }}
					>
						{property.property_type}
					</StyledTypography>
					<StyledTypography
						fs={0.9}
						styletype="default"
						light
						maxlines={3}
						sx={{ textTransform: "capitalize" }}
					>
						{property.desc}
					</StyledTypography>
					<StyledTypography
						fs={0.9}
						styletype="default"
						light
						maxlines={3}
						fw={600}
					>
						PKR {property.price}
					</StyledTypography>
					<StyledTypography
						fs={0.9}
						styletype="default"
						light
						maxlines={3}
						fw={600}
						sx={{ textTransform: "capitalize" }}
					>
						{property.location}
					</StyledTypography>
					{/* <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {houses?.features.length === 0
              ? "No Features listed"
              : houses.features.map((feature) => (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-end",
                        gap: "6px",
                      }}
                      key={feature.id}
                    >
                      <img
                        src={feature.icon}
                        alt="icon"
                        width={28}
                        height={28}
                      />
                      <StyledTypography
                        styletype="default"
                        fs={0.8}
                        fw={600}
                        light
                      >
                        {feature.title}
                      </StyledTypography>
                    </Box>
                  </>
                ))}
          </Box> */}
					<UIButton
						variant="contained"
						label="Read More"
						icon={icons.right_up}
						iconPosition="end"
						sx={{ fontSize: "16px" }}
						onClick={() => navigate(`${property._id}`)}
					/>
				</Grid>
			</Grid>
		</StyledHousesCardWrapper>
	);
};

export default PropertyTypeCard;
