<template>
  <a-modal
    :visible="props.visiable"
    title="账户管理"
    :footer="null"
    width="90vh"
    breakpoint="lg"
  >
    <a-row>
      <a-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
        <h3 style="text-align: center">账户列表</h3>
        <span v-show="accountList && accountList.length == 0">尚无账户</span>
        <ul class="account-list">
          <li v-for="item in accountList" v-bind:key="item.charaId">
            {{ item.nickName }}
            <a-button
              style="float: right"
              size="small"
              v-show="item.nickName != currentAccount"
              @click="changeAccount(item)"
              >设为当前</a-button
            >
          </li>
        </ul>
      </a-col>
      <a-col :xs="0" :sm="0" :md="0" :lg="2" :xl="2">
        <a-divider type="vertical" style="height: 100%" />
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
        <h3 style="text-align: center">新增账户</h3>
        <a-form
          width="100%"
          :model="account"
          labelAlign="right"
          :labelCol="{
            xs: { span: 10 },
            sm: { span: 10 },
            md: { span: 10 },
            lg: { span: 4 },
            xl: { span: 4 },
          }"
          :wrapperCol="{
            xs: { span: 24 },
            sm: { span: 24 },
            md: { span: 24 },
            lg: { span: 20 },
            xl: { span: 20 },
          }"
        >
          <a-form-item label="账户名" name="username">
            <a-input v-model:value="account.username"  placeholder="账号" />
          </a-form-item>
          <a-form-item label="密码" name="password">
            <a-input v-model:value="account.password" type="password" placeholder="密码"/>
          </a-form-item>
        </a-form>
        <a-button
          type="primary"
          style="width: 8em; float: right"
          @click="addAccount"
          >确认</a-button
        >
        <a-button
          type="primary"
          style="width: 8em; margin-left: 1px"
          @click="clearAccount"
          >清空账号</a-button
        >
      </a-col>
    </a-row>
  </a-modal>
</template>

<script>
import { defineComponent, reactive, ref, watch } from "vue";
import { message } from "ant-design-vue";
import { useStore } from "vuex";
import { originApis } from "@/api";
import router from "@/router/index.js";

export default defineComponent({
  name: "AccountSetting",
  props: {
    visiable: Boolean,
  },
  setup(props) {
    const store = useStore();
    var accounts = reactive({ accounts: [] });
    const checkAccounts = () => {
      if (localStorage.getItem("accounts")) {
        store.state.account.accountList = JSON.parse(
          localStorage.getItem("accounts")
        );
      }
    };
    checkAccounts();
    const accountList = ref(store.state.account.accountList || []);
    const currentAccount = ref(store.state.account.currentAccount.nickName);

    const account = reactive({
      username: "",
      password: "",
    });
    const changeAccount = (key) => {
      store.dispatch("account/changeAccount", key);
      message.info("账号已切换成：" + key.nickName);
      router.push("/welcome");
    };
    const clearAccount = () => {
      store.state.account.accountList = [];
      localStorage.setItem("accounts", "");
    };
    const addAccount = async () => {
      try {
        accounts.accounts = store.state.account.accountList;
        let result = accounts.accounts.some((item) => {
          if (item.username == account.username) {
            return true;
          }
        });
        if (result) {
          message.info("账号已存在。请重新输入！！");
        } else {
          const res = await originApis.login(account);
          if (res.status != 200) {
            message.error(res.msg);
            return;
          }
          store.dispatch("account/addAcccount", {
            ...account,
            nickName: res.data.nickname,
            charaId: res.data.charaId,
          });
          message.info('账号："' + res.data.nickname + '"已添加成功');
          accounts.accounts = store.state.account.accountList;
          localStorage.setItem("accounts", JSON.stringify(accounts.accounts));

          console.log(res);
        }
      } catch (err) {
        console.log(err);
      }
    };

    watch(
      () => store.state.account.accountList,
      (newV) => (accountList.value = newV),

      { deep: true }
    );

    return {
      props,
      accountList,
      currentAccount,
      account,
      addAccount,
      accounts,
      changeAccount,
      clearAccount,
      checkAccounts,
    };
  },
});
</script>

<style>
.account-list li {
  padding: 5px;
  margin: 5px 0;
  border-radius: 4px;
  display: block;
  align-items: center;
  border: 1px solid #000;
}
</style>>