import { images } from "@/assets";
import { useAuth } from "@/context/AuthContext";
import { FlexBetween, StyledNavlink, StyledTypography } from "@/styled";
import { ImageGettingURL } from "@/utils/ImageGettingURL";
import appPaths from "@/utils/appRoutePaths";
import { Box } from "@mui/material";
import { Outlet, useLocation, useMatch } from "react-router-dom";
import { NameFormatter } from "../AppLayout/logic";
import { StyledCardWrapper, StyledProfileLayout } from "./styled";
import { profileData } from "./utils";

const ProfileLayout = () => {
	const location = useLocation();
	const { user } = useAuth();
	return (
		<StyledProfileLayout
			sx={{ flexDirection: { xs: "column", md: "row" }, gap: { xs: "10px" } }}
		>
			<StyledCardWrapper sx={{ width: { xs: "380px" } }}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						gap: "4px",
					}}
				>
					<img
						src={ImageGettingURL(user?.file || images.boy)}
						alt="profile img"
					/>
					<StyledTypography
						fs={1.1}
						fw={700}
						styletype="default"
						sx={{ mt: 1, textTransform: "capitalize" }}
					>
						{user?.username || "Username"}
					</StyledTypography>
				</Box>
				<FlexBetween
					direction="column"
					justifyContent="flex-start"
					gap={14}
					sx={{ width: "100%", pl: 2, pr: 2 }}
				>
					{profileData.map((data) => {
						// eslint-disable-next-line react-hooks/rules-of-hooks
						const isActive = useMatch(data.href || "");
						return (
							<StyledNavlink
								to={
									data.href === appPaths.PROFILE_DASHBOARD && user?._id
										? `/profile-dashboard/${user?._id}`
										: data.href
								}
								key={data.id}
								isActive={!!isActive}
								sx={{
									color: isActive ? "#FFBA30" : "inherit",
								}}
							>
								<StyledTypography
									fs={1.1}
									styletype="default"
									fw={600}
									sx={{
										color: isActive ? "rgba(0, 106, 113, 0.3)" : "inherit",
									}}
								>
									{data.title}
								</StyledTypography>
							</StyledNavlink>
						);
					})}
				</FlexBetween>
			</StyledCardWrapper>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-start",
					gap: "10px",
				}}
			>
				<StyledTypography
					fs={1.5}
					fw={600}
					styletype="default"
					sx={{ textTransform: "capitalize", pt: 2, pl: 3 }}
				>
					{NameFormatter(location.pathname)}
				</StyledTypography>
				<Outlet />
			</Box>
		</StyledProfileLayout>
	);
};

export default ProfileLayout;
