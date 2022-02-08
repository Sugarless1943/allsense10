<template>
  <div>
    <div id="map" ref="rootmap" v-loading="loading" element-loading-text="正在加载中"
         element-loading-spinner="el-icon-loading">
      <div class="headerLogo" v-if="headerLogoVisible">
        <!--                <div class="leftImg"><img v-if='leftImgLogo' :src="leftImgLogo" alt="" width="50px" height="auto" align="left"></div>-->
        <div class="rightImg">
          <div class="logoTitle">{{ logoTitle }}</div>
          <div class="logoTitle">TARDIS</div>
        </div>
      </div>
      <div class="mapTitle" v-if="!fullScreenMode">
        {{ statelliteName }}：{{ productVal }} {{ dateChoose }} ({{ $t('mainCon.bjsj') }})
      </div>
      <div class="leftMenu" v-if="leftMenuControl">
        <!--动画部分-->
        <div class="animationBox">
          <div>{{ bjDateTime }}</div>
          <div class="font14">{{ $t('mainCon.bjsj') }}</div>
          <div class="slideOne">
            <!-- 播放进度条 -->
            <vue-slider v-model="dateSlideVal" :interval='1' :max="sliderMax"
                        ref="slider" @change="changeSpeend" tooltip="none"></vue-slider>
            <div>
              <el-button type="default" size="mini" v-if="playPause" @click="playClick">{{ $t('mainCon.play') }}
              </el-button>
              <el-button type="default" size="mini" v-if="!playPause" @click="pauseClick">{{ $t('mainCon.pause') }}
              </el-button>
              <el-button type="primary" size="mini" icon="el-icon-arrow-left" @click="minusAnimation"></el-button>
              <el-button type="primary" size="mini" icon="el-icon-arrow-right" @click="addAnimation"></el-button>
              <el-button type="primary" size="mini" icon="el-icon-date" @click="dateRangeChoose"
                         style="font-size:18px;padding:6px 14px;vertical-align: bottom;"></el-button>
            </div>
            <div class="speedDiv">
              <span class="textName">{{ $t('mainCon.speed') }}：</span>
              <span>
                             <vue-slider class="vueSlide1" v-model="animationSpeed"
                                         @change="speedChange"
                                         :tooltip-formatter="formatTooltip"
                                         :max="3000" :min="500" :interval="100">
                             </vue-slider>
                        </span>
            </div>
            <div style="clear:both;"></div>
            <!--时间范围选择-->
            <transition name="el-zoom-in-top">
              <div class="dateBox" v-if="dateRangeVisible">
                <div class="startBox">
                  <el-row :gutter="0">
                    <el-col :span="11">
                      <el-select v-model="miniStartDate" :placeholder="$t('mainCon.startTime')" size="mini" class=""
                                 clearable @change="startDateClick">
                        <el-option
                            v-for="(item,index) in yearList"
                            :key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="6">
                      <el-select v-model="miniStartHour" :placeholder="$t('mainCon.hour')" size="mini" class=""
                                 clearable @change="startHourClick">
                        <el-option
                            v-for="(item,index) in hourList"
                            :key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="6">
                      <el-select v-model="miniStartMinute" :placeholder="$t('mainCon.minute')" size="mini" clearable
                                 @change="startMinuteClick">
                        <el-option
                            v-for="(item,index) in minuteList"
                            :key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                      </el-select>
                    </el-col>
                  </el-row>
                </div>
                <div class="endBox">
                  <el-row :gutter="0">
                    <el-col :span="11">
                      <el-select v-model="miniEndDate" :placeholder="$t('mainCon.endTime')" size="mini" clearable
                                 @change="endDateClick">
                        <el-option
                            v-for="(item,index) in yearListEnd"
                            :key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="6">
                      <el-select v-model="miniEndHour" :placeholder="$t('mainCon.hour')" size="mini" clearable
                                 @change="endHourClick">
                        <el-option
                            v-for="(item,index) in hourListEnd"
                            :key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="6">
                      <el-select v-model="miniEndMinute" :placeholder="$t('mainCon.minute')" size="mini" clearable
                                 @change="endMinuteClick">
                        <el-option
                            v-for="(item,index) in minuteListEnd"
                            :key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                      </el-select>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </transition>
          </div>
        </div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick" :stretch="true">
          <el-tab-pane v-for="(item,index) in tabList" :key="index" :label="item.typeName" :name="item.type">
            <!--常用产品选择-->
            <div class="btnGroup">
              <el-row>
                <el-col :span="12" v-for="(item,index) in typeBtn" :key="index" class="typeCol">
                  <el-button :class="tabBtnActive==index?'typeBtn typeBtnActive':'typeBtn'" :id="typeBtn[index].id"
                             :title="item.productName" @click="typeBtnClick(item,index)">{{ item.productName }}
                  </el-button>
                </el-col>
              </el-row>
            </div>

            <!--产品及通道-->
            <div class="productBox">
              <el-row>
                <el-col :span="16">
                  <el-input v-model="productVal" :placeholder="$t('mainCon.productName')" readonly size="small"
                            :title="productVal"></el-input>
                </el-col>
                <el-col :span="8">
                  <el-dropdown size="small" @command="handleCommand">
                    <el-button type="primary">
                      {{ $t('mainCon.moreMenu') }}<i class="el-icon-caret-bottom el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item v-for="(item,index) in dropList" :key="index" :command="item.id">
                        {{ item.productName }}
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>
              </el-row>
            </div>
            <!--产品时次列表-->
            <div class="dateListBox">
                <ul v-show="activeName=='FY4'">
                  <li
                          v-for="(item,index) in dateList"
                          :class="dateActive === index?'dateActive':'dateBorder'"
                          :key="item.id" @click="dateListClick(item,index)" :id="item.id">{{ item.dateTimeItem }}
                  </li>
                </ul>
              <ul v-show="activeName=='H8'">
                <li
                        v-for="(item,index) in dateList"
                        :class="dateActive === index?'dateActive':'dateBorder'"
                        :key="item.id" @click="dateListClick(item,index)" :id="item.id" :ref="'h'+item.id">{{ item.dateTimeItem }}
                </li>
              </ul>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div :class="leftMenuControl?'showHiddenBtn unfold':'showHiddenBtn fold'" v-if="controlBtnVisible">
        <i class="el-icon-s-fold" :title="$t('mainCon.hidden')" @click="foldClick" v-if="leftMenuControl"></i>
        <i class="el-icon-s-unfold" :title="$t('mainCon.show')" @click="foldClick" v-if="!leftMenuControl"></i>
      </div>
      <div class="rightCtrol" @click="rightCtrolHandle">
        <svg-icon :name="rightBarVisible?'eye_open':'eye_close'"></svg-icon>
      </div>
      <div class="rightBar" v-if="rightBarVisible">
        <!--全屏-->
        <div :class="'ol-full-screen ol-unselectable ol-control'">
          <!--                  <div :class="rightBarActive1?'ol-full-screen-active ol-unselectable ol-control':'ol-full-screen ol-unselectable ol-control'">-->
          <el-button class="ol-full-screen-false" @click="fullScreen(isFull)" :title="fullScreenTitle"></el-button>
        </div>
        <!--放大缩小-->
        <div class="zoomBox ol-unselectable ol-control">
          <el-button :class="rightBarActive2?'ol-zoom-in-active':'ol-zoom-in'" icon="el-icon-plus"
                     @click="zoomInClick"></el-button>
          <div class="ol-zoom-num">{{ zoomLevel }}</div>
          <el-button :class="rightBarActive3?'ol-zoom-out-active':'ol-zoom-out'" icon="el-icon-minus"
                     @click="zoomOutClick"></el-button>
        </div>
        <!--地图工具条-->
        <div class="mapTools btn-group" v-if="!fullScreenMode">
          <ul>
            <li :class="mapToolActive == index?'active':''" v-for="(item,index) in rightToolList" :key="index"
                @click="mapToolHandle(index)" :title="item.title"></li>
          </ul>
        </div>
      </div>
      <div class="topBar" v-if="topBarVisible">
        <ul>
          <li @click="topBarClick(item,index)" :id="item.id" :class="[item.show?'topBarActive':'','top_bar_item']"
              :title="item.title" v-for="(item,index) in topList" :key="index"></li>
        </ul>
        <!--<ul class="observeBox dropMenu" v-if="areaVisible">
                    <li @click="changeViewMode()">&nbsp;{{$t('mainCon.globalArea')}}</li>
                    <li style="padding-left:1px;" @click="changeViewMode()">{{$t('mainCon.chinaArea')}}</li>
                </ul>-->
        <ul class="refreshBox dropMenu" v-if="refreshVisible">
          <li>
            <el-checkbox v-model="refreshChecked" @change="changeRefresh">{{ $t('mainCon.refresh') }}</el-checkbox>
          </li>
        </ul>
        <ul class="settingBox dropMenu" v-if="areaVisible">
          <li @click="changeViewMode(1)" :class="!areaActive?'active':''"><i class="el-icon-bangzhu"></i>
            {{ $t('mainCon.globalArea') }}
          </li>
          <li @click="changeViewMode(2)" :class="areaActive?'active':''"><i class="el-icon-location-information"></i>
            {{ $t('mainCon.chinaArea') }}
          </li>
        </ul>
        <ul class="settingBox dropMenu" v-if="settingVisible">
          <li @click="geoChange" :class="geoborderVisible?'active':''"><i class="el-icon-share"></i>
            {{ $t('mainCon.bound') }}
          </li>
          <li @click="helpInfo" :class="helpActive?'active':''"><i class="el-icon-question"></i>
            {{ $t('mainCon.helpInfo') }}
          </li>
          <li @click="markerInfo" :class="settingActive?'active':''"><i class="el-icon-location"></i>
            {{ $t('mainCon.mark') }}
          </li>
          <li @click="aboutSoft" :class="infoActive?'active':''"><i class="el-icon-info"></i>
            {{ $t('mainCon.aboutSoft') }}
          </li>
          <!--                    <li  @click="changeLanguage" :class="infoActive?'active':''"><i class="el-icon-info"></i> {{$t('mainCon.language')}}</li>-->
        </ul>

      </div>
      <div v-if="otherVisible">
        <!--              mini player-->
        <!--animationBox-->
        <div class="miniAnimation" v-if="!leftMenuControl">
          <ul>
            <li>
              <el-button class="el-button--dark" size="mini" :title="$t('mainCon.playList')" @click="playListHandle">
                <svg-icon name="search"></svg-icon>
              </el-button>
            </li>
            <li>
              <el-button class="el-button--dark" size="mini" :title="$t('mainCon.filingTime')" @click="timeListHandle">
                <svg-icon name="time"></svg-icon>
              </el-button>
            </li>
            <!--                        <li><el-button class="el-button&#45;&#45;dark" size="mini" title="导出图片" @click="exportImgHandle"><svg-icon name="export"></svg-icon></el-button></li>-->
            <!--                        <li><el-button class="el-button&#45;&#45;dark" size="mini" title="设置" @click="settingHandle"><svg-icon name="setting"></svg-icon></el-button></li>-->
            <li>
              <div class="top">
                <ul>
                  <li>
                    <el-button class="el-button--dark" size="mini" @click="firstHandle">
                      <svg-icon name="first"></svg-icon>
                    </el-button>
                  </li>
                  <li>
                    <el-button class="el-button--dark" size="mini" @click="minusAnimation">
                      <svg-icon name="back1"></svg-icon>
                    </el-button>
                  </li>
                  <li>
                    <el-button class="el-button--dark" size="mini" v-if="!playPause" @click="pauseClick">
                      <svg-icon name="stop1"></svg-icon>
                    </el-button>
                  </li>
                  <li>
                    <el-button class="el-button--dark" size="mini" v-if="playPause" @click="playClick">
                      <svg-icon name="play"></svg-icon>
                    </el-button>
                  </li>
                  <li>
                    <el-button class="el-button--dark" size="mini" @click="addAnimation">
                      <svg-icon name="before"></svg-icon>
                    </el-button>
                  </li>
                  <li>
                    <el-button class="el-button--dark" size="mini" @click="lastHandle">
                      <svg-icon name="last"></svg-icon>
                    </el-button>
                  </li>
                </ul>
              </div>
              <div class="bottom">
                <!--                              player slider-->
                <vue-slider v-model="dateSlideVal" :interval='1' :max="sliderMax"
                            tooltip="none" ref="slider" @change="changeSpeend" style="margin-top:5px;"></vue-slider>
                <!-- <el-slider v-model="miniSlider" range :show-tooltip="false"></el-slider>-->
              </div>
            </li>
          </ul>
        </div>
        <!--mini播放器播放列表-->
        <div class="playList" v-if="playListVisible">
          <el-select v-model="playTimeVal"
                     :placeholder="$t('mainCon.specifiedTime')" size="mini" clearable @change="dateListMiniClick">
            <el-option
                v-for="(item,index) in dateList"
                :class="dateActive === index?'selected':''"
                :key="item.id"
                :label="item.dateTimeItem"
                :value="item.id">
            </el-option>
          </el-select>
        </div>
        <!--时间范围选择-->
        <div class="timeList" v-if="timeListVisible">
          <div class="startBox">
            <el-row :gutter="0">
              <el-col :span="9">
                <el-select v-model="miniStartDate" :placeholder="$t('mainCon.startTime')" size="mini" clearable
                           @change="startDateClick">
                  <el-option
                      v-for="(item,index) in yearList"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="7">
                <el-select v-model="miniStartHour" :placeholder="$t('mainCon.startHour')" size="mini" clearable
                           @change="startHourClick">
                  <el-option
                      v-for="(item,index) in hourList"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="8">
                <el-select v-model="miniStartMinute" :placeholder="$t('mainCon.startMinute')" size="mini" clearable
                           @change="startMinuteClick">
                  <el-option
                      v-for="(item,index) in minuteList"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
          </div>
          <div class="endBox">
            <el-row :gutter="0">
              <el-col :span="9">
                <el-select v-model="miniEndDate" :placeholder="$t('mainCon.endTime')" size="mini" clearable
                           @change="endDateClick">
                  <el-option
                      v-for="(item,index) in yearListEnd"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="7">
                <el-select v-model="miniEndHour" :placeholder="$t('mainCon.endHour')" size="mini" clearable
                           @change="endHourClick">
                  <el-option
                      v-for="(item,index) in hourListEnd"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="8">
                <el-select v-model="miniEndMinute" :placeholder="$t('mainCon.endMinute')" size="mini" clearable
                           @change="endMinuteClick">
                  <el-option
                      v-for="(item,index) in minuteListEnd"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
          </div>
        </div>
        <!--图例-->
        <div class="legendBox" v-if="legendVisible">
          <img :src="legendUrl" alt=""> <!-- by yangwei 开启图例-2020-08-13 -->
        </div>
        <!-- 全屏模式右下显示logo -->
        <div class="logo-bottom" v-if="fullScreenMode">
          <div class="leftImg"><img v-if='leftImgLogo' :src="leftImgLogo" alt="" width="auto" height="60px"
                                    align="left"></div>
        </div>
        <!--关于本软件-->
        <div class="mapAbout" v-if="infoActive">
          <div class="sv-page-close-aBout" @click="mapAboutClose">
            <svg-icon name="close"></svg-icon>
          </div>
          <img src="../assets/images/about2.png" alt="">
        </div>
        <!--地理边界-->
        <div v-if="geoborderVisible" class="geoBorder">
          <ul>
            <li :class="provinceChoose?'active':''" @click="provinceChange">{{ $t('mainCon.province') }}</li>
            <li :class="countryChoose?'active':''" @click="countryChange">{{ $t('mainCon.country') }}</li>
          </ul>
        </div>

        <!--显示帮助信息-->
        <div class="mapHelp" v-if="helpActive">
          <div class="sv-page-close" @click="mapHelpClose">
            <svg-icon name="close"></svg-icon>
          </div>
          <img src="../assets/images/firstPage.jpg" alt="" v-if="firstPageVisible">
          <img src="../assets/images/secondPage.jpg" alt="" v-if="secondPageVisible">
          <img src="../assets/images/thirdPage.jpg" alt="" v-if="thirdPageVisible">
          <div class="sv-page-button">
            <el-button size="mini" @click="prevPage" v-if="prevPageVisible">{{ $t('mainCon.pre') }}</el-button>
            <el-button size="mini" @click="prevPage1" v-if="prevPage1Visible">{{ $t('mainCon.pre') }}</el-button>
            <el-button size="mini" @click="nextPage" v-if="nextPageVisible">{{ $t('mainCon.next') }}</el-button>
            <!--                        <el-button size="mini" @click="nextPage1" v-if="nextPage1Visible">{{$t('mainCon.next')}}</el-button>-->
          </div>
        </div>
      </div>

      <!--截图-->
      <div class="imgShow" v-if="cropImgVisible" v-loading="cropperLoading" id="cropBox">


      </div>
    </div>
    <div class="popup" ref="popup" id="popup-contentLonlat" v-show="overLayerVisible">
      <span class="icon-close" @click="closePopup">✖</span>
      <div class="content">{{ $t('mainCon.distanceBj') }} {{ currentCoordinate }} km</div>
    </div>
    <div class="ol-popup" id="popupBox" v-show="popupBoxVisible">
      <a href="#" id="popup-closer" class="ol-popup-closer"></a>
      <div class="content">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="經度：">
            <div style="text-align:left;">{{ form.lon }}</div>
          </el-form-item>
          <el-form-item label="緯度：">
            <div style="text-align:left;"> {{ form.lat }}</div>
          </el-form-item>
          <el-form-item label="標題：">
            <div style="text-align:left;">{{ form.title }}</div>
          </el-form-item>
          <el-form-item label="描述：">
            <div style="text-align:left;"> {{ form.desc }}</div>
          </el-form-item>
        </el-form>
      </div>
    </div>

  </div>

