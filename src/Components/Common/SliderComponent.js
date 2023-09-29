import React from "react";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";


const SliderComponent = ({
    defaultValue,
    min,
    max,
    label,
    unit,
    onChange,
    amount,
    value,
    steps
})=> {
    return (
        <Stack my={1.4}>
            <Stack gap={1} >
                <Typography variant="subtitle2">
                {label}
                </Typography>
                <Typography variant="h5">
                {unit === "$" ? unit : "" }{amount} { unit === "%"? unit: ""}
                </Typography>
            </Stack>
            <Slider
            min={min}
            max={max}
            defaultValue={defaultValue}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={onChange}
            value={value}
            marks
            step={steps}
            />
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="caption" color="text.secondary">
                    {unit === "$" ? unit : "" }{min} { unit === "%"? unit: ""}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                {unit === "$" ? unit : "" }{max} { unit === "%"? unit: ""}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default SliderComponent;