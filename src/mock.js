const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
const domain = 'http://mockjs.com/api' // 定义默认域名，随便写
const code = 200 // 返回的状态码
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
//声明对象
const mock = new MockAdapter(axios);
// 随机生成文章数据
// const postData = req => {
  
//   console.log(req) // 请求体，用于获取参数

//   let posts = [] // 用于存放文章数据的数组
  
//   for (let i = 0; i < 10; i++) {
//     let post = {
//       title: Random.csentence(10, 25), // 随机生成长度为10-25的标题
//       icon: Random.dataImage('250x250', '文章icon'), // 随机生成大小为250x250的图片链接
//       author: Random.cname(), // 随机生成名字
//       date: Random.date() + ' ' + Random.time() // 随机生成年月日 + 时间
//     }

//     posts.push(post)
//   }
  
//   // 返回状态码和文章数据posts
//   return {
//     code,
//     posts
//   }
// }

// 定义请求链接，类型，还有返回数据
// Mock.mock(`${domain}/posts`, 'get', {
//     code: 200,
//     result:[
//         {
//             name: "tom",
//             age: 18,
//             address: "北京市海淀区西二旗"
//         },
//         {
//             name: "luci",
//             age: 19,
//             address:"北京市海淀中关村"
//         },
//         {
//             name: "lua",
//             age: 16,
//             address:"北京市海淀中关村"
//         },
//         {
//             name: "lucis",
//             age: 11,
//             address:"北京市海淀中关村"
//         }
//     ]
// });
mock.onGet('/dashboard/getWidgetList.do').reply(function(config) {
    return [200, [{
      "id": 21,
      "userId": "1",
      "name": "表格",
      "categoryName": "xuce",
      "userName": "Administrator",
      "loginName": "admin",
      "createTime": "2018-10-11 14:41:53.0",
      "updateTime": "2018-10-11 14:41:53.0",
      "data": {
        "datasetId": 2,
        "config": {
          "chart_type": "table",
          "keys": [{
            "col": "SALES_DISTRICT",
            "level": "Geo",
            "values": [],
            "alias": "district",
            "sort": "asc",
            "id": "b0c8d29b-9f53-41d4-95b7-132f1e4c876b",
            "type": "eq"
          }],
          "values": [{
            "name": "",
            "cols": [{
              "col": "store_cost",
              "aggregate_type": "sum"
            }, {
              "col": "store_sales",
              "aggregate_type": "sum"
            }]
          }],
          "groups": [{
            "col": "SALES_COUNTRY",
            "level": "Geo",
            "values": [],
            "alias": "country",
            "sort": "asc",
            "id": "4abf2747-3024-44bc-88ef-3cc2643d2b09",
            "type": "eq"
          }, {
            "col": "SALES_REGION",
            "level": "Geo",
            "values": [],
            "alias": "region",
            "sort": "asc",
            "id": "9f85f220-3728-468c-8e0e-a5e88a3a9b23",
            "type": "eq"
          }],
          "filters": [],
          "option": {}
        },
        "expressions": [],
        "filterGroups": []
      },
      "edit": false,
      "delete": false
    }, {
      "id": 20,
      "userId": "1",
      "name": "",
      "categoryName": "xuce",
      "userName": "Administrator",
      "loginName": "admin",
      "createTime": "2018-10-11 13:58:12.0",
      "updateTime": "2018-10-15 11:34:53.0",
      "data": {
        "datasetId": "",
        "config": {
          "drawBy": "column",
          "chart_type": "searchfield",
          "keys": [],
          "values": [{
            "name": "",
            "cols": []
          }],
          "groups": [],
          "filters": [],
          "option": {
            "legendShow": true
          }
        },
        "expressions": [],
        "filterGroups": []
      },
      "edit": false,
      "delete": false
    }]]
  });