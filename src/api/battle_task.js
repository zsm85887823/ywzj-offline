import { post } from '@/util/request';

const battleTaskApis = {
    startTask(params) {
        return post("/battle_task", params)
    }
}

export default battleTaskApis