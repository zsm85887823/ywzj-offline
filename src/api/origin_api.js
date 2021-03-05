import { get, post } from "@/util/request";

const serverAddr = "http://www.yunyingxiaowu.com:8088";
//地图列表
const queryMapList = () => {
    return get(`${serverAddr}/foodie-api/gameChara/queryMapList`)
}
//登录
const login = (params) => {
    return post(`${serverAddr}/foodie-api/gamepassport/login`, params)
}
//玩家信息
const getGameCharacter = (params) => {
    return get(`${serverAddr}/foodie-api/gamepassport/getGameCharacter`, params)
};
//玩家详细信息
const getGameCharacterActivity = (params) => {
    return get(`${serverAddr}/foodie-api/gamepassport/getGameCharacterActivity`, params)
};
//玩家装备
const getCharaEquip = (params) => {
    return post(`${serverAddr}/foodie-api/gameCharaEquip/getCharaEquip`, params)
};
//保存属性
const updateAttrPoint = (params) => {
    return post(`${serverAddr}/foodie-api/gameChara/updateAttrPoint`, params)
};
//获取角色的包裹装备
const getCharaPackage = (params) => {
    return post(`${serverAddr}/foodie-api/gameChara/getCharaPackage`, params)
};
//排行榜
const coinRanking = () => {
    return post(`${serverAddr}/foodie-api/gamepassport/coinRanking`, )
};
const moneyRanking = () => {
    return post(`${serverAddr}/foodie-api/gamepassport/moneyRanking`, )
};
const realmLandList = () => {
    return post(`${serverAddr}/foodie-api/gamepassport/realmLandList`, )
};
const realmHeavenList = () => {
    return post(`${serverAddr}/foodie-api/gamepassport/realmHeavenList`, )
};
const levelRanking = () => {
    return post(`${serverAddr}/foodie-api/gamepassport/levelRanking`, )
};
const playerOnline = () => {
    return post(`${serverAddr}/foodie-api/gamepassport/playerOnline`, )
};
const oneDamageRanking = () => {
    return post(`${serverAddr}/foodie-api/gamepassport/oneDamageRanking`, )
};
const totalDamageRanking = () => {
    return post(`${serverAddr}/foodie-api/gamepassport/totalDamageRanking`, )
};



export default {
    queryMapList,
    login,
    getGameCharacter,
    getGameCharacterActivity,
    getCharaEquip,
    updateAttrPoint,
    moneyRanking,
    coinRanking,
    realmLandList,
    realmHeavenList,
    levelRanking,
    playerOnline,
    oneDamageRanking,
    totalDamageRanking,
    getCharaPackage,


}