</template>

<script>
import {Feature} from 'ol'
import {Point} from 'ol/geom'
import {Vector as SourceVec} from 'ol/source'
import Overlay from 'ol/Overlay';
import {getDistance} from 'ol/sphere';
import {
  fullScreen,
  changeToDFM,
  getTimer,
  getDate,
  changeArry,
  formatTen,
  unique,
  DateContrast,
  urlToBase64
} from '../utils/util'
import '../utils/shinetekview.js'
import "ol/ol.css";
import '../utils/ol'
import eventBus from "../eventBus";
import imgBg from '../assets/data/0.jpg'
import imgBg1 from '../assets/data/1.jpg'
import {
  getLogoInfo,
  getIndex,
  getProductInfo,
  getProductPicList,
  geoJson,
  getMarker,
  exportGif,
  lastProduct,
  screenShot,
  screenGifShot
} from '@/api/index.js'
import html2canvas from "html2canvas"
//import Cropper from 'cropperjs';
import color from '../assets/images/color.png'
import '../../public/lib/jquery.minicolors'
import '../../public/lib/jquery.min'
import '../../public/lib/jquery.Jcrop'
import Global from '../utils/global'

var jcropApi;
var m_OlClass;
var cropBoxSize;
var cropTitle;
export default {
  beforeDestroy() {
    this.clearLayerCache()
  },
  data() {
    return {
      animate:false,
      obAreaType: 1, // 观测区域，=1 全圆盘；=2 中国区，默认加载全圆盘
      areaActive: false,
      playStatus: 0, // 播放状态，= 0 暂停，=1 开始播放
      loading: false,
      fontType: true,
      cropCoordinate: Global.coordinate,
      cropBoxSize: cropBoxSize,
      cropDateChoose: '', //截图产品时间选择字段
      cropTitle: '', //截图标题字段
      cacheLayers: {},
      cacheLayersBase: {},
      showLogo: 0,  //是否显示Logo  0:不显示  1显示
      showColorBar: 0,  //是否显示调色版  0:不显示  1显示
      titleColor: '#ff7300',  //标题（时间戳）显示文字颜色  #000000，白色
      showTitle: 0,  //是否显示标题（时间戳）  0:不显示  1显示
      isLockRatio: 1,  //是否锁定宽高比，16:10 默认1  0:不显示  1显示
      dateRangeVisible: false,  // 默认时间范围选择隐藏
      //gif截图
      cropperLoading: false,
      color: color,  //调色板
      aspectRatioVal: 16 / 10,  //裁切比例默认
      aspectRatioValue: null,  //裁切比例默认
      screenShotResult: [], //截图接口数据接收字段
      screenGifShotResult: [], //截图接口数据接收字段
      ophotoOriginalImgVal: false, //原始图像截图
      //laydate: window.laydate,
      currentAnimationIndex: 0, // 播放器当前播放图片索引
      sliderLength: 300,  //slide最大值设置
      headerLogoVisible: true,  //logo部分展示，用于截图模式时隐藏
      controlBtnVisible: true,  //头部隐藏展示菜单状态，用于截图模式时隐藏
      otherVisible: true,  //其他模块状态，用于截图模式时隐藏
      rightBarVisible: true,  //右侧模块状态，用于截图模式时隐藏
      topBarVisible: true,  //头部模块状态，用于截图模式时隐藏
      topCropStatus: false,  //判断为true时，截图框顶头部右侧
      refreshTime: '',  //自动刷新时间
      /*头部logo信息*/
      leftImgLogo: '',
      logoTitle: '',
      /*mapTitle*/
      statelliteName: '',
      productVal: '',
      //常规标注物
      topBarActive: null,
      resolutionVal: '',
      miniStartTime: '',
      miniEndTime: '',
      imgIndex: 0,//每秒自加全局变量接收参数
      singleImageParams: {},  //定义图片叠加全局变量
      baseImageParams: {},  //定义图片叠加全局变量
      animationList: [],
      imgExtent: [],
      baseImgExtent: [],  //新增真彩色图
      imgBgUrl: '',
      playBtnShow: true,
      tabList: [],
      tabIndex: 1,
      productId: '',
      mapLevel: null,
      overLayerVisible: false,
      key: null,
      currentCoordinate: null,
      spanIndex: [],
      m_OlClass: {
        status: ''
      },
      rightBarActive1: false,
      rightBarActive2: false,
      rightBarActive3: false,
      mapToolActive: null,
      mapCenterLon: 107,
      mapCenterLat: 34,
      zoomLevel: 5,
      minZoomLevel: 5, // 最小缩小级别
      maxZoomLevel: 8, // 最大放大级别
      isFull: false,
      imgBg: imgBg,
      imgBg1: imgBg1,

      fullScreenMode: false,
      imgLayer: null,
      /*leftBar*/
      dateChoose: '',
      leftMenuControl: true,
      dateActive: 0,
      activeName: 'FY4',
      tabBtnActive: 0,
      dateVal: '',
      quickVal: '',
      typeBtn: [],
      /*更多产品下拉数据*/
      dropList: [],

      /*时次列表数据*/
      dateList: [],
      baseList: [],  //真彩色图
      /*topBar*/
      aerosolShow: false,
      /*动画层*/
      animationVisible: false,
      animationNum: 4,
      startYear: '',
      startMonth: '',
      startDay: '',
      startHour: '',
      startMinute: '',
      startDate: '',
      endYear: '',
      endMonth: '',
      endDay: '',
      endHour: '',
      endMinute: '',
      endDate: '',
      bjDateTime: '',
      speedVal: 5,
      minuteVal: null,
      hourVal: null,
      dayVal: null,
      disVal: 5,
      miniSlider: 0,
      /*播放列表*/
      playTimeVal: '',
      playListVisible: false,
      miniStartDate: '',
      miniStartHour: '',
      miniStartMinute: '',
      miniEndDate: '',
      miniEndHour: '',
      miniEndMinute: '',
      yearList: [], // 开始时间数组
      yearListEnd: [],  //结束时间数组
      hourList: [
        '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23'
      ],
      hourListEnd: [
        '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23'
      ],
      minuteList: [
        '00', '01', '02', '03', '04', '05', '06', '07', '08', '09',
        '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
        '20', '21', '22', '23', '24', '25', '26', '27', '28', '29',
        '30', '31', '32', '33', '34', '35', '36', '37', '38', '39',
        '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
        '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'
      ],
      minuteListEnd: [
        '00', '01', '02', '03', '04', '05', '06', '07', '08', '09',
        '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
        '20', '21', '22', '23', '24', '25', '26', '27', '28', '29',
        '30', '31', '32', '33', '34', '35', '36', '37', '38', '39',
        '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
        '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'
      ],
      timeListVisible: false,
      exportImgVisible: false,
      settingVisible: false,
      miniSpeedVal: '',
      miniImgNumVal: '',
      miniIntervalVal: '',
      imgNumList: [
        {value: 1, label: '6'},
        {value: 2, label: '12'},
        {value: 3, label: '18'},
        {value: 4, label: '24'},
        {value: 5, label: '30'},
        {value: 6, label: '36'},
        {value: 7, label: '42'},
        {value: 8, label: '48'},
        {value: 9, label: '54'},
        {value: 10, label: '60'},
        {value: 11, label: '120'},
        {value: 12, label: '240'},
      ],
      intervalList: [
        {value: 1, label: '5'},
        {value: 2, label: '10'},
        {value: 3, label: '15'},
        {value: 4, label: '20'},
        {value: 5, label: '30'},
        {value: 6, label: '40'},
        {value: 7, label: '50'},
        {value: 8, label: '60'}
      ],
      slideStep: 0,
      dateSlideVal: 0,
      playPause: true,
      interval: null,
      intervalLoop: null,
      animationSpeed: 1000,
      observeVisible: false,
      refreshVisible: false,
      areaVisible: false,
      setVisible: false,
      refreshChecked: false,
      legendVisible: false,
      legendUrl: '',
      geoborderVisible: false,
      firstPageVisible: true,
      secondPageVisible: false,
      thirdPageVisible: false,
      prevPageVisible: false,
      prevPage1Visible: false,
      nextPageVisible: true,
      nextPage1Visible: false,
      settingActive: false,
      helpActive: false,
      infoActive: false,

      countryChoose: false,
      provinceChoose: false,
      geojsonProvince: {},
      geojsonCountry: {},
      vectorLayer: {},
      cropperVisible: false, //截图框默认状态
      cropImgVisible: false,//html2Canvas截图后得图片显示
      cropImg: '',//base64截图图片路径
      cropHandleVisible: false,
      //mapUrl: 'http://10.110.1.161:23052/geoserver/satelliteview/wms',
      mapUrl: 'http://1.202.89.226:23052/geoserver/satelliteview/wms',

      //截图框点坐标初始字段
      startLon: '',
      startLat: '',
      endLon: '',
      endLat: '',
      maskerInfo: {},  //聚合点信息
      popupBoxVisible: false,
      overlayIcon: null,
      form: {
        lon: ''
      }
    };

  },
  mounted() {
    //this.dateVal = getDate(new Date())
    this.getLogoData()
    this.initMap()
    this.initPopupVoer()
    this.getIndex(1, this.obAreaType)
    // 定义地图操作事件
    this.m_OlClass.olMap.on("moveend", () => {
      var zoom = this.m_OlClass.olMap.getView().getZoom();  //获取当前地图的缩放级别
      this.zoomLevel = Math.round(zoom)
      var scaleVal = this.m_OlClass.olMap.controls.array_[1].renderedHTML_
      scaleVal = scaleVal.replace("km", "") * 1000
      eventBus.$emit('scaleVal', scaleVal)
    });
    this.m_OlClass.olMap.on('pointermove', function (e) {
      var X = changeToDFM(e.coordinate[0])
      var Y = changeToDFM(e.coordinate[1])
      var LonLat = {x: X, y: Y}
      eventBus.$emit('LonLat', LonLat)
    })
    this.mapLevel = this.m_OlClass.olMap.getView().getZoom()
    eventBus.$on('setCenter', (message) => {
      this.m_OlClass.setCenter(message.lon, message.lat)
      this.m_OlClass.setViewZoomNum(6);
    })

    // by yangwei 2020-08-14: 监听全屏模式下按 esc 键退出事件，恢复其它组件显示
    let that = this
    document.addEventListener("fullscreenchange", exitHandler)
    document.addEventListener("mozfullscreenchange", exitHandler)
    document.addEventListener("webkitfullscreenchange", exitHandler)
    document.addEventListener("msfullscreenchange", exitHandler)

    function exitHandler() {
      if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        that.fullScreenCallBack(false)
      }
    }
    window.addEventListener('scroll', this.handleScroll,true)


  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    clearInterval(this.timer);
    clearInterval(this.intervalLoop);
  },
  watch: {
    dateSlideVal(newVal, oldVal) {
      if (newVal === 0) {
        oldVal = 0
      }
      if (newVal > oldVal) {
        this.disVal = parseInt(newVal - oldVal)
      }
      if (newVal < oldVal) {
        this.disVal = parseInt(oldVal - newVal)
      }
    },
    productVal(newVal, oldVal) {
      cropTitle = newVal
      let timeDom = document.getElementById('timestamp')
      if (timeDom) {
        if ($("#videoTimestamp").prop("checked") == true || $("#phootoTimestamp").prop("checked") == true) {
          document.getElementById('timestamp').innerText = cropTitle + ' ' + this.cropDateChoose
        } else {
          document.getElementById('timestamp').innerText = ''
        }
      }
    },
    cropDateChoose(newVal, oldVal) {
      let cropTitleDiv = document.getElementById('timestamp')
      if ($("#photoTimestamp").prop("checked") == false || $("#videoTimestamp").prop("checked") == false) {
        cropTitleDiv.innerText = ''
      } else {
        if (cropTitleDiv !== null) {
          cropTitleDiv.innerText = ''
          cropTitleDiv.innerText = this.productVal + ' ' + newVal
        }
        this.defaultCropDate(newVal)
      }

    },
    '$i18n.locale'() {
      this.getLogoData()
    },
    fontType(newVal, oldVal) {
      if ($("#OriginalImg").text()) {
        if (newVal == true) {
          $("#OriginalImg").text('原始圖像截圖')
          $("#Timestamp").text('時間戳')
          $("#TimestampV").text('時間戳')
          $("#Pallet").text('色標卡')
          $("#PalletV").text('色標卡')
          $("#LogoShow").text('是否顯示logo')
          $("#LogoShowV").text('是否顯示logo')
          $("#Ratio").text('鎖定寬高比(16:10)')
          $("#RatioV").text('鎖定寬高比(16:10)')
          $("#fontTypeStartTime").text('起始時間')
          $("#fontTypeEndTime").text('結束時間')
        } else {
          $("#OriginalImg").text('原始图像截图')
          $("#Timestamp").text('时间戳')
          $("#TimestampV").text('时间戳')
          $("#Pallet").text('色标卡')
          $("#PalletV").text('色标卡')
          $("#LogoShow").text('是否显示logo')
          $("#LogoShowV").text('是否显示logo')
          $("#Ratio").text('锁定宽高比(16:10)')
          $("#RatioV").text('锁定宽高比(16:10)')
          $("#fontTypeStartTime").text('起始时间')
          $("#fontTypeEndTime").text('结束时间')
        }
      }

    },
    legendUrl(newVal, oldVal) {
      var dom = document.getElementById('colorPallent')
      if (dom) {
        if ($("#videoPallet").prop("checked") == true || $("#photoPallet").prop("checked") == true) {
          if (newVal !== null) {
            dom.innerHTML = ''
            dom.innerHTML += "<img src=" + newVal + ">"
          } else {
            dom.innerHTML = ''
          }

        } else {
          dom.innerHTML = ''
        }
      }
    },
    status(newV) {
      if (newV == 0) {
        //this.loading = true
        if (this.intervalLoop)
          clearInterval(this.intervalLoop) // 图片没有加载完成时，取消循环播放
      } else {
        //this.loading = false
        if (this.playStatus === 1) {
          // 处于播放状态的情况下，继续播放
          this.playClick()
        }
      }
    }
  },
  computed: {
    status() {
      return this.m_OlClass.status;
    },
    // 当前产品数组长度
    dateListSize: function () {
        if (this.dateList) {
        return this.dateList.length
      }
      return 0;
    },
    // 计算查询开始时间
    getQueryStartDateTime() {
      return this.miniStartDate + " " + this.miniStartHour + ":" + this.miniStartMinute + ":00"
    },
    // 计算查询结束时间
    getQueryEndDateTime() {
      return this.miniEndDate + " " + this.miniEndHour + ":" + this.miniEndMinute + ":00"
    },
    // 计算播放器进度条的最大值
    sliderMax() {
      if (this.dateList !== null && this.dateList.length > 0) {
        return this.dateList.length - 1
      } else {
        return 1
      }
    },
    //簡體/繁體切換
    topList() {
      return [
        {
          id: 0,
          name: 'newProduct',
          show: false,
          title: this.$t('mainCon.newProduct')
        },
        {
          id: 1,
          name: 'defaultPosition',
          show: false,
          title: this.$t('mainCon.defaultPosition')
        },
        {
          id: 2,
          name: 'gride',
          show: false,
          title: this.$t('mainCon.gride')
        },
        {
          id: 3,
          name: 'screenshot',
          show: false,
          title: this.$t('mainCon.screenshot')
        },
        {
          id: 4,
          name: 'refresh',
          show: false,
          title: this.$t('mainCon.autoRefresh')
        },
        {
          id: 5,
          name: 'area',
          show: false,
          title: this.$t('mainCon.area')
        },
        {
          id: 6,
          name: 'setting',
          show: false,
          title: this.$t('mainCon.setting')
        }
      ]
    },
    /*右侧工具条*/
    rightToolList() {
      return [
        {value: 1, title: this.$t('mainCon.djcj')},
        {value: 2, title: this.$t('mainCon.lxcj')},
        {value: 3, title: this.$t('mainCon.sbms')},
        {value: 4, title: this.$t('mainCon.hzd')},
        {value: 5, title: this.$t('mainCon.hzjx')},
        {value: 6, title: this.$t('mainCon.hzx')},
        {value: 7, title: this.$t('mainCon.hzdbx')},
        {value: 8, title: this.$t('mainCon.qcsyhz')},
      ]
    },
    fullScreenTitle() {
      return this.$t('mainCon.fullScreen')
    }
  },
  methods: {
    /*全球區中國區切換*/
    changeViewMode(val) {
      // 葵花数据只有全圆盘信息，没有中国区选项
      if (this.tabIndex == 2 && val === 2){
        return
      }
      switch (val) {
        case 1:{
          this.areaActive = false
          break
        }
        case 2:{
          this.areaActive = true
          break
        }
      }
      // by yangwei 2020-11-27 清除图片缓存
      this.clearLayerCache()
      this.obAreaType = val
      // 选择观测区域后自动加载新数据 by yangwei 2020-11-17
      this.getIndex(this.tabIndex, val)
    },
    //右侧地图工具控制
    rightCtrolHandle() {
      this.rightBarVisible = !this.rightBarVisible;
    },
    //时间范围选择
    dateRangeChoose() {
      this.dateRangeVisible = !this.dateRangeVisible
    },
    //获取产品最后更新数据
    async getLastProduct(productId, timeInterval, obAreaType) {
      // 重置播放图片缓存
      this.clearLayerCache()
      this.m_OlClass.removeLayer(this.singleImageParams)
      let resp = await lastProduct(productId, timeInterval, obAreaType)
      if (resp.data.code !== 0) {
        this.$message('没有找到对应数据')
        return
      }
      let result = resp.data.result
      this.dateList = result.dateTimeList;
      this.imgBgUrl = result.dateTimeList[0].url
      this.dateChoose = this.dateList[0].dateTimeItem.substring(0, 16) //设置标题信息， 格式：年-月-日 时:分
      this.cropDateChoose = this.dateList[0].dateTimeItem.substring(0, 19) //设置标题信息， 格式：年-月-日 时:分
      // 更新色标卡 by yangwei 20200904
      this.legendUrl = result.legendUrl
      this.legendVisible = this.legendUrl !== ''
      let dateTimeList = result.dateTimeList
      let dateTimeListLength = dateTimeList ? dateTimeList.length : 0
      if (dateTimeListLength > 0) {
        this.dateList = dateTimeList
        // 同步日期时间 by yangwei 2020-08-17
        let firstDateTimeItem = dateTimeList[0]
        let startDateTimeItem = firstDateTimeItem.dateTimeItem
        this.imgBgUrl = firstDateTimeItem.url
        this.dateChoose = startDateTimeItem.substring(0, 16) //设置标题信息， 格式：年-月-日 时:分
        this.cropDateChoose = startDateTimeItem.substring(0, 19) //设置标题信息， 格式：年-月-日 时:分
        if (firstDateTimeItem.extent !== null) {
          this.imgExtent = changeArry(firstDateTimeItem.extent)
          this.addSingleImageLayer(this.imgBgUrl, this.imgExtent, this.productId + '_' + firstDateTimeItem.id, 2, 'productImage')
        }
        // 同步日期时间 by yangwei 2020-08-17
        this.dateVal = startDateTimeItem.substring(0, 10) // 设置日期选择器默认日期，数据格式：日期
        // 设置左侧播放器显示日期时间
        this.bjDateTime = startDateTimeItem.substring(0, 16)
        this.getProductInfoHandler(firstDateTimeItem.dateTimeItem)

        // by yangwei 2020-08-30 加载产品时间选择范围
        let lastDateTimeItem = this.dateList[dateTimeListLength - 1]
        let endDateTimeItem = lastDateTimeItem.dateTimeItem
        this.miniStartDate = startDateTimeItem.substring(0, 10)
        this.miniStartHour = startDateTimeItem.substring(11, 13)
        this.miniStartMinute = startDateTimeItem.substring(14, 16)
        this.miniEndDate = endDateTimeItem.substring(0, 10)
        this.miniEndHour = endDateTimeItem.substring(11, 13)
        this.miniEndMinute = endDateTimeItem.substring(14, 16)
      } else {
        result.dateTimeList = []
      }
      // by yangwei 2020-08-30 设置产品开始和结果时间可选范围
      this.yearList = result.dateList
      this.yearListEnd = result.dateList
      this.typeBtn.map((item, index) => {
        if (result.id === item.id) {
          this.tabBtnActive = index;
          this.productVal = item.productName;
        }
      })
    },
    /*自动刷新*/
    changeRefresh(val) {
      if (val === true) {
        let that = this
        this.timer = setInterval(() => {
          // this.getIndex(this.tabIndex)
          this.getIndex(that.tabIndex, that.obAreaType)
        }, this.refreshTime); //10分钟刷新一次页面
      } else {
        clearInterval(this.timer);
      }
    },
    /**
     * 添加标注物
     * */
    initPopupVoer() {

    },
    massiveFature(coordinate) {
      this.vectorSource = new SourceVec({});
      for (var i = 0; i < coordinate.length; i++) {
        this.iconFeature = new Feature({
          geometry: new Point([coordinate[i].lon, coordinate[i].lat]),
          attributes: coordinate[i]
        });
        var iconStyle = new ol.style.Style({
          image: new ol.style.Icon({
            anchor: [0.5, 0.5],
            anchorXUnits: 'fraction',
            anchorYUnits: 'fraction',
            src: coordinate[i].icon,
            scale: 0.15,
            // crossOrigin: 'anonymous',
          })
        });
        this.iconFeature.setStyle(iconStyle);
        this.vectorSource.addFeature(this.iconFeature);
      }
      this.vectorLayer = new ol.layer.Vector({
        source: this.vectorSource,
        updateWhileAnimating: true,
        updateWhileInteracting: true,
        zIndex: 5002,
      });
      /**
       * 实现popup的html元素
       */
      /**
       * 在地图容器中创建一个Overlay
       */
      this.overlayIcon = new Overlay(/** @type {olx.OverlayOptions} */({
        element: document.getElementById('popupBox'),
        autoPan: true, // 如果弹窗在底图边缘时，底图会移动
        autoPanAnimation: { // 底图移动动画
          duration: 250
        }
      }));
      this.m_OlClass.olMap.addOverlay(this.overlayIcon)
      this.m_OlClass.olMap.on('click', (e) => {
        var coordinate = e.coordinate;
        //判断当前单击处是否有要素，捕获到要素时弹出popup
        var feature = this.m_OlClass.olMap.forEachFeatureAtPixel(e.pixel, function (feature, layerVetor) {
          return feature;
        });
        let maskerItem = feature.getProperties()
        if (feature) {
          //content.innerHTML = ''; //清空popup的内容容器
          this.addFeatrueInfo(maskerItem); //在popup中加载当前要素的具体信息
          this.overlayIcon.setPosition(coordinate); //设置popup的位置

          /* this.$nextTick(()=>{
                            this.popupBoxVisible = true;
                            this.overlayIcon.setPosition(coordinate); //设置popup的位置
                        })
*/
          /* popup.setPosition(coordinate); //设置popup的位置*/
        }
      })
    },
    addFeatrueInfo(info) {
      this.form = info.attributes
      this.popupBoxVisible = true;
    },
    /**
     * 选择地理边界
     * */
    //获取json数据
    async getJsonData(type) {
      let provinceFeature = []
      let countryFeature = []
      let resp = await geoJson(type)
      if (resp.data.code !== 0) {
        this.$message('没有找到对应数据')
        return
      }
      if (type == 1) {
        countryFeature = resp.data.result
        this.geojsonCountry = {
          id: 'country',
          name: 'country',
          mapType: 'geojson',
          geoShowType: 'countryLine',
          data: countryFeature
        }
      }
      if (type == 2) {
        provinceFeature = resp.data.result
        this.geojsonProvince = {
          id: 'province',
          name: 'province',
          mapType: 'geojson',
          geoShowType: 'provinceLine',
          data: provinceFeature
        }
      }
    },
    async provinceChange() {
      this.provinceChoose = !this.provinceChoose;
      if (this.provinceChoose == true) {
        this.m_OlClass.addLayer(this.geojsonProvince)
      } else {
        this.m_OlClass.removeLayer(this.geojsonProvince)
      }
    },
    //国界
    async countryChange() {
      this.getJsonData(1)
      this.countryChoose = !this.countryChoose;
      if (this.countryChoose == true) {
        this.m_OlClass.addLayer(this.geojsonCountry)
      } else {
        this.m_OlClass.removeLayer(this.geojsonCountry)
      }
    },
    /*获取动画接口数据*/
    async getAnimateData(productId, beginTime, endTime, resolution) {
      this.dateList = []
      let resp = await getProductInfo(productId, beginTime, endTime, resolution, this.obAreaType)
      if (resp.data.code !== 0) {
        this.$message('没有找到对应数据')
        return
      }
      let result = resp.data.result
      // result.dateTimeList.map((item,index)=>{
      //     let image = new Image();
      //     image.src = item.url;
      //     image.onload = () => {
      //         index++;
      //     };
      // })
      // by yangwei 开启图例-2020-08-13
      this.legendUrl = result.legendUrl
      this.cropTitle = result.productName
      this.legendVisible = this.legendUrl !== ''
      // by yangwei 优化结果处理
      let dateTimeList = result.dateTimeList
      let dateTimeListLength = dateTimeList ? dateTimeList.length : 0
      if (dateTimeListLength > 0) {
        this.dateList = dateTimeList
        this.cropDateChoose = this.dateList[0].dateTimeItem
        // 同步日期时间 by yangwei 2020-08-17
        let firstDateTimeItem = dateTimeList[0]
        let startDateTimeItem = firstDateTimeItem.dateTimeItem
        this.imgBgUrl = firstDateTimeItem.url

        this.dateChoose = startDateTimeItem.substring(0, 16) //设置标题信息， 格式：年-月-日 时:分
        this.cropDateChoose = startDateTimeItem.substring(0, 19) //设置标题信息， 格式：年-月-日 时:分
        if (firstDateTimeItem.extent !== null) {
          this.imgExtent = changeArry(firstDateTimeItem.extent)
          this.addSingleImageLayer(this.imgBgUrl, this.imgExtent, this.productId + '_' + firstDateTimeItem.id, 2)
        }
        // 同步日期时间 by yangwei 2020-08-17
        this.dateVal = startDateTimeItem.substring(0, 10) // 设置日期选择器默认日期，数据格式：日期
        // 设置左侧播放器显示日期时间
        this.bjDateTime = startDateTimeItem.substring(0, 16)
        this.getProductInfoHandler(firstDateTimeItem.dateTimeItem)

        // by yangwei 2020-08-30 加载产品时间选择范围
        let lastDateTimeItem = this.dateList[dateTimeListLength - 1]
        let endDateTimeItem = lastDateTimeItem.dateTimeItem
        this.miniStartDate = startDateTimeItem.substring(0, 10)
        this.miniStartHour = startDateTimeItem.substring(11, 13)
        this.miniStartMinute = startDateTimeItem.substring(14, 16)
        this.miniEndDate = endDateTimeItem.substring(0, 10)
        this.miniEndHour = endDateTimeItem.substring(11, 13)
        this.miniEndMinute = endDateTimeItem.substring(14, 16)
      } else {
        result.dateTimeList = []
      }
      // by yangwei 2020-08-30 设置产品开始和结果时间可选范围
      this.yearList = result.dateList
      this.yearListEnd = result.dateList
      // this.animationList = result
    },
    /*获取获取Logo和文字数据、获取数据源类型名称*/
    async getLogoData() {
      let resp = await getLogoInfo()
      if (resp.data.code !== 0) {
        this.$message.error('没有找到对应数据')
        return
      }
      let result = resp.data.result
      //自动刷新
      this.refreshTime = result.refreshTime
      this.tabList = result.dataSourceType
      this.statelliteName = this.tabList[0].typeName;
      this.leftImgLogo = result.logo.url
      this.logoTitle = result.logo.title
    },
    /*首页数据接口*/
    // by yangwei 2020-11-17 新增参数 obAreaType 观测区域
    async getIndex(type, obAreaType) {
      // 重置播放图片缓存
      this.clearLayerCache()
      this.typeBtn = []
      this.dropList = []
      this.productId = '';  //默认产品ID
      this.productVal = '';  //默认产品名称
      this.quickVal = '';  //默认时间间隔
      this.dateList = [];  //默认时间列表
      this.baseList = [];  //默认时间列表
      this.dropList = [];
      this.dateVal = ''  //默认时间选择
      let resp = await getIndex(type, obAreaType)
      if (resp.data.code !== 0) {
        this.$message('没有找到对应数据')
      } else {
        let result = resp.data.result;
        //常用产品赋值
        let commonProductList = result.commonProductList;
        if (commonProductList.length > 0) {
          commonProductList.map((item, index) => {
            this.typeBtn.push(Object.assign({...item, status: false}))
          })
          this.typeBtnClick(this.typeBtn[0], 0)  //modify by 2020-11-10
        }
        //默认相关信息获取
        let defaultProductInfo = result.defaultProductInfo
        let baseProductInfo = result.baseProductInfo
        if (defaultProductInfo !== null && defaultProductInfo.id !== null) {
          this.productId = defaultProductInfo.id;  //默认产品ID
          this.baseProductId = baseProductInfo.id;  //默认产品ID
          this.productVal = defaultProductInfo.productName;  //默认产品名称
          // this.quickVal = result.defaultProductInfo.timeInterval;  //默认时间间隔
          this.dateList = defaultProductInfo.dateTimeList;  //默认时间列表
          this.baseList = baseProductInfo.dateTimeList;  //默认时间列表

          this.legendUrl = defaultProductInfo.legendUrl
          this.legendVisible = this.legendUrl !== ''
          if (this.baseList !== null && this.baseList.length > 0) {
            let baseDateTimeItem = this.baseList[0]
            //叠加真彩图
            if (baseDateTimeItem !== undefined && baseDateTimeItem.url !== '') {

              this.baseImgExtent = changeArry(baseDateTimeItem.extent)
              this.addSingleImageLayer(baseDateTimeItem.url, this.baseImgExtent, this.baseProductId + '_' + baseDateTimeItem.id, 1)
            }
          }
          if (this.dateList.length > 0) {
            let firstDateTimeItem = this.dateList[0]
            let startDateTimeItem = firstDateTimeItem.dateTimeItem
            this.dateChoose = startDateTimeItem.substring(0, 16);  //默认标题时间设置,格式：年-月-日 时:分
            this.cropDateChoose = startDateTimeItem.substring(0, 19) //设置标题信息， 格式：年-月-日 时:分
            //叠加产品图
            if (firstDateTimeItem.url !== '') {
              this.imgExtent = changeArry(firstDateTimeItem.extent)
              this.addSingleImageLayer(firstDateTimeItem.url, this.imgExtent, this.productId + '_' + firstDateTimeItem.id, 2)
            }
            // 同步日期时间 by yangwei 2020-08-17
            this.dateVal = startDateTimeItem.substr(0, 10) // 设置左侧日期选择器默认日期，数据格式：日期 + 时间
            // 设置左侧播放器显示日期时间
            this.bjDateTime = startDateTimeItem.substring(0, 16)
            // 以当前选中产品的最新记录为基础数据记录作为动画初始化时间
            this.initAnimationDate()
            this.minuteVal = this.bjDateTime.substring(this.bjDateTime.length - 2, this.bjDateTime.length)
            // by yangwei 2020-08-30 默认加载第一个产品时间列表中第一条记录
            this.dateListClick(firstDateTimeItem, 0)
            this.cropDateTime = firstDateTimeItem

            // by yangwei 2020-08-30 加载产品时间选择范围
            let lastDateTimeItem = this.dateList[this.dateList.length - 1]
            let endDateTimeItem = lastDateTimeItem.dateTimeItem
            this.miniStartDate = startDateTimeItem.substring(0, 10)
            this.miniStartHour = startDateTimeItem.substring(11, 13)
            this.miniStartMinute = startDateTimeItem.substring(14, 16)
            this.miniEndDate = endDateTimeItem.substring(0, 10)
            this.miniEndHour = endDateTimeItem.substring(11, 13)
            this.miniEndMinute = endDateTimeItem.substring(14, 16)
          }
          // by yangwei 2020-08-30 设置产品开始和结果时间可选范围
          this.yearList = defaultProductInfo.dateList
          this.yearListEnd = defaultProductInfo.dateList
        } else {
        }
        //更多菜单内容获取
        this.dropList = result.allProductList;
        //在线人数获取及传参
        eventBus.$emit('online', result.online)
      }
    },
    /*获取指定产品数据*/
    async getProductInfo(productId, beginTime, endTime, level, obAreaType) {
      // 重置播放图片缓存
      this.clearLayerCache()
      this.dateList = []
      let resp = await getProductInfo(productId, beginTime, endTime, level, obAreaType)
      if (resp.data.code !== 0) {
        this.$message.error('没有找到对应数据')
        return
      }
      let result = resp.data.result
      console.log(result,'产品');
      // by yangwei 开启图例-2020-08-13
      this.legendUrl = result.legendUrl
      this.legendVisible = this.legendUrl !== ''
      let dateTimeList = result.dateTimeList
      let dateTimeListLength = dateTimeList ? dateTimeList.length : 0
      if (dateTimeListLength > 0) {
        // 同步日期时间 by yangwei 2020-08-17
        this.dateList = dateTimeList
        let firstDateTimeItem = dateTimeList[0]
        let startDateTimeItem = firstDateTimeItem.dateTimeItem
        this.imgBgUrl = firstDateTimeItem.url
        this.dateChoose = startDateTimeItem.substring(0, 16) //设置标题信息， 格式：年-月-日 时:分
        this.cropDateChoose = startDateTimeItem.substring(0, 19) //设置标题信息， 格式：年-月-日 时:分
        if (firstDateTimeItem.extent !== null) {
          this.imgExtent = changeArry(firstDateTimeItem.extent)
          this.addSingleImageLayer(this.imgBgUrl, this.imgExtent, this.productId + '_' + firstDateTimeItem.id, 2)
        }
        // 同步日期时间 by yangwei 2020-08-17
        this.dateVal = startDateTimeItem.substring(0, 10) // 设置日期选择器默认日期，数据格式：日期
        // 设置左侧播放器显示日期时间
        this.bjDateTime = startDateTimeItem.substring(0, 16)
        this.getProductInfoHandler(firstDateTimeItem.dateTimeItem)

        // by yangwei 2020-08-30 加载产品时间选择范围
        let lastDateTimeItem = this.dateList[dateTimeListLength - 1]
        let endDateTimeItem = lastDateTimeItem.dateTimeItem
        this.miniStartDate = startDateTimeItem.substring(0, 10)
        this.miniStartHour = startDateTimeItem.substring(11, 13)
        this.miniStartMinute = startDateTimeItem.substring(14, 16)
        this.miniEndDate = endDateTimeItem.substring(0, 10)
        this.miniEndHour = endDateTimeItem.substring(11, 13)
        this.miniEndMinute = endDateTimeItem.substring(14, 16)
      } else {
        result.dateTimeList = []
      }
      // by yangwei 2020-08-30 设置产品开始和结果时间可选范围
      this.yearList = result.dateList
      this.yearListEnd = result.dateList
    },
    getProductInfoHandler(val) {
      // 获取产品信息后处理
      let bjTime = this.bjDateTime.split(' ')[1]
      // let bjHour = bjTime.split(':')[0]
      // let bjMinute = bjTime.split(':')[1]
      let dateArray = val.split('-')
      this.startYear = dateArray[0]
      this.startMonth = dateArray[1]
      this.startDay = dateArray[2]
      this.m_OlClass.removeLayer(this.singleImageParams)
      this.dateVal = val
      // 重置播放器参数
      // this.currentAnimationIndex = this.sliderMax
      this.currentAnimationIndex = 0
      // 重置播放图片缓存
      this.clearLayerCache()
      this.changeAnimationInfo()
    },
    clearLayerCache(lastIndex){
      console.log("----------------------yw -------> ", lastIndex)
      // 重置播放图片缓存
      let removeKeys = []
      if (lastIndex !== undefined && lastIndex != null){
        Object.keys(this.cacheLayers).forEach(key => {
          if (key !== lastIndex){
            this.m_OlClass.removeLayer(this.cacheLayers[key])
            removeKeys.push(key)
          }
        });
        if (removeKeys != null && removeKeys.length >0){
          removeKeys.forEach(key=>{
            delete this.cacheLayers[key]
          })
        }
      } else {
        // 重置播放图片缓存
        Object.keys(this.cacheLayers).forEach(key => {
          this.m_OlClass.removeLayer(this.cacheLayers[key])
          removeKeys.push(key)
        })
        if (removeKeys != null && removeKeys.length >0){
          removeKeys.forEach(key=>{
            delete this.cacheLayers[key]
          })
        }
        this.cacheLayers = {}
      }

    },
    clearLayerBaseCache(){
      let removeBaseKeys = []
      Object.keys(this.cacheLayersBase).forEach(key => {
        this.m_OlClass.removeLayer(this.cacheLayersBase[key])
        removeBaseKeys.push(key)
      })
      if (removeBaseKeys != null && removeBaseKeys.length >0){
        removeBaseKeys.forEach(key=>{
          delete this.cacheLayersBase[key]
        })
      }
      this.cacheLayersBase = {}
    },
    geoChange() {
      this.getJsonData(1)
      this.getJsonData(2)
      this.helpActive = false;
      // this.settingActive = false;
      this.infoActive = false;
      this.geoborderVisible = !this.geoborderVisible;
    },
    /*显示帮助信息*/
    mapHelpClose() {
      this.helpActive = false;
    },
    helpInfo() {
      this.geoborderVisible = false;
      // this.settingActive = false;
      this.infoActive = false;
      this.helpActive = !this.helpActive;
    },
    prevPage() {
      this.prevPageVisible = false;
      this.nextPageVisible = true;
      this.nextPage1Visible = false;
      this.firstPageVisible = true;
      this.secondPageVisible = false;
    },
    prevPage1() {
      this.prevPage1Visible = false;
      this.prevPageVisible = true;
      this.nextPage1Visible = true;
      this.secondPageVisible = true;
      this.thirdPageVisible = false;
    },
    nextPage() {
      this.prevPageVisible = true;
      this.firstPageVisible = false;
      this.secondPageVisible = true;
      this.nextPage1Visible = true;
      this.nextPageVisible = false;
    },
    nextPage1() {
      this.nextPage1Visible = false;
      this.secondPageVisible = false;
      this.thirdPageVisible = true;
      this.prevPage1Visible = true;
      this.prevPageVisible = false;
    },
    /*常规标注物*/
    async markerInfo() {
      var coordinate = []
      var markerList = [];
      let resp = await getMarker()
      if (resp.data.code !== 0) {
        this.$message('没有找到对应数据')
        return
      }
      let result = resp.data.result
      this.maskerInfo = result;
      result.map(item => {
        coordinate = [item.lon, item.lat, item.icon]
        markerList.push(item)
      })

      this.geoborderVisible = false;
      this.infoActive = false;
      this.helpActive = false;
      this.settingActive = !this.settingActive
      if (this.settingActive == true) {
        this.massiveFature(markerList)
        this.m_OlClass.olMap.addLayer(this.vectorLayer)
      } else {
        this.popupBoxVisible = false
        this.vectorSource.removeFeature(this.iconFeature);
        this.m_OlClass.olMap.removeLayer(this.vectorLayer);
      }
    },
    /*关于本软件*/
    aboutSoft() {
      this.geoborderVisible = false;
      // this.settingActive = false;
      this.helpActive = false;
      this.infoActive = !this.infoActive;
    },
    /*简体/繁体切换*/
    /* changeLanguage(){
                this.fontType = !this.fontType;
                let locale = this.$i18n.locale
                locale === 'zh' ? this.$i18n.locale = 'tw' : this.$i18n.locale = 'zh'
                /!*截图插件文字转换*!/
            },*/
    mapAboutClose() {
      this.infoActive = false;
    },
    /*速度变化*/
    speedChange(val) {

    },
    /*tooltip格式化*/
    formatTooltip(val) {
      // var dateArry=[]
      this.max = this.dateList.length - 1;
      this.dateList.map((item, index) => {
        if (index == val) {
          val = item.dateTimeItem
        }
      })
      return val;
    },
    changeSpeend() {
      var changeVal = this.bjDateTime.split(' ')[1]
      this.minuteVal = changeVal.split(':')[1]
      this.hourVal = changeVal.split(':')[0]
      this.dayVal = formatTen(parseInt(this.startDay))
      var result01 = formatTen(parseInt(this.minuteVal) + parseInt(this.disVal))
      if (result01 >= 60) {
        this.hourVal = formatTen(parseInt(this.hourVal) + 1)
        result01 = formatTen(parseInt(result01) - 60)
      }
      if (result01 < 0) {
        this.hourVal = formatTen(parseInt(this.hourVal) - 1)
        result01 = formatTen(60 + parseInt(result01))
      }
      this.bjDateTime = this.startYear + '-' + this.startMonth + '-' + this.dayVal + ' ' + this.hourVal + ':' + result01

    },
    /*归档时间事件*/
    startDateClick() {
      // 选择开始日期后，重置开始小时、开始分、结束日期、结束小时、结束分
      this.miniStartHour = ''
      this.miniStartMinute = ''
      this.miniEndDate = ''
      this.miniEndHour = ''
      this.miniEndMinute = ''
    },
    startHourClick() {
      // 选择开始小时后，重置开始分、结束日期、结束小时、结束分
      this.miniStartMinute = ''
      this.miniEndDate = ''
      this.miniEndHour = ''
      this.miniEndMinute = ''
    },
    startMinuteClick(val) {
      // 选择开始分秒后，重置结束日期、结束小时、结束分
      this.miniEndDate = ''
      this.miniEndHour = ''
      this.miniEndMinute = ''
    },
    endDateClick() {
      // 选择结束日期后，重置结束小时、结束分
      this.miniEndHour = ''
      this.miniEndMinute = ''
    },
    endHourClick() {
      // 选择结束小时后，重置结束分
      this.miniEndMinute = ''
    },
    endMinuteClick(val) {
      // 根据选择开始和结束时间范围获取产品数据
      const regx = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\s+(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/
      if (regx.test(this.getQueryStartDateTime) && regx.test(this.getQueryEndDateTime)) {
        // 20200828 查询产品数据
        this.getProductInfo(this.productId, this.getQueryStartDateTime, this.getQueryEndDateTime, this.resolution, this.obAreaType)
      }
    },
    /* mini 播放列表按钮点击事件*/
    playListHandle(){
      // this.exportImgVisible = false;
      this.timeListVisible = false;
      this.setVisible = false;
      this.playListVisible = !this.playListVisible;
      // 播放列表
      // 设置播放列表默认显示日期图片，在播放动画时同步显示播放帧
      this.playTimeVal = this.dateList[this.currentAnimationIndex].dateTimeItem
    },
    timeListHandle() {
      // mini 播放器时间范围选择器处理事件
      // this.exportImgVisible = false;
      this.playListVisible = false;
      this.setVisible = false;
      this.timeListVisible = !this.timeListVisible;
      // this.yearList=[]
      // if(this.dateList.length>0){
      //   this.dateList.map(item=>{
      //     var dateArry = []
      //     var dateItem = item.dateTimeItem.split(' ')[0]
      //     var timeItem = item.dateTimeItem.split(' ')[1]
      //     var hourArry = timeItem.split(':')[0]
      //     dateArry.push(dateItem)
      //     this.yearList = unique(dateArry)
      //   })
      // }
    },
    //动画时间slide事件
    firstHandle() {
      // 跳转到动画第一帧
      this.currentAnimationIndex = 0
      this.changeAnimationInfo()
    },
    lastHandle() {
      // 跳转到动画最后一帧
      this.currentAnimationIndex = this.sliderMax
      this.changeAnimationInfo()
    },
    handleScroll(){
      document.getElementById(this.dateList[this.currentAnimationIndex].id).scrollIntoView({
        behavior: "smooth",  // 平滑过渡
        block:    "start"  // 上边框与视窗顶部平齐。默认值
      });
    },
    changeAnimationInfo() {
      // 移除上一动画图层
      // let currentDateListLength = this.dateList.length
      let currentDateItem = this.dateList[this.currentAnimationIndex]
      let currentBaseItem = undefined;
      if (this.baseList !== null && this.baseList.length > 0) {
        currentBaseItem = this.baseList[this.currentAnimationIndex]
      }
      /*控制滚动条位置*/
      this.$nextTick(()=>{
        this.handleScroll()
      })
      /*this.$nextTick(()=>{
         if (currentDateItem && currentDateItem.id) {
           // by yangwei 2020-11-30 currentDateItem.id 对应的 dom 元素会出现为创建的情况导致异常
           document.getElementById(currentDateItem.id).scrollIntoView({
             behavior: "smooth",  // 平滑过渡
             block:    "start"  // 上边框与视窗顶部平齐。默认值
           });
         }
      })*/

      // this.m_OlClass.removeLayer(this.singleImageParams)
      // 2020-09-07 使用产品id和当前产品图片id，生成动画帧标识用作 openlayers 的 Image 图层显示
      // 通过缓存每次新增的图层，控制同个产品的显示、隐藏达到动画播放效果，同时减少重复添加、移除图层带来的性能和闪屏问题
     /* if(currentDateItem.url.indexOf('ACI') ==-1 && currentDateItem.url.indexOf('FDI') ==-1){
        console.log('ceshi');

      }*/
        let identifier = this.productId + '_' + currentDateItem.id
        let layerItem = this.cacheLayers[this.currentAnimationIndex]
        if (layerItem) {
            // 20201130， 获取当前播放上一帧数据
            console.log(this.currentAnimationIndex, this.dateList[this.currentAnimationIndex - 1])
            let lastIndex = this.currentAnimationIndex + 1 > this.dateList.length ? 0 : this.currentAnimationIndex
            let lastLayerItem = this.dateList[lastIndex]
            Object.keys(this.cacheLayers).forEach(key => {
                let item = this.cacheLayers[key]
                if (layerItem === item) {
                    this.m_OlClass.setLayerVisibility(item, true)
                } else {
                    this.m_OlClass.setLayerVisibility(item, false)
                }
            })
        } else {
            this.singleImageParams = {
                id: identifier,
                name: 'testSingleImage',
                mapType: 'IMAGE',
                url: currentDateItem.url + "?"+Math.random(),
                extent: changeArry(currentDateItem.extent),
                layerGroup: 'productImage',
                wrapx: true,
                zIndex: 2,
            }
            // by yangwei 2020-11-28 清除缓存，当缓存中保存的数据超过40个,清除10-40之间的缓存
            if (Object.keys(this.cacheLayers).length >= 40) {
                let lastIndex = this.currentAnimationIndex + 1 > this.dateList.length ? 0 : this.currentAnimationIndex
                this.clearLayerCache(lastIndex)
            }
            // this.cacheLayers[identifier] = this.singleImageParams
            // 使用当前播放帧的索引值作为产品缓存的 key
            this.cacheLayers[this.currentAnimationIndex] = this.singleImageParams
            this.m_OlClass.addLayer(this.singleImageParams)
        }


      /*真彩色图*/
      if (currentBaseItem !== undefined) {
        if(currentDateItem.url.indexOf('ACI') ==-1 && currentDateItem.url.indexOf('FDI') ==-1){
            let identifierBase = this.baseProductId + '_' + currentBaseItem.id
              let layerItemBase = this.cacheLayersBase[identifierBase]
              if (layerItemBase) {
                  Object.keys(this.cacheLayersBase).forEach(key => {
                      let item = this.cacheLayersBase[key]
                      if (layerItemBase === item) {
                          this.m_OlClass.setLayerVisibility(item, true)
                      } else {
                          this.m_OlClass.setLayerVisibility(item, false)
                      }
                  })
              } else {
                  this.baseImageParams = {
                      id: identifierBase,
                      name: 'testSingleImage',
                      mapType: 'IMAGE',
                      url: currentBaseItem.url + "?"+Math.random(),
                      extent: changeArry(currentBaseItem.extent),
                      layerGroup: 'productImage',
                      wrapx: true,
                      zIndex: 1,
                  }
                  // by yangwei 2020-11-28 清除缓存，当缓存中保存的数据超过40个,清除10-40之间的缓存
                  if (Object.keys(this.cacheLayersBase).length >= 40) {
                      this.clearLayerBaseCache()
                  }
                  this.cacheLayersBase[identifierBase] = this.baseImageParams
                  this.m_OlClass.addLayer(this.baseImageParams)
              }
          }


      }

      // 计算播放器显示时间戳
      let changeVal = currentDateItem.dateTimeItem.split(' ')[1]
      this.minuteVal = changeVal.split(':')[1]
      this.hourVal = changeVal.split(':')[0]
      // 设置播放进度条
      this.dateSlideVal = this.currentAnimationIndex
      // this.dateSlideVal = currentDateListLength - this.currentAnimationIndex - 1
      // 同步播放列表样式：选当前播放帧
      this.dateActive = this.currentAnimationIndex
      // 重置播放进度条
      if (this.dateSlideVal >= this.dateListSize) {
        this.dateSlideVal = 0
        this.minuteVal = changeVal.split(':')[1]
      }
      // 设置时间戳
      let result = this.minuteVal
      this.dayVal = formatTen(parseInt(this.startDay))
      this.bjDateTime = this.startYear + '-' + this.startMonth + '-' + this.dayVal + ' ' + this.hourVal + ':' + result
      this.bjDateTime1 = this.startYear + '-' + this.startMonth + '-' + this.dayVal + ' ' + changeVal
      this.dateChoose = this.bjDateTime
      this.cropDateChoose = this.bjDateTime1


    },
    changeAnimationInfoForDesc() {
      // 移除上一动画图层
      // this.m_OlClass.removeLayer(this.singleImageParams)
      let currentDateListLength = this.dateList.length
      let currentDateItem = this.dateList[this.currentAnimationIndex]
      // 2020-09-07 使用产品id和当前产品图片id，生成动画帧标识用作 openlayers 的 Image 图层显示
      // 通过缓存每次新增的图层，控制同个产品的显示、隐藏达到动画播放效果，同时减少重复添加、移除图层带来的性能和闪屏问题
      let identifier = this.productId + '_' + currentDateItem.id
      let layerItem = this.cacheLayers[identifier]
      if (layerItem) {
        Object.keys(this.cacheLayers).forEach(key => {
          let item = this.cacheLayers[key]
          if (layerItem === item) {
            this.m_OlClass.setLayerVisibility(item, true)
          } else {
            this.m_OlClass.setLayerVisibility(item, false)
          }
        })
      } else {
        this.singleImageParams = {
          id: identifier,
          name: 'testSingleImage',
          mapType: 'IMAGE',
          url: currentDateItem.url,
          extent: changeArry(currentDateItem.extent),
          layerGroup: 'productImage',
          wrapx: true,
          zIndex: 2,
          //opacity:0.99
        }
        this.cacheLayers[identifier] = this.singleImageParams
        this.m_OlClass.addLayer(this.singleImageParams)
      }

      // 计算播放器显示时间戳
      let changeVal = currentDateItem.dateTimeItem.split(' ')[1]
      this.minuteVal = changeVal.split(':')[1]
      this.hourVal = changeVal.split(':')[0]
      // 设置播放进度条
      this.dateSlideVal = currentDateListLength - this.currentAnimationIndex - 1
      // 同步播放列表样式：选当前播放帧
      this.dateActive = this.currentAnimationIndex
      // 重置播放进度条
      if (this.dateSlideVal < 0) {
        this.dateSlideVal = currentDateListLength - 1
        this.minuteVal = changeVal.split(':')[1]
      }
      // 设置时间戳
      let result = this.minuteVal
      this.dayVal = formatTen(parseInt(this.startDay))
      this.bjDateTime = this.startYear + '-' + this.startMonth + '-' + this.dayVal + ' ' + this.hourVal + ':' + result
      this.dateChoose = this.bjDateTime
    },
    minusAnimation() {
      // 后退一帧
      this.currentAnimationIndex--
      if (this.currentAnimationIndex < 0) {
        this.currentAnimationIndex = this.sliderMax
      } else if (this.currentAnimationIndex > this.sliderMax) {
        this.currentAnimationIndex = 0;
      }
      this.changeAnimationInfo()
    },
    addAnimation() {
      // 逆序播放，前进一帧：播放动画效果
      //   this.currentAnimationIndex--
      //   if (this.currentAnimationIndex < 0 ){
      //     this.currentAnimationIndex = this.sliderMax
      //   }
      // 顺序播放，前进一帧：播放动画效果
      if (this.currentAnimationIndex++ >= this.sliderMax) {
        this.currentAnimationIndex = 0
      }
      this.changeAnimationInfo()
    },
    //循环图片
    loop(i) {
      // by yangwei 2020-08-17 动画播放的图片数据由后台生成以时间逆序排列，即最新的时间数组索引值小
      // 现在需要将 this.dateList 逆序输出，即最新的时间数组索引值大
      let size = this.dateList.length
      this.intervalLoop = setInterval(() => {
        // 设置当前播放动画图片索引
        // this.currentAnimationIndex = i
        this.addAnimation()
        // 逆序播放
        // i--
        // if (i < 0) {
        //   i = size - 1
        // }
        // 顺序播放
        if (i++ >= this.dateListSize) {
          i = 0
        }

      }, this.animationSpeed);
    },
    /*播放*/
    playClick() {
     /* if (this.m_OlClass.status == 0) {
        console.log('未欸加载完');
      } else {
        console.log('加载完成');
      }*/
      if (this.dateList.length <= 0) {
        this.playStatus = 0;
        this.$message.error('暂无数据')
      } else {
        this.playStatus = 1
        this.playPause = false
        this.sliderLength = this.dateList.length;
        this.loop(0) // 动画图片数组列表顺序播放：时间从远到近
        // this.loop(this.dateList.length-1) // 动画图片数组列表是逆序生成，需要从数组索引值大向小播放
      }
    },
    /*暂停*/
    pauseClick() {
      this.playPause = true
      this.playStatus = 0
      if (this.intervalLoop) {
        clearInterval(this.intervalLoop);
      }
    },
    //动画时间初始化
    initAnimationDate() {
      // by yangwei 2020-08-17
      // 页面加载后默认加载产品日期时间
      let currentDate = new Date(this.bjDateTime)
      this.startYear = currentDate.getFullYear()
      this.startMonth = formatTen(currentDate.getMonth() + 1)
      this.startDay = formatTen(currentDate.getDate())
      this.startHour = formatTen(currentDate.getHours())
      this.startMinute = formatTen(currentDate.getMinutes())
    },
    initMap() {
      this.m_OlClass = new ShinetekView()
      var mapParams = {
        divID: "map",
        extendParam: {
          isFullScreen: false,
          isMousePosition: false,
          isScaleLine: true,
          isZoomSlider: false,
          isZoomToExtent: true,
          isOverviewMap: false
        },
        logoParam: {
          isLogo: false,
          src: "",
          href: ""
        },
        // todo 此项需要补位为json 形式
        viewParam: {
          // 此项为空则补位
          projection: "EPSG:4326",
          // center: [116.20, 39.56],
          center: [this.mapCenterLon, this.mapCenterLat],
          zoom: 5,
          minZoom: 5,
          maxZoom: 8,
          // extent: [70, -10, 170, 70]
          extent: [58, 0, 142, 62]
        }
      };
      var isInit = this.m_OlClass.initMap(mapParams)
      this.m_OlClass.setCenter(this.mapCenterLon, this.mapCenterLat);
      this.m_OlClass.setViewZoomNum(this.zoomLevel);
      this.addWMSLayer()
      this.init()
    },
    addWMSLayer() {
      var WMSParams = {
        id: 'dsadujh2n12',
        name: 'testWMS',
        mapType: 'WMS',
        // url: 'http://121.36.13.81:4067/geoserver/satelliteview/wms',
        //url: 'http://1.202.89.226:19982/geoserver/satelliteview/wms',
        url: this.mapUrl,
        LAYERS: 'satelliteview:1-Countries',
        zIndex: 0,
      }
      this.m_OlClass.addLayer(WMSParams)
    },
    init() {
      var ChinaParams = {
        id: 'dsadujh2n1211',
        name: 'testWMS11',
        mapType: 'WMS',
        // url: 'http://121.36.13.81:4067/geoserver/satelliteview/wms',
        // url: 'http://1.202.89.226:19982/geoserver/satelliteview/wms',
        url: this.mapUrl,
        LAYERS: 'satelliteview:1526452528945-china_line',
        zIndex: 5001,
      }
      // const wmsLayer = new Tile({
      //     source: new XYZ({
      //         url: "http://t{0-7}.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}",
      //     }),
      //     zIndex:999,
      //     opacity:0.8
      // });
      this.m_OlClass.addLayer(ChinaParams)
    },
    addSingleImageLayer(url, extent, id, zIndex) {
      this.singleImageParams = {
        id: id,
        name: 'testSingleImage',
        mapType: 'IMAGE',
        url: url,
        extent: extent,
        layerGroup: 'productImage',
        wrapx: true,
        zIndex: zIndex,
        //opacity:0.99
      }
      this.m_OlClass.addLayer(this.singleImageParams)
    },
    removeSingleImageLayer() {
      this.m_OlClass.removeLayer(this.singleImageParams)
    },

    fullScreen(full) {
      if (!this.fullScreenMode) {
        this.fullScreenCallBack(full)
      }
      fullScreen(this.$refs.rootmap, full)
    },
    fullScreenCallBack(full) {
      // 处理使用进入、退出全屏模式时，显示/隐藏页面组件
      // 全屏模式下只保留MINI播放器、取消全屏、放大/缩小按钮
      this.rightBarActive1 = !this.rightBarActive1
      this.mapToolActive = null;
      this.rightBarActive2 = false;
      this.rightBarActive3 = false;
      // 2020-08-14 by yangwei 全屏模式切换显示/隐藏
      this.leftMenuControl = this.fullScreenMode;
      // 隐藏 mini 播放器
      this.timeListVisible = false;
      this.playListVisible = false;
      this.controlBtnVisible = this.fullScreenMode; // 隐藏左侧工具栏，显示 Mini 播放器
      this.topBarVisible = !this.topBarVisible; // 隐藏标题
      this.fullScreenMode = !this.fullScreenMode; // 隐藏右侧工具栏
      this.headerLogoVisible = !this.headerLogoVisible; // 隐藏左侧 Logo
      // 隐藏/显示比例尺
      let olScaleLine = this.$el.getElementsByClassName('ol-scale-line');
      if (this.fullScreenMode) {
        olScaleLine[0].style.display = 'none'
      } else {
        olScaleLine[0].style.display = ''
      }
      if (full == false) {
        this.fullScreenTitle = '全屏收缩'
      } else {
        this.fullScreenTitle = '全屏展开'
      }
      this.isFull = !this.isFull;
    },
    /*放大缩小点击事件*/
    zoomInClick() {
      this.rightBarActive2 = true;
      this.rightBarActive3 = false;
      this.mapToolActive = null;
      let currentZoom = Math.floor(this.m_OlClass.olMap.getView().getZoom())
      if (currentZoom >= this.maxZoomLevel) {
        this.zoomLevel = this.maxZoomLevel
      } else {
        let newZoom = parseInt(currentZoom) + 1
        this.zoomLevel = newZoom
      }
      this.m_OlClass.setViewZoomNum(this.zoomLevel)
    },
    zoomOutClick() {
      this.rightBarActive3 = true;
      this.rightBarActive2 = false;
      this.mapToolActive = null;
      let currentZoom = Math.floor(this.m_OlClass.olMap.getView().getZoom())
      if (currentZoom <= this.minZoomLevel) {
        this.zoomLevel = this.minZoomLevel
      } else {
        let newZoom = parseInt(currentZoom) - 1
        this.zoomLevel = newZoom
      }
      this.m_OlClass.setViewZoomNum(this.zoomLevel)
    },
    /*地图工具点击事件*/
    mapToolHandle(index) {
      this.topList[3].show = false
      if (document.getElementById('jcropDiv') !== null) {
        document.getElementById('jcropDiv').style.display = "none"
        jcropApi.release();
      }
      //jcropApi.destroy();
      this.pauseClick()
      this.mapToolActive = index
      this.rightBarActive1 = false;
      this.rightBarActive2 = false;
      this.rightBarActive3 = false;
      if (index == 0) {
        this.overLayerVisible = true;
        this.removeDraw()
        this.endDraw()
        this.key = this.m_OlClass.olMap.on('click', (e) => {
          var lonlat = e.coordinate
          /*修改测量距离点*/
          var distance = getDistance([116.39053344726561, 39.91710957679777], lonlat)
          var disVal = distance / 1000
          this.currentCoordinate = disVal.toFixed(2)

          this.overlay = new Overlay({
            element: this.$refs.popup, // 弹窗标签，在html里
            autoPan: true, // 如果弹窗在底图边缘时，底图会移动
            autoPanAnimation: { // 底图移动动画
              duration: 250
            }
          })
          this.m_OlClass.olMap.addOverlay(this.overlay);
          this.overlay.setPosition(lonlat)
        })
      }
      if (index == 1) {
        this.destoryMapClick();
        this.startMeasureTest()
      }
      if (index == 2) {
        this.destoryMapClick();
        this.m_OlClass.endMeasure();
        this.endDraw()
      }
      if (index == 3) {
        this.destoryMapClick();
        this.addDraw('Point')
      }
      if (index == 4) {
        this.destoryMapClick();
        this.addDraw('Box')
      }
      if (index == 5) {
        this.destoryMapClick();
        this.addDraw('LineString')
      }
      if (index == 6) {
        this.destoryMapClick();
        this.addDraw('Polygon')
      }
      if (index == 7) {
        this.destoryMapClick();
        this.endDraw();
        this.removeDraw()
      }
    },
    destoryMapClick() {
      if (this.key) {
        this.closePopup()
        ol.Observable.unByKey(this.key);
      }
    },
    // 关闭弹窗
    closePopup() {
      this.overlay.setPosition(undefined)
      this.currentCoordinate = null
    },
    /*添加绘制*/
    addDraw(type) {
      this.m_OlClass.endMeasure()
      const color = {
        drawColor: '#09c',
        showColor: '#00FF00'
      }
      this.m_OlClass.addDrawVector(type, color)
    },
    /*添加绘制JIETU */
    addDrawCrop(type) {
      this.m_OlClass.endMeasure()
      const color = {
        drawColor: '#09c',
        showColor: '#fff'
      }
      this.m_OlClass.addDrawCropVector(type, color)
    },
    /*删除绘制*/
    removeDraw() {
      this.m_OlClass.removeDrawVector()
      this.m_OlClass.endMeasure()
    },
    /*开始测距*/
    startMeasureTest() {
      this.m_OlClass.endMeasure()
      this.m_OlClass.endDrawVector()
      this.m_OlClass.removeDrawVector()
      this.m_OlClass.startMeasure(60000)
    },
    endDraw(self) {
      this.m_OlClass.endDrawVector()
    },
    /**
     * 左侧
     */
    foldClick() {
      this.timeListVisible = false;
      this.playListVisible = false;
      // this.exportImgVisible = false;
      // this.setVisible = false;
      this.leftMenuControl = !this.leftMenuControl
      this.headerLogoVisible = !this.headerLogoVisible
    },

    //tab点击事件
    handleClick(tab, event) {
      console.log(tab, '33333333');
      this.typeBtn = []
      this.activeName = tab.name
      this.statelliteName = tab.label
      if (tab.name == 'FY4') {
        this.playStatus = 0
        this.playPause = true
        this.m_OlClass.removeLayer(this.singleImageParams)
        this.m_OlClass.removeLayer(this.baseImageParams)
        this.tabIndex = 1
        this.obAreaType = 1; // 观测区域类型： =1 全圆盘； =2 中国区
        this.areaActive = false; // 观测类型选中状态，设置为 false 选中；true 不选中
        this.getIndex(this.tabIndex, this.obAreaType)
      }
      if (tab.name == 'H8') {
        this.playStatus = 0
        this.playPause = true
        this.m_OlClass.removeLayer(this.singleImageParams)
        this.m_OlClass.removeLayer(this.baseImageParams)
        this.tabIndex = 2
        // 葵花只有全圆盘数据,需要更新为全圆盘
        this.areaActive = false; // 观测类型选中状态，设置为 false 选中；true 不选中
        this.obAreaType = 1; // 观测区域类型： =1 全圆盘； =2 中国区
        this.getIndex(this.tabIndex, this.obAreaType)

        //this.typeBtnClick()
        this.tabBtnActive = 0
        // this.dateVal = '' //测试重置葵花数据时间范围默认选择值

      }
    },
    //常用产品按钮点击事件
    typeBtnClick(item, index) {
      if (this.baseList !== null && this.baseList.length > 0) {
        this.baseImageParams = {
          id: this.baseProductId + '_' + this.baseList[0].id,
          name: 'testSingleImage',
          mapType: 'IMAGE',
          url: this.baseList[0].url,
          extent: this.baseImgExtent,
          layerGroup: 'productImage',
          wrapx: true,
          zIndex: 1,
        }
      }

      //this.m_OlClass.addLayer(this.baseImageParams)
      this.topList[0].show = false;//当定位到最新产品时，点击其他常用产品按钮，取消定位最新产品按钮状态
      this.m_OlClass.removeLayer(this.singleImageParams)
      // this.cropDateTime = this.dateList[this.dateList.length-1].dateTimeItem

      this.tabBtnActive = index
      item.status = !item.status
      var myId = item.id
      let ele = document.getElementById(myId)
      if (item.status == true) {
        // this.getProductInfo(item.id,this.dateVal,this.quickVal,3)//TODO maolu1
        // 修改为时间范围查询
        // this.getAnimateData(item.id,this.getQueryStartDateTime, this.getQueryEndDateTime,3)
        // by yangwei 2020-09-04 参数：开始时间和结束时间传空，接收最新数据
        this.getAnimateData(item.id, null, null, 3)
        this.productVal = item.productName
        this.productId = item.id
        if (ele !== null) {
          ele.className = 'el-button el-button--default typeBtn typeBtnActive'
        }
        this.typeBtn.map((item1, index1) => {
          if (index1 !== index) {
            item1.status = false
          }
        })
      } else {
        this.dateList = []
        this.productVal = ''
        this.legendVisible = false;
        ele.className = 'el-button el-button--default typeBtn'
        this.m_OlClass.removeLayer(this.singleImageParams)
        this.m_OlClass.removeLayer(this.baseImageParams)

      }

      //eventBus.$emit('typeVal', this.productVal)
    },

    // 下拉菜单点击事件
    handleCommand(command) {
      let that = this
      this.dropList.map((item, index) => {
        if (item.id === command) {
          // 修改为时间范围查询
          this.getProductInfo(command, null, null, 3, that.obAreaType)
          this.productVal = item.productName
          this.productId = item.id
          this.typeBtn.map((type, index1) => {
            var myId = this.typeBtn[index1].id
            let ele = document.getElementById(myId)
            if (item.id != type.id) {
              type.status = false
              ele.className = 'el-button el-button--default typeBtn'
            }
            if (this.productVal === type.productName) {
              this.typeBtnClick(type.id, index1)
            } else {
              this.tabBtnActive = null
            }
          })
        }
      })
    },
    //时次选择点击事件
    dateListClick(item, index,id) {
      this.cropDateChoose = item.dateTimeItem
      this.defaultCropDate(this.cropDateChoose)
      this.dateActive = index;
      if (this.dateList.length > 0) {
        this.dateChoose = item.dateTimeItem.substring(0, 16) //设置标题信息， 格式：年-月-日 时:分
        this.cropDateChoose = item.dateTimeItem.substring(0, 19) //设置标题信息， 格式：年-月-日 时:分
        // 同步日期时间 by yangwei 2020-08-17
        this.dateVal = item.dateTimeItem.substring(0, 10) // 设置左侧日期选择器默认日期，数据格式：日期
        // 设置左侧播放器显示日期时间
        this.bjDateTime = item.dateTimeItem.substring(0, 16)
        this.cropDateChoose = item.dateTimeItem.substring(0, 19) //设置标题信息， 格式：年-月-日 时:分
        this.currentAnimationIndex = index;
        // 调用播放动画切换
        this.changeAnimationInfo()
      }
    },
    /**
     * 迷你动画
     * */
    /*解析度选择*/
    // 未使用
    async resolutionHandle(type) {
      var beginTime, miniBeginTime, miniEndTime, defaultEndTime, defaultBeginTime, endTime; //定义导出参数
      miniBeginTime = this.miniStartDate + ' ' + this.miniStartHour + ':' + this.miniStartMinute;
      miniEndTime = this.miniEndDate + ' ' + this.miniEndHour + ':' + this.miniEndMinute;
      defaultEndTime = getTimer(new Date()) + ':00';
      defaultBeginTime = this.bjDateTime + ':00';
      if (miniBeginTime) {
        beginTime = miniBeginTime
      } else {
        beginTime = defaultBeginTime
      }
      if (miniEndTime) {
        endTime = miniEndTime
      } else {
        endTime = defaultEndTime
      }
      this.resolutionVal = type;
      let resp = await exportGif(this.productId, beginTime, endTime, this.resolutionVal, this.animationSpeed)
      if (resp.data.code !== 0) {
        this.$message('没有找到对应数据')
        return
      }
      let result = resp.data.result.url;
      let name = resp.data.result.name;
      var a = document.createElement('a');
      a.href = result; //图片地址
      a.download = name; //图片名及格式
      document.body.appendChild(a);
      a.click();
    },
    /*迷你动画时次选择-mzl*/
    dateListMiniClick(val) {
      let selectItem, selectIndex
      this.dateList.map((item, index) => {
        if (val === item.id) {
          selectIndex = index
          selectItem = item
        }
      });
      this.dateListClick(selectItem, selectIndex)
    },
    /**
     * 头部
     */
    startCrop() {
      this.$refs.cropper.startCrop()
      this.$refs.cropper.getCropAxis()
    },
    clearBtnSelectForTopBar(id) {
      // 清除顶部按钮选中状态，目前只为了取消 id = 5, 6 的按钮
      if (this.topList[id].show === true) {
        document.getElementById(id).className = 'topBarActive top_bar_item'
      } else {
        document.getElementById(id).className = 'top_bar_item'
      }
    },
    //todo1
    /**
     * 初始化开始时间结束时间
     * */
    defaultCropDate(cropDateTime) {
      var startDate = cropDateTime.split(' ')[0]
      var startTime = cropDateTime.split(' ')[1].split(':')[0]
      var endTime = ''
      if (startTime.substr(0, 1) == "0") {
        endTime = Number(startTime.substr(1, 1))+3;
      } else {
        endTime = Number(startTime) +3;
      }

      $("#startDate").val(startDate)
      $("#endDate").val(startDate)
      $("#startTime").val(startTime+":00")
      $("#endTime").val(endTime+":00")
      //判断如果当前时间大于半点取半点，如果
      /*$("#endTime").val(endTime + ":" + cropDateTime.split(' ')[1].split(':')[1])
      $("#startTime").val(startTime - 3 + ":00")*/
    },
    topBarClick(item, index) {
      item.show = !item.show;
      console.log(item.show,'topBarActive top_bar_item');
      this.topBarActive = index
      if (item.id === 0) {
        this.refreshVisible = false;
        this.settingVisible = false;
        this.observeVisible = false;
        this.geoborderVisible = false;
        //定位到最新产品
        //var newProductId = this.typeBtn[0].id
        // this.getLastProduct(this.typeBtn[0].id,this.quickVal)
        this.getLastProduct(this.typeBtn[0].id, this.quickVal, this.obAreaType)
        this.clearBtnSelectForTopBar(0)
      }
      if (item.id === 1) {
        // 定位到初始位置
        this.clearBtnSelectForTopBar(1)
        this.refreshVisible = false;
        this.settingVisible = false;
        this.observeVisible = false;
        this.geoborderVisible = false;
        this.m_OlClass.setCenter(this.mapCenterLon, this.mapCenterLat);
        this.m_OlClass.setViewZoomNum(5);

      }
      if (item.id === 2) {
        // 点击添加/隐藏网络经纬度
        this.refreshVisible = false;
        this.settingVisible = false;
        this.observeVisible = false;
        this.geoborderVisible = false;
        if (this.topList[2].show === true) {
          this.m_OlClass.addGraticuleLayer()
          document.getElementById(item.id).className = 'topBarActive top_bar_item'
        } else {
          this.m_OlClass.removeGraticuleLayer()
          document.getElementById(item.id).className = 'top_bar_item'
        }
      }
      if (item.id === 3) { // 截图
        this.clearBtnSelectForTopBar(3)
        this.pauseClick();
        this.refreshVisible = false;
        this.settingVisible = false;
        this.observeVisible = false;
        this.geoborderVisible = false;
        if (this.topList[3].show === true) {
          this.cropperVisible = true;
          this.cropHandleVisible = true;
          this.cropImgVisible = true;
          this.playPause = true;
          if (jcropApi !== undefined) {
            document.getElementById('jcropDiv').style.display = 'block'
            jcropApi.enable()
            jcropApi.setOptions({
              boxWidth: '400px',
              setSelect: [800, 250, 1200, 600],
            })
          }
          this.$nextTick(() => {
            m_OlClass = this.m_OlClass
            let that = this
            $('#cropBox').Jcrop({
              allowSelect: false,
              onChange: updatePreview,
              boxWidth: '400px',
              setSelect: [800, 250, 1200, 600],
              aspectRatio:this.aspectRatioVal,
              minSize: [470, 200]
            }, function () {
              jcropApi = this;
              //初始化开始时间结束时间
              // var startDate = getDate(new Date())
              if (that.fontType == false) {//简体
                $("#OriginalImg").text('原始图像截图')
                $("#Timestamp").text('时间戳')
                $("#Pallet").text('色标卡')
                $("#LogoShow").text('是否显示logo')
                $("#Ratio").text('锁定宽高比(16:10)')
              } else {
                $("#OriginalImg").text('原始圖像截圖')
                $("#Timestamp").text('時間戳')
                $("#Pallet").text('色標卡')
                $("#LogoShow").text('是否顯示logo')
                $("#Ratio").text('鎖定寬高比(16:10)')
              }
              that.defaultCropDate(that.cropDateChoose)
              document.getElementById('photoScreenshot').onmousemove = () => {
                document.getElementById('videoShowDiv').style.display = 'none'
                document.getElementById('photoShowDiv').style.display = 'block'
                $("#setTagColor").minicolors({
                  control: 'hue',
                  position: 'bottom left',
                  theme: 'default',
                  hideOnLeave: true,
                  change: function (value, opacity) {
                    that.titleColor = value
                    document.getElementById('timestamp').style.color = value
                    $("#videoSetTagColor").minicolors('value', value)
                  }
                });
                //是否选择原始图像截图
                $("#phtotoOriginalImg").off("click").on("click", function () {
                  if ($(this)[0].checked == true) {
                    that.ophotoOriginalImgVal = true
                  } else {
                    that.ophotoOriginalImgVal = false
                  }
                })
                //是否选择时间戳
                $("#photoTimestamp").off("click").on("click", function () {
                  if ($(this)[0].checked == true) {
                    $("#videoTimestamp").prop("checked", true);
                    that.showTitle = 1
                    document.getElementById('timestamp').innerText = cropTitle + ' ' + that.cropDateChoose
                  } else {
                    $("#videoTimestamp").prop("checked", false);
                    that.showTitle = 0
                    document.getElementById('timestamp').innerText = ''
                  }
                })
                //是否选择调色板
                $("#photoPallet").off("click").on("click", function () {
                  if ($(this)[0].checked == true) {
                    $("#videoPallet").prop("checked", true);
                    that.showColorBar = 1
                    if (that.legendUrl !== null) {
                      document.getElementById('colorPallent').innerHTML += "<img src=" + that.legendUrl + ">"
                    } else {
                      document.getElementById('colorPallent').innerHTML += ''
                    }
                  } else {
                    $("#videoPallet").prop("checked", false);
                    that.showColorBar = 0
                    document.getElementById('colorPallent').innerHTML = ''
                  }
                })
                //是否选择显示logo
                $("#photoLogoShow").off("click").on("click", function () {
                  if ($(this)[0].checked == true) {
                    $("#videoLogoShow").prop("checked", true);
                    that.showLogo = 1
                    document.getElementById('logoPallent').innerHTML += "<img src=" + that.leftImgLogo + ">"
                  } else {
                    $("#videoLogoShow").prop("checked", false);
                    that.showLogo = 0
                    document.getElementById('logoPallent').innerHTML = ''
                  }
                })
                //是否选择锁定宽高比
                $("#photoRatio").off("click").on("click", function () {
                  $(this)[0].checked == true ? $("#videoRatio").prop("checked", true) : $("#videoRatio").prop("checked", false);
                  jcropApi.setOptions($(this)[0].checked == true ?
                      {aspectRatio: 16 / 10} : {aspectRatio: 0});
                  //jcropApi.focus();
                })

                                }
                                document.getElementById('videoScreenshot').onmousemove = () => {
                                    document.getElementById('photoShowDiv').style.display = 'none'
                                    document.getElementById('videoShowDiv').style.display = 'block'
                                    $("#videoSetTagColor").minicolors({
                                        control: 'hue',
                                        position: 'bottom left',
                                        theme: 'default',
                                        change: function (value, opacity) {
                                            that.titleColor = value
                                            document.getElementById('timestamp').style.color = value
                                            $("#setTagColor").minicolors('value', value)
                                        }
                                    });
                                    //是否选择时间戳
                                    $("#videoTimestamp").off("click").on("click", function () {
                                        if ($(this)[0].checked == true) {
                                            $("#photoTimestamp").prop("checked", true);
                                            that.showTitle = 1
                                            document.getElementById('timestamp').innerText = that.productVal +' '+ that.cropDateChoose
                                        } else {
                                            $("#photoTimestamp").prop("checked", false);
                                            that.showTitle = 0
                                            document.getElementById('timestamp').innerText = ''
                                        }
                                    })
                                    //是否选择调色板
                                    $("#videoPallet").off("click").on("click", function () {
                                        if ($(this)[0].checked == true) {
                                            $("#photoPallet").prop("checked", true);
                                            that.showColorBar = 1
                                            //let colorImg = that.color;
                                            if(that.legendUrl !==null){
                                                document.getElementById('colorPallent').innerHTML += "<img src=" + that.legendUrl + ">"
                                            }else{
                                                document.getElementById('colorPallent').innerHTML +=''
                                            }
                                        } else {
                                            $("#photoPallet").prop("checked", false);
                                            that.showColorBar = 0
                                            document.getElementById('colorPallent').innerHTML = ''
                                        }
                                    })
                                    //是否选择显示logo
                                    $("#videoLogoShow").off("click").on("click", function () {
                                        if ($(this)[0].checked == true) {
                                            $("#photoLogoShow").prop("checked", true);
                                            that.showLogo = 1
                                            document.getElementById('logoPallent').innerHTML += "<img src=" + that.leftImgLogo + ">"
                                        } else {
                                            $("#photoLogoShow").prop("checked", false);
                                            that.showLogo = 0
                                            document.getElementById('logoPallent').innerHTML = ''
                                        }
                                    })
                                    //是否选择锁定宽高比
                                    $("#videoRatio").off("click").on("click", function () {
                                        $(this)[0].checked == true?$("#photoRatio").prop("checked", true):$("#photoRatio").prop("checked", false);
                                        jcropApi.setOptions($(this)[0].checked == true?
                                            { aspectRatio: 16/10 }: { aspectRatio: 0 });
                                        jcropApi.focus();
                                    })

                                    //点击开始日期事件--start
                                    $('#startDate').on('click', function () {
                                        $('#startDate').focus()
                                    })
                                    $('#startDate').focus(() => {
                                        this.startDateVal = laydate.render({
                                            elem: '#startDate',
                                            trigger: 'click',
                                            position: 'fixed',
                                            showBottom: false,
                                            done: function (value, date) {
                                                $('#startDate').val(value)
                                            }
                                        })
                                    })
                                    //点击开始时间事件--start
                                    $('#startTime').on('click', function () {
                                        $('#startTime').focus()
                                    })
                                    $('#startTime').focus(function () {
                                        laydate.render({
                                            elem: '#startTime',
                                            type: 'time',
                                            format: 'H:mm',
                                            trigger: 'click',
                                            position: 'fixed',
                                            btns: ['clear', 'confirm'],
                                            ready: function formatminutes(date) {
                                                var aa = $(".laydate-time-list li ol")[1];
                                                var showtime = $($(".laydate-time-list li ol")[1]).find("li");
                                                for (var i = 0; i < showtime.length; i++) {
                                                    var t00 = showtime[i].innerText;
                                                    if (t00 != "00" && t00 != "30") {
                                                        showtime[i].remove()
                                                    }
                                                }
                                                $($(".laydate-time-list li ol")[2]).find("li").remove();  //清空秒
                                            },
                                            done: function (value, date) {
                                              formatTen(value.split(':')[0])
                                                var newVal = formatTen(value.split(':')[0]) + ':' + value.split(':')[1]
                                              $('#endTime').val(Number(value.split(":")[0])+3 + ":00")
                                              if(Number(value.split(":")[0])+3>24){
                                                var newEnd = Number(value.split(":")[0])+3 - 24
                                                $('#endTime').val(formatTen(newEnd) + ":00")
                                              }
                                                // startCurTime = newVal
                                                //$('#startTime').val(newVal)
                                            }
                                        })
                                    })
                                    //点击结束日期事件--start
                                    $('#endDate').on('click', function () {
                                        $('#endDate').focus()
                                    })
                                    $('#endDate').focus(() => {
                                        this.endDateVal = laydate.render({
                                            elem: '#endDate',
                                            trigger: 'click',
                                            position: 'fixed',
                                            showBottom: false,
                                            done: function (value, date) {
                                                $("#endDate").val(value)
                                                var startVal = $("#startDate").val()
                                                if (DateContrast(startVal, value) == "false") {
                                                    $('#startDate').val(value)
                                                }
                                            }
                                        })
                                    })
                                    //点击结束时间事件--start
                                    $('#endTime').on('click', function () {
                                        $('#endTime').focus()
                                    })
                                    $('#endTime').focus(function () {
                                        laydate.render({
                                            elem: '#endTime',
                                            type: 'time',
                                            format: 'H:mm',
                                            trigger: 'click',
                                            position: 'fixed',
                                            btns: ['clear', 'confirm'],
                                            ready: function formatminutes(date) {
                                                var aa = $(".laydate-time-list li ol")[1];
                                                var showtime = $($(".laydate-time-list li ol")[1]).find("li");
                                                for (var i = 0; i < showtime.length; i++) {
                                                    var t00 = showtime[i].innerText;
                                                    if (t00 != "00" && t00 != "30") {
                                                        showtime[i].remove()
                                                    }
                                                }
                                                $($(".laydate-time-list li ol")[2]).find("li").remove();  //清空秒
                                            },
                                            done: function (value, date) {
                                              var endTimeVal = value.split(':')[0]
                                              $('#startTime').val(endTimeVal-3 + ":00")
                                              if(endTimeVal-3<0){
                                                $('#startTime').val(endTimeVal-3+24 + ":00")
                                              }
                                              $('#endTime').val(value)
                                            }
                                        })
                                    })
                                }

              $("#photoScreenshot").off('click').on('click', () => {
                that.pauseClick()
                if (that.ophotoOriginalImgVal == true) {
                  that.screenHandle(that.productId, that.cropDateChoose, Global.coordinate[0],
                      Global.coordinate[1], Global.coordinate[2], Global.coordinate[3],
                      that.showLogo, that.showColorBar, that.titleColor, that.showTitle,
                      that.isLockRatio, that.obAreaType)
                } else {
                  that.html2CanvasHandle()
                }
              })
              $("#videoScreenshot").off('click').on('click', () => {
                var cropperStartTime = $("#startDate").val() + " " + $("#startTime").val() + ':00';
                var cropperEndTime = $("#endDate").val() + ' ' + $("#endTime").val() + ':00';
                that.screenGifHandle(
                    that.productId, cropperStartTime, cropperEndTime, Global.coordinate[0],
                    Global.coordinate[1], Global.coordinate[2], Global.coordinate[3], that.showLogo,
                    that.showColorBar, that.titleColor, that.showTitle, that.isLockRatio, that.obAreaType)
              })
            })

          })
        } else {
          document.getElementById('jcropDiv').style.display = "none"
          jcropApi.release();
          //jcropApi.destroy();
          this.pauseClick()
          this.dateSlideVal = 0
          this.ophotoOriginalImgVal = false
          /*取消截图时清空所有选择*/
          $("#phtotoOriginalImg").prop("checked", false);
          $("#photoTimestamp").prop("checked", false);
          $("#videoTimestamp").prop("checked", false);
          $("#photoPallet").prop("checked", false);
          $("#videoPallet").prop("checked", false);
          $("#photoLogoShow").prop("checked", false);
          $("#videoLogoShow").prop("checked", false);
          $("#photoRatio").prop("checked", true);
          $("#videoRatio").prop("checked", true);
          if (document.getElementById('timestamp') !== null) {
            document.getElementById('timestamp').innerText = ''
          }
          if (document.getElementById('colorPallent').innerHTML !== null) {
            document.getElementById('colorPallent').innerHTML = ''
          }
          if (document.getElementById('logoPallent').innerHTML !== null) {
            document.getElementById('logoPallent').innerHTML = ""
          }

        }
      }
      if (item.id === 4) {
        this.clearBtnSelectForTopBar(4)
        this.settingVisible = false;
        this.observeVisible = false;
        this.geoborderVisible = false;
        this.refreshVisible = !this.refreshVisible
      }
      if (item.id === 5) {
        this.clearBtnSelectForTopBar(5)
        this.refreshVisible = false;
        this.settingVisible = false;
        this.areaVisible = !this.areaVisible
        if (this.areaVisible === false) {
          this.geoborderVisible = false
        }
      }
      if (item.id === 6) {
        this.clearBtnSelectForTopBar(6)
        this.refreshVisible = false;
        this.observeVisible = false;
        this.settingVisible = !this.settingVisible
        if (this.settingVisible === false) {
          this.geoborderVisible = false
        }
      }
    },
    //html2canvas
    html2CanvasHandle() {
      var testDiv = document.getElementById('map')
      html2canvas(testDiv, {
        useCORS: true,
        height: cropBoxSize.h - 2, // 下面解决当页面滚动之后生成图片出现白边问题
        width: cropBoxSize.w - 2,
        x: cropBoxSize.x + 1,
        y: cropBoxSize.y + 1,
      }).then(canvas => {
        let dataURL = canvas.toDataURL("image/png");
        canvas.getContext('2d') // 获取context,设置scale
        this.cropImgVisible = true;
        this.cropImg = dataURL;
        var fileName = this.productVal + this.dateChoose + '.png'
        this.downloadFile(fileName, this.cropImg)
      })
    },
    downloadFile(filename, content) {
      var oA = document.createElement('a')
      oA.href = content
      oA.download = filename
      var event = document.createEvent('MouseEvents')
      event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      oA.dispatchEvent(event)
    },

    //截图
    async screenHandle(productId, dateTime, topLon, topLat, bottomLon, bottomLat, showLogo, showColorBar, titleColor, showTitle, isLockRatio, obAreaType) {
      this.cropperLoading = true
      jcropApi.setOptions({allowSelect: false, allowMove: false})
      let resp = await screenShot(productId, dateTime, topLon, topLat, bottomLon, bottomLat, showLogo, showColorBar, titleColor, showTitle, isLockRatio, obAreaType)
      if (resp.data.code !== 0) {
        this.$message('没有找到对应数据')
      }
      this.screenShotResult = resp.data.result
      if (this.ophotoOriginalImgVal == true) {
        this.share.saveUserMessage(this.screenShotResult)
        let routeData = this.$router.resolve({path: '/cropperShow'})
        window.open(routeData.href, '_blank');
      } else {
        urlToBase64(this.screenShotResult[0].url).then(res => {
          var fileName = this.productVal + this.dateChoose
          this.downloadFile(fileName, res)
        })
      }
      this.cropperLoading = false
      jcropApi.setOptions({allowSelect: true, allowMove: true})
    },
    //gif截图
    async screenGifHandle(productId, beginTime, endTime, topLon, topLat, bottomLon, bottomLat, showLogo, showColorBar, titleColor, showTitle, isLockRatio, obAreaType) {
      this.cropperLoading = true
      jcropApi.setOptions({allowSelect: false, allowMove: false})
      let resp = await screenGifShot(productId, beginTime, endTime, topLon, topLat, bottomLon, bottomLat, showLogo, showColorBar, titleColor, showTitle, isLockRatio, obAreaType)
      if (resp.data.code !== 0 || resp.data.result == null) {
        this.$message('没有找到对应数据')
      } else {
        this.screenShotResult = resp.data.result
        this.share.saveUserMessage(this.screenShotResult)
        let routeData = this.$router.resolve({path: '/cropperShow'})
        window.open(routeData.href, '_blank');
      }

      this.cropperLoading = false
      jcropApi.setOptions({allowSelect: true, allowMove: true})
    }
  }
}

