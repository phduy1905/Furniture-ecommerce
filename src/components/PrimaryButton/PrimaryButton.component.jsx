import { useHistory } from "react-router";
import { Button } from "./PrimaryButton.styles";

export const PrimaryButton = ({ children, url }) => {
  const history = useHistory();
  return (
    <Button
      data-aos="fade-left"
      data-aos-delay="800"
      onClick={() => {
        history.push(url);
      }}
    >
      {children}
    </Button>
  );
};
