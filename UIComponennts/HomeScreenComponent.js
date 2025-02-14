import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchDataFromHomeViewModel } from '../ViewModel/HomeViewModel';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import { StringUtil } from '../utils/Strings';

const HomeScreenComponent = ({ route }) => {
  const navigation = useNavigation();
  const defaultQuery = StringUtil.DEFAULT_SEARCH_QUERY;
  // query input //
  const [searchQuery, setSearchQuery] = useState(route.params?.query || defaultQuery);
  //
  const { images, loading } = fetchDataFromHomeViewModel(searchQuery);

  // Update searchQuery when returning from SearchScreen
  useFocusEffect(
    useCallback(() => {
      setSearchQuery(route.params?.query || defaultQuery);
    }, [route.params?.query])
  );

  //life cycle method when inital loaded
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Ionicons name="search" size={24} color="black" style={{ marginRight: 15 }} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => navigation.navigate('Details', { 
              imageUrl: item.imageUrl, 
              title: item.title, 
              author: item.author, 
              published: item.published,
              tags: item.tags
            })}
          >
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreenComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
});
