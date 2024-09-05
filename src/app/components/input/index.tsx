import { View, TextInput, TextInputProps, ViewProps } from "react-native";
import { styles } from './styles'
import { theme } from "@/themes"

function Input({ children }: ViewProps ){
    return <View style={styles.container}>{children}</View>
}

function Field( {...rest}: TextInputProps ){
    return <TextInput style={styles.input} placeholderTextColor={theme.colors.gray_300} {...rest} />
    
    //com o ...rest as propriedades de TextInputProps estão sendo passadas para o componente TextInput
}

Input.Field = Field 
// propriedade Field é adicionada ao input, à quel é atribuído o componente Field()

export { Input }