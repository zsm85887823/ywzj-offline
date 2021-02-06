import {
    get,
    post
} from '@/util/request';

const orignApis = {
    queryMapList() {
        return get("http://www.yunyingxiaowu.com:8088/foodie-api/gameChara/queryMapList")
    },
    login(params) {
        return post("http://www.yunyingxiaowu.com:8088/foodie-api/gamepassport/login", params)
    },
    getGameCharacter(params) {
        return get("http://www.yunyingxiaowu.com:8088/foodie-api/gamepassport/getGameCharacter",params)
    },
}

export default orignApis