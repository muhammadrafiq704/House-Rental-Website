import { Controller } from "react-hook-form";
import StyledOutlinedInput from "./styled";

const UIInputFields = ({ control, placeholder, name, rules, ...props }) => {
	return control && name ? (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({ field, fieldState }) => (
				<StyledOutlinedInput
					{...field}
					placeholder={placeholder}
					error={!!fieldState.error}
					helperText={fieldState.error?.message}
					{...props}
				/>
			)}
		/>
	) : (
		<StyledOutlinedInput placeholder={placeholder} {...props} />
	);
};

export default UIInputFields;
