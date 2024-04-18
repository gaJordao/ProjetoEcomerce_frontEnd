import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'
import styles from './styles'
import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from 'axios'


export default function Login({ navigation }) {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState(null)

    useEffect(()=>{
        AsyncStorage.setItem('token', token)
        .then(()=>{
            if(token!=null){
                console.log("Token SignIn: ", token)
                console.log("Token Sucesso!")
            }
        })
        .catch((erro)=>{
            console.error("O Erro é",erro);
        })
    },[token])


    const fatchToken = async ()=>{
        try{
            const response = await axios.post(
                'http://127.0.0.1:8000/token/', 
                {
                    username: user,
                    password: password
                }
            )
            console.log(response)
            console.log(response.data.access)
            setToken(response.data.access)
            navigation.navigate('Read')
        }catch(erro){
            console.error("O Errro é: ",erro); 
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Login</Text>
            </View>
            <TextInput
                placeholder='user'
                onChangeText={setUser}
                value={user}
                style={styles.caixa}
            />
            <TextInput
                placeholder='password'
                onChangeText={setPassword}
                value={password}
                style={styles.caixa}
                secureTextEntry={true}
            />

            <Pressable
                style={styles.btnOk}
                onPress={fatchToken}
            >
                <Text style={{ fontSize: 25 }}>Sign In</Text>
            </Pressable>

            <Pressable
                style={styles.btnOk}
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={{ fontSize: 25 }}>Sign Up</Text>
            </Pressable>

        </View>
    )
}