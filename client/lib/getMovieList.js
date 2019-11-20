import axios from 'axios';

var getMovieList = (callback) => {
    axios.get('/movies')
    .then(res => {
        console.log(res.data)
        if (callback) {
            callback(res.data);
        }
    });
};

export default getMovieList;