import axios from "axios";

// 创建请求实例
const instance = axios.create({
    withCredentials: false,
    timeout: 5000,
});

//请求拦截
instance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

//响应拦截
instance.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        if (error.response) {
            console.log('响应错误');
        } else if (error.request) {
            console.log('请求错误');
        } else {
            console.log('请求未发出，取消了');
        }
        return Promise.reject(error);
    }
);

// Get方法
const get = (url, params) => {
    return instance.get(url, { params });
};

// Post方法
const post = (url, data, options) => {
    return instance({
        ...options,
        url,
        method: "post",
        data: data,
    });
};

export {
    get,
    post,
};

export default instance;