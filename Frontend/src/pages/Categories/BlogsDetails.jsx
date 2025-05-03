import { images, social_icons } from "@/assets";
import UIButton from "@/components/Button/UIButton";
// import { Suspense } from "react";
import { StyledTypography } from "@/styled";
import { Box } from "@mui/material";
import { useNavigation } from "react-router-dom";
// import { Await, useLoaderData } from "react-router-dom";
import { BlogsDetailsWrapper } from "./styled";

const BlogsDetails = () => {
	//   const loaderData = useLoaderData();
	const navigating = useNavigation();

	const isLoading =
		navigating.state === "loading" || navigating.state === "submitting";

	const dummyBlogsDetails = {
		id: 1,
		title: "3 Bed Apartment",
		img: images.card_img,
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempore cum, quaerat repudiandae harum molestias vitae eligendi. Tenetur, voluptate eum! harum molestias vitae eligendi. Tenetur, voluptate eum! harum molestias vitae eligendi.",
	};

	return !dummyBlogsDetails ? (
		"No Blogs details found"
	) : (
		<BlogsDetailsWrapper>
			<img src={dummyBlogsDetails.img} alt="cover-img" />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "20px",
					width: "100%",
				}}
			>
				<StyledTypography fs={2.2} fw={600} styletype="default">
					{dummyBlogsDetails.title}
				</StyledTypography>
				<StyledTypography fs={1.1} styletype="default" maxlines={4}>
					{dummyBlogsDetails.desc}
				</StyledTypography>
				<StyledTypography fs={1} styletype="default" pt={2} maxlines={3}>
					{dummyBlogsDetails.desc}
				</StyledTypography>
				<UIButton
					label="Chat Now"
					variant="contained"
					icon={social_icons.whatsapp}
					iconPosition="end"
					sx={{ fontSize: "16px" }}
					imgWidth={22}
					imgHeight={22}
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
		</BlogsDetailsWrapper>
	);

	// <Suspense fallback={<div>Loading...</div>}>
	//   <Await resolve={loaderData.blogs_details}>
	//     {(blogs_details) =>
	//       !blogs_details ? (
	//         "No Blogs details found"
	//       ) : (
	//       <BlogsDetailsWrapper>
	//   <img src={dummyBlogsDetails.img} alt="cover-img" />
	//   <Box sx={{ display: "flex", flexDirection: "column" }}>
	//     <StyledTypography fs={2.2} fw={600} styletype="default">
	//       {dummyBlogsDetails.title}
	//     </StyledTypography>
	//     <StyledTypography fs={1.1} styletype="default" maxlines={4}>
	//       {dummyBlogsDetails.desc}
	//     </StyledTypography>
	//     <StyledTypography fs={1} styletype="default" pt={2} maxlines={3}>
	//       {dummyBlogsDetails.desc}
	//     </StyledTypography>
	//      <UIButton
	//   label="Chat Now"
	//   variant="contained"
	//   icon={social_icons.whatsapp}
	//   iconPosition="end"
	//   sx={{ fontSize: "16px" }}
	//   imgWidth={22}
	//   imgHeight={22}
	//   isLoading={isLoading}
	//   onClick={() => {
	//     const phoneNumber = "923480578106";
	//     const message =
	//       "Hello, I'm interested in your blog! I wanna talk to you about the house rent or sale";
	//     window.open(
	//       `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
	//         message
	//       )}`,
	//       "_blank"
	//     );
	//   }}
	// />
	//   </Box>
	// </BlogsDetailsWrapper>
	//       )
	//     }
	//   </Await>
	// </Suspense>
};

export default BlogsDetails;
