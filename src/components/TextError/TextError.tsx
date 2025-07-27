import { Text } from "react-native-svg";
import Colors from "../../theme/colors";

type ITextError = {
    error: string;
}

const TextError: React.FC<ITextError> = ({error}) => {
    return(
        <Text color={Colors.red}>{error}</Text>
    )
}

export default TextError;