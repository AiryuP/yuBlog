<template>
  <el-container>
    <el-header class="elHeader">
      <div class="projectName">综合业务平台</div>
      <div class="userInfo">
        <div>
          欢迎您，<span style="color: #f3b01e"> {{ userName }} </span>
        </div>
        <div>丨</div>
        <div class="loginOut" @click="logout">退出</div>
        <div class="iNotice">消息</div>
      </div>
    </el-header>
    <el-container>
      <el-aside class="menuList">
        <el-menu
          :default-active="defaultActive"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          :unique-opened="true"
          @close="handleClose"
          background-color="#011C3A"
          :router="true"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <SubMenu
            :menu-list="list"
            :props="defaultProps"
            @getmenu="onGetMenu"
          />
        </el-menu>
      </el-aside>
      <el-main class="icontainer">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import SubMenu from "../../components/SubMenu";

export default {
  name: "Home",
  components: {
    SubMenu,
  },
  computed: {
    //获取当前路由渲染页面菜单
    //$route.path
    defaultActive() {
      let pathLength = this.$route.path.split("/").reverse();

      if (pathLength.length < 4) {
        let path;
        if (this.$route.path.split("/").reverse()[1] != "") {
          path =
            "/" +
            this.$route.path.split("/").reverse()[1] +
            "/" +
            this.$route.path.split("/").reverse()[0];
        } else {
          path = "/" + this.$route.path.split("/").reverse()[0];
        }

        return path;
      } else {
        let path1 =
          "/" +
          this.$route.path.split("/").reverse()[2] +
          "/" +
          this.$route.path.split("/").reverse()[1] +
          "/" +
          this.$route.path.split("/").reverse()[0];
        return path1;
      }
    },
  },

  data() {
    return {
      defaultProps: {
        children: "children",
        label: "title",
        index: "path",
      },
      list: [
        {
          id: 1,
          title: "首页",
          path: "/meter",
          icon: "icon-home",
          children: [],
        },
        {
          id: 2,
          title: "农业风险预警",
          path: "/warning",
          icon: "icon-service",
          children: [
            {
              id: "21",
              title: "预警编辑",
              path: "/warning/edit",
            },
            {
              id: "26",
              title: "预警审核",
              path: "/warning/examine",
            },
            {
              id: "22",
              title: "预警签发",
              path: "/warning/issue",
            },
            {
              id: "25",
              title: "预警发布",
              path: "/warning/release",
            },
            {
              id: "24",
              title: "驳回列表",
              path: "/warning/reject",
            },
            {
              id: "23",
              title: "预警查询",
              path: "/warning/query",
            },
          ],
        },
        {
          id: 3,
          title: "服务管理",
          path: "/serve",
          icon: "icon-home",
          children: [
            {
              id: 31,
              title: "标签制作",
              path: "/tagMake",
            },
            {
              id: 32,
              title: "模板制作",
              path: "/templateMake",
            },
            {
              id: 33,
              title: "产品制作",
              path: "/productMake",
            },
            // {
            //   id: 34,
            //   title: '一键发布',
            //   path: '/easyRelease',
            // },
            {
              id: 35,
              title: "发布列表",
              path: "/publishList",
            },
          ],
        },
        {
          id: 34,
          title: "一键发布",
          path: "/easyRelease",
          icon: "icon-analysis",
        },
        {
          id: 4,
          title: "配置管理",
          path: "/configure",
          icon: "icon-analysis",
          children: [
            {
              id: "41",
              title: "天擎配置",
              path: "/configuration/cimiss",
            },
            {
              id: "42",
              title: "邮件配置",
              path: "/configuration/email",
            },
            // {
            //   id:'43',
            //   title: '国突配置',
            //   path: '/configuration/emergency',
            // },
            {
              id: "44",
              title: "FTP配置",
              path: "/configuration/FTP",
            },
            {
              id: "45",
              title: "短信配置",
              path: "/configuration/sms",
            },
            {
              id: "46",
              title: "显示屏配置",
              path: "/configuration/screen",
            },
            {
              id: "47",
              title: "微信配置",
              path: "/configuration/wechat",
            },
            {
              id: "48",
              title: "微博配置",
              path: "/configuration/weibo",
            },
          ],
        },
        {
          id: 5,
          title: "业务管理",
          path: "/business",
          icon: "icon-collection",
          children: [
            {
              id: 51,
              title: "受众管理",
              path: "/business/audience",
            },
            {
              id: 52,
              title: "灾种管理",
              path: "/business/disaster",
            },
            {
              id: 53,
              title: "群组管理",
              path: "/business/group",
            },
            {
              id: 54,
              title: "关键字管理",
              path: "/business/keyWord",
            },
            {
              id: 55,
              title: "机构管理",
              path: "/business/organization",
            },
            {
              id: 56,
              title: "策略管理",
              path: "/business/strategy",
            },
          ],
        },
        {
          id: 6,
          title: "系统管理",
          path: "/system",
          icon: "icon-configuration",
          children: [
            {
              id: "6_1",
              title: "菜单管理",
              path: "/system/menuControl",
            },
            {
              id: "6_2",
              title: "员工管理",
              path: "/system/staff",
            },
            {
              id: "6_3",
              title: "角色管理",
              path: "/system/role",
            },
            {
              id: "6_4",
              title: "权限管理",
              path: "/system/power",
            },
          ],
        },
        {
          id: 7,
          title: "基础数据",
          path: "/basics",
          icon: "icon-collection",
          children: [
            {
              id: "700",
              title: "提防",
              path: "/basics/dike",
            },
            {
              id: "701",
              title: "桥梁",
              path: "/basics/bridge",
            },
            {
              id: "702",
              title: "农业园区",
              path: "/basics/agriculturalPark",
            },
            {
              id: "703",
              title: "易燃易爆场所",
              path: "/basics/burnAndExplode",
            },
            {
              id: "704",
              title: "重点医院",
              path: "/basics/hospital",
            },
            {
              id: "705",
              title: "工矿企业",
              path: "/basics/industryMines",
            },
            {
              id: "706",
              title: "商场",
              path: "/basics/market",
            },
            {
              id: "707",
              title: "山洪沟",
              path: "/basics/mountainTorrentsDitch",
            },
            {
              id: "708",
              title: "办公场所",
              path: "/basics/officeSpace",
            },
            {
              id: "709",
              title: "发布设施信息",
              path: "/basics/publishingEquipment",
            },
            {
              id: "710",
              title: "应急避难所",
              path: "/basics/refuge",
            },
            {
              id: "711",
              title: "山塘水库",
              path: "/basics/reservoir",
            },
            {
              id: "712",
              title: "中小河流",
              path: "/basics/rivers",
            },
            {
              id: "713",
              title: "旅游景区",
              path: "/basics/scenicSpot",
            },
            {
              id: "714",
              title: "中小学校",
              path: "/basics/school",
            },
            {
              id: "715",
              title: "广场",
              path: "/basics/square",
            },
            {
              id: "716",
              title: "车站",
              path: "/basics/station",
            },
            {
              id: "717",
              title: "应急物资",
              path: "/basics/supplies",
            },
            {
              id: "718",
              title: "城镇易涝点",
              path: "/basics/waterlogging",
            },
            {
              id: "719",
              title: "历史灾情",
              path: "/basics/historicalDisasters",
            },
            {
              id: "720",
              title: "历史森林火灾",
              path: "/basics/forestFire",
            },
            {
              id: "721",
              title: "滑坡灾害损失",
              path: "/basics/landslide",
            },
            {
              id: "723",
              title: "泥石流损失",
              path: "/basics/debrisFlow",
            },
            {
              id: "724",
              title: "山洪灾情详细",
              path: "/basics/detailsGullyFloods",
            },
            {
              id: "725",
              title: "河洪灾情损失",
              path: "/basics/riverLoss",
            },
            {
              id: "726",
              title: "山洪灾情损失",
              path: "/basics/gullyFloodLoss",
            },
            {
              id: "727",
              title: "河流灾害损失",
              path: "/basics/riverDetails",
            },
          ],
        },
        {
          id: 8,
          title: '风险普查',
          path: '/riskSurvey',
          icon: 'icon-collection',
          children: [
            {
              id: 81,
              title: '风险预估',
              path: '/riskSurvey/predict',
              children: [
                {
                  id: '8101',
                  title: '雷达监测',
                  path: '/riskSurvey/predict/radar',
                },
                {
                  id: '8102',
                  title: '卫星监测',
                  path: '/riskSurvey/predict/cloud',
                },
                {
                  id: '8103',
                  title: '数据监测',
                  path: '/riskSurvey/predict/live',
                },
                {
                  id: '8104',
                  title: '预估分析图',
                  path: '/riskSurvey/predict/analysis',
                },
                {
                  id: '8105',
                  title: '预估分析报告',
                  path: '/riskSurvey/predict/report',
                },
              ]
            },
             {
              id: 82,
              title: '灾害研判',
              path: '/riskSurvey/judge',

            },
            {
              id: 83,
              title: '灾害评估',
              path: '/riskSurvey/assess',
              children: [
                {
                  id: 8301,
                  title: '数据录入',
                  path: '/riskSurvey/assess/dataEntry',
                  children: [
                    {
                      id: 830101,
                      title: '暴雨',
                      path: '/riskSurvey/assess/dataEntry/rain'
                    },
                    {
                      id: 830102,
                      title: '干旱',
                      path: '/riskSurvey/assess/dataEntry/drought'
                    },
                    {
                      id: 830103,
                      title: '高温',
                      path: '/riskSurvey/assess/dataEntry/highTem'
                    },
                    {
                      id: 830104,
                      title: '低温',
                      path: '/riskSurvey/assess/dataEntry/lowTem'
                    },
                    {
                      id: 830105,
                      title: '大风',
                      path: '/riskSurvey/assess/dataEntry/gale'
                    },
                    {
                      id: 830106,
                      title: '冰雹',
                      path: '/riskSurvey/assess/dataEntry/hail'
                    },
                    {
                      id: 830107,
                      title: '雪灾',
                      path: '/riskSurvey/assess/dataEntry/snowstorm'
                    },
                    {
                      id: 830108,
                      title: '雷电',
                      path: '/riskSurvey/assess/dataEntry/thunder'
                    },
                  ]
                },
                {
                  id: 8302,
                  title: '灾害风险区划图',
                  path: '/riskSurvey/assess/plan',
                },
                {
                  id: 8303,
                  title: '评估分析报告',
                  path: '/riskSurvey/assess/reports'
                }
              ]
            },

          ]
        },
        {
          id: "9",
          title: "阈值管理",
          path: "/alarm",
          icon: "icon-collection",
          children: [
            {
              id: "90",
              title: "要素管理",
              path: "/alarm/weatherConstituent",
            },
            {
              id: "91",
              title: "人员管理",
              path: "/alarm/personnel",
            },
            {
              id: "92",
              title: "阈值配置",
              path: "/alarm/alarm",
            },
            {
              id: "93",
              title: "发送详情",
              path: "/alarm/particulars",
            },
          ],
        },
        // {
        //   id:'10',
        //   title:'智慧气象',
        //   icon:'icon-collection',
        //   path:'/smartWeather/agriculture',
        //   children:[
        //     {
        //       id:'101',
        //       title:'智慧为农',
        //       path:'/smartWeather/agriculture/agrometeorolog'
        //       // path:'/smartWeather/agriculture/agrometeorolog/crops'
        //     },
        //   ]
        // },
        {
          id: "10",
          title: "智慧为农",
          icon: "icon-collection",
          path: "/smartWeather/agriculture/agrometeorolog",
          children: [
            {
              id: "101",
              title: "农气指标库",
              path: "/smartWeather/agriculture/agrometeorolog/crops",
              // path:'/smartWeather/agriculture/agrometeorolog/crops'
            },
            {
              id: "101",
              title: "阈值配置",
              path: "/smartWeather/agriculture/threshold/staff",
              // path:'/smartWeather/agriculture/agrometeorolog/crops'
            },
          ],
        },
        {
          id: "11",
          title: "气候诊断基本分析",
          icon: "icon-collection",
          path: "/fundamental-analysis",
          children: [
            {
              id: "110",
              title: "气象资料",
              path: "/fundamental-analysis/composite-analysis",
            },
            {
              id: "111",
              title: "大气环流",
              path: "/fundamental-analysis/eof-element",
            },
            {
              id:'112',
              title: '海温场',
              path:'/fundamental-analysis/sst',
            },
            {
              id:'113',
              title:'气候系统监测指数',
              path:'/fundamental-analysis/index-number'
            }
          ],
        },
        {
          id: "12",
          title: "人工智能",
          icon: "icon-collection",
          path: "/artificial-intelligence",
          children: [
            {
              id: "120",
              title: "最优推荐",
              path: "/artificial-intelligence/optimal",
            },
            {
              id: "121",
              title: "决策树",
              path: "/artificial-intelligence/decision",
            },
            {
              id:'122',
              title: '时间序列',
              path:'/artificial-intelligence/series',
            },
            {
              id:'123',
              title:'其他算法',
              path:'/artificial-intelligence/other'
            },
            {
              id:'124',
              title:'相似年份',
              path:'/artificial-intelligence/resemble'
            }
          ],
        },
        {
          id: "13",
          title: "采集管理",
          icon: "icon-collection",
          path: "/collect",
          children: [
            {
              id: "130",
              title: "数据采集",
              path: "/collect/datacollect",
            },
            {
              id: "131",
              title: "采集监控",
              path: "/collect/monitor",
            },
            {
              id:'132',
              title: '数据订正',
              path:'/collect/revision',
            },
            {
              id:'133',
              title:'数据文件',
              path:'/collect/read'
            },
            {
              id:'134',
              title:'历史数据',
              path:'/collect/historylist'
            }
          ],
        },
      ],
      userName: "",
    };
  },

  methods: {
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {},
    onGetMenu(item) {
      // this.selMenuData = item
      // this.$router.push({
      // 	path: item.path,
      // 	query: {
      // 		t: new Date().getTime()
      // 	}
      // })
    },
    //  获取用户信息
    gtUserInfo() {
      let userInfo = JSON.parse(sessionStorage.getItem("user"));
      this.userName = userInfo.name;
    },
    // 退出
    logout() {
      sessionStorage.clear();
      this.$router.go(0);
    },
  },
  mounted() {
    this.gtUserInfo();
  },
};
</script>

