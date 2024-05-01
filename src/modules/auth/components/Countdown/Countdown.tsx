import { useCountdown } from "@/utils/hooks";
import { Button } from "@/components";

interface CountdownProps {
  retryDelay: number;
  onRetryDelete: () => void;
}
export const Countdown = ({ retryDelay, onRetryDelete }: CountdownProps) => {
  const timer = useCountdown(retryDelay);

  if (timer === 0) {
    return (
      <Button onClick={onRetryDelete} variant="outlined">
        Запросить код ещё раз
      </Button>
    );
  }
  return <div>{`Запросить код повторно можно через ${timer} секунд`}</div>;
};
