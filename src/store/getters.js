const getters = {
    accountList: state => state.account.accountList,
    currentAccount: state => state.account.currentAccount,
    permission_routes: state => state.permission.routes,
};

export default getters;