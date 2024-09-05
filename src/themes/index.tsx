import { colors } from './colors'

export const theme = {
    colors,
}

export function Loading(){
    return(
        <ActivityIndicator style={styles.loading}color={theme.colors.blue}/>
    )
}