function updatePreview(c) {
  var _map = m_OlClass.getMap()
  cropBoxSize = c;
  var leftTopXY = _map.getCoordinateFromPixel([cropBoxSize.x, cropBoxSize.y], 1)
  var bottomRightXY = _map.getCoordinateFromPixel([cropBoxSize.x + cropBoxSize.w, cropBoxSize.y + cropBoxSize.h], 1)
  var startLon = leftTopXY[0].toFixed(2)
  var startLat = leftTopXY[1].toFixed(2)
  var endLon = bottomRightXY[0].toFixed(2)
  var endLat = bottomRightXY[1].toFixed(2)
  Global.coordinate = [startLon, startLat, endLon, endLat]
  var topText = startLon + ' , ' + startLat
  var bottomText = endLon + ' , ' + endLat
  $('#npoint').text(topText)
  $('#wpoint').text(bottomText)

}
</script>

<style>
@import '../../public/lib/jquery.Jcrop.min.css';
@import '../../public/lib/cropper.css';
@import '../../public/lib/jquery.minicolors.css';

.imgShow {
  position: absolute;
  width: 100%;
  height: calc(100vh - 35px);
  top: 0px;
  /*//background:rgba(0,0,0,.5);*/
  z-index: 2;
}

.imgShowBack {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, .5);
  z-index: 0;
}

