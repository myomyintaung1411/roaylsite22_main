<template>
  <div>
    <img :src="imageSrc" alt="Card Image" />
  </div>
</template>

<script setup>
import {ref,onMounted,onUnmounted} from 'vue'
import Tesseract from 'tesseract.js';

const cardNumbers = {
  'A': 'ace',
  'K': 'king',
  'Q': 'queen',
  'J': 'jack'
  // map the remaining card numbers to their corresponding file names
  // ...
};

const extractCardNumber = (data) => {
  const pattern = /[AKQJ]|10|[2-9]/g;
  const matches = data.match(pattern);
  if (matches && matches.length > 0) {
    return matches[0];
  }
  return '';
};

const extractSuitType = (data) => {
  const pattern = /diamond|heart|club|spade/g;
  const matches = data.match(pattern);
  if (matches && matches.length > 0) {
    return matches[0];
  }
  return '';
};

const displayImage = (cardNumber, suitType) => {
  let imageName = `${cardNumbers[cardNumber] || cardNumber}_${suitType}.png`;
  import(`../assets/${imageName}`)
    .then((imagePath) => {
      imageSrc.value = imagePath.default || imagePath;
    })
    .catch((error) => {
      console.error(error);
    });
};

const imageSrc = ref('');

const handleScanResult = async (imageData) => {
  const { data } = await Tesseract.recognize(imageData);
  const cardNumber = extractCardNumber(data);
  const suitType = extractSuitType(data);
  displayImage(cardNumber, suitType);
};
</script>
