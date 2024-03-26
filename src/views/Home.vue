<script setup>
import ButtonRepo from "@/components/ButtonRepo.vue";
import ModalDialog from "@/components/ModalDialog.vue";
import GameModalDialog from "@/components/gameModal.vue";
import api from "@/network/allApi";
import  vueQr  from  'vue-qr/src/packages/vue-qr.vue' 
import logo from "@/assets/images/logo1.png";
import About from "./About.vue";
import { ref, onMounted } from "vue";
import {  XIcon } from "@heroicons/vue/outline";


const adDialog = ref(false)

const imageSource = ref(1);
const showIosModal = ref(false);
const playerRule = ref(false);
const showCerti = ref(false);
const isshowKefu = ref(false)//for service
const h5_isshowKefu = ref(false)//for service
const centerImg = ref("/lk1.png");
const img1 = ref("/dh3.png");
const img2 = ref("/dj3.png");
const img3 = ref("/ht3.png");
const img4 = ref("/xyx3.png");
const activeTab = ref(0);

const notice_Dialog = ref(false) //notice dialog for old pc
const phone_Dialog = ref(false)
const selectGameModal = ref(false);
const h5_selectGameDialog = ref(false);
const pcActiveTab = ref(1); //middle one active

const infoData = ref([]);

const redirecting = ref(false);

const Global = global; // call unknow.js object as global

onMounted(() => {
  // window.addEventListener("scroll", handleScroll);
  //callData();
  //adDialog.value = true
});

const goGame = () => {
  switch (pcActiveTab.value) {
    case 0:
      selectGameModal.value = true;
      break;
    case 1:
      selectGameModal.value = true;
      break;
    case 2:
      window.open(Global.ad);
      break;

    default:
      break;
  }
};

const closeService = () => {
  console.log("click")
  isshowKefu.value = false
  console.log(isshowKefu.value ,"dddddd")
}