#map {
  height: calc(100vh - 35px);
  position: relative;
  z-index: 1;
  top: 0px;
  left: 0px;
  background: #000;
}

/*隐藏ol的一些自带元素*/
.ol-attribution, .ol-zoom {
  display: none;
}

.ol-zoom-in-active {
  background: rgba(173, 173, 173, 0.85);
  /*border: 1px solid #eee;*/
  color: rgb(0, 0, 0);
  width: 40px;
  height: 44px;
  line-height: 44px;
  border-radius: 10px 10px 0 0 !important;
}

.ol-zoom-out-active {
  background: rgba(173, 173, 173, 0.85);
  border: 1px solid #eee;
  color: rgb(0, 0, 0);
  width: 40px;
  height: 44px;
  border-radius: 0px 0px 10px 10px !important;
}

button.active i {
  font-size: 20px;
  color: #000;
  font-weight: 700;
}

.rightBar {
  z-index: 999;
  /*position:absolute;*/
}

/*全屏*/
.ol-control {
  position: absolute;
  background: unset;
  z-index: 999;
}

.ol-full-screen {
  top: 110px;
  right: 10px;
  cursor: pointer;
  background-color: #212121;
  width: 40px;
  height: 44px;
  border-radius: 10px;
  padding: 0px;
  background-image: url("../assets/images/white.png");
  background-repeat: no-repeat;
  background-position: -77px 12px;
}

