import { get, post } from "@/util/request";

const serverAddr = "http://106.52.122.211:2555";

const taskStart = (params) => {
    return post(`${serverAddr}/battle_task`, params);
};

const taskStatus = (params) => {
    return get(`${serverAddr}/battle_task/${params}/status`);
};

const taskStop = (params) => {
    return get(`${serverAddr}/battle_task/${params}/stop`);
};
const goodsget = () => {
    return get(`/goods.json`);
};

export default {
    taskStart,
    taskStatus,
    taskStop,
    goodsget,
};