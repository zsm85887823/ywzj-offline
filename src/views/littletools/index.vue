<template>
  <a-row>
    <a-col
      :xs="22"
      :sm="22"
      :md="22"
      :lg="8"
      :xl="8"
      :offset="1"
      align="left"
      style="font-size: 0.15rem"
    >
      <br /><br />
      <h2>小工具</h2>
      <p>
        <a-button @click="goodsGet"> 掉率表格</a-button>
      </p>
      <h2>排行榜</h2>
      <p style="display: run-in">
        <a-button @click="coinRanking" style="margin-left: 10px">
          金币排行榜</a-button
        >
        <a-button @click="moneyRanking" style="margin-left: 10px">
          铜钱排行榜</a-button
        >
        <a-button @click="realmHeavenList" style="margin-left: 10px">
          境界天榜</a-button
        >
        <a-button @click="realmLandList" style="margin-left: 10px">
          境界地榜</a-button
        >
        <a-button @click="levelRanking" style="margin-left: 10px">
          等级排行榜</a-button
        >
        <a-button @click="playerOnline" style="margin-left: 10px">
          在线玩家</a-button
        >
        <a-button @click="oneDamageRanking" style="margin-left: 10px">
          boss伤害排行榜(单次)</a-button
        >
        <a-button @click="totalDamageRanking" style="margin-left: 10px">
          boss伤害排行榜(总计)</a-button
        >
      </p>
    </a-col>
    <a-col
      :xs="22"
      :sm="22"
      :md="22"
      :lg="8"
      :xl="8"
      :offset="0"
      align="left"
      style="font-size: 0.15rem"
      v-show="visibles[0].visible"
    >
      <h2>掉率统计表</h2>
      <a-table
        :data-source="data"
        :columns="columns"
        :pagination="paginationProps"
        :rowClassName="
          (record, index) => {
            if (record.g_default_color == 1) {
              return 'table-color-black';
            } else if (record.g_default_color == 2) {
              return 'table-color-yellow';
            } else if (record.g_default_color == 3) {
              return 'table-color-green';
            } else if (record.g_default_color == 4) {
              return 'table-color-blue';
            } else if (record.g_default_color == 5) {
              return 'table-color-pink';
            } else if (record.g_default_color == 6) {
              return 'table-color-red';
            } else if (record.g_default_color == 7) {
              return 'table-color-orange';
            }
          }
        "
        :rowKey="
          (record, index) => {
            return index;
          }
        "
        size="small"
      >
        <template
          #filterDropdown="{
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
            column,
          }"
        >
          <div style="padding: 8px">
            <a-input
              ref="searchInput"
              :placeholder="`搜索 ${column.title}`"
              :value="selectedKeys[0]"
              style="width: 188px; margin-bottom: 8px; display: block"
              @change="
                (e) => setSelectedKeys(e.target.value ? [e.target.value] : [])
              "
              @pressEnter="
                handleSearch(selectedKeys, confirm, column.dataIndex)
              "
            />
            <a-button
              type="primary"
              size="small"
              style="width: 90px; margin-right: 8px"
              @click="handleSearch(selectedKeys, confirm, column.dataIndex)"
            >
              <template #icon><SearchOutlined /></template>
              搜索
            </a-button>
            <a-button
              size="small"
              style="width: 90px"
              @click="handleReset(clearFilters)"
            >
              重置
            </a-button>
          </div>
        </template>
        <template #filterIcon="filtered">
          <search-outlined
            :style="{ color: filtered ? '#108ee9' : undefined }"
          />
        </template>
        <template #customRender="{ text, column }">
          <span v-if="searchText && searchedColumn === column.dataIndex">
            <template
              v-for="(fragment, i) in text
                .toString()
                .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
            >
              <mark
                v-if="fragment.toLowerCase() === searchText.toLowerCase()"
                class="highlight"
                :key="i"
              >
                {{ fragment }}
              </mark>
              <template v-else>{{ fragment }}</template>
            </template>
          </span>
          <template v-else>
            {{ text }}
          </template>
        </template>
      </a-table>
    </a-col>
    <a-col
      :xs="22"
      :sm="22"
      :md="22"
      :lg="8"
      :xl="8"
      :offset="1"
      align="left"
      style="font-size: 0.15rem"
      v-show="visibles[1].visible"
    >
      <h2>{{ rankInfo.title }}</h2>

      <h1 v-for="(item, index) in rankInfo.rankData" v-bind:key="item">
        <a-popover trigger="hover" placement="leftTop">
          <template #content>
            <a-row>
              <a-col style="font-size: 0.12rem; ">
                <p>{{ "角色攻击力：" + item.attack }}</p>
                <p>{{ "角色防御：" + item.defense }}</p>
                <p>{{ "角色血量：" + item.health }}</p>
                <p>{{ "角色灵式力：" + item.magic }}</p>
                <p>{{ "角色真气值：" + item.mana }}</p>
                <p>{{ "角色境界：" + item.realmName }}</p>
                <p>{{ "角色铜钱：" + item.money }}</p>
                <p>{{ "角色金币：" + item.coin }}</p>
                <p>{{ "角色当前经验：" + item.exp }}</p>
                <p>{{ "对boss的单次伤害：" + item.oneDamage }}</p>
                <p>{{ "对boss的总伤害：" + item.totalDamage }}</p>
                <p>{{ "BOSS伤害排行榜：" + item.gameCharaLevelBoList }}</p>
              </a-col>
            </a-row>
          </template>
          {{ index + 1 + ".LV" + item.level + item.name }}
        </a-popover>
      </h1>
    </a-col>
  </a-row>
