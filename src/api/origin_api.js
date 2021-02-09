import { get, post } from "@/util/request";

const serverAddr = "http://www.yunyingxiaowu.com:8088";

const queryMapList = () => {
    return get(`${serverAddr}/foodie-api/gameChara/queryMapList`)
}

const login = (params) => {
    return post(`${serverAddr}/foodie-api/gamepassport/login`, params)
}

const getGameCharacter = (params) => {
    return get(`${serverAddr}/foodie-api/gamepassport/getGameCharacter`, params)
};

const getGameCharacterActivity = (params) => {
    return get(`${serverAddr}/foodie-api/gamepassport/getGameCharacterActivity`, params)
};

const getCharaEquip = (params) => {
    return post(`${serverAddr}/foodie-api/gameCharaEquip/getCharaEquip`, params)
};

export default {
    queryMapList,
    login,
    getGameCharacter,
    getGameCharacterActivity,
    getCharaEquip,
}