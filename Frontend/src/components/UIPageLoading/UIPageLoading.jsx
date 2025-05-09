import { StyledTypography } from "@/styled";
import { UIPageLoadingWrapper } from "./styled";

const UIPageLoading = () => {
	return (
		<UIPageLoadingWrapper>
			<StyledTypography styletype="default" fs={1.1} fw={600}>
				House Rental Webiste
			</StyledTypography>
		</UIPageLoadingWrapper>
	);
};

export default UIPageLoading;
