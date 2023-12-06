import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function SignIn() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [emailError, setEmailError] = useState('');
  const [senhaError, setSenhaError] = useState('');
  const [confirmSenhaError, setConfirmSenhaError] = useState('');
  const [celularError, setCelularError] = useState('');
  const [nomeError, setNomeError] = useState('');
  const [hideSenha, setHideSenha] = useState(true);
  const [hideConfirmSenha, setHideConfirmSenha] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSignUp = () => {
    const isFormValid = validateForm();

    if (isFormValid) {
      navigation.navigate('Concluido');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos corretamente.');
    }
  };

  const validateForm = () => {
    validateNome();
    validateCelular();
    validateEmail();
    validateSenha();
    validateConfirmSenha();

    // Validação dos outros campos (celular, email, senha, etc.)
    const isFieldsValid =
      nome.trim() !== '' &&
      celular.trim() !== '' &&
      email.trim() !== '' &&
      senha.trim() !== '' &&
      confirmSenha.trim() !== '';
    const isFormValid =
      !emailError &&
      !senhaError &&
      !confirmSenhaError &&
      !celularError &&
      !nomeError &&
      isFieldsValid;

    setIsFormValid(isFormValid);

    return isFormValid;
  };

  const validateNome = () => {
    if (nome.trim() === '') {
      setNomeError('Campo obrigatório');
    } else {
      setNomeError('');
    }
  };

  const validateCelular = () => {
    if (celular.trim() === '') {
      setCelularError('Campo obrigatório');
    } else if (!/^\d{11}$/.test(celular.trim())) {
      setCelularError('Número de telefone inválido');
    } else {
      setCelularError('');
    }
  };

  const validateEmail = () => {
    if (email.trim() === '') {
      setEmailError('Campo obrigatório');
    } else if (!isValidEmail(email)) {
      setEmailError('E-mail inválido');
    } else {
      setEmailError('');
    }
  };

  const validateSenha = () => {
    if (senha.trim() === '') {
      setSenhaError('Campo obrigatório');
    } else {
      setSenhaError('');
    }
  };

  const validateConfirmSenha = () => {
    if (confirmSenha.trim() === '') {
      setConfirmSenhaError('Campo obrigatório');
    } else if (senha !== confirmSenha) {
      setConfirmSenhaError('As senhas não coincidem');
    } else {
      setConfirmSenhaError('');
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 200 : 0}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>Cadastre-se</Text>
          </Animatable.View>

          <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Nome completo</Text>
            <TextInput
              placeholder='Digite seu nome'
              style={styles.input}
              value={nome}
              onChangeText={(text) => setNome(text)}
              onBlur={validateNome}
            />
            {nomeError !== '' && <Text style={styles.errorText}>{nomeError}</Text>}

            <Text style={styles.title}>Celular</Text>
            <TextInput
              placeholder='Digite seu numero de telefone'
              style={styles.input}
              keyboardType='phone-pad'
              value={celular}
              onChangeText={(text) => setCelular(text)}
              onBlur={validateCelular}
            />
            {celularError !== '' && <Text style={styles.errorText}>{celularError}</Text>}

            <Text style={styles.title}>Email</Text>
            <TextInput
              placeholder='Digite seu email'
              style={styles.input}
              keyboardType='email-address'
              value={email}
              onChangeText={(text) => setEmail(text)}
              onBlur={validateEmail}
            />
            {emailError !== '' && <Text style={styles.errorText}>{emailError}</Text>}

            <Text style={styles.title}>Senha</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                placeholder='Sua senha'
                style={styles.input}
                secureTextEntry={hideSenha}
                value={senha}
                onChangeText={(text) => setSenha(text)}
                onBlur={validateSenha}
              />
              <TouchableOpacity
                style={styles.icon}
                onPress={() => setHideSenha(!hideSenha)}
              >
                {hideSenha ? (
                  <Ionicons name="eye" color="#fff" size={25} />
                ) : (
                  <Ionicons name="eye-off" color="#fff" size={25} />
                )}
              </TouchableOpacity>
            </View>
            {senhaError !== '' && <Text style={styles.errorText}>{senhaError}</Text>}

            <Text style={styles.title}>Confirme a senha</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                placeholder='Insira novamente a mesma senha'
                style={styles.input}
                secureTextEntry={hideConfirmSenha}
                value={confirmSenha}
                onChangeText={(text) => setConfirmSenha(text)}
                onBlur={validateConfirmSenha}
              />
              <TouchableOpacity
                style={styles.icon}
                onPress={() => setHideConfirmSenha(!hideConfirmSenha)}
              >
                {hideConfirmSenha ? (
                  <Ionicons name="eye" color="#fff" size={25} />
                ) : (
                  <Ionicons name="eye-off" color="#fff" size={25} />
                )}
              </TouchableOpacity>
            </View>
            {confirmSenhaError !== '' && <Text style={styles.errorText}>{confirmSenhaError}</Text>}

            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF9ED',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E4BBB7',
  },
  containerForm: {
    backgroundColor: '#E4BBB7',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 20,
    marginTop: 28,
    color: '#fff',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ffff',
    height: 40,
    width: '100%',
    marginBottom: 12,
    fontSize: 16,
    color: '#fff',
  },
  button: {
    backgroundColor: '#D07B85',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: -30,
  },
});
