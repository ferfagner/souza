// Button.tsx
import{Container} from './styledbutton'

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  children: string;
  isLoading?: boolean
}

export default function Button({ type, onClick, disabled, children, isLoading }:ButtonProps) {
  return (
    <Container type={type} onClick={onClick} disabled={disabled ? disabled: false}>
      {isLoading ? 'Carregando...' : children}
    </Container>
  );
};

;
