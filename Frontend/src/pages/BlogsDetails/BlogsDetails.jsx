import { icons, social_icons } from "@/assets";
import UIButton from "@/components/Button/UIButton";
import UISkeletonPage from "@/components/UISkeletonPage";
// import { Suspense } from "react";
import { StyledTypography } from "@/styled";
import { ImageGettingURL } from "@/utils/ImageGettingURL";
import { Box, Tooltip } from "@mui/material";
import { Suspense } from "react";
import { Await, useNavigation } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { BlogsDetailsWrapper } from "./styled";

const BlogsDetails = () => {
	const loaderData = useLoaderData();
	console.log("loaderData", loaderData);

	const navigating = useNavigation();

	const isLoading =
		navigating.state === "loading" || navigating.state === "submitting";

	return (
		<Suspense fallback={<UISkeletonPage />}>
			<Await resolve={loaderData.blogs_details}>
				{(blogs_details) =>
					!blogs_details ? (
						"No Blogs details found"
					) : (
						<BlogsDetailsWrapper>
							<img
								src={ImageGettingURL(blogs_details.data?.data?.file)}
								alt="cover-img"
							/>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									gap: "10px",
									width: "100%",
								}}
							>
								<StyledTypography
									fs={2.2}
									fw={600}
									styletype="default"
									sx={{ textTransform: "capitalize" }}
								>
									{blogs_details.data?.data?.property_type}
								</StyledTypography>
								<Tooltip title={blogs_details.data?.data.desc} arrow>
									<StyledTypography fs={1.1} styletype="default" maxlines={4}>
										{blogs_details.data?.data?.desc}
									</StyledTypography>
								</Tooltip>
								<Tooltip title={blogs_details.data?.data.message} arrow>
									<StyledTypography
										fs={1}
										styletype="default"
										pt={1}
										maxlines={3}
									>
										{blogs_details.data?.data?.message}
									</StyledTypography>
								</Tooltip>
								<Box
									sx={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										gap: "16px",
									}}
								>
									<StyledTypography
										fs={1}
										fw={600}
										styletype="default"
										sx={{ display: "flex", alignItems: "center", gap: "6px" }}
									>
										PKR <strong>{blogs_details.data?.data.price}</strong>
									</StyledTypography>
									<StyledTypography
										fs={1}
										fw={600}
										styletype="default"
										sx={{ display: "flex", alignItems: "center", gap: "6px" }}
									>
										<img
											src={icons.location}
											alt="icon"
											width={24}
											style={{ width: "24px", height: "24px" }}
										/>{" "}
										{blogs_details.data?.data.location}
									</StyledTypography>
								</Box>
								<Box
									sx={{ display: "flex", alignItems: "center", gap: "16px" }}
								>
									<StyledTypography
										fs={1}
										fw={600}
										styletype="default"
										sx={{ display: "flex", alignItems: "center", gap: "6px" }}
									>
										<img
											src={icons.bed}
											alt="icon"
											width={24}
											style={{ width: "24px", height: "24px" }}
										/>{" "}
										{blogs_details.data?.data.bedroom} Bedroom
									</StyledTypography>
									<StyledTypography
										fs={1}
										fw={600}
										styletype="default"
										sx={{ display: "flex", alignItems: "center", gap: "6px" }}
									>
										<img
											src={icons.room}
											alt="icon"
											width={24}
											style={{ width: "24px", height: "24px" }}
										/>{" "}
										{blogs_details.data?.data.room} Rooms
									</StyledTypography>
									<StyledTypography
										fs={1}
										fw={600}
										styletype="default"
										sx={{ display: "flex", alignItems: "center", gap: "6px" }}
									>
										<img
											src={icons.kit}
											alt="icon"
											width={24}
											style={{ width: "24px", height: "24px" }}
										/>{" "}
										{blogs_details.data?.data.kitchen} Kitchen
									</StyledTypography>
									<StyledTypography
										fs={1}
										fw={600}
										styletype="default"
										sx={{ display: "flex", alignItems: "center", gap: "6px" }}
									>
										<img
											src={icons.bathroom}
											alt="icon"
											width={24}
											style={{ width: "24px", height: "24px" }}
										/>{" "}
										{blogs_details.data?.data.bathroom} Bathroom
									</StyledTypography>
								</Box>
								<UIButton
									label="Chat Now"
									variant="contained"
									icon={social_icons.whatsapp}
									iconPosition="end"
									sx={{ fontSize: "16px", mt: 2 }}
									imgWidth={22}
									imgHeight={22}
									isLoading={isLoading}
									fullwidth
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
						</BlogsDetailsWrapper>
					)
				}
			</Await>
		</Suspense>
	);
};
export default BlogsDetails;
