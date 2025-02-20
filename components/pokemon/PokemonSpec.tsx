import { Image, StyleSheet, View, type ImageSourcePropType, type ViewProps } from "react-native";
import { Row } from "@/components/Row";
import { ThemedText } from "@/components/ThemedText";

type Props = ViewProps & {
    title?: string,
    description?: string,
    image?: ImageSourcePropType
}

export function PokemonSpec({style, image, title, description, ...rest}: Props) {

    return <View style={[style, styles.root]} {...rest}>
        <Row>
            {image && <Image source={image} width={16} height={16}/>}
            <ThemedText>{title}</ThemedText>
        </Row>
        <ThemedText variant="caption" color="grayMedium"></ThemedText>
    </View>
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    }
})