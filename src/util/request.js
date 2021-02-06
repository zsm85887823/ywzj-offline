import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://www.yunyingxiaowu.com/foodie-api/'
})

//请求拦截
instance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)
//响应拦截
instance.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        if(error.response) {
            console.log('响应错误');
        } else if(error.request) {
            console.log('请求错误');
        } else {
            console.log('请求未发出，取消了');
        }
        return Promise.reject(error);
    }
)

//get请求封装
export function get (url, params) {
    return instance.get(url, {params: params});
}
//post请求封装
export function post (url, data, options) {
    return instance({
        ...options,
        url,
        method: 'post',
        data:data
    });
}

export default instance;