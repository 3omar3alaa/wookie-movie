import axios from 'axios';

const url = 'https://wookie.codesubmit.io/movies';
const auth = 'Bearer Wookie2019';

const getMoviesService = async (searchValue) => {
    // const response = await axios.get(url, {
    //     headers: {
    //         'Authorization': auth
    //     },
    //     params: {
    //         q: searchValue
    //     }
    // });
    // // console.log(response.data.movies);
    // return response.data.movies;
    // // .then(response => response.data
    // // ).catch(error => {
    // //     console.log(error)
    // // })

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