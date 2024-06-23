import { LocalizationProvider, MobileTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import dayjs from "dayjs";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function TimeRangePick({ setTimeStart, setTimeEnd }) {
  const handleTimeStart = (time) => {
    const timeStart = `${time.$H.toString().padStart(2, "0")}:${time.$m
      .toString()
      .padEnd(2, "0")}`;

    setTimeStart(timeStart);
  };

  const handleTimeEnd = (time) => {
    const timeEnd = `${time.$H.toString().padStart(2, "0")}:${time.$m
      .toString()
      .padEnd(2, "0")}`;

    setTimeEnd(timeEnd);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="mb-8">
          <h2 className="mb-4 text-center">Time</h2>
          <div className="flex justify-center gap-4">
            <MobileTimePicker
              sx={{ flex: 1, flexBasis: 210, flexGrow: 0, zIndex: "0" }}
              onChange={(e) => handleTimeStart(e)}
              label="From *"
              required={true}
              minutesStep={10}
              minTime={dayjs("08:00")}
              maxTime={dayjs("22:00")}
              // timeSteps={{hours: 1, minutes: 10}}
              // formatDensity="spacious"
              // minTime={dayjs().set("hour", 8)}
              // maxTime={dayjs().set("hour", 22)}
            />
            <MobileTimePicker
              sx={{ flex: 1, flexBasis: 210, flexGrow: 0, zIndex: "0" }}
              onChange={(e) => handleTimeEnd(e)}
              minutesStep={10}
              label="To *"
              required={true}
              minTime={dayjs("08:00")}
              maxTime={dayjs("22:00")}
              // timeSteps={{hours: 1, minutes: 10}}
              // formatDensity="spacious"
              // minTime={dayjs().set("hour", 8)}
              // maxTime={dayjs().set("hour", 22)}
            />
          </div>
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default TimeRangePick;
