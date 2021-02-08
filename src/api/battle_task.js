import { post, get } from '@/util/request';

const battleTaskApis = {
    startTask(params) {
        return post("http://134.175.16.92:2555/battle_task", params)
    },
    status(params) {
        return get("http://134.175.16.92:2555/battle_task/" + params + "/status")
    },
    stop(params) {
        return get("http://134.175.16.92:2555/battle_task/" + params + "/stop")
    },
}

export default battleTaskApis