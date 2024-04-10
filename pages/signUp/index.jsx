import React, { useState } from 'react'
import { View, Text, Pressable, TextInput } from 'react-native'
import { FontAwesome, AntDesign } from "@expo/vector-icons"
import styles from './styles'
import axios from 'axios'

export default function SignUp({navigation}) {
    const [nome, setNome] = useState('')
    const [cep, setCep] = useState('')
    const [email, setEmail] = useState('')
    const [num, setNum] = useState('')
    const [password, setPassword] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [localidade, setLocalidade] = useState('')
    const [bairro, setBairro] = useState('')
    const [uf, setUf] = useState('')


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Cadastrar</Text>
            </View>
            {/* <View style={styles.foto}>
            {image && (
                <>
                    <Image source={{ uri: image }} style={styles.foto1} />
                </>
            )}
            {Image && <ActivityIndicator />}
        </View> */}
            <View style={styles.botoes}>
                <Pressable
                //onPress={gallery}
                >
                    <FontAwesome
                        name='image'
                        size={40}
                        color={'#000'}
                    />
                </Pressable>
                <Pressable
                //onPress={camera}
                >
                    <AntDesign
                        name='camera'
                        size={40}
                        color={'#000'}
                    />
                </Pressable>
            </View>

            <TextInput
                placeholder='nome'
                onChangeText={(e) => { setNome(e) }}
                value={nome}
                style={styles.caixa}
            />
            <View style={styles.cx}>
                <TextInput
                    placeholder='cep'
                    onChangeText={(e) => { setCep(e) }}
                    value={cep}
                    style={styles.caixaCEP}
                />
                <Pressable
                    onPress={pesquisar}
                    style={styles.btnPesquisar}
                >
                    <AntDesign
                        name='search1'
                        size={30}
                        color={'#000'}
                    />
                </Pressable>
            </View>

            <View style={styles.cx}>
                <Text style={styles.caixaCidade}>{logradouro}</Text>
                <TextInput
                    placeholder='nº'
                    onChangeText={(e) => setNum(e)}
                    value={num}
                    style={styles.caixaNum}
                />
            </View>

            <Text style={styles.caixaX}>{bairro}</Text>

            <View style={styles.cx}>
                <Text style={styles.caixaCidade}>{localidade}</Text>
                <Text style={styles.caixaUF}>{uf}</Text>
            </View>

            <TextInput
                placeholder='email'
                onChangeText={(e) => setEmail(e)}
                value={email}
                style={styles.caixa}
            />
            <TextInput
                placeholder='password'
                onChangeText={(e) => setPassword(e)}
                value={password}
                style={styles.caixa}
                secureTextEntry={true}
            />

            <Pressable
                style={styles.btnOk}
                onPress={signup}
            >
                <Text style={{ fontSize: 25 }}>Ok</Text>
            </Pressable>

        </View>
    )
}

