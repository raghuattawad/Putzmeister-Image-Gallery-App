
import axios from 'axios';
import { Alert } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { BASE_URL } from '../utils/Constants';
import { StringUtil } from '../utils/Strings';
import { FlickrImageModel } from '../Model/FlickrImageModel'; 

export const fetchFlickrImages = async (tags = '') => {
  try {
    // Check internet connection
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) {
      Alert.alert(StringUtil.NO_INTERNET_TITLE, StringUtil.NO_INTERNET_MESSAGE);
      return [];
    }

    const response = await axios.get(BASE_URL, {
      params: {
        format: 'json',
        nojsoncallback: 1,
        tags: tags,
      },
    });

    // Convert response to an array of FlickrImageModel objects
    return response.data.items.map((item) => new FlickrImageModel(item));
  } catch (error) {
    console.error(StringUtil.FETCH_ERROR, error);

    // Alert only on network errors (not API errors)
    if (!error.response) {
      Alert.alert(StringUtil.NO_INTERNET_TITLE, StringUtil.NO_INTERNET_MESSAGE);
    }

    return [];
  }
};

