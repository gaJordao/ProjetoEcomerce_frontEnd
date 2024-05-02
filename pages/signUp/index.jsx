import React, { useState, useEffect } from 'react'
import { View, Text, Pressable, TextInput } from 'react-native'
import { FontAwesome, AntDesign } from "@expo/vector-icons"
import styles from './styles'
import axios from 'axios'

export default function SignUp({navigation}) {
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const [erro, setErro] = useState(null)
    const [token, setToken] = useState(null)


    const createUser = async()=> {
        try{
            const response = await axios.post('http://127.0.0.1:8000/create_user',
        {
            username: usuario,
            password: password
        })
            const resp = await axios.post('http://127.0.0.1:8000/create_user',
        {
            username: usuario,
            password: password
        }) 
        setToken()
        }catch(error){
            setErro(error)
        }
    }

     return (
        <View style={styles.container}>
            <Text style={styles.title}>CREATE</Text>

            <View style={styles.campos}>
                <Text style={styles.texto2}>Nome:</Text>
                <TextInput
                    style={styles.textoNomeEmail}
                    onChangeText={setUsuario}
                    value={usuario}
                />
                <Text style={styles.texto2}>Senha:</Text>
                <TextInput
                    style={styles.addNew}
                    onChangeText={(e) => setPassword(e)}
                    value={password}
                    secureTextEntry={true}
                />
            </View>

            <View style={styles.btnBtn}>
                <Pressable
                    style={styles.btn}
                    onPress={createUser}
                >
                    <Text style={styles.btnCadastrar}>CADASTRAR</Text>
                </Pressable>
            </View>

            <View style={{ width: "80%" }}>
                <Text style={styles.textoErro}>{!erro ? '' : 'Erro: '}{erro}</Text>
            </View>
        </View>
    )
}

