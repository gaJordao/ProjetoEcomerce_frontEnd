import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import styles from './styles';

export default function Data() {

    // ############# POST ########################
    const [userIdPost, setUserIdPost] = useState(0)
    const [usuarioPost, setUsuarioPost] = useState('')
    const [ruaPost, setRuaPost] = useState('')
    const [bairroPost, setBairroPost] = useState('')
    const [cidadePost, setCidadePost] = useState('')
    const [ufPost, setUFPost] = useState('')
    const [cepPost, setCepPost] = useState('')
    const [emailPost, setEmailPost] = useState('')
    const [numPost, setNumPost] = useState('')
    const [passPost, setPasswordPost] = useState('')

    const post = () => {
        axios.post('http://127.0.0.1:8000/api/usuarios', {
            'nome': usuarioPost,
            'rua': ruaPost,
            'bairro': bairroPost,
            'cidade': cidadePost,
            'uf': ufPost,
            'cep': cepPost,
            'email': emailPost,
            'numero': numPost
        }).then((response) => {
            console.log(response)
            setUserIdPost('')
            setUsuarioPost('')
            setRuaPost('')
            setBairroPost('')
            setCidadePost('')
            setUFPost('')
            setCepPost('')
            setEmailPost('')
            setNumPost('')
            setPasswordPost('')
        }).catch((error) => {
            console.log(error)
        })
    }

    const buscar = () => {
        axios.get('https://viacep.com.br/ws/' + cepPost + '/json/')
            .then((response) => {
                setRuaPost(response.data.logradouro)
                setBairroPost(response.data.bairro)
                setCidadePost(response.data.localidade)
                setUFPost(response.data.uf)
                setNumPost(response.data.numero)
            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CREATE</Text>

            {/* ##################### POST ############################ */}
            <View>

            </View>

            <View style={styles.campos}>
                <Text style={styles.texto2}>Nome:</Text>
                <TextInput
                    style={styles.textoNomeEmailPost}
                    onChangeText={setUsuarioPost}
                    value={usuarioPost}
                />
                <View style={styles.cx}>
                    <Text style={styles.texto2}>Cep:</Text>
                </View>
                <View style={styles.cx}>
                    <TextInput
                        style={styles.textoCep}
                        onChangeText={setCepPost}
                        value={cepPost}
                    />
                    <Pressable
                        style={styles.btnBuscar}
                        onPress={buscar}
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
                        style={styles.textoPost}
                        onChangeText={setRuaPost}
                        value={ruaPost}
                    />
                    <TextInput
                        style={styles.textoNumPost}
                        onChangeText={setNumPost}
                        value={numPost}
                    />
                </View>
                <Text style={styles.texto2}>Bairro:</Text>
                <TextInput
                    style={styles.textoPost}
                    onChangeText={setBairroPost}
                    value={bairroPost}
                />
                <View style={styles.cx}>
                    <Text style={styles.textoCidade2}>Cidade:</Text>
                    <Text style={styles.textoUf2}>UF:</Text>
                </View>
                <View style={styles.cx}>
                    <TextInput
                        style={styles.textoCidadePost}
                        onChangeText={setCidadePost}
                        value={cidadePost}
                    />
                    <TextInput
                        style={styles.textoUfPost}
                        onChangeText={setUFPost}
                        value={ufPost}
                    />
                </View>
                <Text style={styles.texto2}>Email:</Text>
                <TextInput
                    style={styles.textoNomeEmailPost}
                    onChangeText={setEmailPost}
                    value={emailPost}
                />


                <Text style={styles.texto2}>Senha:</Text>
                <TextInput
                    style={styles.addNew}
                    onChangeText={(e) => setPasswordPost(e)}
                    value={passPost}
                    secureTextEntry={true}
                />
                <Pressable
                    style={styles.btnPost}
                    onPress={post}
                >
                    <Text style={styles.btnCadastrar}>CADASTRAR</Text>
                </Pressable>
            </View>
        </View>
    );
}


