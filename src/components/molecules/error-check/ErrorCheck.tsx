import { ErrorCheckProps } from "./ErrorCheck.d";

export default function ErrorCheck({ text }: ErrorCheckProps) {
  return (
    <div className="flex gap-2">
      <img src="/icons/green-check-mark.svg" alt="check mark" />
      <p className="/icons/check_circle_black_fill.svg">{text}</p>
    </div>
  );
}
