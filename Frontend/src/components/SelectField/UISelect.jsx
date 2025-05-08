import { MenuItem } from "@mui/material";
import { Controller } from "react-hook-form";
import StyledSelect from "./styled";

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

const UISelect = ({ placeholder, control, name, rules, data, ...props }) => {
	return (
		control &&
		name && (
			<Controller
				control={control}
				name={name}
				rules={rules}
				render={({ field: { ref, ...field }, fieldState }) => (
					<>
						<StyledSelect
							{...props}
							{...field}
							inputRef={ref}
							displayEmpty
							renderValue={(selected) =>
								selected ? (
									data?.find((d) => d.value === selected)?.label
								) : (
									<span style={{ color: "#aaa" }}>{placeholder}</span>
								)
							}
							onChange={(e) => field.onChange(e.target.value)}
							IconComponent={ExpandMoreRoundedIcon}
							error={!!fieldState.error}
							defaultValue=""
							//   MenuProps={{
							//     slotProps: {
							//       paper: {
							//         style: {
							//           width: paperWidth,
							//         },
							//       },
							//     },
							//   }}
						>
							{data?.map((val) => (
								<MenuItem key={val.id} value={val.value}>
									{val.label}
								</MenuItem>
							))}
						</StyledSelect>
						{fieldState.error?.message && (
							<FormHelperText sx={{ ml: "1.5em" }} error>
								{fieldState.error?.message}
							</FormHelperText>
						)}
					</>
				)}
			/>
		)
	);
};
export default UISelect;
