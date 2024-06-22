import React from "react"
import {View, Text, StyleSheet} from 'react-native'
import { useRoute } from "@react-navigation/native"

export function ModalDados(){
    const route = useRoute()
    const {alunoNovo} = route.params

    return(
        <View>
            <Text>Dados do Aluno</Text>
            <Text>Matrícula: {alunoNovo.matricula}</Text>
            <Text>Nome: {alunoNovo.nome}</Text>
            <Text>Média: {alunoNovo.media}</Text>
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