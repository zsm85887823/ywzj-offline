<template>
    <a-modal
        :visible="props.visiable"
        title="账户管理"
        :footer="null"
        width="90vh"
        breakpoint="lg"
    >
        <a-row>
            <a-col :span="11">
                <h3 style="text-align: center">账户列表</h3>
                <span v-show="accountList && accountList.length == 0"
                    >尚无账户</span
                >
                <ul class="account-list">
                    <li v-for="item in accountList" v-bind:key="item.charaId">
                        {{ item.nickName }}
                    </li>
                </ul>
            </a-col>
            <a-col :span="2">
                <a-divider type="vertical" style="height: 100%" />
            </a-col>
            <a-col :span="11">
                <h3 style="text-align: center">新增账户</h3>
                <a-form
                    width="100%"
                    :model="account"
                    labelAlign="right"
                    :labelCol="{ span: 4 }"
                    :wrapperCol="{ span: 20 }"
                >
                    <a-form-item label="账户名" name="username">
                        <a-input v-model:value="account.username" />
                    </a-form-item>
                    <a-form-item label="密码" name="password">
                        <a-input
                            v-model:value="account.password"
                            type="password"
                        />
                    </a-form-item>
                </a-form>
                <a-button
                    type="primary"
                    style="width: 8em; float: right"
                    @click="addAccount"
                    >确认</a-button
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

export default defineComponent({
    name: "AccountSetting",
    props: {
        visiable: Boolean,
    },
    setup(props) {
        const store = useStore();
        const accountList = ref(store.getters.accountList || []);
        var accounts = reactive({ accounts: [] });

        const account = reactive({
            username: "miyling",
            password: "miyling",
        });

        const addAccount = async () => {
            try {
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

                console.log(res);
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
            account,
            addAccount,
            accounts,
        };
    },
});
</script>

<style>

.account-list li {
    padding: 5px;
    margin:5px 0;
    border-radius: 4px;
    display: flex;
    align-items: center;
    border: 1px solid #000;
}
</style>>