import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nome, setNome] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = () => {
    if (!nome || !email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    // Exibe mensagem de sucesso
    setSuccessMessage('Cadastro realizado com sucesso!');
    setTimeout(() => setSuccessMessage(''), 5000); // Remove a mensagem após 5 segundos

    // Limpa os campos
    setNome('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <View style={styles.container}>
      {successMessage ? (
        <View style={styles.successMessageContainer}>
          <Text style={styles.successMessageText}>{successMessage}</Text>
        </View>
      ) : null}

      <View style={styles.content}>
        <Text style={styles.title}>Cadastro</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity href="/Screens/Login" style={styles.registerLink}>
          <Text style={styles.registerText}>Já tem uma conta? Faça Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  successMessageContainer: {
    position: 'absolute',
    top: 50,
    backgroundColor: '#d4edda',
    padding: 15,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
    borderColor: '#c3e6cb',
    borderWidth: 1,
  },
  successMessageText: {
    color: '#155724',
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    alignItems: 'center',
    width: '100%',
    maxWidth: 350,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  button: {
    width: '100%',
    padding: 16,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#374c65',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  registerLink: {
    marginTop: 10,
    alignItems: 'center',
  },
  registerText: {
    fontSize: 14,
    color: '#007bff',
  },
});
