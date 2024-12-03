import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Button, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native'; 
import Header from '../../../components/header';

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const storedName = await AsyncStorage.getItem('userName');
        const storedEmail = await AsyncStorage.getItem('userEmail');
        const storedImage = await AsyncStorage.getItem('profileImage');
        
        if (storedName) setName(storedName);
        if (storedEmail) setEmail(storedEmail);
        if (storedImage) setProfileImage(storedImage);
      } catch (error) {
        console.log('Erro ao carregar os dados:', error);
      }
    };

    loadProfileData();
  }, []);

  const saveProfileData = async () => {
    try {
      await AsyncStorage.setItem('userName', name);
      await AsyncStorage.setItem('userEmail', email);
      if (profileImage) {
        await AsyncStorage.setItem('profileImage', profileImage);
      }
      alert('Perfil atualizado com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.log('Erro ao salvar os dados:', error);
    }
  };

  const handleSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.5,
        includeBase64: false,
      },
      async (response) => {
        if (response.assets && response.assets.length > 0) {
          const selectedImage = response.assets[0].uri;
          setProfileImage(selectedImage);

          try {
            await AsyncStorage.setItem('profileImage', selectedImage);
          } catch (error) {
            console.log('Erro ao salvar a imagem:', error);
          }
        }
      }
    );
  };

  return (
    <View>
        <Header/>
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <TouchableOpacity onPress={handleSelectImage}>
          <Image
            source={{ uri: profileImage || 'https://www.example.com/default-profile.jpg' }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.inputLabel}>Nome</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Digite seu nome"
      />

      <Text style={styles.inputLabel}>E-mail</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.saveButton} onPress={saveProfileData}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F4F4F9',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#374c65',
  },
  inputLabel: {
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: '#374c65',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
