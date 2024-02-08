import { FC } from "react";
import { Text, View } from "react-native"

interface Props {
header: string;
body: string;
}

const Card: FC<Props> = ({header, body}) => {
    return (
<       View>
        <Text>{header}</Text>
        <Text>{body}</Text>
        </View>
    )

}

export default Card