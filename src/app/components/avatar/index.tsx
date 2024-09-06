import { Image, ImageProps, Text, View } from "react-native";

import { styles, variants } from "./styles"

type Props = { /* tipagem separada denominada de props */
    name: string
    image?: ImageProps | null  /* image é opcional e pode ser null (vazia) */
    variant?: "medium" | "large" /*opcional, medium ou large*/
}

export function Avatar({ image, name, variant="medium" }: Props){ /* caso não seja fornecido uma variant, o padrão é medium */
    return(<View>
            { image? (
                <Image source={image} style={[variants.size[variant]]} />
            ) : (
                <View style={[styles.letter, variants.size[variant]]}>
                    <Text style={[styles.text, variants.text[variant]]}>{name[0].toUpperCase()}</Text>
                </View>
            )}
        </View>
    )
}