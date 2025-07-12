import { images } from "@/assets";
import { Box } from "@mui/material";
import Scrollbars from "react-custom-scrollbars-2";
import PropertiesCard from "./PropertiesCard";
import { StyledProfileDashboard } from "./styled";

const ProfileDashboard = () => {
	// const loaderData = useLoaderData();
	const dummyData = [
		{
			id: 1,
			title: "Room",
			desc: "room for rent available now for all kinds of usage.",
			image: images.bedroom,
		},
		{
			id: 1,
			title: "Shop",
			desc: "shop for rent available now commercial use.",
			image: images.large_home,
		},
		{
			id: 1,
			title: "Shop",
			desc: "shop for rent available now commercial use.",
			image: images.large_home,
		},
		{
			id: 1,
			title: "Shop",
			desc: "shop for rent available now commercial use.",
			image: images.large_home,
		},
		{
			id: 1,
			title: "Shop",
			desc: "shop for rent available now commercial use.",
			image: images.large_home,
		},
		{
			id: 1,
			title: "Shop",
			desc: "shop for rent available now commercial use.",
			image: images.large_home,
		},
	];
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
					{/* <Suspense fallback={<UIPageLoading />}>
        <Await resolve={loaderData.favorites}> */}
					{
						// (dummyData) =>
						dummyData.length === 0
							? "No Properties are Found"
							: dummyData.map((favorite) => (
									<PropertiesCard items={favorite} key={favorite.id} />
								))
					}
					{/* </Await>
      </Suspense> */}
				</Box>
			</Scrollbars>
		</StyledProfileDashboard>
	);
};

export default ProfileDashboard;
