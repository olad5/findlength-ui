export default interface ResultSummaryProps {
  originaLength: string;
  speeds: {
    id: number;
    speed: number;
    length: string;
  }[];
}
