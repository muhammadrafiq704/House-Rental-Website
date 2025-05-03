import { icons, images } from "@/assets";
import UIButton from "@/components/Button/UIButton";
import { StyledTypography } from "@/styled";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { Suspense } from "react";
// import { Await, useLoaderData } from "react-router-dom";
import BlogsCard from "./BlogsCard";
import { BlogsWrapper } from "./styled";

const Blogs = () => {
	// const loaderData = useLoaderData();
	const navigate = useNavigate();

	const dummyBlogs = [
		{
			id: 1,
			title: "3 Bed Apartment",
			img: images.card_img,
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempore cum, quaerat repudiandae harum molestias vitae eligendi. Tenetur, voluptate eum!",
		},
		{
			id: 2,
			title: "1 bathroom, 1 chicken, 2 rooms",
			img: images.card_img,
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempore cum, quaerat repudiandae harum molestias vitae eligendi. Tenetur, voluptate eum!",
		},
		{
			id: 3,
			title: "3 Bed Apartment",
			img: images.card_img,
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempore cum, quaerat repudiandae harum molestias vitae eligendi. Tenetur, voluptate eum!",
		},
		{
			id: 4,
			title: "1 bathroom, 2 rooms attach chicken",
			img: images.card_img,
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempore cum, quaerat repudiandae harum molestias vitae eligendi. Tenetur, voluptate eum!",
		},
		{
			id: 4,
			title: "3 Bed Apartment",
			img: images.card_img,
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempore cum, quaerat repudiandae harum molestias vitae eligendi. Tenetur, voluptate eum!",
		},
	];
	const visibleBlogs = dummyBlogs.slice(0, 4);
	const isMoreBlogs = dummyBlogs.length > 4;

	return (
		<BlogsWrapper>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "4px",
				}}
			>
				<StyledTypography fs={2.2} styletype="default" fw={500}>
					Recent Blogs <hr />
				</StyledTypography>
				<StyledTypography fs={0.9} styletype="default" fw={500}>
					Customers trust us to selling, purchasing, and renting thier
					properties
				</StyledTypography>
			</Box>

			{/* While API not ready, use dummyBlogs directly */}
			{visibleBlogs.length === 0 ? (
				"No Blogs Found"
			) : (
				<Box
					sx={{
						display: "flex",
						width: "100%",
						flexWrap: "wrap",
						justifyContent: "center",
						gap: "20px",
					}}
				>
					{visibleBlogs.map((blog) => (
						<BlogsCard key={blog.id} items={blog} />
					))}
				</Box>
			)}

			{/* 
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={loaderData.blogs_details}>
          {(blogs_details) =>
            blogs_details.length === 0 ? (
              "No Blogs Found"
            ) : (
              blogs_details.map((blog) => (
                <BlogsCard key={blog.id} items={blog} />
              ))
            )
          }
        </Await>
      </Suspense> 
      */}
			{isMoreBlogs && (
				<Box sx={{ display: "flex", justifyContent: "center" }}>
					<UIButton
						label="Explore More"
						variant="contained"
						icon={icons.right_up}
						iconPosition="end"
						onClick={() => navigate("/blogs")}
					/>
				</Box>
			)}
		</BlogsWrapper>
	);
};

export default Blogs;
