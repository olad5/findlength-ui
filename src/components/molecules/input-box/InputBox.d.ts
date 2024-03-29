export type InputBoxProps = {
  includeSearchBox: boolean;
  onInputBoxChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchBtnClicked?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
