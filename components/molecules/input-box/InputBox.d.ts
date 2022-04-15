export default interface InputBoxProps {
  includeSearchBox: boolean;
  onInputBoxChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
