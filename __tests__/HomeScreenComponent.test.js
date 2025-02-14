import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import HomeScreenComponent from '../screens/HomeScreenComponent';
import { fetchFlickrImages } from '../NetworkHandler/apiService';
import { useNavigation } from '@react-navigation/native';

jest.mock('../NetworkHandler/apiService'); // Mock API calls
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(), // Mock navigation
    setOptions: jest.fn(),
  }),
}));

describe('HomeScreenComponent Tests', () => {
  it('renders loading indicator initially', () => {
    const { getByTestId } = render(<HomeScreenComponent route={{}} />);
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('fetches and displays images', async () => {
    const mockImages = [
      { media: { m: 'https://example.com/image1.jpg' }, title: 'Image 1', author: 'Author 1', published: 'Date 1', tags: 'tag1' },
      { media: { m: 'https://example.com/image2.jpg' }, title: 'Image 2', author: 'Author 2', published: 'Date 2', tags: 'tag2' },
    ];
    
    fetchFlickrImages.mockResolvedValue(mockImages);

    const { getByText, findByText } = render(<HomeScreenComponent route={{}} />);

    await waitFor(() => {
      expect(getByText('Image 1')).toBeTruthy();
      expect(getByText('Image 2')).toBeTruthy();
    });
  });

  it('navigates to search screen on search icon press', () => {
    const { getByTestId } = render(<HomeScreenComponent route={{}} />);
    const searchButton = getByTestId('search-icon');

    fireEvent.press(searchButton);
    expect(useNavigation().navigate).toHaveBeenCalledWith('Search');
  });

  it('navigates to details screen when image is clicked', async () => {
    const mockImages = [{ media: { m: 'https://example.com/image.jpg' }, title: 'Test Image', author: 'Author', published: 'Date', tags: 'tag' }];
    
    fetchFlickrImages.mockResolvedValue(mockImages);

    const { getByText, findByText } = render(<HomeScreenComponent route={{}} />);
    const imageTitle = await findByText('Test Image');

    fireEvent.press(imageTitle);
    expect(useNavigation().navigate).toHaveBeenCalledWith('Details', {
      imageUrl: 'https://example.com/image.jpg',
      title: 'Test Image',
      author: 'Author',
      published: 'Date',
      tags: 'tag',
    });
  });
});
