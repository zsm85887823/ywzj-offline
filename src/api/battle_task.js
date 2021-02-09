import { get, post } from "@/util/request";

const serverAddr = "http://134.175.16.92:2555";

const taskStart = (params) => {
    return post(`${serverAddr}/battle_task`, params);
};

const taskStatus = (params) => {
    return get(`${serverAddr}/battle_task/${params}/status`);
};

const taskStop = (params) => {
    return get(`${serverAddr}/battle_task/${params}/stop`);
};

export default {
    taskStart,
    taskStatus,
    taskStop
};