import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import module from '../pages/module'
import bigData from "../components/bigData/bigData"
import alli from "../components/anli/alli"
import allimo from "../components/anli/allimo"
import anlipc from "../components/anli/anlipc"
import moNav from "../components/module/moduleRight/moNav"
import teams from "../components/module/teams/teams"
import Banner from "../components/module/banner/Banner";
import Bread from "../components/module/bread/Bread";
import Table from "../components/module/table/Table";
import Buttonn from "../components/module/button/Buttonn";
import Radio from "../components/module/radio/Radio";
import True from "../components/module/true/True";
import Colors from "../components/module/color/Colors";
import Tooltip from "../components/module/tooltip/Tooltip";
import Tree from "../components/module/tree/Tree";
import Pog from "../components/module/pog/Pog";
import login from "../components/index/login"
import jieshao from "../components/module/jieshao/jieshao"
import easy from "../components/module/jieshao/easy"

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      redirect: "/index"
    },
    {
      path:"/index",
      component:index
    },
      {
          path:"/login",
          component:login
      },
      {
          path:"/module",
          component:module,
          redirect:"/module/jieshao",
          children:[
              {
                  path:"moNav",
                  component:moNav
              },
              {
                  path:"banner",
                  component:Banner
              },
              {
                  path:"bread",
                  component:Bread
              },
              {
                  path:"table",
                  component:Table
              },
              {
                  path:"buttonn",
                  component:Buttonn
              },
              {
                  path:"radio",
                  component:Radio
              },
              {
                  path:"true",
                  component:True
              },
              {
                  path:"color",
                  component:Colors
              },
              {
                  path: "tooltip",
                  component: Tooltip
              },
              {
                  path: "tree",
                  component: Tree
              },
              {
                  path: "pog",
                  component: Pog
              },
              {
                  path:"teams",
                  component:teams
              },
              {
                  path:"jieshao",
                  component:jieshao
              },
              {
                  path:"easy",
                  component:easy
              }
          ]
      },
    {
        path:"/bigData",
        component:bigData
    },
    {
        path:"/anli",
        component:alli,
        children:[
            {
                path:"anlimo",
                component:allimo
            },
            {
                path:"anlipc",
                component:anlipc
            },
            {
                path:"/anli",
                redirect:"/anli/anlimo"
            }
        ]
    }

  ]
})
