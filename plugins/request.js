import axios from 'axios'

const baseURL = 'https://api.realworld.io'
export const instance = axios.create({
  baseURL,
  timeout: 5000,
  // headers: {'Content-Type': 'application/json;'}
});

// instance.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   // axios统一处理token
//   config.headers.Authorization = 'Token jwt.token.here'
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

// export const request = (url, methods, data) => {
//   console.log('data...', data)
//   return instance({
//     url: url,
//     method: methods || 'GET',
//     // headers: {
//     //   // 这里写死了页面的token
//     //   Authorization: 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjI0Njc3NzYwNjVAcXEuY29tIiwidXNlcm5hbWUiOiJ6d3EiLCJpYXQiOjE2NDk1MDk3NTIsImV4cCI6MTY1NDY5Mzc1Mn0.f5OMMT7FPalZ9wd6Q0AWbcGP2kudnIRbfjce-eSaZ9Q'
//     // },
//     data
//   })
// }

export default (context) => {
  // console.log('context', context)
  instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // axios统一处理token
    const user = context.store.state.user.user
    if (user && user.token) {
      config.headers.Authorization = 'Token ' + user.token
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
  // const request = (url, methods, data) => {
  //   console.log('data...', data)
  //   return instance({
  //     url: url,
  //     method: methods || 'GET',
  //     // headers: {
  //     //   // 这里写死了页面的token
  //     //   Authorization: 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjI0Njc3NzYwNjVAcXEuY29tIiwidXNlcm5hbWUiOiJ6d3EiLCJpYXQiOjE2NDk1MDk3NTIsImV4cCI6MTY1NDY5Mzc1Mn0.f5OMMT7FPalZ9wd6Q0AWbcGP2kudnIRbfjce-eSaZ9Q'
  //     // },
  //     data
  //   })
  // }
  // return request
}