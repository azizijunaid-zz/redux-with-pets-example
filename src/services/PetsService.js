import {BASE_URL} from '../util/constants';
// import AsyncStorage from '@react-native-community/async-storage';
// import Cookies from "universal-cookie";
// var cookies = new Cookies();
import {axiosAuthInstance, axiosInstance, token} from '../util/HttpInterceptor';
const PetsService = {
  
  getALLPets: async () => {
    console.log('cookies token', await token());
    return axiosInstance.get(`${BASE_URL}`, {
      headers: {Authorization: `Bearer ${await token()}`},
    });

    // return axiosInstance.get(`${BASE_URL}`);
  },

  getAuthToken: async () => {
    return axiosAuthInstance.post('https://api.petfinder.com/v2/oauth2/token', {
      grant_type: 'client_credentials',
      client_id: '28l1FhI5k5AccQ1LMObDqeOWegprGGJZhZINFRCoAbX715wrY8',
      client_secret: '6yygrWiOsfhnVERrf0lLt0wK3rNmd1wEfYQyc61Y',
    });
  },
};


export default PetsService;
