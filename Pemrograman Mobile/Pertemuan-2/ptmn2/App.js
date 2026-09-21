// Import Library
import React, { useState } from 'react';
// Import Componnent
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  SectionList,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Switch,
  Modal,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Alert,
  Platform
} from 'react';

const PROFILE = {
  name: 'Mohamad Firdaus',
  title: 'Full Stack Mobile Developer',
  email: 'mohamadfirdaus@uinssc.ac.id',
  phone: '082170735116',
  location: 'Cirebon, Jawa Barat',
  bio: 'Pengembang aplikasi Mobile yang berfokus pada React Native dan Flutter',
  avatar: 'https://lh5.googleusercontent.com/-mwBhriW4lBQ/AAAAAAAAAAI/AAAAAAAAAAA/Phl4QV1LsdY/s64-c-mo/photo.jpg',
  avatarOffline: 'assets/photo.png'
};







export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nama : Mohamad Firdaus</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
