import { StyledTypography } from "@/styled";
import { Box, Grid } from "@mui/material";
import HousesCard from "./HousesCard";
import { StyledAdvertismentCard, StyledHousesWrapper } from "./styled";
// import { Suspense } from "react";
// import { Await, useLoaderData } from "react-router-dom";
import { DummyHousesData } from "./utils";

const Houses = () => {
	// const loaderData = useLoaderData();
	return (
		<StyledHousesWrapper>
			<Grid
				container
				spacing={2}
				sx={{
					width: "100%",
					// border: "1px solid green",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Grid
					item
					spacing={1}
					sx={{
						width: "60%",
						display: "flex",
						flexDirection: "column",
						cursor: "pointer",
						// border: "1px solid blue",
					}}
				>
					{/* <Suspense fallback={<div>Loading...</div>}>
            <Await resolve={loaderData.houses}> */}
					{
						// (DummyHousesData) =>
						DummyHousesData.length === 0
							? "No Houses Found"
							: DummyHousesData?.map((house) => (
									<HousesCard houses={house} key={house.id} />
								))
					}
					{/* </Await>
          </Suspense> */}
				</Grid>
				<Grid
					spacing={1}
					sx={{
						width: "35%",
						display: "flex",
						flexDirection: "column",
						gap: "10px",
						padding: "0 10px",
						cursor: "pointer",
						// border: "1px solid green",
					}}
				>
					<StyledTypography fs={1.1} styletype="default" fw={500}>
						Ads
					</StyledTypography>
					{/* <Suspense fallback={<div>Loading...</div>}>
            <Await resolve={loaderData.advertisemenet}> */}
					{
						// (DummyHousesData) =>
						DummyHousesData.length === 0
							? "Not Advertisment Found"
							: DummyHousesData.map((ads) => (
									<StyledAdvertismentCard key={ads.id}>
										<Box
											sx={{
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												gap: "10px",
											}}
										>
											<img
												src={ads.image}
												alt="ads-img"
												width={400}
												height={250}
											/>
											<Box>
												<StyledTypography fs={1.1} fw={500} styletype="default">
													{ads.title}
												</StyledTypography>
												<StyledTypography
													fs={0.8}
													fw={500}
													styletype="default"
													light
													maxlines={2}
													sx={{ width: "400px" }}
												>
													{ads.desc}
												</StyledTypography>
											</Box>
										</Box>
									</StyledAdvertismentCard>
								))
					}
					{/* </Await>
          </Suspense> */}
				</Grid>
			</Grid>
		</StyledHousesWrapper>
	);
};

export default Houses;