</template>
<style >
p {
  margin: 1px;
}
</style>
<script>
import { battleTaskApis, originApis } from "@/api";
import { SearchOutlined } from "@ant-design/icons-vue";
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "littletools",
  components: {
    SearchOutlined,
  },
  setup() {
    var visibles = reactive([
      {
        visible: false,
      },
      {
        visible: false,
      },
    ]);
    const hide = () => {
      for (let index = 0; index < visibles.length; index++) {
        visibles[index].visible = false;
      }
    };
    const data = ref([]);
    const rankInfo = reactive({
      rankData: [],
      title: "",
    });

    const paginationProps = {
      pageSize: 15,
    };
    const goodsGet = async () => {
      try {
        const res = await battleTaskApis.goodsget();
        visibles[0].visible = true;

        data.value = res;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    const coinRanking = async () => {
      try {
        const res = await originApis.coinRanking();
        hide();
        visibles[1].visible = true;
        rankInfo.title = "金币排行榜";
        rankInfo.rankData = res.data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    const moneyRanking = async () => {
      try {
        const res = await originApis.moneyRanking();
        hide();
        visibles[1].visible = true;
        rankInfo.title = "铜币排行榜";
        rankInfo.rankData = res.data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    const realmLandList = async () => {
      try {
        const res = await originApis.realmLandList();
        hide();
        visibles[1].visible = true;
        rankInfo.title = "境界地榜";
        rankInfo.rankData = res.data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    const realmHeavenList = async () => {
      try {
        const res = await originApis.realmHeavenList();
        hide();
        visibles[1].visible = true;
        rankInfo.title = "境界天榜";
        rankInfo.rankData = res.data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    const levelRanking = async () => {
      try {
        const res = await originApis.levelRanking();
        hide();
        visibles[1].visible = true;
        rankInfo.title = "等级排行榜";
        rankInfo.rankData = res.data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    const playerOnline = async () => {
      try {
        const res = await originApis.playerOnline();
        hide();
        visibles[1].visible = true;
        rankInfo.title = "在线玩家";
        rankInfo.rankData = res.data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    const oneDamageRanking = async () => {
      try {
        const res = await originApis.oneDamageRanking();
        hide();
        visibles[1].visible = true;
        rankInfo.title = "boss伤害排行榜(单次)";
        rankInfo.rankData = res.data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    const totalDamageRanking = async () => {
      try {
        const res = await originApis.totalDamageRanking();
        hide();
        visibles[1].visible = true;
        rankInfo.title = "boss伤害排行榜(总计)";
        rankInfo.rankData = res.data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    const state = reactive({
      searchText: "",
      searchedColumn: "",
    });

    const searchInput = ref();

    const columns = [
      {
        title: "地图名称",
        dataIndex: "gMapName",
        key: "gMapName",
        slots: {
          filterDropdown: "filterDropdown",
          filterIcon: "filterIcon",
          customRender: "customRender",
        },
        onFilter: (value, record) =>
          record.gMapName
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => {
              console.log(searchInput.value);
            }, 0);
          }
        },
      },
      {
        title: "物品名称",
        dataIndex: "g_item_name",
        key: "g_item_name",
        slots: {
          filterDropdown: "filterDropdown",
          filterIcon: "filterIcon",
          customRender: "customRender",
        },
        onFilter: (value, record) =>
          record.g_item_name
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => {
              console.log(searchInput.value);
            });
          }
        },
      },
      {
        title: "掉率",
        dataIndex: "gmi_itme_drop_probability",
        key: "gmi_itme_drop_probability",
      },
    ];

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      console.log(selectedKeys[0]);
      state.searchText = selectedKeys[0];
      state.searchedColumn = dataIndex;
    };

    const handleReset = (clearFilters) => {
      clearFilters();
      state.searchText = "";
    };

    return {
      data,
      rankInfo,
      hide,
      columns,
      goodsGet,
      visibles,
      handleSearch,
      handleReset,
      searchText: "",
      searchInput: null,
      searchedColumn: "",
      paginationProps,
      moneyRanking,
      coinRanking,
      realmLandList,
      realmHeavenList,
      levelRanking,
      playerOnline,
      oneDamageRanking,
      totalDamageRanking,
    };
  },
});
</script>

<style>
.table-color-black {
  color: #000;
}
.table-color-yellow {
  color: #c5c52f;
}
.table-color-green {
  color: #049c04;
}
.table-color-blue {
  color: #005aff;
}
.table-color-pink {
  color: #ff00e0;
}
.table-color-red {
  color: #ff0000;
}
.table-color-orange {
  color: orange;
}
</style>