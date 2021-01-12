<template>
  <label class="master-switch">
    <span>启用二周目: </span>
    <a-switch v-model:checked="plus.active">
      <template #checkedChildren><check-outlined /></template>
      <template #unCheckedChildren><close-outlined /></template>
    </a-switch>
  </label>

  <div class="switchs-ul">
    <div class="switchs-li">
      <h3>主人翁:</h3>
      <div class="mode-ul">
        <label class="mode-li">
          <span>一拳超人</span>
          <a-switch v-model:checked="plus.options['sergey-hax']">
            <template #checkedChildren><check-outlined /></template>
            <template #unCheckedChildren><close-outlined /></template>
          </a-switch>
        </label>

        <label class="mode-li">
          <span>子弹时间</span>
          <a-switch v-model:checked="plus.options['witch-time']">
            <template #checkedChildren><check-outlined /></template>
            <template #unCheckedChildren><close-outlined /></template>
          </a-switch>
        </label>

        <label class="mode-li">
          <span>冲刺大师</span>
          <a-switch v-model:checked="plus.options['dash-1']">
            <template #checkedChildren><check-outlined /></template>
            <template #unCheckedChildren><close-outlined /></template>
          </a-switch>
        </label>

        <label class="mode-li">
          <span>无限SP</span>
          <a-switch v-model:checked="plus.options['infinite-sp']">
            <template #checkedChildren><check-outlined /></template>
            <template #unCheckedChildren><close-outlined /></template>
          </a-switch>
        </label>

        <label class="mode-li">
          <span>无技能封锁</span>
          <a-switch v-model:checked="plus.options['remove-skill-blocks']">
            <template #checkedChildren><check-outlined /></template>
            <template #unCheckedChildren><close-outlined /></template>
          </a-switch>
        </label>

        <label class="mode-li">
          <span>无过载</span>
          <a-switch v-model:checked="plus.options['overload-disable']">
            <template #checkedChildren><check-outlined /></template>
            <template #unCheckedChildren><close-outlined /></template>
          </a-switch>
        </label>

        <label class="mode-li">
          <span>脚底抹油</span>
          <a-switch v-model:checked="plus.options['ice-physics']">
            <template #checkedChildren><check-outlined /></template>
            <template #unCheckedChildren><close-outlined /></template>
          </a-switch>
        </label>
      </div>
    </div>

    <div class="switchs-li">
      <h3>食物:</h3>
      <div class="mode-ul">
        <!--     <div class="mode-li">
              <span>食物无CD: </span>
              <a-switch v-model:checked="plus.options['item-cd-zero']">
                <template #checkedChildren><check-outlined /></template>
                <template #unCheckedChildren><close-outlined /></template>
              </a-switch>
            </div>
        -->
        <label class="mode-li">
          <span>增益时间翻倍</span>
          <a-switch v-model:checked="plus.options['double-buff-time']">
            <template #checkedChildren><check-outlined /></template>
            <template #unCheckedChildren><close-outlined /></template>
          </a-switch>
        </label>
      </div>
    </div>

    <div class="switchs-li">
      <h3>怪物:</h3>
      <div class="mode-ul">
        <label class="mode-li">
          <span>一拳超人</span>
          <a-switch v-model:checked="plus.options['lea-must-die']">
            <template #checkedChildren><check-outlined /></template>
            <template #unCheckedChildren><close-outlined /></template>
          </a-switch>
        </label>

        <label class="mode-li">
          <span>等级同步主人翁</span>
          <a-switch v-model:checked="plus.options['harder-enemies']">
            <template #checkedChildren><check-outlined /></template>
            <template #unCheckedChildren><close-outlined /></template>
          </a-switch>
        </label>

        <label class="mode-li">
          <span>攻击频率加快</span>
          <a-switch v-model:checked="plus.options['scale-enemies']">
            <template #checkedChildren><check-outlined /></template>
            <template #unCheckedChildren><close-outlined /></template>
          </a-switch>
        </label>

        <label class="mode-li">
          <span>主动攻击</span>
          <a-switch v-model:checked="plus.options['enemy-aggro']">
            <template #checkedChildren><check-outlined /></template>
            <template #unCheckedChildren><close-outlined /></template>
          </a-switch>
        </label>
      </div>
    </div>

    <div class="switchs-li">
      <h3>功能调整:</h3>
      <div class="mode-ul">
        <label class="mode-li">
          <span>禁用成就</span>
          <a-switch v-model:checked="plus.options['no-trophies']">
            <template #checkedChildren><check-outlined /></template>
            <template #unCheckedChildren><close-outlined /></template>
          </a-switch>
        </label>

        <label class="mode-li">
          <span>非路径点不可传送</span>
          <a-switch v-model:checked="plus.options['waypoints-teleport']">
            <template #checkedChildren><check-outlined /></template>
            <template #unCheckedChildren><close-outlined /></template>
          </a-switch>
        </label>

        <label class="mode-li">
          <span>非路径点不恢复血量</span>
          <a-switch v-model:checked="plus.options['waypoints-heals']">
            <template #checkedChildren><check-outlined /></template>
            <template #unCheckedChildren><close-outlined /></template>
          </a-switch>
        </label>
      </div>
    </div>

    <div class="switchs-li">
      <h3>数值调整:</h3>
      <div class="mode-ul">
        <!--技能-->
        <a-radio-group
          class="mode-li"
          v-model:value="skillShackles"
          button-style="solid"
          size="small"
          @change="radioController(skillShacklesNames, $event)"
        >
          技能束缚
          <a-radio-button :value="false">
            无
          </a-radio-button>
          <a-radio-button :value="skillShacklesNames[0]">
            1层
          </a-radio-button>
          <a-radio-button :value="skillShacklesNames[1]">
            2层
          </a-radio-button>
        </a-radio-group>

        <!--怪物伤害-->
        <a-radio-group
          class="mode-li"
          v-model:value="enemyDamage"
          button-style="solid"
          size="small"
          @change="radioController(enemyDamageNames, $event)"
        >
          怪物伤害
          <a-radio-button :value="false">
            1倍
          </a-radio-button>
          <a-radio-button :value="enemyDamageNames[0]">
            1.5倍
          </a-radio-button>
          <a-radio-button :value="enemyDamageNames[1]">
            2倍
          </a-radio-button>
          <a-radio-button :value="enemyDamageNames[2]">
            4倍
          </a-radio-button>
        </a-radio-group>

        <!--战斗恢复-->
        <a-radio-group
          class="mode-li"
          v-model:value="combatRegen"
          button-style="solid"
          size="small"
          @change="radioController(combatRegenNames, $event)"
        >
          战斗恢复
          <a-radio-button :value="combatRegenNames[0]">
            禁止
          </a-radio-button>
          <a-radio-button :value="combatRegenNames[1]">
            0.5倍
          </a-radio-button>
          <a-radio-button :value="false">
            1倍
          </a-radio-button>
        </a-radio-group>

        <!--食物冷却-->
        <a-radio-group
          class="mode-li"
          v-model:value="itemCd"
          button-style="solid"
          size="small"
          @change="radioController(itemCdNames, $event)"
        >
          食物冷却时间
          <a-radio-button :value="itemCdNames[0]">
            0倍
          </a-radio-button>
          <a-radio-button :value="itemCdNames[1]">
            0.5倍
          </a-radio-button>
          <a-radio-button :value="false">
            1倍
          </a-radio-button>

          <a-radio-button :value="itemCdNames[2]">
            2倍
          </a-radio-button>
        </a-radio-group>

        <!--掉落率-->
        <a-radio-group
          class="mode-li"
          v-model:value="dropRate"
          button-style="solid"
          size="small"
          @change="radioController(dropRateNames, $event)"
        >
          物品掉落率
          <a-radio-button :value="false">
            1倍
          </a-radio-button>
          <a-radio-button :value="dropRateNames[0]">
            2倍
          </a-radio-button>
          <a-radio-button :value="dropRateNames[1]">
            4倍
          </a-radio-button>
        </a-radio-group>

        <!--金钱-->
        <a-radio-group
          class="mode-li"
          v-model:value="money"
          button-style="solid"
          size="small"
          @change="radioController(moneyNames, $event)"
        >
          金钱
          <a-radio-button :value="moneyNames[0]">
            0倍
          </a-radio-button>
          <a-radio-button :value="false">
            1倍
          </a-radio-button>
          <a-radio-button :value="moneyNames[1]">
            2倍
          </a-radio-button>
          <a-radio-button :value="moneyNames[2]">
            4倍
          </a-radio-button>
        </a-radio-group>

        <!--经验值-->
        <a-radio-group
          class="mode-li"
          v-model:value="exp"
          button-style="solid"
          size="small"
          @change="radioController(expNames, $event)"
        >
          经验值
          <a-radio-button :value="expNames[0]">
            0倍
          </a-radio-button>
          <a-radio-button :value="false">
            1倍
          </a-radio-button>
          <a-radio-button :value="expNames[1]">
            2倍
          </a-radio-button>
          <a-radio-button :value="expNames[2]">
            4倍
          </a-radio-button>
        </a-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
  import { CheckOutlined, CloseOutlined } from '@ant-design/icons-vue'
  export default {
    props: ['plus'],
    components: {
      CheckOutlined,
      CloseOutlined
    },
    created() {
      this.createInitialValue()
    },
    data() {
      return {
        // 技能束缚
        skillShackles: false,
        // 多倍伤害
        enemyDamage: false,
        // 战斗恢复
        combatRegen: false,
        // 道具CD
        itemCd: false,
        // 掉落率
        dropRate: false,
        exp: false,
        money: false,

        // 技能选项名
        skillShacklesNames: ['combat-arts-level-1', 'combat-arts-level-2'],
        // 多倍伤害选项名
        enemyDamageNames: [
          'enemy-damage-15',
          'enemy-damage-2',
          'enemy-damage-4'
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
        dropRateNames: ['drop-rate-2', 'drop-rate-4']
      }
    },
    methods: {
      // 控制麻烦的单选
      radioController(names, { target: { value } }) {
        const {
          plus: { options }
        } = this
        names.forEach((i) => {
          options[i] = false
          if (!value) return
          options[value] = true
        })
      },

      // 生成初始值
      createInitialValue() {
        // 初始化一次数据修复切换存档时的选中状态,因为不会重新渲染
        Object.assign(this.$data, this.$options.data())

        const {
          plus: { options },
          combatRegenNames,
          dropRateNames,
          moneyNames,
          expNames,
          itemCdNames,
          skillShacklesNames,
          enemyDamageNames
        } = this

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
      }
    },
    watch: {
      plus() {
        this.createInitialValue()
      }
    }
  }
</script>

<style scoped lang="scss">
  .master-switch {
    display: block;
    margin-bottom: 10px;
    color: red;
  }

  .switchs-ul {
    max-height: 280px;
    overflow: auto;
  }

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
        margin-right: 15px;
        margin-top: 3px;
      }
    }
  }
</style>
