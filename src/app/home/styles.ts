import { StyleSheet } from "react-native"
import { theme } from "@/themes/index"

export const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header: {
        width:"100%",
        height: 132,
        backgroundColor:theme.colors.blue,
        justifyContent: "flex-end",
    },
})