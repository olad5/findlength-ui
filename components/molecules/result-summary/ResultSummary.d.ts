export default interface ResultSummaryProps {
  originalLength: string;
  speeds: {
    id: number;
    speed: number;
    length: string;
  }[];
}
