import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../../components/header';

const ProfileScreen = () => {
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const loadProfileImage = async () => {
      try {
        const storedImage = await AsyncStorage.getItem('profileImage');
        if (storedImage) {
          setProfileImage(storedImage);
        }
      } catch (error) {
        console.log('Erro ao carregar a imagem:', error);
      }
    };

    loadProfileImage();
  }, []);

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
                source={{ uri: profileImage || 'https://www.example.com/user-profile.jpg' }}
                style={styles.profileImage}
            />
            </TouchableOpacity>
            <View style={styles.profileInfo}>
            <Text style={styles.userName}>João</Text>
            <Text style={styles.userEmail}>joao@gmail.com</Text>
            </View>
        </View>
        <View style={styles.actionButtons}>
            <TouchableOpacity href="/Screens/Editar_perfil" style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Editar Perfil</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.playlistsSection}>
            <Text style={styles.sectionTitle}>Minhas Playlists</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.playlistContainer}>
            <View style={styles.playlistCard}>
                <Image source={{ uri: 'https://www.example.com/playlist-image.jpg' }} style={styles.playlistImage} />
                <Text style={styles.playlistName}>Playlist 1</Text>
            </View>
            <View style={styles.playlistCard}>
                <Image source={{ uri: 'https://www.example.com/playlist-image.jpg' }} style={styles.playlistImage} />
                <Text style={styles.playlistName}>Playlist 2</Text>
            </View>
            <View style={styles.playlistCard}>
                <Image source={{ uri: 'https://www.example.com/playlist-image.jpg' }} style={styles.playlistImage} />
                <Text style={styles.playlistName}>Playlist 3</Text>
            </View>
            </ScrollView>
        </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F4F4F9',
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#374c65', 
    marginRight: 20,
  },
  profileInfo: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 16,
    color: '#888',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    width: '150px',
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#374c65',
    paddingVertical: 12,
    borderRadius: 30,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  playlistsSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  playlistContainer: {
    flexDirection: 'row',
  },
  playlistCard: {
    marginRight: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    padding: 10,
    width: 150,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playlistImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  playlistName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  followSection: {
    marginBottom: 20,
    marginTop: 20,
  },
  followInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  followCount: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});

export default ProfileScreen;
