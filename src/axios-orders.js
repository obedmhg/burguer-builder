import axios from 'axios';

const instance =  axios.create(
    {baseURL: 'https://react-burger-builder-33.firebaseio.com/'}
);

export default instance;