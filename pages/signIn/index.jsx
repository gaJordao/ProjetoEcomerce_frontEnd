import React, { useState } from 'react'
import { View, Text, TextInput, Pre, Pressablessable } from 'react-native'
import styles from './styles'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Login</Text>
            </View>
            <TextInput
                placeholder='email'
                onChangeText={setEmail}
                value={email}
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
                onPress={()=> navigation.navigate('Read')}
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