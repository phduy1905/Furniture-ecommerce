import { useHistory } from "react-router";
import { Button } from "./PrimaryButton.styles";

export const PrimaryButton = ({ children, url }) => {
  const history = useHistory();
  return (
    <Button
      onClick={() => {
        history.push(url);
      }}
    >
      {children}
    </Button>
  );
};
