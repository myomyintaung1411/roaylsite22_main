<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const results = [
  'Player', 'Player', 'Player', 'Player', 'Banker', 'Banker', 'Tie', 'Player', 'Banker', 'Banker',
  'Player', 'Player', 'Banker', 'Player', 'Banker', 'Tie', 'Banker', 'Player', 'Player', 'Player'
]

const cellWidth = 20
const cellHeight = 20
const padding = 2

const drawBeadRoad = (ctx, results) => {
  const radius = 8

  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

  let x = padding
  let y = padding
  let row = 0
  let col = 0

  for (const result of results) {
    if (result === 'Player') {
      ctx.beginPath()
      ctx.arc(x + cellWidth / 2, y + cellHeight / 2, radius, 0, 2 * Math.PI)
      ctx.fillStyle = 'blue'
      ctx.fill()

      x += cellWidth + padding
      col++
    } else if (result === 'Banker') {
      ctx.beginPath()
      ctx.arc(x + cellWidth / 2, y + cellHeight / 2, radius, 0, 2 * Math.PI)
      ctx.fillStyle = 'red'
      ctx.fill()

      x += cellWidth + padding
      col++
    } else if (result === 'Tie') {
      // Skip a column for ties
      x += cellWidth + padding
      col++
    }

    if (col >= 6) {
      // Start a new row after 6 columns
      x = padding
      y += cellHeight + padding
      col = 0
      row++
    }
  }
}

const canvas = ref(null)

onMounted(() => {
  canvas.value.width = 300
  canvas.value.height = 200
  drawBeadRoad(canvas.value.getContext('2d'), results)
})
</script>
