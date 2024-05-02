import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage"
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
    const [pass, setPassword] = useState('')
    const [token, setToken] = useState('')
    const dados = {
        'nome': usuario,
        'rua': rua,
        'bairro': bairro,
        'cidade': cidade,
        'uf': uf,
        'cep': cep,
        'email': email,
        'numero': num
    }

    useEffect(()=>{
        AsyncStorage.getItem('token')
        .then((tokenY)=>{
                console.log("token Update: ", tokenY)
                setToken(tokenY)
        })
        .catch((erro)=>{
            console.error("O Erro é",erro);
        })
    },[])

    const get = async () => {
        try{
        const response = await axios.get('http://127.0.0.1:8000/api/usuario/' + userId,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
                setUsuario(response.data.nome)
                setRua(response.data.rua)
                setBairro(response.data.bairro)
                setCidade(response.data.cidade)
                setUF(response.data.uf)
                setCep(response.data.cep)
                setEmail(response.data.email)
            }
            catch(erro){
                console.error("Deu erro ",erro);
            }
    }

    const put = async(dados, token) => {
        axios.put('http://127.0.0.1:8000/api/usuario/' + userId, dados,{
        headers: {
                    Authorization: `Bearer ${token}`
                },
            });
                setUsuario('')
                setRua('')
                setBairro('')
                setCidade('')
                setUF('')
                setCep('')
                setNum('')
                setEmail('')
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>UPDATE</Text>
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
                <TextInput
                    style={styles.textoNomeEmail}
                    onChangeText={setUsuario}
                    value={usuario}
                />
                <View style={styles.cx}>
                    <Text style={styles.texto2}>Cep:</Text>
                </View>
                <View style={styles.cx}>
                    <TextInput
                        style={styles.textoCep}
                        onChangeText={setCep}
                        value={cep}
                    />
                    <Pressable
                        style={styles.btnBuscar}
                        onPress={get}
                    >
                        <Text style={{ fontWeight: 'bold', color: '#fff' }}>Buscar</Text>
                    </Pressable>
                </View>
                <View style={styles.cx}>
                    <Text style={styles.textoCidade2}>Rua:</Text>
                    <Text style={styles.textoUf2}>      Nº</Text>
                </View>
                <View style={styles.cx}>
                    <TextInput
                        style={styles.texto}
                        onChangeText={setRua}
                        value={rua}
                    />
                    <TextInput
                        style={styles.textoNum}
                        onChangeText={setNum}
                        value={num}
                    />
                </View>
                <Text style={styles.texto2}>Bairro:</Text>
                <TextInput
                    style={styles.texto}
                    onChangeText={setBairro}
                    value={bairro}
                />

                <View style={styles.cx}>
                    <Text style={styles.textoCidade2}>Cidade:</Text>
                    <Text style={styles.textoUf2}>UF:</Text>
                </View>
                <View style={styles.cx}>
                    <TextInput
                        style={styles.textoCidade}
                        onChangeText={setCidade}
                        value={cidade}
                    />
                    <TextInput
                        style={styles.textoUf}
                        onChangeText={setUF}
                        value={uf}
                    />
                </View>

                <Text style={styles.texto2}>Email:</Text>
                <TextInput
                    style={styles.textoNomeEmail}
                    onChangeText={setEmail}
                    value={email}
                />

                <Text style={styles.texto2}>Senha:</Text>
                <TextInput
                    style={styles.addNew}
                    onChangeText={(e) => setPassword(e)}
                    value={pass}
                    secureTextEntry={true}
                />
            </View>

            <Pressable
                    style={styles.btnDeletar}
                    onPress={()=>put(dados,token)}
                >
                    <Text style={{ fontWeight: 'bold', color: "#fff" }}>ENVIAR</Text>
    
                </Pressable>
        </View>
    );
}


