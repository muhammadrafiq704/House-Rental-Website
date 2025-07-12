import { icons, social_icons } from "@/assets";
import UIButton from "@/components/Button/UIButton";
import UISkeletonPage from "@/components/UISkeletonPage";
import { useAuth } from "@/context/AuthContext";
import { FlexBetween, StyledTypography } from "@/styled";
import { ImageGettingURL } from "@/utils/ImageGettingURL";
import appPaths from "@/utils/appRoutePaths";
import { Box, Chip, Tooltip } from "@mui/material";
import { Suspense } from "react";
import {
	Await,
	useLoaderData,
	useNavigate,
	useNavigation,
} from "react-router-dom";
import { StyledPropertyDetailsWrapper } from "./styled";

const PropertyTypeDetails = () => {
	const loaderData = useLoaderData();
	const navigating = useNavigation();
	const navigate = useNavigate();
	const { token, user } = useAuth();
	console.log("token, user", token, user);
	const isLoading =
		navigating.state === "loading" || navigating.state === "submitting";

	return (
		<StyledPropertyDetailsWrapper>
			<Suspense fallback={<UISkeletonPage />}>
				<Await resolve={loaderData.properties_details}>
					{(properties_details) => {
						const property = properties_details?.data?.data || {};
						return !property ? (
							"No details found"
						) : (
							<Box
								key={property._id}
								sx={{ display: "flex", gap: "40px", width: "100%" }}
							>
								<Box sx={{ position: "relative" }}>
									<img
										src={ImageGettingURL(property.file)}
										alt="cover-img"
										style={{ objectFit: "cover" }}
									/>
									{property?.purpose ? (
										<Chip
											label={
												property.purpose === "sell"
													? "Selling"
													: property.purpose === "featured"
														? "Featured"
														: "Renting"
											}
											color="#006A71"
											sx={{
												position: "absolute",
												top: 10,
												right: 20,
												fontWeight: 600,
												width: "100px",
												backgroundImage:
													property.purpose === "featured"
														? "radial-gradient(at top left,rgb(252, 248, 226),rgb(187, 31, 3) 80%)"
														: "radial-gradient(at top left,rgb(252, 248, 226),rgb(207, 170, 4) 80%)",
												color: "#fff",
												textAlign: "center",
											}}
										/>
									) : null}
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										gap: "20px",
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
									<Tooltip title={property.desc} arrow>
										<StyledTypography
											fs={1.1}
											styletype="default"
											maxlines={4}
											sx={{ textTransform: "capitalize" }}
										>
											{property.desc}
										</StyledTypography>
									</Tooltip>
									<Tooltip title={property.message} arrow>
										<StyledTypography
											fs={1.1}
											styletype="default"
											maxlines={4}
											sx={{ textTransform: "capitalize" }}
										>
											{property.message}
										</StyledTypography>
									</Tooltip>
									<FlexBetween justifyContent="space-between">
										<StyledTypography fs={1} styletype="default">
											PKR <strong>{property.price}</strong>
										</StyledTypography>
										<FlexBetween gap={6}>
											<img
												src={icons.location}
												alt="icon"
												style={{ width: "24px", height: "24px" }}
											/>
											<StyledTypography
												fs={1}
												styletype="default"
												sx={{ textTransform: "capitalize" }}
											>
												{property.city}, {property.location}
											</StyledTypography>
										</FlexBetween>
									</FlexBetween>
									<FlexBetween gap={20} justifyContent="flex-start">
										<FlexBetween gap={6}>
											<img
												src={icons.bed}
												alt="icon"
												style={{ width: "24px", height: "24px" }}
											/>
											<StyledTypography fs={1} styletype="default">
												{property.bedroom} Bedroom
											</StyledTypography>
										</FlexBetween>
										<FlexBetween gap={6}>
											<img
												src={icons.room}
												alt="icon"
												style={{ width: "24px", height: "24px" }}
											/>
											<StyledTypography fs={1} styletype="default">
												{property.room} Room
											</StyledTypography>
										</FlexBetween>
										<FlexBetween gap={6}>
											<img
												src={icons.bathroom}
												alt="icon"
												style={{ width: "24px", height: "24px" }}
											/>
											<StyledTypography fs={1} styletype="default">
												{property.bathroom} Bathroom
											</StyledTypography>
										</FlexBetween>
										<FlexBetween gap={6}>
											<img
												src={icons.kit}
												alt="icon"
												style={{ width: "24px", height: "24px" }}
											/>
											<StyledTypography fs={1} styletype="default">
												{property.kitchen} Kitchen
											</StyledTypography>
										</FlexBetween>
									</FlexBetween>
									<FlexBetween gap={10} justifyContent="flex-start">
										<StyledTypography
											fs={1}
											styletype="default"
											sx={{ textTransform: "capitalize" }}
										>
											<strong>
												{" "}
												Area of {property.property_type} :{" "}
												{property.area_amount}, {property.area_unit}
											</strong>
										</StyledTypography>
									</FlexBetween>
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
											if (token && user) {
												const phoneNumber = "923480578106";
												const message =
													"Hello, I'm interested in your blog! I wanna talk to you about the house rent or sale";
												window.open(
													`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
														message,
													)}`,
													"_blank",
												);
											} else {
												return navigate(appPaths.SIGN_IN);
											}
										}}
									/>
								</Box>
							</Box>
						);
					}}
				</Await>
			</Suspense>
		</StyledPropertyDetailsWrapper>
	);
};

export default PropertyTypeDetails;
