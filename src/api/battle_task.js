import { post } from '@/util/request';

const battleTaskApis = {
    startTask(params) {
        return post("http://134.175.16.92:2555/battle_task", params)
    }
}

export default battleTaskApis