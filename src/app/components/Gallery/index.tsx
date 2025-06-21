import ImageGallery from 'react-image-gallery';
import './gallery-overrides.css';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: 'images/portfolio/1.jpg',
    description: 'Restobar Santiago - 2024',
    thumbnail: 'images/portfolio/1.jpg',
  },
  {
    original: 'images/portfolio/2.jpg',
    description: 'This is the second image in the gallery.',
    thumbnail: 'images/portfolio/2.jpg',
  },
  {
    original: 'images/portfolio/3.jpg',
    description: 'This is the third image in the gallery.',
    thumbnail: 'images/portfolio/3.jpg',
  },
  {
    original: 'images/portfolio/4.jpg',
    description: 'This is the fourth image in the gallery.',
    thumbnail: 'images/portfolio/4.jpg',
  },
  {
    original: 'images/portfolio/5.jpg',
    description: 'This is the fifth image in the gallery.',
    thumbnail: 'images/portfolio/5.jpg',
  },
  {
    original: 'images/portfolio/6.jpg',
    description: 'This is the sixth image in the gallery.',
    thumbnail: 'images/portfolio/6.jpg',
  },
  {
    original: 'images/portfolio/7.jpg',
    description: 'This is the seventh image in the gallery.',
    thumbnail: 'images/portfolio/7.jpg',
  },
  {
    original: 'images/portfolio/8.jpg',
    description: 'This is the eighth image in the gallery.',
    thumbnail: 'images/portfolio/8.jpg',
  },
];

const Gallery = () => {
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      showFullscreenButton={false}
      autoPlay={true}
      showNav={false}
    />
  );
};
export default Gallery;
