import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function DayRangePick({ setDayStart, setDayEnd }) {
  const [initialDayStart, setInitialDayStart] = useState("");
  const [initialDayEnd, setInitialDayEnd] = useState("");

  const handleDayStart = (day) => {
    setDayStart(day);
    setInitialDayStart(day);
  };

  const handleDayEnd = (day) => {
    setDayEnd(day);
    setInitialDayEnd(day);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="mb-8">
        <h2 className="mb-4 text-center">Day</h2>
        <div className="day-pick-wrapper | flex gap-4 justify-center">
          <Box sx={{ flex: 1, flexBasis: 210, flexGrow: 0, zIndex: "0" }}>
            <FormControl required fullWidth>
              <InputLabel id="demo-simple-select-label">From</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={initialDayStart}
                label="Age"
                onChange={(e) => handleDayStart(e.target.value)}
              >
                <MenuItem value={"monday"}>Monday</MenuItem>
                <MenuItem value={"tuesday"}>Tuesday</MenuItem>
                <MenuItem value={"wednesday"}>Wednesday</MenuItem>
                <MenuItem value={"thursday"}>Thursday</MenuItem>
                <MenuItem value={"friday"}>Friday</MenuItem>
                <MenuItem value={"saturday"}>Saturday</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ flex: 1, flexBasis: 210, flexGrow: 0, zIndex: "0" }}>
            <FormControl required fullWidth>
              <InputLabel id="demo-simple-select-label">To</InputLabel>
              <Select
                sx={{ zIndex: "1" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={initialDayEnd}
                label="Age"
                onChange={(e) => handleDayEnd(e.target.value)}
              >
                <MenuItem value={"monday"}>Monday</MenuItem>
                <MenuItem value={"tuesday"}>Tuesday</MenuItem>
                <MenuItem value={"wednesday"}>Wednesday</MenuItem>
                <MenuItem value={"thursday"}>Thursday</MenuItem>
                <MenuItem value={"friday"}>Friday</MenuItem>
                <MenuItem value={"saturday"}>Saturday</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
    </ThemeProvider>
  );
}
