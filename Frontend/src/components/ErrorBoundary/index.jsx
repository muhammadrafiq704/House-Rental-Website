import { StyledTypography } from "@/styled";
import { useNavigate, useRouteError } from "react-router-dom";
import UIButton from "../Button/UIButton";
import { StyledErrorBoundaryWrapper } from "./styled";

export default function ErrorPage() {
	const error = useRouteError();
	const navigate = useNavigate();
	console.log("error", error);
	return (
		<StyledErrorBoundaryWrapper>
			<div id="error-page">
				<StyledTypography fs={2.8} styletype="default">
					Oops! {error?.status}
				</StyledTypography>
				<StyledTypography fs={1.2} styletype="default">
					Sorry, an unexpected error has occurred.
				</StyledTypography>
				<StyledTypography styletype="default">
					Message:{" "}
					{error?.statusText ||
						error?.response?.data?.message ||
						error?.message ||
						"Unexpected Error occur"}
				</StyledTypography>
				<StyledTypography styletype="default">
					Error:{" "}
					{error?.statusText ||
						error?.response?.data?.error ||
						error?.name ||
						"Error detected"}
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
