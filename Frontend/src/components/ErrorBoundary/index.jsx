import { StyledTypography } from "@/styled";
import { useNavigate, useRouteError } from "react-router-dom";
import UIButton from "../Button/UIButton";
import { StyledErrorBoundaryWrapper } from "./styled";

export default function ErrorPage() {
	const error = useRouteError();
	const navigate = useNavigate();
	return (
		<StyledErrorBoundaryWrapper>
			<div id="error-page">
				<StyledTypography fs={2.8} styletype="default">
					Oops!
				</StyledTypography>
				<StyledTypography fs={1.2} styletype="default">
					Sorry, an unexpected error has occurred. {error?.status}
				</StyledTypography>
				<StyledTypography styletype="default">
					{error?.statusText ||
						error?.response?.data?.message ||
						"Unexpected Error occur"}
				</StyledTypography>
				{error?.status === 404 ? (
					<UIButton
						variant="contained"
						label="Go Back"
						styletype="inverted"
						onClick={() => navigate(-1)}
					/>
				) : (
					<UIButton
						variant="contained"
						label="Reload"
						styletype="inverted"
						onClick={() => window.location.reload()}
					/>
				)}
			</div>
		</StyledErrorBoundaryWrapper>
	);
}
