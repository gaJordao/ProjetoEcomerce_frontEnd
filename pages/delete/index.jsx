import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import styles from './styles';


export default function Data() {

    // ############# GET ########################
    const [userId, setUserId] = useState(0)
    const [usuario, setUsuario] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUF] = useState('')
    const [cep, setCep] = useState('')
    const [email, setEmail] = useState('')
    const [num, setNum] = useState('')
    const [userAdd, setUserEmail] = useState('')

    const get = () => {
        axios.get('http://127.0.0.1:8000/api/usuario/' + userId)
            .then((response) => {
                setUsuario(response.data.nome)
                setRua(response.data.rua)
                setBairro(response.data.bairro)
                setCidade(response.data.cidade)
                setUF(response.data.uf)
                setCep(response.data.cep)
                setEmail(response.data.email)
            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>DELETE</Text>
            <Text style={styles.texto2}>ID:</Text>
            <TextInput
                style={styles.ID}
                onChangeText={(e) => setUserId(e)}
            />
            {/* ##################### GET  ############################ */}
            <View>
                            <Pressable
                    style={styles.btn}
                    onPress={get}
                >
                    <Text style={{ fontWeight: 'bold', color: "#fff" }}>BUSCAR</Text>
                </Pressable>
            </View>
            
            <View style={styles.campos}>
                <Text style={styles.texto2}>Nome:</Text>
                <Text style={styles.textoNomeEmail}>{usuario}</Text>
                <Text style={styles.texto2}>Cep:</Text>
                <Text style={styles.textoNomeEmail}>{cep}</Text>
                <Text style={styles.texto2}>Rua:</Text>
                <Text style={styles.texto}>{rua}</Text>
                <Text style={styles.texto2}>Bairro:</Text>
                <Text style={styles.texto}>{bairro}</Text>
                <View style={styles.cx}>
                    <Text style={styles.textoCidade2}>Cidade:</Text>
                    <Text style={styles.textoUf2}>UF:</Text>
                </View>
                <View style={styles.cx}>
                    <Text style={styles.textoCidade}>{cidade}</Text>
                    <Text style={styles.textoUf}>{uf}</Text>
                </View>
                <Text style={styles.texto2}>Email:</Text>
                <Text style={styles.textoNomeEmail}>{email}</Text>
            </View>

            <Pressable
                    style={styles.btnDeletar}
                    onPress={get}
                >
                    <Text style={{ fontWeight: 'bold', color: "#fff" }}>DELETAR</Text>
                </Pressable>
        </View>
    );
}


