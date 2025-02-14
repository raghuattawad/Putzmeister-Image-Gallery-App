import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { StringUtil } from '../utils/Strings';

const DetailsScreenComponent = ({ route }) => {
  const { imageUrl, title, author, published, tags } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.fullImage} />
      
      <View style={styles.metadataContainer}>
        <Text style={styles.title}>{title || StringUtil.DETAILS.NO_TITLE}</Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>{StringUtil.DETAILS.AUTHOR}</Text> {author}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>{StringUtil.DETAILS.PUBLISHED}</Text> {new Date(published).toDateString()}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>{StringUtil.DETAILS.TAGS}</Text> {tags || StringUtil.DETAILS.NO_TAGS}
        </Text>
      </View>
    </ScrollView>
  );
};

export default DetailsScreenComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  fullImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  metadataContainer: {
    marginTop: 10,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
});
