import { cn } from "~/utils";


export function Skeleton(props) {
  return (
    <div className={cn("animate-pulse rounded-md bg-muted", props.className)} {...props} />
  );
}