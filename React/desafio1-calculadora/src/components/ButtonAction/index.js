import { ButtonContainerActions } from "./styles";

const ButtonAction = ({label, onClick}) => {
    return (
      <ButtonContainerActions onClick={onClick}>
        {label}
      </ButtonContainerActions>
    );
  }
  
  export default ButtonAction;
  