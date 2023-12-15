import {
    PopupWrapper,
    CloseButton,
    PopupContent,
    Button
} from './styledPopUp'

interface PopUpProps{
    isOpen: boolean,
    handleClose?: any,
    onClick: ()=> void,
    texto: string
}


export default function PopUp({ isOpen,texto, handleClose, onClick }: PopUpProps) {
    return (
        <PopupWrapper isOpen={isOpen}>
        <PopupContent>
          <CloseButton onClick={handleClose}>&times;</CloseButton>
          <div>
            <p>{texto}</p>
          </div>
          <Button
            onClick={onClick}
          >
            Continuar
          </Button>
        </PopupContent>
      </PopupWrapper>
    );
  };
  