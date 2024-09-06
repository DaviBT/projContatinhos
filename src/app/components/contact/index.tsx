import { TouchableOpacity, Image, ImageProps, Text, View } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../avatar";

export function Contact(){
    return <TouchableOpacity style={styles.container}>
        <Avatar name="conorMCgregor" image={require("@/assets/avatar.jpeg")}/>
        <Text style={styles.name}>Conor</Text>
    </TouchableOpacity>
}