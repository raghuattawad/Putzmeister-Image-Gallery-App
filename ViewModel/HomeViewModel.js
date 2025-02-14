import { useState, useEffect } from 'react';
import { fetchFlickrImages } from '../NetworkHandler/apiService';

export const fetchDataFromHomeViewModel = (searchQuery) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadImages(searchQuery);
  }, [searchQuery]);

  const loadImages = async (query) => {
    try {
      setLoading(true);
      // api called from here
      const data = await fetchFlickrImages(query);
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  return { images, loading };
};
