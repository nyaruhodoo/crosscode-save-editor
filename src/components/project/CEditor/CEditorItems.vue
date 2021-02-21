<template>
  <!--便捷功能-->
  <div>
    <a-button type="primary" @click="getAllItems">获取全道具</a-button>

    <a-tooltip placement="right">
      <template #title>
        <span>可以修复报错问题</span>
      </template>
      <a-button type="primary" @click="clearAllItems">清空道具</a-button>
    </a-tooltip>

    <br />

    <a-button type="primary" @click="getItems([63, 496], 99)"
      >获取食物</a-button
    >

    <!--新版本无法添加女忍服,可能需要额外文件支持-->
    <a-button
      type="primary"
      @click="
        getItems(
          [
            16,
            101,
            168,
            498,
            '519-521',
            '527-529',
            534,
            '537-539',
            '546-549',
            '552-559',
          ],
          1
        )
      "
      >获取时装</a-button
    >

    <a-button type="primary" @click="getItems([247])">获取跑鞋</a-button>

    <a-button type="primary" @click="getItems(['568-599', '601-605', 607, 611])"
      >获取成长武器</a-button
    >

    <br />

    <a-button type="primary" @click="getItems([501])">获取宝箱搜索器</a-button>

    <a-button type="primary" @click="getItems(['154-156'])"
      >获取宝箱钥匙</a-button
    >

    <br />

    <a-button type="primary" @click="getItems(['448-453', 618])"
      >获取地区强化剂</a-button
    >
  </div>

  <!--自定义道具-->
  <div>
    <a-button type="primary" @click="showItemsUl = !showItemsUl"
      >获取自定义道具</a-button
    >

    <c-upload
      title="道具表上传"
      :name="jsonName"
      :path="itemsPath"
      @upload="upload"
    ></c-upload>

    <!--道具列表-->
    <teleport to="#app">
      <transition>
        <div v-show="showItemsUl" class="items-box">
          <div>
            <a-input
              v-model:value="searchValue"
              style="width: auto;"
              placeholder="查找道具"
            />

            <span style="margin: 0 10px;"
              >当前已选中{{ itemCheckeds.length }}</span
            >

            <span>数量:</span>
            <a-input-number
              id="inputNumber"
              v-model:value="getNumber"
              style="width: 55px;"
              :min="0"
              :max="99"
              :precision="0"
              @change="numberChange"
            />
            <a-button type="primary" @click="getCheckedItems"
              >{{ getNumber ? '获取' : '删除' }}选中道具</a-button
            >
            <a-button type="danger" @click="itemCheckeds.length = 0"
              >清空选中道具</a-button
            >
          </div>

          <CloseOutlined @click="showItemsUl = !showItemsUl" />

          <div v-if="Object.entries(itemsFilter).length" class="items-ul">
            <div
              v-for="(itemsUl, itemsType, itemsIndex) of itemsFilter"
              :key="itemsIndex"
              class="items-type-ul"
            >
              <!--title独立出来不进行滚动-->
              <div>
                <div class="items-type-title">{{ itemsType }}</div>
              </div>

              <!--列表主题出现滚动条-->
              <div class="items-type-li">
                <label
                  v-for="(item, itemIndex) of itemsUl"
                  :key="itemIndex"
                  class="item-li"
                >
                  <input
                    v-model="itemCheckeds"
                    class="input"
                    type="checkbox"
                    :value="item.index"
                  />
                  <span>{{ item.name }}</span>
                </label>
              </div>
            </div>
          </div>

          <a-empty v-else />
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script>
  import { CloseOutlined } from '@ant-design/icons-vue'
  import CUpload from '@/components/base/CUpload.vue'
  import allItems from '@/assets/js/data1.3.0-4.json'
  import { srtingFormat } from '@/util/stringFormat.js'

  export default {
    components: { CUpload, CloseOutlined },
    props: {
      items: {
        type: Object,
      },
    },

    data() {
      return {
        allItems: Object.freeze(allItems),
        showItemsUl: false,
        searchValue: '',
        itemCheckeds: [],
        getNumber: 1,

        jsonName: 'item-database.json',
        itemsPath: 'CrossCode\\assets\\data',
      }
    },

    computed: {
      // 道具分类
      itemsFormat() {
        const rtn = {}
        this.allItems.forEach(({ name, type }, index) => {
          if (!rtn[type]) rtn[type] = []

          rtn[type].push({
            name: srtingFormat(name.zh_CN),
            index,
          })
        })

        return rtn
      },

      // 筛选道具
      itemsFilter() {
        const { itemsFormat, searchValue } = this
        const rtn = {}

        for (const [key, value] of Object.entries(itemsFormat)) {
          const filterArr = value.filter((i) => i.name.includes(searchValue))
          if (filterArr.length) rtn[key] = filterArr
        }

        return rtn
      },
    },

    methods: {
      getAllItems() {
        const { items, allItems } = this

        for (let index = 0; index < allItems.length; index++) {
          items[index] = 99
        }

        // 不要作弊狗
        items[157] = null
      },
      getItems(itemsId, num = 1) {
        const { items } = this

        // 删除道具的情况
        if (!num) num = null

        itemsId.forEach((i) => {
          if (typeof i === 'string') {
            let [min, max] = i.split('-')
            min = +min
            max = +max
            for (let index = min; index <= max; index++) {
              items[index] = num
            }
          } else {
            console.log(num)
            items[i] = num
          }
        })
      },
      getCheckedItems() {
        const { itemCheckeds, getNumber, getItems } = this
        if (!itemCheckeds.length) {
          this.message.error('当前没有选中的道具')
          return
        }

        getItems(itemCheckeds, getNumber)
        this.message.success('批量添加道具完成')
        this.itemCheckeds.length = 0
      },
      clearAllItems() {
        this.items.length = 0
      },

      // 修复输入框的BUG
      numberChange(value) {
        if (!value) this.getNumber = 0
      },

      upload(file) {
        this.allItems = Object.freeze(JSON.parse(file).items)
        this.itemCheckeds.length = 0
      },
    },
  }
</script>

<style scoped lang="scss">
  .ant-btn {
    margin: 0 15px 15px 0;
  }

  .items-box {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 630px;
    padding: 10px;
    border: 1px solid;
    background-color: #fff;
    border-radius: 5px;
    transform: translate(-50%, -55%);

    // 关闭按钮
    .anticon-close {
      position: absolute;
      top: 15px;
      right: 35px;
      font-size: 30px;

      &:hover {
        color: #f5222d;
      }
    }

    .items-ul {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;

      .items-type-ul {
        margin: 0 10px;

        .items-type-title {
          color: #f5222d;
          font-weight: 700;
        }

        // 滚动条单独存在于每列
        .items-type-li {
          overflow: auto;
          height: 300px;

          .item-li {
            display: block;
            margin-top: 5px;
            margin-right: 5px;
            transition: color 0.25s;
            white-space: nowrap;

            .input {
              margin-right: 5px;

              &:checked + span {
                color: rgb(25, 212, 81);
              }
            }

            &:hover {
              color: rgb(25, 212, 81);
            }
          }
        }
      }
    }
  }
</style>
