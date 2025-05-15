import { icons } from "@/assets";
import UIButton from "@/components/Button/UIButton";
import ErrorPage from "@/components/ErrorBoundary";
import { StyledTypography } from "@/styled";
import { Box } from "@mui/material";
import { Suspense } from "react";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import BlogsCard from "./BlogsCard";
import { BlogsWrapper } from "./styled";

const Blogs = () => {
	const loaderData = useLoaderData();
	const navigate = useNavigate();

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
				<StyledTypography fs={0.9} styletype="default" fw={500}>
					Customers trust us to sell, purchase, and rent their properties.
					<hr />
				</StyledTypography>
				<StyledTypography fs={1.8} styletype="default" fw={650}>
					Recent Blogs
				</StyledTypography>
			</Box>

			<Suspense fallback={<div>Loading...</div>}>
				<Await
					resolve={loaderData.properties}
					errorElement={<ErrorPage error={loaderData.properties._error} />}
				>
					{(properties) => {
						const blogs = properties.data?.data || [];
						const visibleBlogs = blogs?.slice(0, 4);
						const isMoreBlogs = blogs.length > 4;

						return (
							<>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										flexWrap: "wrap",
										gap: "20px",
										marginTop: 1,
									}}
								>
									{blogs.length === 0 ? (
										<StyledTypography>No blogs available.</StyledTypography>
									) : (
										visibleBlogs.map((blog) => (
											<BlogsCard key={blog._id} items={blog} />
										))
									)}
								</Box>

								{isMoreBlogs && (
									<Box
										sx={{
											display: "flex",
											justifyContent: "center",
											marginTop: 4,
										}}
									>
										<UIButton
											label="Explore More"
											variant="contained"
											icon={icons.right_up}
											iconPosition="end"
											onClick={() => navigate("/blogs")}
										/>
									</Box>
								)}
							</>
						);
					}}
				</Await>
			</Suspense>
		</BlogsWrapper>
	);
};

export default Blogs;
