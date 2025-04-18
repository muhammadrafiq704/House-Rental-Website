import { StyledTypography } from "@/styled";
import { useRouteError } from "react-router-dom";
import UIButton from "../Button/UIButton";
import { StyledErrorBoundaryWrapper } from "./styled";

export default function ErrorPage() {
	const error = useRouteError();
	console.log("error", error);
	return (
		<StyledErrorBoundaryWrapper>
			<div id="error-page">
				<StyledTypography fs={2.8}>Oops!</StyledTypography>
				<StyledTypography fs={1.2}>
					Sorry, an unexpected error has occurred.
				</StyledTypography>
				<StyledTypography>
					<StyledTypography>
						{error.statusText || error.message}
					</StyledTypography>
				</StyledTypography>
				<UIButton
					variant="contained"
					label="Reload"
					styletype="inverted"
					onClick={() => window.location.reload()}
				/>
			</div>
		</StyledErrorBoundaryWrapper>
	);
}
