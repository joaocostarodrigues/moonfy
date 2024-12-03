import Header from '../../../components/header';
import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Home = () => {
  // Dados fictícios
  const [musicas] = useState([
    {
      id: '1',
      trackName: 'The Bidding',
      artistName: 'Tally Hall',
      artworkUrl100: 'https://cdn-images.dzcdn.net/images/cover/cadb7940af1b6ae8363ae0af8441dffa/0x1900-000000-80-0-0.jpg',
      previewUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      id: '2',
      trackName: 'My Michelle',
      artistName: "Guns N' Roses",
      artworkUrl100: 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/07/Guns-N-Roses-Appetite-For-Destruction.jpg',
      previewUrl: '',
    },
    {
      id: '3',
      trackName: 'Paradise City',
      artistName: "Guns N' Rose",
      artworkUrl100: 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/07/Guns-N-Roses-Appetite-For-Destruction.jpg',
      previewUrl: 'https://example.com/preview3.mp3',
    },
    {
      id: '4',
      trackName: 'War Pigs',
      artistName: 'Blach Sabbath',
      artworkUrl100: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75q7DiVXb41-zIZ7ZuzDSD4yCQ-i4KvP7jA&s',
      previewUrl: 'https://example.com/preview4.mp3',
    },
    {
      id: '5',
      trackName: 'Nêga Jurema',
      artistName: 'Raimundos',
      artworkUrl100: 'https://upload.wikimedia.org/wikipedia/pt/6/60/Raimundos1994.jpg',
      previewUrl: 'https://example.com/preview4.mp3',
    },
    {
      id: '6',
      trackName: 'Réu Confesso',
      artistName: 'Tim Maia',
      artworkUrl100: 'https://i.scdn.co/image/ab67616d0000b273c5ba65ef4043539374a3de16',
      previewUrl: 'https://example.com/preview4.mp3',
    },
    {
      id: '7',
      trackName: "MM's",
      artistName: 'Raimundos',
      artworkUrl100: 'https://upload.wikimedia.org/wikipedia/pt/6/60/Raimundos1994.jpg',
      previewUrl: 'https://example.com/preview4.mp3',
    },
    {
      id: '8',
      trackName: 'Iron Man',
      artistName: 'Blach Sabbath',
      artworkUrl100: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75q7DiVXb41-zIZ7ZuzDSD4yCQ-i4KvP7jA&s',
      previewUrl: 'https://example.com/preview4.mp3',
    },
    {
      id: '9',
      trackName: 'Só Depois',
      artistName: 'Grupo Revelação',
      artworkUrl100: 'https://i.scdn.co/image/ab67616d0000b2730bec3bb69deb93d5eb432f3c',
      previewUrl: 'https://example.com/preview4.mp3',
    },
    {
      id: '10',
      trackName: 'Pisando Descalço',
      artistName: 'Maneva',
      artworkUrl100: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYeYB_anlMq93ef9pX2dnzigfr46navfkZiA&s',
      previewUrl: 'https://example.com/preview4.mp3',
    },
    {
      id: '11',
      trackName: 'Auto-Reverse',
      artistName: 'Rappa',
      artworkUrl100: 'https://akamai.sscdn.co/letras/360x360/albuns/c/9/e/e/314131380216035.jpg',
      previewUrl: 'https://example.com/preview4.mp3',
    },
    {
      id: '12',
      trackName: 'Polka Face',
      artistName: 'Weird AI',
      artworkUrl100: 'https://i.scdn.co/image/ab67616d0000b273398c74bfb944e80e3a01a74f',
      previewUrl: 'https://example.com/preview4.mp3',
    },
    {
      id: '13',
      trackName: 'Rocket Queen',
      artistName: "Guns N' Rose",
      artworkUrl100: 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/07/Guns-N-Roses-Appetite-For-Destruction.jpg',
      previewUrl: '',
    },
    {
      id: '14',
      trackName: "Sweet Child O'Mine",
      artistName: "Guns N' Rose",
      artworkUrl100: 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/07/Guns-N-Roses-Appetite-For-Destruction.jpg',
      previewUrl: '',
    },
    {
      id: '15',
      trackName: 'Welcome To The Jungle',
      artistName: "Guns N' Rose",
      artworkUrl100: 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/07/Guns-N-Roses-Appetite-For-Destruction.jpg',
      previewUrl: '',
    },
    {
      id: '16',
      trackName: "Rapante",
      artistName: 'Raimundos',
      artworkUrl100: 'https://upload.wikimedia.org/wikipedia/pt/6/60/Raimundos1994.jpg',
      previewUrl: 'https://example.com/preview4.mp3',
    },
    {
      id: '17',
      trackName: "Puteiro em João Pessoa",
      artistName: 'Raimundos',
      artworkUrl100: 'https://upload.wikimedia.org/wikipedia/pt/6/60/Raimundos1994.jpg',
      previewUrl: 'https://example.com/preview4.mp3',
    },
    {
      id: '18',
      trackName: "Do For Love",
      artistName: '2Pac',
      artworkUrl100: 'https://i.scdn.co/image/ab67616d0000b2738e0ff34ad21955b6f4da9b86',
      previewUrl: 'https://example.com/preview4.mp3',
    },
  ]);

  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={musicas}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Image
                source={{ uri: item.artworkUrl100 }}
                style={styles.albumImage}
              />
              <Text style={styles.title} numberOfLines={1}>
                {item.trackName}
              </Text>
              <Text style={styles.artist} numberOfLines={1}>
                {item.artistName}
              </Text>
              <TouchableOpacity
                style={styles.playButton}
                onPress={() => handlePlay(item)}
              >
                <Text style={styles.playButtonText}>Tocar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={styles.list}
      />

      {currentTrack && (
        <View style={styles.playerContainer}>
          <Image
            source={{ uri: currentTrack.artworkUrl100 }}
            style={styles.playerImage}
          />
          <View style={styles.playerInfo}>
            <Text style={styles.playerTrack} numberOfLines={1}>
              {currentTrack.trackName}
            </Text>
            <Text style={styles.playerArtist} numberOfLines={1}>
              {currentTrack.artistName}
            </Text>
          </View>
          <TouchableOpacity onPress={togglePlayPause} style={styles.playerButton}>
            <Text style={styles.playerButtonText}>
              {isPlaying ? 'Pausar' : 'Tocar'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  cardContainer: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  albumImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 8,
    textAlign: 'center',
  },
  artist: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
  },
  playButton: {
    backgroundColor: '#374c65',
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  playButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  playerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#374c65',
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  playerImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  playerInfo: {
    flex: 1,
    marginLeft: 10,
  },
  playerTrack: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  playerArtist: {
    fontSize: 12,
    color: '#ccc',
  },
  playerButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#1F1F1F',
    borderRadius: 25,
  },
  playerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Home;
