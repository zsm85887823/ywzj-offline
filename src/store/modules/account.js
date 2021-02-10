import { originApis } from "@/api";

const state = {
    accountList: [],
    currentAccount: {},
}

const mutations = {
    SET_ACCOUNT_LIST: (state, accountList) => {
        state.accountList = accountList;
    },
    SET_CURRENT_ACCOUNT: (state, currentAccount) => {
        state.currentAccount = currentAccount;
    },
}

const actions = {
    // 变更当前账号
    changeAccount({ commit }, account) {
        const { username, password } = account;
        return new Promise((resolve, reject) => {
            originApis.login({username, password}).then(res => {
                const { data } = res;
                commit("SET_CURRENT_ACCOUNT", data);
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        });
    },
    // 添加账户
    addAcccount({ commit, state }, account) {
        const { accountList } = state;
        accountList.push(account);
        commit("SET_ACCOUNT_LIST", accountList);
    }
}

export default { state, mutations, actions }