<style lang="scss">
.elHeader {
  height: 90px !important;
  background-color: #011c3a;
  border-bottom: 1px solid #1e1f33;
  color: #f3b01e;
  display: flex;
  justify-content: space-between;
  color: #fff;
  .projectName {
    height: 90px;
    font-size: 36px;
    line-height: 90px;
    font-weight: 600;
  }
  .userInfo {
    display: flex;
    font-size: 16px;
    align-items: center;
    > div {
      margin: 0 10px;
    }
    .loginOut {
      &:hover {
        cursor: pointer;
      }
    }
    .iNotice {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
.menuList {
  width: 220px !important;
  height: calc(100vh - 90px);
  // height:100vh;
  // overflow: hidden;
  overflow: auto;
  background-color: #011c3a;
  .el-menu {
    border-right: none;
  }
}

.menuList::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 8px;
  scrollbar-arrow-color: red;
}

.menuList::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 6px;
  -webkit-box-shadow: inset 0 0 6px #06395b;
  background: #3886b9;
  scrollbar-arrow-color: red;
}

.menuList::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 6px #06395b;
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}

.icontainer {
  overflow: auto;
  height: calc(100vh - 90px) !important;
}

.icontainer::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 8px;
  scrollbar-arrow-color: red;
}
.icontainer::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 6px;
  -webkit-box-shadow: inset 0 0 6px #06395b;
  background: #05426b;
  scrollbar-arrow-color: red;
}
.icontainer::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 6px #06395b;
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>
