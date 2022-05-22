import axios from 'axios';

const url = 'https://wookie.codesubmit.io/movies';
const auth = 'Bearer Wookie2019';

const getMoviesService = async (searchValue) => {
    return axios.get(url, {
        headers: {
            'Authorization': auth
        },
        params: {
            q: searchValue
        }
    });
};

export default getMoviesService;