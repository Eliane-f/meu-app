import { Button} from "react-native";

interface ButtonProops{
    text: string
    onClick: ()=>void
    color?: string
}

export default function StyledButton(
    { text, onClick, color}: ButtonProops) {
        return(
            <Button onPress={onClick} title={text} color={color}/>
        )
    }