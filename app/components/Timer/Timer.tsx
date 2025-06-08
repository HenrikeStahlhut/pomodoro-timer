import { Button } from "../ui/button";
import { Typography } from "../ui/typography";

const Timer = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-7">
      <div className="flex gap-3">
        <Button variant={"pomodoro"} size={"lg"}>
          pomodoro
        </Button>
        <Button variant={"pomodoro"} size={"lg"}>
          short break
        </Button>
        <Button variant={"pomodoro"} size={"lg"}>
          long break
        </Button>
      </div>
      <Typography
        variant={"h1"}
        className="text-8xl text-white
"
      >
        25:00
      </Typography>
    </div>
  );
};

export default Timer;
