import axios from "axios";
import { BASE_URL, AUTH_API_URL } from "./constants";
import AsyncStorage from '@react-native-community/async-storage';
// import Cookies from "universal-cookie";
// var cookies = new Cookies();
// Add a request interceptor
// console.log("TCL: interceptor", AsyncStorage.getItem("TOKEN"))

export var token = async function token(){
    return await AsyncStorage.getItem("TOKEN")
}

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 9000,
    headers: {'Bearer ': "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJmOTdkYTVjOWMzYzk0NDZmNTFiOWFiMmU3Y2EwNzdiNDhlNDhkY2ZiYWI0ZjNiODZjZDYwMjUwZDJiMDA5ZjNlZDQ4YjFlNTRiYzJlZjlmIn0.eyJhdWQiOiIyOGwxRmhJNWs1QWNjUTFMTU9iRHFlT1dlZ3ByR0dKWmhaSU5GUkNvQWJYNzE1d3JZOCIsImp0aSI6IjJmOTdkYTVjOWMzYzk0NDZmNTFiOWFiMmU3Y2EwNzdiNDhlNDhkY2ZiYWI0ZjNiODZjZDYwMjUwZDJiMDA5ZjNlZDQ4YjFlNTRiYzJlZjlmIiwiaWF0IjoxNTgxNzYwNjgzLCJuYmYiOjE1ODE3NjA2ODMsImV4cCI6MTU4MTc2NDI4Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.dAA3XYwgZ-fvFeEGb_IN6UtRarKuXHGBQk_EwehSo8aOgcO3fXi47wqiOJlLozN-MsOEf4WKmG2w-ImJ2K4HP1tam2oBjp-BxFGZFHFTf8bLgZyKzHbjQ9fDT9dOwisdWBLfT1SD-MmNGB2Rxhzh4ew0wVQkioiJu7bucsOlvAf5WVvw827_U5RxYP-TyC8dUwUPQ6-FhnRrPdHSyJo5xrIKOAZvkMMWQhvl2CIaL0XYBF1I1-u2HBOd1Ot_xclLjFqugnHd5aPgu80XNKjn6sybBh5dXgra1-ADrsZfbpbdkkqIDrNv5JN0fWoazq5ka7mnyKWYz8m9oSnAncM9rw"}
  });
  

export const axiosAuthInstance = axios.create({
  baseURL: `${AUTH_API_URL}`
});

// Add a response interceptor
// axiosInstance.interceptors.response.use(
//   function(response) {
//   console.log("TCL: response", response)
//     // Do something with response data
    // return response.data.value;
  // },
  // function(error) {
    // Do something with response error
    // if (error.response) {
    //   if (error.response.status === 401 || error.response.status === 403) {
    //     // AsyncStorage.removeItem(TOKEN);
    //   }
    //   if(_.get(error, "response.data.message.errors")) {
    //     return Promise.reject(error.response.data.message.message);
    //   }
    //   return Promise.reject(error.response.data.message);
    // } else {
    //   return Promise.reject(error);
    // }
//   }
// );

// Add a request interceptor
// axiosAuthInstance.interceptors.request.use(
//   function(config) {
//   // console.log("TCL: config", config)
//     // var token = AsyncStorage.getItem("TOKEN");
//     // if (token) {
//     //   if (config.method !== "OPTIONS") {
//     //     config.headers.authorization = `Bearer ${token}`;
//     //   }
//     // }
//     return config;
//   },
//   function(error) {
//     return Promise.reject(error);
//   }
// );

// Add a response interceptor
// axiosAuthInstance.interceptors.response.use(
//   function(response) {
//     // Do something with response data
//     return response.data.value;
//   },
//   function(error) {
//     // Do something with response error
//     if (error.response) {
//       if (error.response.status === 401 || error.response.status === 403) {
//         // AsyncStorage.removeItem(TOKEN);
//         // AsyncStorage.removeItem(USER);
//       }
//     //   if(_.get(error, "response.data.message.errors")) {
//     //     return Promise.reject(error.response.data.message.message);
//     //   }
//       return Promise.reject(error.response.data.message);
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

// export default axiosInstance;
