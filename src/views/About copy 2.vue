<template>
      <div ref="bigEyeContainerRef"></div>
    <div ref="smallEyeContainerRef"></div>
    <div ref="bigRoadContainerRef"></div>
</template>

<script setup>
import { ref, onMounted,onUnmounted } from 'vue';
import * as PIXI from 'pixi.js';
import logo from '@/assets/images/logo1.png'

const bigEyeContainerRef = ref(null);
const smallEyeContainerRef = ref(null);
const bigRoadContainerRef = ref(null);

const appConfig = {
  width: 400,
  height: 300,
  backgroundColor: 0x000000,
};

const bigEyeApp = new PIXI.Application(appConfig);
const smallEyeApp = new PIXI.Application(appConfig);
const bigRoadApp = new PIXI.Application(appConfig);

const container = ref(null);

onMounted(() => {
  bigEyeContainerRef.value.appendChild(bigEyeApp.view);
  smallEyeContainerRef.value.appendChild(smallEyeApp.view);
  bigRoadContainerRef.value.appendChild(bigRoadApp.view);
  //app.renderer.resize(container.value.offsetWidth, container.value.offsetHeight);
});
  // create grids for each roadmap type
  const bigEyeGrid = createGrid(bigEyeApp, 20, 20, 4, 52);
  const smallEyeGrid = createGrid(smallEyeApp, 15, 15, 6, 52);
  const bigRoadGrid = createGrid(bigRoadApp, 30, 30, 6, 52);
  // create more grids for other roadmap types here
  
  // add sample data to grids for testing purposes
  const results = [
    { type: 'player', value: 9 },
    { type: 'banker', value: 8 },
    { type: 'player', value: 5 },
    { type: 'banker', value: 9 },
    { type: 'player', value: 6 },
    { type: 'banker', value: 7 },
    { type: 'player', value: 2 },
    { type: 'banker', value: 4 },
    { type: 'player', value: 8 },
    { type: 'banker', value: 1 },
    { type: 'player', value: 9 },
    { type: 'banker', value: 3 },
  ];
  results.forEach(result => {
    addResultToGrid(bigEyeGrid, result);
    addResultToGrid(smallEyeGrid, result);
    addResultToGrid(bigRoadGrid, result);
    // add results to other grids for other roadmap types here
  });

  onUnmounted(() => {
  bigEyeApp.destroy();
  smallEyeApp.destroy();
  bigRoadApp.destroy();
  // destroy other PIXI.Application instances here
});

function createGrid(app, cellWidth, cellHeight, numRows, numCols) {
  const gridContainer = new PIXI.Container();
  app.stage.addChild(gridContainer);
  
  const grid = [];
  for (let i = 0; i < numRows; i++) {
    grid[i] = [];
    for (let j = 0; j < numCols; j++) {
      const cell = new PIXI.Graphics();
      cell.lineStyle(1, 0xffffff, 0.3);
      cell.drawRect(j * cellWidth, i * cellHeight, cellWidth, cellHeight);
      gridContainer.addChild(cell);
      grid[i][j] = cell;
    }
  }
  return grid;
}

function addResultToGrid(grid, result) {
  const lastCell = getLastCell(grid);
  if (!lastCell) {
    // grid is empty, add first result at the top-left corner
    const cell = grid[0][0];
    cell.beginFill(getResultColor(result.type));
    cell.drawRect(0, 0, cell.width, cell.height);
    cell.endFill();
  } else {
    const lastRowIndex = grid.indexOf(lastCell.parent.children);
    const lastColIndex = lastCell.parent.children.indexOf(lastCell);
    const nextCell = getNextCell(grid, lastRowIndex, lastColIndex);
    if (!nextCell) {
      // reached end of grid, don't add any more results
      return;
    }
    nextCell.beginFill(getResultColor(result.type));
    nextCell.drawRect(0, 0, nextCell.width, nextCell.height);
    nextCell.endFill();
  }
}

function getLastCell(grid) {
  for (let i = grid.length - 1; i >= 0; i--) {
    for (let j = grid[i].length - 1; j >= 0; j--) {
      const cell = grid[i][j];
      if (cell.graphicsData?.length === 0) {
        // empty cell found, return it as the last cell
        return cell;
      }
    }
  }
  // no empty cells found, grid is full
  return null;
}

function getNextCell(grid, rowIndex, colIndex) {
  const nextRowIndex = rowIndex + 1;
  const nextColIndex = colIndex + 1;
  if (nextRowIndex >= grid.length) {
    // reached end of grid, no more cells
    return null;
  }
  if (nextColIndex >= grid[nextRowIndex].length) {
    // next row has fewer columns, use first column instead
    return grid[nextRowIndex][0];
  }
  // next cell is in the same row, use next column
  return grid[nextRowIndex][nextColIndex];
}

function getResultColor(resultType) {
  return resultType === 'player' ? 0xdddddd : 0x333333;
}

</script>

<style>
  canvas {
    width: 100%;
    height: 100%;
  }
</style>
