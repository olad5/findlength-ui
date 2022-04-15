export default interface CallToActionProps {
  onGetBtnClicked: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onInputBoxChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
