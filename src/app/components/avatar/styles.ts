import { StyleSheet } from "react-native";
import { theme } from "@/themes"

export const styles = StyleSheet.create({
    container: {
        width:"100%",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 7,
        gap:7,
    },
    text:{
        fontFamily: theme.fontFamily.medium,
    },
    letter:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.white,
    },
    variants:{
        fontSize:1,
    }
})

export const variants = {
    size: {
        medium: {width:54, height:54, borderRadius: 18},
        large: {width:100, height:100, borderRadius:32},
    },
    text: {
        medium: {fontSize:24},
        large: {fontSize: 52},
    }
}