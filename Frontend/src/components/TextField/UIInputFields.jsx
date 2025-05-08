import { Button, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import StyledOutlinedInput from "./styled";

const UIInputFields = ({
	control,
	placeholder,
	name,
	rules,
	type,
	...props
}) => {
	return control && name ? (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({ field, fieldState }) => {
				if (type === "file") {
					return (
						<>
							{/* Hidden actual file input */}
							<input
								type="file"
								id={`file-${name}`}
								multiple
								accept="image/*"
								style={{ display: "none" }}
								onChange={(e) => field.onChange(e.target.files)}
								ref={field.ref}
							/>

							{/* TextField to display selected filenames */}
							<TextField
								fullWidth
								variant="outlined"
								placeholder={placeholder}
								error={!!fieldState.error}
								helperText={fieldState.error?.message}
								value={
									field.value?.length
										? Array.from(field.value)
												.map((file) => file.name)
												.join(", ")
										: ""
								}
								InputProps={{
									readOnly: true,
									endAdornment: (
										<Button
											variant="contained"
											component="label"
											sx={{ backgroundColor: "#006A71", color: "white" }}
											htmlFor={`file-${name}`}
										>
											Browse
										</Button>
									),
								}}
								{...props}
							/>
						</>
					);
				}

				// Default input rendering
				return (
					<StyledOutlinedInput
						{...field}
						type={type}
						placeholder={placeholder}
						error={!!fieldState.error}
						helperText={fieldState.error?.message}
						{...props}
					/>
				);
			}}
		/>
	) : (
		<StyledOutlinedInput placeholder={placeholder} type={type} {...props} />
	);
};

export default UIInputFields;
