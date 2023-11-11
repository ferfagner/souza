import {Container, Title, Input} from './styledInputText'

    interface InputProps{
        title: string,
        placeholder: string,
        type?: string,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
       
    }


export function InputText({title, placeholder,onChange, type }: InputProps){


    return(
        
        <Container>
            <Title>{title}</Title>
            <Input 
            placeholder={placeholder}
            onChange={onChange}
            type={type? type : 'text'}
            />
        </Container>
           
       

    )
}