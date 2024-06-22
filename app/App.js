import React, { useState } from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function App(){
    const [matricula, setMatricula] = useState('')
    const [nome, setNome] = useState('')
    const [media, setMedia] = useState('')

    const navigation = useNavigation()

    function saveData(){
        const alunoNovo = {matricula, nome, media}
        navigation.navigate('ModalDados', {alunoNovo})
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Dados do Aluno</Text>

            <TextInput style={styles.textinput}
                keyboardType='numeric'
                placeholder='Matrícula'
                value={matricula}
                onChangeText={text => setMatricula(text)}
            />
            <TextInput style={styles.textinput}
                placeholder='Nome Completo'
                value={nome}
                onChangeText={text => setNome(text)}

            />
            <TextInput style={styles.textinput}
                keyboardType='numeric'
                placeholder='Média'
                value={media}
                onChangeText={text => setMedia(text)}
            />

            <TouchableOpacity style={styles.button} onPress={saveData}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        marginBottom: 50,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue'
    },

    textinput: {
        backgroundColor: 'yellow',
        padding: 30,
        marginBottom: 20,
        marginTop: 10,
        fontSize: 25,
        width: '80%'
    },

    button: {
        backgroundColor: 'red',
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10
    },

    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'violet'
    }
})