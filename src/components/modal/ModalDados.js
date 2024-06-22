import React from "react"
import {View, Text, StyleSheet} from 'react-native'

export default function ModalDados(){
    const route = useRoute()
    const {alunoNovo} = route.params

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Dados do Aluno</Text>
            <Text style={styles.text}>Matrícula: {alunoNovo.matricula}</Text>
            <Text style={styles.text}>Nome: {alunoNovo.nome}</Text>
            <Text style={styles.text}>Média: {alunoNovo.media}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 20,
        marginBottom: 10,
        color: 'blue'
    }
})