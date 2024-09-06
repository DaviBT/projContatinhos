import { theme } from "@/themes"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection:"row",
        alignItems: "center",
        borderRadius: 7,
        gap:7,
    },
    name:{
        color:theme.colors.black,
        fontFamily: theme.fontFamily.medium,
        fontSize: 18,
    }
})