import UIPageLoading from "@/components/UIPageLoading/UIPageLoading";
// import { images } from "@/assets";
import { Box } from "@mui/material";
import { Suspense } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { Await, useLoaderData } from "react-router-dom";
import PropertiesCard from "./PropertiesCard";
import { StyledProfileDashboard } from "./styled";

const ProfileDashboard = () => {
	const loaderData = useLoaderData();

	return (
		<StyledProfileDashboard>
			<Scrollbars style={{ height: 400 }}>
				<Box
					style={{
						display: "flex",
						gap: "10px",
						padding: "10px",
						flexWrap: "wrap",
					}}
				>
					<Suspense fallback={<UIPageLoading />}>
						<Await resolve={loaderData.favorites}>
							{(favorites) =>
								favorites.data.length === 0
									? "No Favorites are Found"
									: favorites?.data?.map((favorite) => (
											<PropertiesCard items={favorite} key={favorite._id} />
										))
							}
						</Await>
					</Suspense>
				</Box>
			</Scrollbars>
		</StyledProfileDashboard>
	);
};

export default ProfileDashboard;
