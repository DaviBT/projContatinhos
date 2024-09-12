import { Alert, View, SectionList, Text, SectionListComponent } from 'react-native'
import { styles } from './styles'
import { Input } from '@/app/components/input'
import { Feather } from '@expo/vector-icons'
import { theme } from "@/themes"
import * as Contacts from 'expo-contacts'
import { useState, useEffect } from 'react'
import { Contact, ContactProps } from '@/app/components/contact'

type SectionListDataProps = {
    title: string
    data: ContactProps /* Contato já tipado*/
}

async function fetchContacts(){
    try{
        const [contacts, setContacts] = useState<SectionListDataProps[]>([])
        const { status } = await Contacts.requestPermissionsAsync()
        if(status === Contacts.PermissionStatus.GRANTED){
            const { data } = await Contacts.getContactsAsync()
            console.log(data)
        }
    } catch(error){
        console.log(error)
        Alert.alert("Contatos", "Não foi possível carregar os contatos...")
    }
}


/**/

export function Home(){

    const [contacts, setContacts] = useState([])

    const [name, setName] = useState("")

    useEffect(() => {
        fetchContacts()
    }, [])

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Input style={styles.input}>
                <Feather name="search" size={16} color={theme.colors.gray_300}></Feather>
                <Input.Field placeholder='Pesquisar pelo nome...' onChangeText={setName} value={name} />
                <Feather name="x" size={16} color={theme.colors.gray_300} onPress={() => setName("")}></Feather>
                </Input>
            </View>
            <Contact contact={{
                name: "Conor",
                image: require("@/assets/avatar.jpeg")
            }}/>

            <SectionList 
                sections={[{title: "R", data:[{id:"1", name:"Heloísa"}] }]}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Contact contact={{
                        name:item.name,
                        image: require("@/assets/avatar.jpeg")
                    }} 
                    />
                )}
                renderSectionHeader={({ section }) => 
                    (<Text style={styles.section}>{section.title}</Text>)}
                contentContainerStyle = {styles.contentList}
            />

        </View>
    )
}