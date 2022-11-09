<template>
  <div>
    <canvas ref="verfiyCanvas" class="canvas" :width="canvasSetting.width" :height="canvasSetting.height"
    @click="refresh">
    </canvas>
  </div>
</template>
<script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: "w-verifyCode"
  })
</script>
<script setup>
  import { ref, reactive, onMounted, toRefs, defineProps } from 'vue'
  const codeText = ref('')
  const verfiyCanvas = ref(null)
  /**接收父组件传值*/
  const props = defineProps({
    canvasSetting: {
      type: Object,
      default: {
        pool: 'abcdefghjkmnpqrstuvwxyz23456789',
        width: 120,
        height: 36,
        size: 4
      }
    },
  })
  const { canvasSetting } = toRefs(props)
  /**用来判断是否通过验证*/
  const checkResult = (verifyCode) => {
    console.log(verifyCode,"数据据");
    if (!verifyCode || verifyCode.length === 0) {
      return false
    }

    if (verifyCode.toLowerCase() !== codeText.value.toLowerCase()) {
      generateCode()
      return false
    } else {
      return true
    }
  }

  const randomNum = (min, max) => {
    return parseInt(Math.random() * (max - min) + min)
  }

  const randomColor = (min, max) => {
    const r = randomNum(min, max)
    const g = randomNum(min, max)
    const b = randomNum(min, max)
    return `rgb(${r},${g},${b})`
  }

  const generateCode = () => {
    codeText.value = ''
    const ctx = verfiyCanvas.value.getContext('2d')
    ctx.fillStyle = randomColor(230, 255)
    ctx.fillRect(0, 0, canvasSetting.value.width, canvasSetting.value.height)

    for (let i = 0; i < canvasSetting.value.size; i++) {
      let currentText = '' + canvasSetting.value.pool[randomNum(0, canvasSetting.value.pool.length)]
      codeText.value += currentText
      ctx.font = '36px Simhei'
      ctx.textAlign = "center"
      ctx.fillStyle = randomColor(80, 150)
      ctx.fillText(currentText, (i + 1) * randomNum(20, 25), canvasSetting.value.height / 2 + 13)
    }

    for (let i = 0; i < 5; i++) {
      ctx.beginPath()
      ctx.moveTo(randomNum(0, canvasSetting.value.width), randomNum(0, canvasSetting.value.height))
      ctx.lineTo(randomNum(0, canvasSetting.value.width), randomNum(0, canvasSetting.value.height))
      ctx.strokeStyle = randomColor(180, 230)
      ctx.closePath()
      ctx.stroke()
    }

    for (let i = 0; i < 40; i++) {
      ctx.beginPath()
      ctx.arc(randomNum(0, canvasSetting.value.width), randomNum(0, canvasSetting.value.height), 1, 0, 2 * Math.PI)
      ctx.closePath()
      ctx.fillStyle = randomColor(150, 200)
      ctx.fill()
    }

    ctx.restore()
    ctx.save()

    return codeText
  }

  onMounted(() => {
    generateCode()
  })

  const refresh = () => {
    generateCode()
  }
/**父子组件互动*/
  defineExpose({ checkResult, refresh })
</script>


<style scoped>
  .canvas {
    cursor: pointer;
  }
</style>