.ol-full-screen-active {
  top: 110px;
  right: 10px;
  cursor: pointer;
  background-color: rgba(173, 173, 173, .85);
  width: 40px;
  height: 44px;
  border-radius: 10px;
  padding: 0px;
  background-image: url("../assets/images/white_f.png");
  background-repeat: no-repeat;
  background-position: -77px 12px;
}

.ol-control button {
  display: block;
  margin: 0px;
  padding: 0;
  /*color: #fff;*/
  font-size: 1.14em;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  height: 44px;
  width: 40px;
  border: none;
  background: rgba(173, 173, 173, .85);
  color: #eee;
}

.ol-full-screen button {
  background-color: transparent;
}

/*放大缩小*/
div.zoomBox {
  /*background-color: #212121;*/
  top: 160px;
  right: 10px;
  cursor: pointer;
  border-radius: 10px;
  padding: 0;
  width: 40px;
  left: inherit;
}

div.zoomBox button {
  margin: 0;
}

.zoomBox .el-icon-plus {
  font-size: 14px;
}

button.ol-zoom-in {
  background-color: #333;
  width: 40px;
  height: 44px;
  border-radius: 10px 10px 0 0 !important;
}

div.ol-zoom-num {
  background-color: #444;
  width: 40px;
  height: 40px;
  color: #fff;
  text-align: center;
  font-size: 16px;
  line-height: 40px;

}

