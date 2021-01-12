<template>
  <!--便捷功能-->
  <div class="buts">
    <a-button type="primary" @click="getAllItems">获取全道具</a-button>
    <a-button type="primary" @click="clearAllItems">清空道具</a-button>

    <br />

    <a-button type="primary" @click="_getItems([63, 496], 99)"
      >获取食物</a-button
    >

    <!--新版本无法添加女忍服,可能需要额外文件支持-->
    <a-button
      type="primary"
      @click="
        _getItems(
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
            '552-559'
          ],
          1
        )
      "
      >获取时装</a-button
    >

    <a-button type="primary" @click="_getItems([247], 1)">获取跑鞋</a-button>

    <a-button
      type="primary"
      @click="_getItems(['568-599', '601-605', 607, 611], 1)"
      >获取成长武器</a-button
    >

    <br />

    <a-button type="primary" @click="_getItems([501], 1)"
      >获取宝箱搜索器</a-button
    >

    <a-button type="primary" @click="_getItems(['154-156'], 1)"
      >获取宝箱钥匙</a-button
    >

    <br />

    <a-button type="primary" @click="_getItems(['448-453', 618], 1)"
      >获取地区强化剂</a-button
    >
  </div>

  <!--自定义道具-->
  <div class="mod-item">
    <a-button type="primary" @click="show = !show" class="mod-item-button"
      >获取自定义道具</a-button
    >

    <!--道具列表-->
    <teleport to="#app">
      <transition>
        <div class="items" v-show="show">
          <div class="input-box">
            <a-input
              style="width: auto;"
              v-model:value="search"
              placeholder="查找道具"
            />

            <span style="margin: 0 10px;">当前已选中{{ checkeds.length }}</span>

            <span>获取数量: </span>
            <a-input-number
              style="width: 55px"
              id="inputNumber"
              v-model:value="getNumber"
              :min="0"
              :max="99"
              :precision="0"
              @change="numberChange"
            />
            <a-button type="primary" @click="getCheckedItems"
              >{{ getNumber ? '获取' : '删除' }}选中道具</a-button
            >

            <CloseOutlined @click="show = !show" />
          </div>

          <div class="items-ul" v-if="Object.entries(itemsFilter).length">
            <!--采用flex多列布局-->
            <div
              class="items-li"
              v-for="(i, name, index) of itemsFilter"
              :key="index"
            >
              <!--title独立出来不进行滚动-->
              <div class="item-title">{{ name }}</div>

              <!--列表主题出现滚动条-->
              <div class="ova">
                <label class="item-li" v-for="(i, index) of i" :key="index">
                  <input
                    class="input"
                    type="checkbox"
                    :value="i.index"
                    v-model="checkeds"
                  />
                  <span>{{ i.name }}</span>
                </label>
              </div>
            </div>
          </div>
          <a-empty v-else />
        </div>
      </transition>
    </teleport>
  </div>

  <c-upload
    class="upload"
    title="道具表上传"
    placement="top"
    :name="name"
    :path="itemsPath"
    @upload="upload"
  ></c-upload>
</template>

<script>
  import { CloseOutlined } from '@ant-design/icons-vue'

  import allItems from '@/assets/js/data1.3.0-4.json'
  import { srtingFormat } from '@/util/stringFormat.js'
  import cUpload from '@/components/base/c-upload.vue'

  export default {
    props: ['items'],

    components: { cUpload, CloseOutlined },

    data() {
      return {
        allItems: Object.freeze(allItems),
        show: false,
        search: '',
        checkeds: [],
        getNumber: 1,

        name: 'item-database.json',
        itemsPath: 'CrossCode\\assets\\data'
      }
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
      clearAllItems() {
        this.items.length = 0
      },
      _getItems(itemsId, num) {
        // 可传递字符串获取范围道具
        itemsId.forEach((i) => {
          if (typeof i === 'string') {
            let [min, max] = i.split('-')
            min = +min
            max = +max
            for (let index = min; index <= max; index++) {
              this.items[index] = num
            }
          } else {
            this.items[i] = num
          }
        })
      },
      getCheckedItems() {
        const { checkeds, getNumber, items } = this
        if (!checkeds.length) {
          this.message.error('当前没有选中的道具')
          return
        }
        checkeds.forEach((i) => {
          items[i] = getNumber || null
        })
        this.checkeds.length = 0
        this.message.success('批量添加道具完成')
      },

      // 修复输入框的BUG
      numberChange(value) {
        if (!value) this.getNumber = 0
      },

      upload(file) {
        this.allItems = Object.freeze(JSON.parse(file).items)
        this.checkeds.length = 0
      }
    },

    computed: {
      itemsFormat() {
        const rtn = {}
        this.allItems.forEach(({ name, type }, index) => {
          if (!rtn[type]) rtn[type] = []

          rtn[type].push({
            name: srtingFormat(name.zh_CN),
            index
          })
        })

        return rtn
      },
      itemsFilter() {
        const { itemsFormat, search } = this
        const rtn = {}

        for (const [key, value] of Object.entries(itemsFormat)) {
          const filterArr = value.filter((i) => i.name.includes(search))
          if (filterArr.length) rtn[key] = filterArr
        }

        return rtn
      }
    }
  }
</script>

<style scoped lang="scss">
  .ant-btn {
    margin: 0 15px 15px 0;
  }

  .upload {
    direction: rtl;
    position: absolute;
    right: 0;
    bottom: 10px;
  }

  .items {
    min-width: 630px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -55%);
    background-color: #fff;
    border: 1px solid;
    border-radius: 5px;
    padding: 10px;

    .anticon-close {
      font-size: 30px;
      position: absolute;
      top: 15px;
      right: 35px;

      &:hover {
        color: #f5222d;
      }
    }

    .items-ul {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;

      .items-li {
        margin: 0 10px;

        .item-title {
          font-weight: 700;
          color: #f5222d;
        }

        // 滚动条单独存在于每列
        .ova {
          overflow: auto;
          height: 300px;

          .item-li {
            display: block;
            white-space: nowrap;
            margin-top: 5px;
            margin-right: 5px;
            transition: all 0.25s;

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
