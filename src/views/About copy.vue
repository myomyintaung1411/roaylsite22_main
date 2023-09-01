<template>
  <div>
    <img :src="imageSrc" alt="Card Image" />
    <div id="scanner-container"></div>

  </div>
</template>

<script setup>
import {ref, onMounted,onUnmounted} from 'vue'
import Tesseract from 'tesseract.js';
import Quagga from 'quagga';

const suits = {
  'D': 'diamonds',
  'H': 'hearts',
  'C': 'clubs',
  'S': 'spades'
};

const cardNumbers = {
  'A': 'ace',
  'K': 'king',
  'Q': 'queen',
  'J': 'jack'
  // map the remaining card numbers to their corresponding file names
  // ...
};

const imageSrc = ref('');


const extractCardNumber = (data) => {
  const pattern = /[AKQJ]|10|[2-9]/g;
  const matches = data.match(pattern);
  if (matches && matches.length > 0) {
    return matches[0];
  }
  return '';
};

const extractSuitType = (data) => {
  const pattern = /[DHCS]/g;
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


const handleScanResult = async (imageData) => {
  const { data } = await Tesseract.recognize(imageData);
  const cardNumber = extractCardNumber(data);
  const suitType = extractSuitType(data);
  if (cardNumber && suitType) {
    displayImage(cardNumber, suitType);
  }
};

const handleBarcodeScanResult = async (result) => {
  const barcodeData = result.codeResult.code;
  const suitTypes = ['C', 'D', 'H', 'S']; // possible suit types

  // Extract card number from barcode data
  const cardNumber = barcodeData.substring(0, barcodeData.length - 1);

  // Extract suit type from barcode data
  const suitTypeChar = barcodeData.charAt(barcodeData.length - 1);
  let suitType = '';
  switch (suitTypeChar) {
    case 'C':
      suitType = 'clubs';
      break;
    case 'D':
      suitType = 'diamonds';
      break;
    case 'H':
      suitType = 'hearts';
      break;
    case 'S':
      suitType = 'spades';
      break;
    default:
      // Suit type not recognized
      console.error('Invalid suit type:', suitTypeChar);
      return;
  }

  displayImage(cardNumber, suitType);
};


onMounted(() => {
  Quagga.init({
    inputStream: {
      name: 'Live',
      type: 'LiveStream',
      target: document.querySelector('#scanner-container')
    },
    decoder: {
      readers: ['code_128_reader']
    }
  }, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Quagga initialized');
    Quagga.start();
  });

  Quagga.onDetected((result) => {
    Quagga.stop();
    handleBarcodeScanResult(result);
  });
});

onUnmounted(() => {
  Quagga.stop();
});
</script>
