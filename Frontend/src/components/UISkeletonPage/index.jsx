import { FlexBetween } from "@/styled";
import { Skeleton } from "@mui/material";
import React from "react";

const UISkeletonPage = ({ rows = 1 }) => {
	return (
		<>
			{Array(rows)
				.fill("")
				.map((_, index) => (
					<FlexBetween gap={10} key={index.toString()}>
						<Skeleton
							animation="pulse"
							height={300}
							width={300}
							sx={{
								backgroundImage:
									"radial-gradient(at top left, #E0F4F5, #B2DAD6 80%)",
							}}
						/>
						<Skeleton
							animation="pulse"
							height={300}
							width={300}
							sx={{
								backgroundImage:
									"radial-gradient(at top left, #E0F4F5, #B2DAD6 80%)",
							}}
						/>
						<Skeleton
							animation="pulse"
							height={300}
							width={300}
							sx={{
								backgroundImage:
									"radial-gradient(at top left, #E0F4F5, #B2DAD6 80%)",
							}}
						/>
					</FlexBetween>
				))}
		</>
	);
};

export default UISkeletonPage;
