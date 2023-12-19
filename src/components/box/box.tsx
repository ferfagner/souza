
import {
    ContainerBox,
    InfoValue,
    PrincipalValue,
    InfoP,
    IconBox,
} from './boxstyled'
import { IconType } from 'react-icons';


interface velueProps {
    valor: String
    title: String
    Icon: IconType
}

export default function Box({ Icon, valor, title }: velueProps) {

    return (

        <ContainerBox>
            <IconBox>
                <Icon />
            </IconBox>
            <InfoValue>
                <PrincipalValue>{valor}</PrincipalValue>
                <InfoP>{title}</InfoP>
            </InfoValue>
        </ContainerBox>
    );


}