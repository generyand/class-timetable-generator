import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function TimeRangePick({setTimeStart, setTimeEnd}) {
  const [time, setTime] = useState(null);

  useEffect(() => {
    console.log(time?.$H, time?.$m, time?.$s);
    console.log("time");
  }, [time]);

  return (
    <ThemeProvider theme={darkTheme}>
      {/* <CssBaseline /> */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="">
          <h2 className="mb-4 text-center">Time</h2>
          <div className="flex justify-center gap-4">
            <TimePicker
              sx={{ width: "flex-1" }}
              onChange={(time) => setTime(time)}
              minutesStep={10}
              label="From"
              className="TimePicker | rounded-md"
            />
            <TimePicker
              sx={{ width: "flex-1" }}
              onChange={(time) => setTime(time)}
              minutesStep={10}
              label="To"
              className="TimePicker | rounded-md"
            />
          </div>
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default TimeRangePick;
