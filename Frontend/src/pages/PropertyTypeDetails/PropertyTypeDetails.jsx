import { social_icons } from "@/assets";
import UIButton from "@/components/Button/UIButton";
import { StyledTypography } from "@/styled";
import { ImageGettingURL } from "@/utils/ImageGettingURL";
import { Box } from "@mui/material";
import { Suspense } from "react";
import { Await, useLoaderData, useNavigation } from "react-router-dom";
import { StyledPropertyDetailsWrapper } from "./styled";

const PropertyTypeDetails = () => {
	const loaderData = useLoaderData();
	const navigating = useNavigation();
	console.log("loaderData", loaderData);

	const isLoading =
		navigating.state === "loading" || navigating.state === "submitting";

	return (
		<StyledPropertyDetailsWrapper>
			<Suspense fallback={<div>Loading...</div>}>
				<Await resolve={loaderData.properties_detail}>
					{(properties_details) => {
						const property = properties_details?.data?.data || {};
						console.log("property", property);
						return !property ? (
							"No details found"
						) : (
							<>
								<img
									src={ImageGettingURL(property.file)}
									alt="cover-img"
									style={{ objectFit: "cover" }}
								/>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										width: "100%",
									}}
								>
									<StyledTypography
										fs={2}
										fw={600}
										styletype="default"
										sx={{ textTransform: "capitalize" }}
									>
										{property.property_type}
									</StyledTypography>
									<StyledTypography
										fs={1.1}
										styletype="default"
										maxlines={4}
										sx={{ textTransform: "capitalize" }}
									>
										{property.desc}
									</StyledTypography>
									<StyledTypography
										fs={1.1}
										styletype="default"
										maxlines={4}
										sx={{ textTransform: "capitalize" }}
									>
										{property.message}
									</StyledTypography>
									<UIButton
										label="Chat Now"
										variant="contained"
										icon={social_icons.whatsapp}
										iconPosition="end"
										sx={{ fontSize: "16px", mt: 1 }}
										imgWidth={22}
										imgHeight={22}
										fullWidth
										isLoading={isLoading}
										onClick={() => {
											const phoneNumber = "923480578106";
											const message =
												"Hello, I'm interested in your blog! I wanna talk to you about the house rent or sale";
											window.open(
												`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
													message,
												)}`,
												"_blank",
											);
										}}
									/>
								</Box>
							</>
						);
					}}
				</Await>
			</Suspense>
		</StyledPropertyDetailsWrapper>
	);
};

export default PropertyTypeDetails;
