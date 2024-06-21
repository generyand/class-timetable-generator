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

export default function DayRangePick() {
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");

  return (
    <ThemeProvider theme={darkTheme}>
      <h2 className="mb-4 text-center">Day</h2>
      <div className="day-pick-wrapper | flex gap-4 justify-between">
        <Box sx={{ minWidth: 120, flex: 1 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">From</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={startDay}
              label="Age"
              onChange={(e) => setStartDay(e.target.value)}
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
        <Box sx={{ minWidth: 120, flex: 1 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">To</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={endDay}
              label="Age"
              onChange={(e) => setEndDay(e.target.value)}
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
    </ThemeProvider>
  );
}
