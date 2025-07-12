import { icons } from "@/assets";
import UIButton from "@/components/Button/UIButton";
import ErrorPage from "@/components/ErrorBoundary";
import UISkeletonPage from "@/components/UISkeletonPage";
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
			<Suspense fallback={<UISkeletonPage />}>
				<Await
					resolve={loaderData.blogs}
					errorElement={<ErrorPage error={loaderData.blogs._error} />}
				>
					{(blogs) => {
						const blog = blogs.data?.data || [];
						const visibleBlogs = blog?.slice(0, 12);
						const isMoreBlogs = blog.length > 10;

						return (
							<>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
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
