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
//鉴定装备
const appraisalEquitBypackage = (params) => {
    return post(`${serverAddr}/foodie-api/gameCharaEquip/appraisalEquitBypackage`, params)
};
//装备强化
const equitStrengThen = (params) => {
    return post(`${serverAddr}/foodie-api/gameCharaEquip/equitStrengThen`, params)
};
//使用背包中的装备
const useEquitBypackage = (params) => {
    return post(`${serverAddr}/foodie-api/gameCharaEquip/useEquitBypackage`, params)
};
//背包物品锁定
const itemBind = (params) => {
    return post(`${serverAddr}/foodie-api/gameMarket/itemBind`, params)
};
//一键出售
const oneClickSale = (params) => {
    return post(`${serverAddr}/foodie-api/gameCharaEquip/oneClickSale`, params)
};
//获取角色未生效的技能
const getCharaSkill = (params) => {
    return post(`${serverAddr}/foodie-api/gameCharaSkill/getCharaSkill`, params)
};
//获取角色已装备的技能
const getCharaUseSkill = (params) => {
    return post(`${serverAddr}/foodie-api/gameCharaSkill/getCharaUseSkill`, params)
};
//角色卸下技能(使用技能id)
const makeDownSkill = (params) => {
    return post(`${serverAddr}/foodie-api/gameCharaSkill/makeDownSkill`, params)
};
//角色装备技能(使用技能id)
const makeSkill = (params) => {
    return post(`${serverAddr}/foodie-api/gameCharaSkill/makeSkill`, params)
};
//角色升级技能(使用技能id)
const upgradeSkill = (params) => {
    return post(`${serverAddr}/foodie-api/gameCharaSkill/upgradeSkill`, params)
};
//获取角色的包裹材料
const getCharaMaterial = (params) => {
    return post(`${serverAddr}/foodie-api/gameChara/getCharaMaterial`, params)
};
//整理角色的包裹材料
const arrangeCharaMaterial = (params) => {
    return post(`${serverAddr}/foodie-api/gameChara/arrangeCharaMaterial`, params)
};
//使用背包中的道具
const usePropypackage = (params) => {
    return post(`${serverAddr}/foodie-api/gameCharaEquip/usePropypackage`, params)
};
//合成列表
const getSyntheticList = () => {
    return post(`${serverAddr}/foodie-api/gameRealm/getSyntheticList`)
};
//合成
const breakThroughTheSynthetic = (params) => {
    return post(`${serverAddr}/foodie-api/gameRealm/breakThroughTheSynthetic`, params)
};
//获取境界加成
const getRealmBonus = (params) => {
    return post(`${serverAddr}/foodie-api/gameRealm/getRealmBonus`, params)
};
//获取突破境界金钱和材料
const getCaiRealm = (params) => {
    return post(`${serverAddr}/foodie-api/gameRealm/getCaiRealm`, params)
};
//突破境界
const breakThroughTheRealm = (params) => {
    return post(`${serverAddr}/foodie-api/gameRealm/breakThroughTheRealm`, params)
};
//商城信息列表
const waresList = (params) => {
    return post(`${serverAddr}/foodie-api/gameMarket/waresList`, params)
};
//购买物品接口
const buyWares = (params) => {
    return post(`${serverAddr}/foodie-api/gameMarket/buyWares`, params)
};





//排行榜
const coinRanking = () => {
    return post(`${serverAddr}/foodie-api/gamepassport/coinRanking`,)
};
const moneyRanking = () => {
    return post(`${serverAddr}/foodie-api/gamepassport/moneyRanking`,)
};
const realmLandList = () => {
    return post(`${serverAddr}/foodie-api/gamepassport/realmLandList`,)
};
const realmHeavenList = () => {
    return post(`${serverAddr}/foodie-api/gamepassport/realmHeavenList`,)
};
const levelRanking = () => {
    return post(`${serverAddr}/foodie-api/gamepassport/levelRanking`,)
};
const playerOnline = () => {
    return post(`${serverAddr}/foodie-api/gamepassport/playerOnline`,)
};
const oneDamageRanking = () => {
    return post(`${serverAddr}/foodie-api/gamepassport/oneDamageRanking`,)
};
const totalDamageRanking = () => {
    return post(`${serverAddr}/foodie-api/gamepassport/totalDamageRanking`,)
};



export default {
    waresList,
    buyWares,
    getCharaSkill,
    breakThroughTheRealm,
    getRealmBonus,
    getCaiRealm,
    breakThroughTheSynthetic,
    getSyntheticList,
    usePropypackage,
    arrangeCharaMaterial,
    getCharaMaterial,
    upgradeSkill,
    getCharaUseSkill,
    makeSkill,
    makeDownSkill,
    queryMapList,
    oneClickSale,
    itemBind,
    useEquitBypackage,
    equitStrengThen,
    appraisalEquitBypackage,
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