const clickService = (number) => {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=500,height=700,left=${window.screen.width / 2},top=${window.screen.width / 2}`;
  switch (number) {
    case 0:
       window.open(Global.service1,"mywindow",params)
       isshowKefu.value = false
       h5_isshowKefu.value = false
      break;
    // case 1:
    //    window.open(Global.service2,"mywindow",params)
    //    isshowKefu.value = false
    //     h5_isshowKefu.value = false
    //   break;
  
    default:
      break;
  }
}

const closeGameModal = () => {
  selectGameModal.value = false;
  notice_Dialog.value = false;
  console.log("clllllllllllllll");
};

const goDialog_Game = (number) => {
  switch (number) {
    case 0:
       window.open(Global.old_pc_game_url);
      //notice_Dialog.value = true
      selectGameModal.value = false;
      break;
    case 1:
      window.open(Global.new_pc_game_url);
      selectGameModal.value = false;
       notice_Dialog.value = false
      break;
    case 2:
      window.open(Global.h5_game_url);
      h5_selectGameDialog.value = false;
      break;
    case 3:
      window.open(Global.new_pc_game_url);
      h5_selectGameDialog.value = false;
      break;

    default:
      break;
  }
};

const h5_click = (number) => {
  switch (number) {
    case 0:
      window.open(Global.app_down);
      break;
    case 1:
      window.open(Global.ad);
      break;
    case 2:
      window.open(Global.chat_app);
    case 3:
      h5_isshowKefu.value = true
      break;
    case 4:
     window.open(Global.small_game);
      break;
    case 5:
     phone_Dialog.value = true
      break;
    case 6:
    window.open(Global.reg);
      break;

    default:
      break;
  }
};

const goGamePc = (number) => {
  pcActiveTab.value = number;
  switch (number) {
    case 0:
      selectGameModal.value = true;
      break;
    case 1:
      selectGameModal.value = true;
      break;
    case 2:
      window.open(Global.ad);
      break;
    case 3:
      window.open(Global.small_game);
      break;

    default:
      break;
  }
};

const callData = () => {
  try {
    api
      .getDataInfo()
      .then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          infoData.value = res.data.data;
        }
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (e) {
    console.log(e);
  }
};
function testOpen() {
  redirecting.value = true;

  setTimeout(() => {
    redirecting.value = false;
  }, 5000);
}

const showRules = (number) => {
  activeTab.value = number;
};
const MouseOver = () => {
  centerImg.value = "/lk2.gif";
  img1.value = "/dhb3.png";
  img2.value = "/djb3.png";
  img3.value = "/htb3.png";
  img4.value = "/xyxb3.png";
};

const MouseOut = () => {
  centerImg.value = "/lk1.png";
  img1.value = "/dh3.png";
  img2.value = "/dj3.png";
  img3.value = "/ht3.png";
  img4.value = "/xyx3.png";
};
</script>

<template>
  <!-- <div v-if="redirecting" class="home relative hidden sm:block ">
    <ButtonRepo  destination="https://www.example.com" />
  </div> -->

  <div class="home relative hidden sm:block ">
    <div class="absolute bottom-2 w-full text-white z-10 text-3xl flex items-center justify-center ">
        <div class="w-[500px] text-[#ff0000] bg-white  py-2 rounded-md px-1">
          <Vue3Marquee class=" w-full  tracking-[3px]">
         有会员账号的玩家，请尽量登陆之后再联系客服。
        </Vue3Marquee>
        </div>
    </div>
    <!-- <section class="absolute top-20 lef-20">
      sdfdsf
    </section> -->

    <div class="absolute top-20 left-10 flex justify-center items-center">
      <img
        src="@/assets/images/pz.png"
        alt=""
        class="w-[120px] h-auto cursor-pointer mx-5"
        @mouseover="showCerti = true"
        @mouseout="showCerti = false"
      />
      <img
        src="@/assets/images/gz.png"
        alt=""
        class="w-[120px] h-auto cursor-pointer mx-5"
        @click="playerRule = true"
      />
    </div>
    <div class="absolute top-28 left-6">
      <img
        v-if="showCerti"
        src="@/assets/images/pz2.png"
        alt=""
        class="w-full h-full"
      />
    </div>

    <div class="m-auto md:w-[700px] xl:w-[800px] h-auto relative">
      <!-- hongbao -->
      <!-- <div class="flex absolute -left-28 justify-center items-center w-[200px]  ">
        <img src="@/assets/images/Left.png" alt="left" class="w-full object-cover animate-fade-left-right ">
     </div>
      <div class="flex absolute -right-28 justify-center items-center w-[200px]  ">
        <img src="@/assets/images/right.png" alt="left" class="w-full object-cover animate-fade-left-right ">
     </div> -->

      <div class="pt-16">
        <img
          class="Rotation img block m-auto h-auto w-[30%]"
          src="@/assets/images/logo1.png"
        />
        <img
          class="Rotation img block m-auto h-auto w-[60%]"
          src="@/assets/images/logo2.png"
        />
      </div>
      <!--  -->
      <div class="relative">
        <div
          @click="goGame"
          class="w-[210px] h-auto relative pt-[100px] m-auto"
          @mouseover="MouseOver()"
          @mouseout="MouseOut()"
        >
          <a>
            <img class="img1 top-0 left-0 block m-auto" :src="centerImg" />
            <img
              v-if="imageSource == 1"
              class="img2 absolute top-[50%] flex justify-center items-center m-auto left-0 right-0"
              :src="img1"
            />
            <img
              v-else-if="imageSource == 2"
              class="img2 absolute top-[50%] flex justify-center items-center m-auto left-0 right-0"
              :src="img2"
            />
            <img
              v-else-if="imageSource == 3"
              class="img2 absolute top-[50%] flex justify-center items-center m-auto left-0 right-0"
              :src="img3"
            />
            <img
              v-else-if="imageSource == 4"
              class="img2 absolute top-[50%] flex justify-center items-center m-auto left-0 right-0"
              :src="img4"
            />
          </a>
        </div>
        <div
          class="sm:space-y-4 lg:space-y-0 lg:flex-row flex items-center justify-center space-x-10 pt-[80px]"
        >
          <div
            @click="goGamePc(0)"
            class="rounded-3xl w-36 h-12 text-center font-bold tracking-wider __btn cursor-pointer flex justify-center items-center text-black"
            :class="pcActiveTab == 0 ? ' active_class ' : ''"
            @mouseover="imageSource = 1"
          >
            电话视讯
          </div>
          <div
            @click="goGamePc(1)"
            :class="pcActiveTab == 1 ? ' active_class ' : ''"
            class="rounded-3xl w-36 h-12 text-center font-bold tracking-wider __btn cursor-pointer flex justify-center items-center text-black"
            @mouseover="imageSource = 2"
          >
            点击视讯
          </div>
          <div
            @click="goGamePc(2)"
            :class="pcActiveTab == 2 ? ' active_class ' : ''"
            class="rounded-3xl w-36 h-12 text-center font-bold tracking-wider __btn cursor-pointer flex justify-center items-center text-black"
            @mouseover="imageSource = 3"
          >
            后台登录
          </div>
          <div
            @click="goGamePc(3)"
            :class="pcActiveTab == 3 ? ' active_class ' : ''"
            class="rounded-3xl w-36 h-12 text-center font-bold tracking-wider __btn cursor-pointer flex justify-center items-center text-black"
            @mouseover="imageSource = 4"
          >
          休闲小游戏
          </div>
          <!-- <div class="rounded-3xl w-44 h-12 text-center font-bold tracking-wider __btn
        cursor-pointer  flex justify-center items-center text-black" style="font-size:16px"
            @mouseover="imageSource = 4"> 后台登录（精简版）</div> -->
          <!-- <div class="z-50 pt-11">
    <ButtonRepo destinationUrl="https://example.com">
      Go to Example
    </ButtonRepo>
  </div> -->
        </div>
      </div>
    </div>


    <div class="absolute z-20 top-0 md:right-3 xl:right-20">
      <div class="mt-8">
        <!-- <img
          src="http://hj65555.cc/img/ltm.png"
          alt=""
          class="h-auto w-[150px] mb-2"
        /> -->
        <div class=" pb-2">
          <vue-qr
            class="h-full w-[160px] "
            v-bind:text="Global.chat_app"
            :logoSrc="logo"
            :margin="13"
            
            
            
          />
        </div>

        <button style="color: #0fc" class="qrBtn ml-1">诚信聊天软件</button>
      </div>
      
      <div class="pt-3">
        <div class=" pb-2">
          <vue-qr
            class="h-full w-[160px] "
            v-bind:text="Global.h5_game_url"
            :logoSrc="logo"
             :margin="13"
            
            
          
          />
        </div>
        <button style="color: #0fc" class="qrBtn ml-1">H5扫码</button>
      </div>
      <div class="pt-3">
        <div class=" pb-2">
          <vue-qr
            class="h-full w-[160px] "
            v-bind:text="Global.app_down"
            :logoSrc="logo"
            :margin="13"
           
           
          />
        </div>
        <button style="color: #0fc" class="qrBtn ml-1">APP下载</button>
      </div>
      <div class="pt-3">
        <button type="button" class="qrBtn" @click="showIosModal = true">
          IOS安装教程
        </button>
      </div>
      <div @click="isshowKefu = true" class="mt-3 absolute  right-0 cursor-pointer">
          <img src="@/assets/images/ic_kf.svg" alt="" class="w-10">

      </div>

      <div v-if="isshowKefu"
          class="absolute cursor-pointer  h-auto flex items-center text-white  text-center overflow-y-auto  leading-[30px] text-sm left-[-150px] bg-[#3a3a3a] ">
          <div class="w-[200px] py-2  px-2 max-h-80 h-full relative ">
            <div @click="closeService" class="absolute right-2 z-20">
              <XIcon  class="w-5 z-10 h-5  bg-white rounded-full text-black p-[2px] "></XIcon>
            </div>
            
            <h2 class="text-center text-base tracking-wide text-[#FFC827]">选择客服</h2>
            <div   class="py-1 space-y-2 ">
              <div @click="clickService(0)" class="rounded-lg flex items-center text-sm text-center justify-center bg-[#350b2d] py-2">
                皇家客服
              </div>
              <!-- <div @click="clickService(1)" class="rounded-lg flex items-center text-sm text-center justify-center bg-[#350b2d] py-2">
                皇家客服
              </div> -->
            </div>
          </div>
        </div>

        <div class="pt-[70px]  ">
        <div class="font-bold text-white text-base qrBtn  text-center py-1" style="color: #0fc" >
          官网电话
        </div>
        <div class="text-white mt-1 bg-[#3a3a3a] w-[150px]">
          <a href="tel:+95988311156" class="hover:bg-black py-1 px-2 hover:text-[#0fc]">+95 98 8311 1156</a>
        </div>
        <div class="text-white  bg-[#3a3a3a] w-[150px]">
          <a href="tel:+95988311157" class="hover:bg-black py-1 px-2 hover:text-[#0fc]">+95 98 8311 1157</a>
        </div>
        <div class="text-white  bg-[#3a3a3a] w-[150px] ">
          <a href="tel:+95988311158" class="hover:text-[#0fc] hover:bg-black py-1 px-2">+95 98 8311 1158</a>
        </div>
      </div>
      <div class="pt-3 pb-3">
        <div class=" pb-2">
          <vue-qr
            class="h-full w-[160px] "
            v-bind:text="Global.reg"
            :logoSrc="logo"
            :margin="13"
           
           
          />
        </div>
        <a :href="Global.reg" target="_blank" style="color: #0fc" class="block text-center qrBtn ml-1">注册会员</a>
      </div>
    </div>
    <ModalDialog :show="showIosModal" @close="showIosModal = false">
      <div class="w-full p-10 bg-black  bg-opacity-25 overflow-y-auto h-[90vh]">
        <p
          class="text-white text-lg font-bold py-1 tracking-wide text-center"
        >
          ios安装教程
        </p>
        <div class=" max-w-4xl">
          <img src="../assets/images/1.jpg" alt="ios download" />
          <img src="../assets/images/2.jpg" alt="ios download" />
        </div>
      </div>
    </ModalDialog>

    <ModalDialog :show="playerRule" @close="playerRule = false">
      <div class="w-full p-10 bg-white overflow-y-auto h-[90vh]">
        <div class="lg:max-w-7xl px-0 mx-auto mt-3 pt-3 opacity-95 bg-white">
          <div class="flex justify-between px-3 items-center">
            <!-- <ArrowLeftIcon @click="goBack()" class="w-10 h-10 text-black"></ArrowLeftIcon> -->
            <h1 class="text-center text-2xl text-black">玩法说明</h1>
            <!-- <h1 class="text-white ">""</h1> -->
          </div>
          <div
            class="flex justify-center px-3 space-x-8 items-center py-6 text-black cursor-pointer"
          >
            <p
              @click="showRules(0)"
              :class="
                activeTab === 0
                  ? 'text-[#634b06] font-bold border-b-4 border-[#2e0327]'
                  : ''
              "
            >
              百家乐
            </p>
            <p
              @click="showRules(1)"
              :class="
                activeTab === 1
                  ? 'text-[#634b06] font-bold border-b-4 border-[#2e0327]'
                  : ''
              "
            >
              龙虎
            </p>
            <p
              @click="showRules(2)"
              :class="
                activeTab === 2
                  ? 'text-[#634b06] font-bold border-b-4 border-[#2e0327]'
                  : ''
              "
            >
              牛牛
            </p>
            <p
              @click="showRules(3)"
              :class="
                activeTab === 3
                  ? 'text-[#634b06] font-bold border-b-4 border-[#2e0327]'
                  : ''
              "
            >
              好路详解
            </p>
          </div>
          <div class="w-full h-auto pb-4">
            <img
              v-if="activeTab === 0"
              src="../assets/images/gzbjl.jpg"
              alt=""
              class="w-full h-full"
            />
            <img
              v-else-if="activeTab === 1"
              src="../assets/images/lh.jpg"
              alt=""
              class="w-full h-full"
            />
            <img
              v-else-if="activeTab === 2"
              src="../assets/images/nn.jpg"
              alt=""
              class="w-full h-full"
            />
            <img
              v-else
              src="../assets/images/hl.jpg"
              alt=""
              class="w-full h-full"
            />
          </div>
        </div>
      </div>
    </ModalDialog>

    <GameModalDialog :show="selectGameModal" @closegame="closeGameModal">
      <div
        class="game_bg_image md:max-w-[1000px] lg:max-w-[1050px] cursor-pointer"
      >
        <div class="w-full absolute top-28 px-4">
          <div class="w-full items-center mt-10 grid grid-cols-2 gap-x-1">
            <div
              class="flex flex-col items-center px-4 font-bold text-white text-2xl"
            >
              <div>经 典 版</div>
              <div
                @click="goDialog_Game(1)"
                class="w-full hover:border-[3px] cursor-pointer hover:border-solid hover:border-[#ecda92] border-[2px] border-solid rounded border-[#836a4c] h-64 mt-5"
              >
                <img
                  src="@/assets/images/gameimg2.png"
                  alt=""
                  class="w-full h-full object-cover p-[1px]"
                />
              </div>
            </div>
            <div
              class="flex flex-col items-center px-4 font-bold text-white text-2xl"
            >
              <div>豪 华 版</div>
              <div
                @click="goDialog_Game(0)"
                class="w-full border-[2px] border-solid hover:border-[3px] cursor-pointer hover:border-solid hover:border-[#ecda92] rounded border-[#836a4c] h-64 mt-5"
              >
                <img
                  src="@/assets/images/gameimg1.jpg"
                  alt=""
                  class="w-full h-full object-cover p-[1px]"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </GameModalDialog>

    <GameModalDialog :show="notice_Dialog" @closegame="closeGameModal">
      <div  @click="goDialog_Game(1)"
        class="  game_bg_image_2 cursor-pointer my-0 mx-auto relative"
      >
        <div class="w-full absolute top-0 px-4 h-full">
            <div class="w-full items-center h-full flex justify-center ">

          <img src="@/assets/images/jump.png" alt="" class=" w-full" draggable="false">
            </div>
          
        </div>
      </div>
    </GameModalDialog>
<!-- 
    <GameModalDialog :show="adDialog" @closegame="adDialog=false">
      <div  
        class="    p-5 bg-transparent cursor-pointer my-0 mx-auto relative"
      >
        <div class="sm:w-[70vw] sm:h-[75vh] w-[80vw] h-64 ">
            <div class="w-full items-center h-full flex justify-center ">

          <img src="@/assets/images/hd.png" alt="" class=" w-full h-full object-cover sm:object-fill " draggable="false">
            </div>
          
        </div>
      </div>
    </GameModalDialog> -->

  </div>

  <div class="sm:hidden h-screen bg-black w-full relative overflow-y-auto">
    <img src="@/assets/images/index_01.jpg" class="w-full h-auto" alt="" />
    <div class="flex justify-center items-center flex-col pt-3 pb-20 ">
       <div class=" w-full px-4 text-[#ff0000]   py-2 ">
          <Vue3Marquee class=" w-full  tracking-[3px]">
         有会员账号的玩家，请尽量登陆之后再联系客服。
        </Vue3Marquee>
      </div>

      <div class="BtnUnit">
        <div class="T1" @click="h5_click(6)">
          <a class="text-white">注册会员</a>
        </div>
      </div>
      <div class="BtnUnit">
        <div class="T1" @click="goDialog_Game(2)">
          <a class="text-white">H5 登录入口</a>
        </div>
      </div>
      <div class="BtnUnit">
        <div @click="h5_click(0)" class="T1">
          <a>安卓苹果下载</a>
        </div>
      </div>
      <div class="BtnUnit">
        <div @click="h5_click(1)" class="T1">
          <a>代理登录入口</a>
        </div>
      </div>
      <!-- <div @click="h5_click(2)" class="BtnUnit">
        <div class="T1"><a>诚信聊天下载</a></div>
      </div> -->
      <div @click="h5_click(4)" class="BtnUnit">
        <div class="T1"><a>休闲小游戏</a></div>
      </div>
      <div @click="h5_click(3)" class="BtnUnit">
        <div class="T1"><a>客服</a></div>
      </div>
      <div @click="h5_click(5)" class="BtnUnit">
        <div class="T1"><a>官网电话</a></div>
      </div>
      <!-- <div class="BtnUnit">
        <div class="T1">
          <a href="http://cx5577.com">推广复制当前链接分享</a>
        </div>
      </div> -->

    </div>
    <div class="fixed bottom-0 w-full h-36 __bgfooter"></div>
    <div class="fixed bottom-2 text-center w-full">
      <p class="text-white text-[11px]">COPYRIGHT ©皇家娱乐 2023 RESERVED</p>
    </div>
  </div>

  <GameModalDialog
    :show="h5_selectGameDialog"
    @closegame="h5_selectGameDialog = false"
  >
    <div class="h-auto w-[90vw] cursor-pointer">
      <div class="mt-12 bg-black">
        <div
          class="flex flex-col items-center px-4 font-bold text-white text-2xl bg-[#2b2a2954] py-3"
        >
          <div>豪 华 版</div>
          <div
            @click="goDialog_Game(2)"
            class="w-full border-[2px] border-solid hover:border-[3px] cursor-pointer hover:border-solid hover:border-[#ecda92] rounded border-[#836a4c] h-40"
          >
            <img
              src="@/assets/images/gameimg1.jpg"
              alt=""
              class="w-full h-full object-cover p-[1px]"
            />
          </div>
        </div>
        <!-- <div
          class="flex flex-col items-center px-4 font-bold text-white text-2xl bg-[#2b2a2954] py-3"
        >
          <div>经 典 版</div>
          <div
            @click="goDialog_Game(3)"
            class="w-full border-[2px] border-solid hover:border-[3px] cursor-pointer hover:border-solid hover:border-[#ecda92] rounded border-[#836a4c] h-40"
          >
            <img
              src="@/assets/images/gameimg2.png"
              alt=""
              class="w-full h-full object-cover p-[1px]"
            />
          </div>
        </div> -->
      </div>
    </div>
  </GameModalDialog>

  <GameModalDialog
    :show="h5_isshowKefu"
    @closegame="h5_isshowKefu = false"
  >
    <div class="h-auto w-[90vw] cursor-pointer py-2">
      <div class="mt-12 bg-black">
        <div
          class="flex flex-col items-center px-4 font-bold text-white text-2xl bg-[#2b2a2954] py-3"
        >
          <div>选择客服</div>
          <div
            @click="clickService(0)"
            class="w-full border-[1px] h-10 mt-3 text-center text-base leading-10 border-solid hover:border-[1px] cursor-pointer hover:border-solid hover:border-[#ecda92] rounded border-[#836a4c] "
          >
            皇家客服
          </div>
          <!-- <div
            @click="clickService(1)"
            class="w-full border-[1px] h-10 mt-3 text-center text-base leading-10 border-solid hover:border-[1px] cursor-pointer hover:border-solid hover:border-[#ecda92] rounded border-[#836a4c] "
          >
            皇家客服
          </div> -->
        </div>
      </div>
    </div>
  </GameModalDialog>
  <GameModalDialog
    :show="phone_Dialog"
    @closegame="phone_Dialog = false"
  >
    <div class="h-auto w-[90vw] cursor-pointer py-2">
      <div class="mt-12 bg-black">
        <div
          class="flex flex-col items-center px-4 font-bold text-white text-2xl bg-[#2b2a2954] py-3"
        >
          <div>官网电话</div>
          <div
           
            class="w-full border-[1px] h-10 mt-3 text-center text-base leading-10 border-solid hover:border-[1px] cursor-pointer hover:border-solid hover:border-[#ecda92] rounded border-[#836a4c] "
          >
            <a href="tel:+95988311156" class="hover:bg-black  px-2 hover:text-[#0fc]  block">+95 98 8311 1156</a>
          </div>
          <div
           
            class="w-full border-[1px] h-10 mt-3 text-center text-base leading-10 border-solid hover:border-[1px] cursor-pointer hover:border-solid hover:border-[#ecda92] rounded border-[#836a4c] "
          >
          <a href="tel:+95988311157" class="hover:bg-black  px-2 hover:text-[#0fc] block">+95 98 8311 1157</a>

          </div>
          <div
          
            class="w-full border-[1px] h-10 mt-3 text-center text-base leading-10 border-solid hover:border-[1px] cursor-pointer hover:border-solid hover:border-[#ecda92] rounded border-[#836a4c] "
          >
          <a href="tel:+95988311158" class="hover:text-[#0fc] hover:bg-black block px-2">+95 98 8311 1158</a>

          </div>
        </div>
      </div>
    </div>
  </GameModalDialog>
</template>


<style>

/* @keyframes fadeLeftRight {
    0%, 100% {
        opacity: 0.6;
        transform: translateX(-25%);
    }
    50% {
        opacity: 1;
        transform: none;
    }
}
.animate-fade-left-right {
    animation: fadeLeftRight 3s ease-in-out infinite;
} */
.__bgfooter {
  background-image: url("@/assets/images/pc_bg.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.home {
  background-image: url("@/assets/images/123.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /* position: fixed;
   right: 0;
    bottom: 0; */
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.__btn {
  background: rgba(255, 255, 255, 0.8);
  font-size: 24px;
}
.active_class {
  box-shadow: rgb(0, 188, 216) 0px 0px 30px;
  color: white;
  background: rgb(0, 188, 216);
  border-radius: 25px;
}
.__btn:hover {
  box-shadow: rgb(0, 188, 216) 0px 0px 30px;
  color: white;
  background: rgb(0, 188, 216);
  border-radius: 25px;
}
.qrBtn {
  width: 150px;
  height: 30px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  outline: medium;
  background: rgba(200, 255, 255, 0.4);
  box-shadow: inset 0px 0px 30px white;
}

.BtnUnit {
  width: 185px;
  height: 40px;
  border-radius: 5px;
  color: #fff;
  background: rgba(0, 0, 0, 0);
  position: relative;
  margin-top: 7px;
  transition: background-color 0.6s;
  cursor: pointer;
  border: 1px solid #999;
}
.BtnUnit .T1 {
  font-size: 16px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.game_bg_image {
  width: 1050px;
  height: 550px;
  margin: 0 auto;
  background: transparent;
  background-image: url(@/assets/images/gamedialogBg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: transparent;
  position: relative;
  /* z-index: 9999; */
}
.game_bg_image_2 {
  width: 700px;
  height: 550px;
  margin: 0 auto;
  background-color: transparent;
  position: relative;
  /* z-index: 9999; */
}
</style>