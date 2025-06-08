import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Typography } from "../ui/typography";
import { Play, RotateCcw } from "lucide-react";

interface TimerProps {
  initialMinutes?: number;
  onComplete?: () => void;
}

type TimerType = "pomodoro" | "short" | "long";

const Timer = ({ initialMinutes = 25, onComplete }: TimerProps) => {
  const [timerType, setTimerType] = useState<TimerType>("pomodoro");
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const getTimerDuration = (type: TimerType): number => {
    switch (type) {
      case "pomodoro":
        return 25 * 60;
      case "short":
        return 5 * 60;
      case "long":
        return 10 * 60;
      default:
        return 25 * 60;
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleTimerTypeChange = (type: TimerType) => {
    // Stop current timer
    setIsRunning(false);
    setIsCompleted(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Set new timer type and duration
    setTimerType(type);
    setTimeLeft(getTimerDuration(type));
  };

  const startTimer = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
      setIsCompleted(false);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(getTimerDuration(timerType));
    setIsCompleted(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setIsRunning(false);
            setIsCompleted(true);
            if (onComplete) {
              onComplete();
            }
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeLeft, onComplete]);

  return (
    <div className="flex justify-center flex-col items-center gap-7">
      <div className="flex gap-3">
        <Button
          variant={timerType === "pomodoro" ? "timerActive" : "timer"}
          size={"lg"}
          onClick={() => handleTimerTypeChange("pomodoro")}
        >
          pomodoro
        </Button>
        <Button
          variant={timerType === "short" ? "timerActive" : "timer"}
          size={"lg"}
          onClick={() => handleTimerTypeChange("short")}
        >
          short break
        </Button>
        <Button
          variant={timerType === "long" ? "timerActive" : "timer"}
          size={"lg"}
          onClick={() => handleTimerTypeChange("long")}
        >
          long break
        </Button>
      </div>
      <Typography
        variant={"h1"}
        className="text-8xl text-white font-mono
"
      >
        {formatTime(timeLeft)}
      </Typography>
      <div>
        <Button variant={"pomodoroControl"} onClick={startTimer}>
          <Play size={30} />
        </Button>
        <Button variant={"pomodoroControl"} onClick={resetTimer}>
          <RotateCcw size={30} />
        </Button>
      </div>
    </div>
  );
};

export default Timer;
