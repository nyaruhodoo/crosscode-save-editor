<template>
  <label class="switch-master">
    <span>{{ $root.locale.editorHardMode.开启 }}: </span>
    <a-switch v-model:checked="plus.active">
      <template #checkedChildren><check-outlined @click="clickFix"/></template>
      <template #unCheckedChildren
        ><close-outlined @click="clickFix"
      /></template>
    </a-switch>
  </label>

  <div class="switchs-ul">
    <div class="switchs-li">
      <h3>{{ $root.locale.editorHardMode.主人翁 }}:</h3>
      <div class="mode-ul">
        <label class="mode-li">
          <span>{{ $root.locale.editorHardMode.外挂超人 }}</span>
          <a-switch v-model:checked="plus.options['sergey-hax']">
            <template #checkedChildren
              ><check-outlined @click="clickFix"
            /></template>
            <template #unCheckedChildren
              ><close-outlined @click="clickFix"
            /></template>
          </a-switch>
        </label>

        <label class="mode-li">
          <span>{{ $root.locale.editorHardMode.少女时间 }}</span>
          <a-switch v-model:checked="plus.options['witch-time']">
            <template #checkedChildren
              ><check-outlined @click="clickFix"
            /></template>
            <template #unCheckedChildren
              ><close-outlined @click="clickFix"
            /></template>
          </a-switch>
        </label>

        <label class="mode-li">
          <span>{{ $root.locale.editorHardMode.冲刺大师 }}</span>
          <a-switch v-model:checked="plus.options['dash-1']">
            <template #checkedChildren
              ><check-outlined @click="clickFix"
            /></template>
            <template #unCheckedChildren
              ><close-outlined @click="clickFix"
            /></template>
          </a-switch>
        </label>

        <label class="mode-li">
          <span>{{ $root.locale.editorHardMode.恶魔扳机 }}</span>
          <a-switch v-model:checked="plus.options['infinite-sp']">
            <template #checkedChildren
              ><check-outlined @click="clickFix"
            /></template>
            <template #unCheckedChildren
              ><close-outlined @click="clickFix"
            /></template>
          </a-switch>
        </label>

        <label class="mode-li">
          <span>{{ $root.locale.editorHardMode.抢鲜体验 }}</span>
          <a-switch v-model:checked="plus.options['remove-skill-blocks']">
            <template #checkedChildren
              ><check-outlined @click="clickFix"
            /></template>
            <template #unCheckedChildren
              ><close-outlined @click="clickFix"
            /></template>
          </a-switch>
        </label>

        <label class="mode-li">
          <span>{{ $root.locale.editorHardMode.完美平衡 }}</span>
          <a-switch v-model:checked="plus.options['overload-disable']">
            <template #checkedChildren
              ><check-outlined @click="clickFix"
            /></template>
            <template #unCheckedChildren
              ><close-outlined @click="clickFix"
            /></template>
          </a-switch>
        </label>
      </div>
    </div>

    <div class="switchs-li">
      <h3>{{ $root.locale.editorHardMode.食物 }}:</h3>
      <div class="mode-ul">
        <label class="mode-li">
          <span>{{ $root.locale.editorHardMode.超级营养 }}</span>
          <a-switch v-model:checked="plus.options['double-buff-time']">
            <template #checkedChildren
              ><check-outlined @click="clickFix"
            /></template>
            <template #unCheckedChildren
              ><close-outlined @click="clickFix"
            /></template>
          </a-switch>
        </label>
      </div>
    </div>

    <div class="switchs-li">
      <h3>{{ $root.locale.editorHardMode.怪物 }}:</h3>
      <div class="mode-ul">
        <label class="mode-li">
          <span>{{ $root.locale.editorHardMode.莉亚必须死 }}</span>
          <a-switch v-model:checked="plus.options['lea-must-die']">
            <template #checkedChildren
              ><check-outlined @click="clickFix"
            /></template>
            <template #unCheckedChildren
              ><close-outlined @click="clickFix"
            /></template>
          </a-switch>
        </label>

        <label class="mode-li">
          <span>{{ $root.locale.editorHardMode.放马过来 }}</span>
          <a-switch v-model:checked="plus.options['harder-enemies']">
            <template #checkedChildren
              ><check-outlined @click="clickFix"
            /></template>
            <template #unCheckedChildren
              ><close-outlined @click="clickFix"
            /></template>
          </a-switch>
        </label>

        <label class="mode-li">
          <span>{{ $root.locale.editorHardMode.绝不留情 }}</span>
          <a-switch v-model:checked="plus.options['scale-enemies']">
            <template #checkedChildren
              ><check-outlined @click="clickFix"
            /></template>
            <template #unCheckedChildren
              ><close-outlined @click="clickFix"
            /></template>
          </a-switch>
        </label>

        <label class="mode-li">
          <span>{{ $root.locale.editorHardMode.充满敌意 }}</span>
          <a-switch v-model:checked="plus.options['enemy-aggro']">
            <template #checkedChildren
              ><check-outlined @click="clickFix"
            /></template>
            <template #unCheckedChildren
              ><close-outlined @click="clickFix"
            /></template>
          </a-switch>
        </label>
      </div>
    </div>

    <div class="switchs-li">
      <h3>{{ $root.locale.editorHardMode.功能调整 }}:</h3>
      <div class="mode-ul">
        <label class="mode-li">
          <span>{{ $root.locale.editorHardMode.禁用成就 }}</span>
          <a-switch v-model:checked="plus.options['no-trophies']">
            <template #checkedChildren
              ><check-outlined @click="clickFix"
            /></template>
            <template #unCheckedChildren
              ><close-outlined @click="clickFix"
            /></template>
          </a-switch>
        </label>

        <label class="mode-li">
          <span>{{ $root.locale.editorHardMode.古典快速旅行 }}</span>
          <a-switch v-model:checked="plus.options['waypoints-teleport']">
            <template #checkedChildren
              ><check-outlined @click="clickFix"
            /></template>
            <template #unCheckedChildren
              ><close-outlined @click="clickFix"
            /></template>
          </a-switch>
        </label>

        <label class="mode-li">
          <span>{{ $root.locale.editorHardMode.古典治疗 }}</span>
          <a-switch v-model:checked="plus.options['waypoints-heals']">
            <template #checkedChildren
              ><check-outlined @click="clickFix"
            /></template>
            <template #unCheckedChildren
              ><close-outlined @click="clickFix"
            /></template>
          </a-switch>
        </label>

        <label class="mode-li">
          <span>{{ $root.locale.editorHardMode.滑溜溜 }}</span>
          <a-switch v-model:checked="plus.options['ice-physics']">
            <template #checkedChildren
              ><check-outlined @click="clickFix"
            /></template>
            <template #unCheckedChildren
              ><close-outlined @click="clickFix"
            /></template>
          </a-switch>
        </label>
      </div>
    </div>

    <!--单选项-->
    <div class="switchs-li">
      <h3>{{ $root.locale.editorHardMode.数值调整 }}:</h3>
      <div class="mode-ul">
        <!--技能-->
        <a-radio-group
          v-model:value="skillShackles"
          class="mode-li"
          button-style="solid"
          size="small"
          @change="radioController(skillShacklesNames, $event)"
        >
          {{ $root.locale.editorHardMode.技能束缚 }}
          <a-radio-button :value="false">
            0
          </a-radio-button>
          <a-radio-button :value="skillShacklesNames[0]">
            1
          </a-radio-button>
          <a-radio-button :value="skillShacklesNames[1]">
            2
          </a-radio-button>
        </a-radio-group>

        <!--怪物伤害-->
        <a-radio-group
          v-model:value="enemyDamage"
          class="mode-li"
          button-style="solid"
          size="small"
          @change="radioController(enemyDamageNames, $event)"
        >
          {{ $root.locale.editorHardMode.怪物伤害 }}
          <a-radio-button :value="false">
            1x
          </a-radio-button>
          <a-radio-button :value="enemyDamageNames[0]">
            1.5x
          </a-radio-button>
          <a-radio-button :value="enemyDamageNames[1]">
            2x
          </a-radio-button>
          <a-radio-button :value="enemyDamageNames[2]">
            4x
          </a-radio-button>
        </a-radio-group>

        <!--战斗治疗-->
        <a-radio-group
          v-model:value="combatRegen"
          class="mode-li"
          button-style="solid"
          size="small"
          @change="radioController(combatRegenNames, $event)"
        >
          {{ $root.locale.editorHardMode.战斗治疗 }}
          <a-radio-button :value="combatRegenNames[0]">
            0
          </a-radio-button>
          <a-radio-button :value="combatRegenNames[1]">
            0.5x
          </a-radio-button>
          <a-radio-button :value="false">
            1x
          </a-radio-button>
        </a-radio-group>

        <!--食物冷却-->
        <a-radio-group
          v-model:value="itemCd"
          class="mode-li"
          button-style="solid"
          size="small"
          @change="radioController(itemCdNames, $event)"
        >
          {{ $root.locale.editorHardMode.食物冷却 }}
          <a-radio-button :value="itemCdNames[0]">
            0
          </a-radio-button>
          <a-radio-button :value="itemCdNames[1]">
            0.5x
          </a-radio-button>
          <a-radio-button :value="false">
            1x
          </a-radio-button>

          <a-radio-button :value="itemCdNames[2]">
            2x
          </a-radio-button>
        </a-radio-group>

        <!--掉落率-->
        <a-radio-group
          v-model:value="dropRate"
          class="mode-li"
          button-style="solid"
          size="small"
          @change="radioController(dropRateNames, $event)"
        >
          {{ $root.locale.editorHardMode.掉落率 }}

          <a-radio-button :value="false">
            1x
          </a-radio-button>
          <a-radio-button :value="dropRateNames[0]">
            2x
          </a-radio-button>
          <a-radio-button :value="dropRateNames[1]">
            4x
          </a-radio-button>
        </a-radio-group>

        <!--金钱-->
        <a-radio-group
          v-model:value="money"
          class="mode-li"
          button-style="solid"
          size="small"
          @change="radioController(moneyNames, $event)"
        >
          {{ $root.locale.editorHardMode.金钱 }}

          <a-radio-button :value="moneyNames[0]">
            0
          </a-radio-button>
          <a-radio-button :value="false">
            1x
          </a-radio-button>
          <a-radio-button :value="moneyNames[1]">
            2x
          </a-radio-button>
          <a-radio-button :value="moneyNames[2]">
            4x
          </a-radio-button>
        </a-radio-group>

        <!--经验值-->
        <a-radio-group
          v-model:value="exp"
          class="mode-li"
          button-style="solid"
          size="small"
          @change="radioController(expNames, $event)"
        >
          {{ $root.locale.editorHardMode.经验值 }}

          <a-radio-button :value="expNames[0]">
            0
          </a-radio-button>
          <a-radio-button :value="false">
            1x
          </a-radio-button>
          <a-radio-button :value="expNames[1]">
            2x
          </a-radio-button>
          <a-radio-button :value="expNames[2]">
            4x
          </a-radio-button>
        </a-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
  import { CheckOutlined, CloseOutlined } from '@ant-design/icons-vue'

  export default {
    components: {
      CheckOutlined,
      CloseOutlined,
    },
    props: {
      plus: {
        type: Object,
      },
    },
    data() {
      return {
        // 技能束缚
        skillShackles: false,
        // 多倍伤害
        enemyDamage: false,
        // 战斗恢复
        combatRegen: false,
        // 掉落率
        dropRate: false,
        exp: false,
        money: false,
        itemCd: false,

        // 技能选项名
        skillShacklesNames: ['combat-arts-level-1', 'combat-arts-level-2'],
        // 多倍伤害选项名
        enemyDamageNames: [
          'enemy-damage-15',
          'enemy-damage-2',
          'enemy-damage-4',
        ],
        // 战斗恢复选项名
        combatRegenNames: ['combat-regen-zero', 'combat-regen-half'],
        // 食物CD选项名
        itemCdNames: ['item-cd-zero', 'item-cd-half', 'item-cd-double'],
        // 经验选项名
        expNames: ['disable-exp', 'exp-plus-2', 'exp-plus-4'],
        // 金钱选项名
        moneyNames: ['disable-money', 'money-plus-2', 'money-plus-4'],
        // 掉落率选项名
        dropRateNames: ['drop-rate-2', 'drop-rate-4'],
      }
    },
    watch: {
      plus() {
        this.createInitialValue()
      },
    },
    created() {
      this.createInitialValue()
    },
    methods: {
      /*  
        麻烦的单选
        这里无法做互斥,因为存档里用了不同属性,只能全部清空再添加
      */
      radioController(names, { target: { value } }) {
        console.log(names, value)
        const {
          plus: { options },
        } = this
        names.forEach((i) => {
          options[i] = false
          if (!value) return
          options[value] = true
        })
      },

      // 生成初始值
      createInitialValue() {
        // 初始化一次数据,修复切换存档时的选中状态,因为不会重新渲染
        Object.assign(this.$data, this.$options.data())

        const {
          plus: { options },
          combatRegenNames,
          dropRateNames,
          moneyNames,
          expNames,
          itemCdNames,
          skillShacklesNames,
          enemyDamageNames,
        } = this

        // 收集值
        combatRegenNames.forEach((i) => {
          if (options[i]) {
            this.combatRegen = i
          }
        })
        dropRateNames.forEach((i) => {
          if (options[i]) {
            this.dropRate = i
          }
        })
        moneyNames.forEach((i) => {
          if (options[i]) {
            this.money = i
          }
        })
        expNames.forEach((i) => {
          if (options[i]) {
            this.exp = i
          }
        })
        itemCdNames.forEach((i) => {
          if (options[i]) {
            this.itemCd = i
          }
        })
        skillShacklesNames.forEach((i) => {
          if (options[i]) {
            this.skillShackles = i
          }
        })
        enemyDamageNames.forEach((i) => {
          if (options[i]) {
            this.enemyDamage = i
          }
        })
      },

      // 修复垃圾组件的点击BUG
      clickFix(e) {
        e.target.parentNode.parentNode.click()
      },
    },
  }
</script>

<style scoped lang="scss">
  .switch-master {
    display: block;
    margin-bottom: 10px;
    color: red;
  }

  .switchs-ul {
    overflow: auto;
    max-height: 280px;

    .switchs-li {
      margin-top: 10px;

      h3 {
        font-size: 18px;
        font-weight: 700;
      }

      .mode-ul {
        display: flex;
        flex-wrap: wrap;

        .mode-li {
          margin-top: 3px;
          margin-right: 15px;

          span {
            margin-right: 3px;
          }
        }
      }
    }
  }

  .ant-radio-group {
    width: 45%;
  }
</style>
