// Button.tsx
import{Container} from './styledbutton'

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children: string;
}

export default function Button({ type, onClick, children }:ButtonProps) {
  return (
    <Container type={type} onClick={onClick}>
      {children}
    </Container>
  );
};

;