button.ol-zoom-out {
  background-color: #333;
  width: 40px;
  height: 44px;
  border-radius: 0 0 10px 10px !important;
}

/*地图工具条*/
.mapTools {
  position: fixed;
  width: 40px;
  height: 320px;
  color: #fff;
  right: 10px;
  top: 300px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #333;
  border-radius: 10px;
  z-index: 999;
}

.mapTools .active {
  background: rgba(255, 255, 255, 0.85);
  color: rgb(40, 40, 40);
  cursor: pointer;
  background-image: url("../assets/images/mapTools_f.png");
  background-repeat: no-repeat;
}

.borderT {
  border-radius: 10px 10px 0px 0px
}

.borderB {
  border-radius: 0px 0px 10px 10px
}

.mapTools ul li {
  width: 100%;
  height: 40px;
  /*background-color: transparent;*/
  border: 0;
  background-image: url("../assets/images/mapTools.png");
}

.mapTools ul li:first-child {
  background-position: 1px 0px;
}

.mapTools ul li:nth-child(2) {
  background-position: -79px 0px;
}

.mapTools ul li:nth-child(3) {
  background-position: -400px 0px;
}

.mapTools ul li:nth-child(4) {
  background-position: -200px 0px;
}

.mapTools ul li:nth-child(5) {
  background-position: -320px 0px;
}

.mapTools ul li:nth-child(6) {
  background-position: -240px 0px;
}

.mapTools ul li:nth-child(7) {
  background-position: -360px 0px;
}

.mapTools ul li:nth-child(8) {
  background-position: -120px 0px;
}

.cropper {
  width: auto;
  height: 300px;
}

/* by yangwei */
.dateBox .el-input__inner {
  width: 97%;
  margin: 0 3%;
  background: rgba(204, 204, 204, 0.2);
  color: #ddd;
  border-color: transparent;
}

.logo-bottom {
  position: absolute;
  right: 30px;
  bottom: 35px;
  z-index: 999;
  background-color: transparent;
}

.legendBox {
  position: absolute;
  right: 200px;
  bottom: 35px;
  background: none !important;
}

.miniDateActive {
  color: #409eff !important;
  font-weight: 700;
}

.miniDateBorder {
  background-color: #3d4054;
  border: 1px solid #242424;
  color: #ff7300 !important;
}

.ol-scale-line-inner {
  width: 100px !important;
}

.rightCtrol {
  position: absolute;
  right: 10px;
  top: 60px;
  font-size: 20px;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  background-color: #333;
  width: 40px;
  height: 40px;
  line-height: 40px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
