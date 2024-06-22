import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

export default function App(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Dados do Aluno</Text>

            <TextInput style={styles.textinput}
                keyboardType='numeric'
                placeholder='Matrícula'
            />
            <TextInput style={styles.textinput}
                placeholder='Nome Completo'
            />
            <TextInput style={styles.textinput}
                keyboardType='numeric'
                placeholder='Média'
            />

            <TouchableOpacity style={styles.button}>
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
        alignItems: 'center',
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