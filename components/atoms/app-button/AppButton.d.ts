export default interface AppButtonProps {
  padding?: string;
  children?: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
