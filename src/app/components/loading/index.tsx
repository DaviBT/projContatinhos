import { ActivityIndicator } from "react-native"
import { styles } from './styles'
import { theme } from "@/themes"

export function Loading(){
    return(
        <ActivityIndicator style={styles.loading} color={theme.colors.blue}/>
    )
}