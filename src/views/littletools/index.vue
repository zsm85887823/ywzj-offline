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
      <a-button @click="goodsGet"> 掉率表格</a-button>
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
      v-show="visibleGoods.goodsRate"
    >
      <h2>掉率统计表</h2>
      <a-table
        :data-source="data"
        :columns="columns"
        :pagination="paginationProps"
        :rowClassName="
          (record, index) => {
            if (record.g_default_color == 1 ) {

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
        rowKey="gMapName"
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
  </a-row>
</template>



<script>
import { battleTaskApis } from "@/api";
import { SearchOutlined } from "@ant-design/icons-vue";
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "littletools",
  components: {
    SearchOutlined,
  },
  setup() {
    var visibleGoods = reactive({
      goodsRate: false,
    });
    const data = ref([]);

    const paginationProps = {
      position: "both",
      pageSize: "30",
    };
    const goodsGet = async () => {
      try {
        const res = await battleTaskApis.goodsget();
        visibleGoods.goodsRate = true;

        data.value = res;
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
      columns,
      goodsGet,
      visibleGoods,
      handleSearch,
      handleReset,
      searchText: "",
      searchInput: null,
      searchedColumn: "",
      paginationProps,
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