import axios from 'axios';

const KEY = '21282132-86f7ea58f9a9b3bb2c4722a7e';

const fetchImage = async (searchQuery, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return response.data;
};

export default fetchImage;

