import { get } from '@/util/request';

const orignApis = {
    startTask() {
        return get("http://www.yunyingxiaowu.com:8088/foodie-api/gameChara/queryMapList")
    }
}

export default orignApis