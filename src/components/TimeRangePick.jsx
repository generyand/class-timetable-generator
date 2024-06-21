import { LocalizationProvider, MobileTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
              minutesStep={10}
              label="From *"
              required
            />
            <MobileTimePicker
              sx={{ flex: 1, flexBasis: 210, flexGrow: 0, zIndex: "0" }}
              onChange={(e) => handleTimeEnd(e)}
              minutesStep={10}
              label="To *"
              required
            />
          </div>
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default TimeRangePick;
