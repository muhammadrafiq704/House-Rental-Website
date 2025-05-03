import UIButton from "@/components/Button/UIButton";
import { FlexBetween, StyledTypography } from "@/styled";
import { useNavigate, useNavigation } from "react-router-dom";
import { BlogsCardWrapper } from "./styled";

const BlogsCard = ({ items }) => {
	const navigate = useNavigate();
	const navigating = useNavigation();

	const isLoading =
		navigating.state === "loading" || navigating.state === "submitting";
	return (
		<BlogsCardWrapper>
			<FlexBetween gap={10} direction="column">
				<img src={items.img} alt="blogs-img" />
				<StyledTypography
					fs={1}
					styletype="default"
					maxlines={1}
					sx={{ textTransform: "capitalize" }}
				>
					{items.title}
				</StyledTypography>
				<StyledTypography fs={0.9} styletype="default" maxlines={2}>
					{items.desc}
				</StyledTypography>
				<UIButton
					label="Read More"
					variant="contained"
					isLoading={isLoading}
					onClick={() => navigate(`/blogs-details/${items.id}`)}
				/>
			</FlexBetween>
		</BlogsCardWrapper>
	);
};

export default BlogsCard;
