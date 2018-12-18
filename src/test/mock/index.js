
import Vue from "Vue";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
//声明对象
const mock = new MockAdapter(axios);
/********************************************数据源********************************************/

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

mock.onPost('/dashboard/saveNewWidget.do').reply(function(config) {
  return [200, { "status": "1", "msg": "success", "id": 20 }];
})

mock.onPost('/dashboard/updateWidget.do').reply(function(config) {
  return [200, { "status": "1", "msg": "success", "id": null }];
})

mock.onGet('/dashboard/getDimensionValues.do').reply(function(config) {
  return [200, {
    "columnList": [{
      "index": 0,
      "aggType": null,
      "name": "SALES_COUNTRY"
    }, {
      "index": 1,
      "aggType": null,
      "name": "SALES_REGION"
    }, {
      "index": 2,
      "aggType": null,
      "name": "SALES_DISTRICT"
    }, {
      "index": 3,
      "aggType": "sum",
      "name": "store_cost"
    }, {
      "index": 4,
      "aggType": "sum",
      "name": "store_sales"
    }],
    "data": [
      ["Canada", "Canada West", "Vancouver", "6028.6582", "14984.2800"],
      ["Canada", "Canada West", "Victoria", "1640.3650", "4066.9000"],
      ["Mexico", "Mexico Central", "Hidalgo", "8074.8454", "20085.1200"],
      ["Mexico", "Mexico Central", "Mexico City", "7820.3085", "19452.8700"],
      ["Mexico", "Mexico Central", "Orizaba", "3955.6994", "9813.8700"],
      ["Mexico", "Mexico South", "Marida", "6044.6266", "15062.7300"],
      ["Mexico", "Mexico West", "Acapulco", "4001.0937", "9986.7300"],
      ["Mexico", "Mexico West", "Guadalajara", "334.7951", "842.2900"],
      ["USA", "North West", "Bellingham", "712.0415", "1774.1600"],
      ["USA", "North West", "Bremerton", "8463.2610", "21236.7900"],
      ["USA", "North West", "Portland", "8613.1918", "21593.1000"],
      ["USA", "North West", "Salem", "12754.3643", "32038.5800"],
      ["USA", "North West", "Seattle", "8499.0944", "21342.3600"],
      ["USA", "North West", "Spokane", "8426.4753", "20975.1800"],
      ["USA", "North West", "Tacoma", "11863.3647", "29757.4300"],
      ["USA", "North West", "Walla Walla", "762.6192", "1935.5200"],
      ["USA", "North West", "Yakima", "3449.7637", "8674.2500"],
      ["USA", "South West", "Los Angeles", "19988.4509", "50013.4900"],
      ["USA", "South West", "San Diego", "8595.7787", "21567.1700"]
    ]
  }];
});

/**
 * 获取JDBC数据源类型
 * @return {[type]}         [description]
 */
mock.onGet('/databoard/getDatasourceParams.do?type=jdbc').reply(function(config) {
  return [200, [{ "name": "driver", "options": ["N/A"], "checked": false, "label": "{{'DATAPROVIDER.JDBC.DRIVER'|translate}} *", "placeholder": "", "type": "input", "value": "", "required": true }, { "name": "jdbcurl", "options": ["N/A"], "checked": false, "label": "{{'DATAPROVIDER.JDBC.JDBCURL'|translate}} *", "placeholder": "", "type": "input", "value": "", "required": true }, { "name": "username", "options": ["N/A"], "checked": false, "label": "{{'DATAPROVIDER.JDBC.USERNAME'|translate}} *", "placeholder": "", "type": "input", "value": "", "required": true }, { "name": "password", "options": ["N/A"], "checked": false, "label": "{{'DATAPROVIDER.JDBC.PASSWORD'|translate}}", "placeholder": "", "type": "password", "value": "", "required": false }, { "name": "pooled", "options": ["N/A"], "checked": true, "label": "{{'DATAPROVIDER.POOLEDCONNECTION'|translate}}", "placeholder": "", "type": "checkbox", "value": "", "required": false }, { "name": "aggregateProvider", "options": ["N/A"], "checked": true, "label": "{{'DATAPROVIDER.AGGREGATABLE_PROVIDER'|translate}}", "placeholder": "", "type": "checkbox", "value": "", "required": false }]];
});
/**
 * 获取kylin数据源类型
 * @return {[type]}         [description]
 */
mock.onGet('/databoard/getDatasourceParams.do?type=kylin').reply(function(config) {
  return [200, [{ "name": "serverIp", "options": ["N/A"], "checked": false, "label": "Kylin Server *", "placeholder": "domain:port", "type": "input", "value": "domain:port", "required": true }, { "name": "username", "options": ["N/A"], "checked": false, "label": "User Name (for Kylin Server) *", "placeholder": "", "type": "input", "value": "", "required": true }, { "name": "password", "options": ["N/A"], "checked": false, "label": "Password", "placeholder": "", "type": "password", "value": "", "required": false }]];
});
/**
 * 保存
 * @param  {[type]} config) {}          [description]
 * @return {[type]}         [description]
 */
mock.onPost('/databoard/saveNewDatasource.do').reply(function(config) {
  return [200, { "status": "1", "msg": "success", "id": null }];
});
/**
 * 修改数据集
 * @param  {[type]} config) {             return [200, { "status": "1", "msg": "success", "id": null }];} [description]
 * @return {[type]}         [description]
 */
mock.onGet('/databoard/updateDatasource.do').reply(function(config) {
  return [200, { "status": "1", "msg": "success", "id": null }];
});
/**
 * 删除数据源
 * @param  {[type]} config) {             return [200, {"status":"1","msg":"success","id":null}];} [description]
 * @return {[type]}         [description]
 */
mock.onDelete('/databoard/deleteDatasource.do').reply(function(config) {
  return [200, { "status": "1", "msg": "success", "id": null }];
});
/**
 * 获取列表
 * @return {[type]}         [description]
 */
mock.onGet('/databoard/getDatasourceList.do').reply(function(config) {
  return [200, [{ "id": 2, "userId": "1", "name": "FoodMart_Sample", "categoryName": "Default", "userName": "Administrator", "loginName": "admin", "createTime": "2018-09-20 09:39:02.0", "updateTime": "2018-09-25 17:10:24.0", "data": { "schema": { "measure": [{ "column": "store_cost", "id": "da02ba11-30d0-4b03-9b12-5b19edc5d7c6", "type": "column" }, { "column": "store_sales", "id": "12b42233-b0e7-418f-8f68-d36d227d41d1", "type": "column" }, { "column": "unit_sales", "id": "1f429f76-cbf9-4391-80a2-4d4d3b449a66", "type": "column" }, { "column": "the_date", "id": "ba7bcba4-59b7-452e-b3b4-1329a65b5158", "type": "column" }, { "column": "gender", "id": "6126fe19-f123-42d6-be3e-ce0bcac9b44d", "type": "column" }], "dimension": [{ "columns": [{ "column": "SALES_COUNTRY", "alias": "country", "id": "4abf2747-3024-44bc-88ef-3cc2643d2b09", "type": "column" }, { "column": "SALES_REGION", "alias": "region", "id": "9f85f220-3728-468c-8e0e-a5e88a3a9b23", "type": "column" }, { "column": "SALES_DISTRICT", "alias": "district", "id": "b0c8d29b-9f53-41d4-95b7-132f1e4c876b", "type": "column" }], "alias": "Geo", "id": "618953e0-d71c-41a4-8dee-a6748fe92bbd", "type": "level" }, { "columns": [{ "column": "the_year", "alias": "year", "id": "a8d4b079-5074-4ddc-9379-074dadc76c90", "type": "column" }, { "column": "month_of_year", "alias": "month", "id": "f3e89458-0931-4820-ba45-d2c02b2e6bd7", "type": "column" }, { "column": "day_of_month", "alias": "day", "id": "7cb06baf-c95d-4da3-a47d-74c70f068fc9", "type": "column" }], "alias": "Date", "id": "6a82cfd1-97a0-4118-b000-6f69c227959d", "type": "level" }] }, "datasource": 1, "query": { "sql": "SELECT    \r\n       b.the_year + 5 AS the_year, b.month_of_year, b.day_of_month,\r\n       date_add(b.the_date, interval 5 year) AS the_date,\r\n       r.SALES_DISTRICT, r.SALES_REGION, r.SALES_COUNTRY,\r\n       d.yearly_income, d.total_children, d.member_card, d.num_cars_owned, d.gender,\r\n       a.store_sales, a.store_cost, a.unit_sales\r\n  FROM foodmart2.sales_fact_sample a\r\n  JOIN foodmart2.time_by_day b ON a.time_id = b.time_id\r\n  JOIN foodmart2.store c ON a.store_id = c.store_id\r\n  JOIN foodmart2.region r ON c.REGION_ID = r.REGION_ID\r\n  JOIN foodmart2.customer d ON a.CUSTOMER_ID = d.CUSTOMER_ID\r\n WHERE SALES_COUNTRY IS NOT NULL" }, "filters": [{ "filters": [{ "col": "the_date", "values": ["{now('M', -2, 'yyyy-MM-dd')}"], "type": ">" }], "id": "405f1bd3-758b-4025-b6c1-e3807a3ab000", "group": "last6months" }, { "filters": [{ "col": "day_of_month", "values": [], "type": "=" }, { "col": "SALES_COUNTRY", "values": [], "type": "=" }], "id": "ba02c07f-cebc-4afc-8318-98479b89564f", "group": "1212" }, { "filters": [{ "col": "day_of_month", "values": [], "type": "=" }, { "col": "day_of_month", "values": [], "type": "=" }, { "col": "SALES_DISTRICT", "values": [], "type": "=" }, { "col": "day_of_month", "values": [], "type": "=" }], "id": "ae4424f8-50cf-4b05-9ca5-fc9e59fdcba9", "group": "2121" }], "expressions": [{ "alias": "UnitSales", "id": "1810a1d1-0fc3-455f-a9bc-43aaaac26eb9", "type": "exp", "exp": "sum(store_sales)/sum(unit_sales)" }, { "alias": "aaa", "id": "bdeda754-89e1-49ac-8340-195cfc52dd60", "type": "exp", "exp": "count(SALES_REGION)" }] }, "edit": false, "delete": false }, { "id": 7, "userId": "1", "name": "Map_Sample", "categoryName": "Default Category", "userName": "Administrator", "loginName": "admin", "createTime": "2018-09-20 09:39:02.0", "updateTime": "2018-09-25 11:12:14.0", "data": { "schema": { "measure": [{ "column": "cnt", "id": "f35c040b-4410-429a-ba69-260af846b52f", "type": "column" }], "dimension": [{ "columns": [{ "column": "province", "id": "983188c3-ade1-48ee-8d33-53239ae271bf", "type": "column" }, { "column": "city", "id": "0526c056-c57c-486f-aa00-525f74d93c3e", "type": "column" }, { "column": "district", "id": "f25bf8d7-4789-4252-98b0-b3a5679f6548", "type": "column" }], "alias": "GEO", "id": "a89157b2-0bfa-4221-90c3-09cd44a5be39", "type": "level" }, { "column": "wind_level", "id": "81955bba-5745-42dc-8e7a-d0c6db31c858", "type": "column" }, { "column": "wind_direct", "id": "95cfeadc-1562-4577-a638-452d778e2f20", "type": "column" }] }, "selects": ["city", "cnt", "district", "max_temp", "province", "wind_direct", "wind_level"], "datasource": 1, "query": { "sql": "SELECT * FROM foodmart2.map_data_sample;" }, "filters": [], "expressions": [{ "alias": "cc", "id": "d26880aa-ea42-454b-97c0-511f34791889", "type": "exp", "exp": "count(city)" }] }, "edit": false, "delete": false }]];
});
/**
 * 获取列表
 * @return {[type]}         [description]
 */
mock.onGet('/databoard/test.do').reply(function(config) {
  return [200, { "status": "2", "msg": "ERROR:Access denied for user 'root'@'192.168.1.23' (using password: NO)", "id": null }];
});
/********************************************数据集********************************************/
/**
 * 获取列表
 * @return {[type]}         [description]
 */
mock.onGet('/databoard/getDatasetList.do').reply(function(config) {
  return [200, [{ "id": 2, "userId": "1", "name": "FoodMart_Sample", "categoryName": "Default", "userName": "Administrator", "loginName": "admin", "createTime": "2018-09-20 09:39:02.0", "updateTime": "2018-09-25 17:10:24.0", "data": { "schema": { "measure": [{ "column": "store_cost", "id": "da02ba11-30d0-4b03-9b12-5b19edc5d7c6", "type": "column" }, { "column": "store_sales", "id": "12b42233-b0e7-418f-8f68-d36d227d41d1", "type": "column" }, { "column": "unit_sales", "id": "1f429f76-cbf9-4391-80a2-4d4d3b449a66", "type": "column" }, { "column": "the_date", "id": "ba7bcba4-59b7-452e-b3b4-1329a65b5158", "type": "column" }, { "column": "gender", "id": "6126fe19-f123-42d6-be3e-ce0bcac9b44d", "type": "column" }], "dimension": [{ "columns": [{ "column": "SALES_COUNTRY", "alias": "country", "id": "4abf2747-3024-44bc-88ef-3cc2643d2b09", "type": "column" }, { "column": "SALES_REGION", "alias": "region", "id": "9f85f220-3728-468c-8e0e-a5e88a3a9b23", "type": "column" }, { "column": "SALES_DISTRICT", "alias": "district", "id": "b0c8d29b-9f53-41d4-95b7-132f1e4c876b", "type": "column" }], "alias": "Geo", "id": "618953e0-d71c-41a4-8dee-a6748fe92bbd", "type": "level" }, { "columns": [{ "column": "the_year", "alias": "year", "id": "a8d4b079-5074-4ddc-9379-074dadc76c90", "type": "column" }, { "column": "month_of_year", "alias": "month", "id": "f3e89458-0931-4820-ba45-d2c02b2e6bd7", "type": "column" }, { "column": "day_of_month", "alias": "day", "id": "7cb06baf-c95d-4da3-a47d-74c70f068fc9", "type": "column" }], "alias": "Date", "id": "6a82cfd1-97a0-4118-b000-6f69c227959d", "type": "level" }] }, "datasource": 1, "query": { "sql": "SELECT    \r\n       b.the_year + 5 AS the_year, b.month_of_year, b.day_of_month,\r\n       date_add(b.the_date, interval 5 year) AS the_date,\r\n       r.SALES_DISTRICT, r.SALES_REGION, r.SALES_COUNTRY,\r\n       d.yearly_income, d.total_children, d.member_card, d.num_cars_owned, d.gender,\r\n       a.store_sales, a.store_cost, a.unit_sales\r\n  FROM foodmart2.sales_fact_sample a\r\n  JOIN foodmart2.time_by_day b ON a.time_id = b.time_id\r\n  JOIN foodmart2.store c ON a.store_id = c.store_id\r\n  JOIN foodmart2.region r ON c.REGION_ID = r.REGION_ID\r\n  JOIN foodmart2.customer d ON a.CUSTOMER_ID = d.CUSTOMER_ID\r\n WHERE SALES_COUNTRY IS NOT NULL" }, "filters": [{ "filters": [{ "col": "the_date", "values": ["{now('M', -2, 'yyyy-MM-dd')}"], "type": ">" }], "id": "405f1bd3-758b-4025-b6c1-e3807a3ab000", "group": "last6months" }, { "filters": [{ "col": "day_of_month", "values": [], "type": "=" }, { "col": "SALES_COUNTRY", "values": [], "type": "=" }], "id": "ba02c07f-cebc-4afc-8318-98479b89564f", "group": "1212" }, { "filters": [{ "col": "day_of_month", "values": [], "type": "=" }, { "col": "day_of_month", "values": [], "type": "=" }, { "col": "SALES_DISTRICT", "values": [], "type": "=" }, { "col": "day_of_month", "values": [], "type": "=" }], "id": "ae4424f8-50cf-4b05-9ca5-fc9e59fdcba9", "group": "2121" }], "expressions": [{ "alias": "UnitSales", "id": "1810a1d1-0fc3-455f-a9bc-43aaaac26eb9", "type": "exp", "exp": "sum(store_sales)/sum(unit_sales)" }, { "alias": "aaa", "id": "bdeda754-89e1-49ac-8340-195cfc52dd60", "type": "exp", "exp": "count(SALES_REGION)" }] }, "edit": false, "delete": false }, { "id": 7, "userId": "1", "name": "Map_Sample", "categoryName": "Default Category", "userName": "Administrator", "loginName": "admin", "createTime": "2018-09-20 09:39:02.0", "updateTime": "2018-09-25 11:12:14.0", "data": { "schema": { "measure": [{ "column": "cnt", "id": "f35c040b-4410-429a-ba69-260af846b52f", "type": "column" }], "dimension": [{ "columns": [{ "column": "province", "id": "983188c3-ade1-48ee-8d33-53239ae271bf", "type": "column" }, { "column": "city", "id": "0526c056-c57c-486f-aa00-525f74d93c3e", "type": "column" }, { "column": "district", "id": "f25bf8d7-4789-4252-98b0-b3a5679f6548", "type": "column" }], "alias": "GEO", "id": "a89157b2-0bfa-4221-90c3-09cd44a5be39", "type": "level" }, { "column": "wind_level", "id": "81955bba-5745-42dc-8e7a-d0c6db31c858", "type": "column" }, { "column": "wind_direct", "id": "95cfeadc-1562-4577-a638-452d778e2f20", "type": "column" }] }, "selects": ["city", "cnt", "district", "max_temp", "province", "wind_direct", "wind_level"], "datasource": 1, "query": { "sql": "SELECT * FROM foodmart2.map_data_sample;" }, "filters": [], "expressions": [{ "alias": "cc", "id": "d26880aa-ea42-454b-97c0-511f34791889", "type": "exp", "exp": "count(city)" }] }, "edit": false, "delete": false }]];
  //return [200, [{"id":15,"userId":"1","name":"cxy","categoryName":"????","userName":"Administrator","loginName":"admin","createTime":"2018-09-04 15:32:27.0","updateTime":"2018-09-14 14:41:09.0","data":{"schema":{"measure":[{"column":"CODE_","id":"fc49dcc7-be44-4abe-9c82-18e8c1b2428a","type":"column"},{"column":"DUTY_ID","id":"1f90ca58-c942-4ed4-a5ad-5bd85b83818a","type":"column"},{"column":"GUID_","id":"4a59b0b8-5b14-4329-809f-fc147a2a04a6","type":"column"}],"dimension":[{"column":"AREA_ID","id":"3f00639a-67c2-4b26-9b37-18e37358f204","type":"column"},{"column":"BIRTHDAY_","id":"53c261f1-2761-4d63-ad39-7f9b34068f4a","type":"column"},{"column":"CORP_ID","id":"a2276257-4a3e-4d68-9486-d8dae09bc755","type":"column"},{"column":"OBJ_CAPTION","id":"a80a1f2a-5b96-4205-b44d-d443b84578ab","type":"column"}]},"selects":["AREA_ID","BIRTHDAY_","CLS_ID","CODE_","COMPANY_ID","COMPANY_NAME","COORDINATE_","CORP_ID","DEPT_ID","DEPT_NAME","DLRQ","DN","DUTY_ID","DUTY_NAME","EMAIL","E_MAIL","FLOWSTATUS","GUID","GUID_","IDENTITY_CARD","LAT","LOGIN_ID","LOGO_ID","LOGO_PASS","LON","MOBILE_PHONE","NAME_","OBJ_CAPTION","OBJ_DISPIDX","ORDER_NUM","PASSWD_","PERS_ID","PERS_JOBID","PERS_NAME","PERS_NOTE","PHONE_","PORTAL_ID","SEX_","SFDL","STATUS_","USER_TYPE"],"datasource":3,"query":{"sql":"select * from us_sys.tb_sys_person"},"filters":[{"filters":[{"col":"CODE_","values":["{now('M', -1, 'yyyy-MM-dd')}"],"type":"="}],"id":"8ac27254-ebfe-46aa-a393-6ce5ecabddd9","group":"aa"},{"filters":[{"col":"DUTY_ID","values":["{now('M', -1, 'yyyy-MM-dd')}","{now('D', -10, 'timestamp')}"],"type":"(a,b]"}],"id":"ac26aa19-9b3f-42b4-bdfb-a7de9cd8c6c7","group":"bb"}],"expressions":[]},"edit":false,"delete":false},{"id":16,"userId":"1","name":"cxy11","categoryName":"????","userName":"Administrator","loginName":"admin","createTime":"2018-09-04 15:33:33.0","updateTime":"2018-09-04 15:33:57.0","data":{"schema":{"measure":[{"column":"CODE_","id":"fc49dcc7-be44-4abe-9c82-18e8c1b2428a","type":"column"},{"column":"DUTY_ID","id":"1f90ca58-c942-4ed4-a5ad-5bd85b83818a","type":"column"},{"column":"GUID_","id":"4a59b0b8-5b14-4329-809f-fc147a2a04a6","type":"column"}],"dimension":[{"column":"AREA_ID","id":"3f00639a-67c2-4b26-9b37-18e37358f204","type":"column"},{"column":"BIRTHDAY_","id":"53c261f1-2761-4d63-ad39-7f9b34068f4a","type":"column"},{"column":"CORP_ID","id":"a2276257-4a3e-4d68-9486-d8dae09bc755","type":"column"},{"column":"OBJ_CAPTION","id":"a80a1f2a-5b96-4205-b44d-d443b84578ab","type":"column"}]},"selects":["AREA_ID","BIRTHDAY_","CLS_ID","CODE_","COMPANY_ID","COMPANY_NAME","COORDINATE_","CORP_ID","DEPT_ID","DEPT_NAME","DLRQ","DN","DUTY_ID","DUTY_NAME","EMAIL","E_MAIL","FLOWSTATUS","GUID","GUID_","IDENTITY_CARD","LAT","LOGIN_ID","LOGO_ID","LOGO_PASS","LON","MOBILE_PHONE","NAME_","OBJ_CAPTION","OBJ_DISPIDX","ORDER_NUM","PASSWD_","PERS_ID","PERS_JOBID","PERS_NAME","PERS_NOTE","PHONE_","PORTAL_ID","SEX_","SFDL","STATUS_","USER_TYPE"],"datasource":3,"query":{"sql":"select * from us_sys.tb_sys_person"},"filters":[],"expressions":[]},"edit":false,"delete":false},{"id":2,"userId":"1","name":"FoodMart_Sample","categoryName":"Default Category","userName":"Administrator","loginName":"admin","createTime":"2018-07-25 13:21:10.0","updateTime":"2018-09-13 14:17:24.0","data":{"schema":{"measure":[{"column":"store_cost","id":"da02ba11-30d0-4b03-9b12-5b19edc5d7c6","type":"column"},{"column":"store_sales","id":"12b42233-b0e7-418f-8f68-d36d227d41d1","type":"column"},{"column":"unit_sales","id":"1f429f76-cbf9-4391-80a2-4d4d3b449a66","type":"column"}],"dimension":[{"columns":[{"column":"SALES_COUNTRY","alias":"country","id":"4abf2747-3024-44bc-88ef-3cc2643d2b09","type":"column"},{"column":"SALES_REGION","alias":"region","id":"9f85f220-3728-468c-8e0e-a5e88a3a9b23","type":"column"},{"column":"SALES_DISTRICT","alias":"district","id":"b0c8d29b-9f53-41d4-95b7-132f1e4c876b","type":"column"}],"alias":"Geo","id":"618953e0-d71c-41a4-8dee-a6748fe92bbd","type":"level"},{"columns":[{"column":"the_year","alias":"year","id":"a8d4b079-5074-4ddc-9379-074dadc76c90","type":"column"},{"column":"month_of_year","alias":"month","id":"f3e89458-0931-4820-ba45-d2c02b2e6bd7","type":"column"},{"column":"day_of_month","alias":"day","id":"7cb06baf-c95d-4da3-a47d-74c70f068fc9","type":"column"},{"column":"the_date","id":"ba7bcba4-59b7-452e-b3b4-1329a65b5158","type":"column"}],"alias":"Date","id":"6a82cfd1-97a0-4118-b000-6f69c227959d","type":"level"},{"column":"gender","id":"6126fe19-f123-42d6-be3e-ce0bcac9b44d","type":"column"}]},"datasource":1,"query":{"sql":"SELECT    \r\n       b.the_year + 5 AS the_year, b.month_of_year, b.day_of_month,\r\n       date_add(b.the_date, interval 5 year) AS the_date,\r\n       r.SALES_DISTRICT, r.SALES_REGION, r.SALES_COUNTRY,\r\n       d.yearly_income, d.total_children, d.member_card, d.num_cars_owned, d.gender,\r\n       a.store_sales, a.store_cost, a.unit_sales\r\n  FROM foodmart2.sales_fact_sample a\r\n  JOIN foodmart2.time_by_day b ON a.time_id = b.time_id\r\n  JOIN foodmart2.store c ON a.store_id = c.store_id\r\n  JOIN foodmart2.region r ON c.REGION_ID = r.REGION_ID\r\n  JOIN foodmart2.customer d ON a.CUSTOMER_ID = d.CUSTOMER_ID\r\n WHERE SALES_COUNTRY IS NOT NULL"},"filters":[{"filters":[{"col":"the_date","values":["{now('M', -2, 'yyyy-MM-dd')}"],"type":">"}],"id":"405f1bd3-758b-4025-b6c1-e3807a3ab000","group":"last6months"}],"expressions":[{"alias":"UnitSales","id":"1810a1d1-0fc3-455f-a9bc-43aaaac26eb9","type":"exp","exp":"sum(store_sales)/sum(unit_sales)"},{"alias":"test","id":"7848a157-9fbd-48a2-9da8-369ffdd3e35d","type":"exp","exp":"store_sales/unit_sales"}]},"edit":false,"delete":false},{"id":10,"userId":"1","name":"manYi","categoryName":"????","userName":"Administrator","loginName":"admin","createTime":"2018-08-15 15:46:39.0","updateTime":"2018-09-17 14:05:45.0","data":{"schema":{"measure":[{"column":"help_category_id","id":"1d64ff25-025e-4a8d-a879-4b6916ad6b3c","type":"column"}],"dimension":[{"columns":[{"column":"help_topic_id","id":"0b81ecc2-a3de-4b18-b25e-e07ce5bb37ff","type":"column"},{"column":"description","alias":"qqqq","id":"cefa3f03-a157-46a1-bc0a-006afbd420ae","type":"column"},{"column":"example","id":"721153ba-f106-4817-825a-474131f70abb","type":"column"},{"column":"name","id":"0e652326-b441-4836-92b6-b6bb6d4248c4","type":"column"}],"alias":"gruop1","id":"8b2ec081-a5b3-4eed-856e-a85f6c0cc2b3","type":"level"},{"columns":[],"alias":"group2","id":"974a128c-518d-413a-b5e9-0095eb9c9a51","type":"level"}]},"selects":["description","example","help_category_id","help_topic_id","name","url"],"datasource":4,"query":{"sql":"select * from help_topic"},"filters":[],"expressions":[{"alias":"test","id":"7c628c80-ef02-4e30-b98e-1098cf55ed26","type":"exp","exp":"sum(help_category_id)"},{"alias":"ttt","id":"0fc04387-3ee9-41b6-9939-b5cf185655c3","type":"exp","exp":"sum(help_topic_id)"}]},"edit":false,"delete":false},{"id":7,"userId":"1","name":"Map_Sample","categoryName":"Default Category","userName":"Administrator","loginName":"admin","createTime":"2018-07-25 13:21:10.0","updateTime":"2018-07-25 13:21:12.0","data":{"schema":{"measure":[{"column":"cnt","id":"f35c040b-4410-429a-ba69-260af846b52f","type":"column"}],"dimension":[{"columns":[{"column":"province","id":"983188c3-ade1-48ee-8d33-53239ae271bf","type":"column"},{"column":"city","id":"0526c056-c57c-486f-aa00-525f74d93c3e","type":"column"},{"column":"district","id":"f25bf8d7-4789-4252-98b0-b3a5679f6548","type":"column"}],"alias":"GEO","id":"a89157b2-0bfa-4221-90c3-09cd44a5be39","type":"level"},{"column":"wind_level","id":"81955bba-5745-42dc-8e7a-d0c6db31c858","type":"column"},{"column":"wind_direct","id":"95cfeadc-1562-4577-a638-452d778e2f20","type":"column"}]},"datasource":1,"query":{"sql":"SELECT * FROM foodmart2.map_data_sample;"},"filters":[],"expressions":[{"alias":"cc","id":"d26880aa-ea42-454b-97c0-511f34791889","type":"exp","exp":"count(city)"}]},"edit":false,"delete":false},{"id":9,"userId":"1","name":"PERSONS","categoryName":"????","userName":"Administrator","loginName":"admin","createTime":"2018-07-31 17:52:13.0","updateTime":"2018-09-13 15:23:41.0","data":{"schema":{"measure":[{"column":"PERS_NAME","id":"79a73f73-2e85-4e60-ab1c-81be4af77144","type":"column"},{"column":"SEX_","id":"1c8d677c-ee83-41c9-a911-b268e77e4159","type":"column"}],"dimension":[{"columns":[{"column":"DLRQ","alias":"qweqwe","id":"8c62f8c1-67cf-4f14-a424-534811f0668f","type":"column"},{"column":"DN","alias":"aaa","id":"b62f90b7-27bd-497c-9327-bd9e33677c88","type":"column"},{"column":"DLRQ","id":"bc368b9d-ef34-4cb1-b2f2-5465369a28d6","type":"column"},{"column":"DUTY_ID","id":"b6dce98b-c651-4d35-8ec6-54367e941c38","type":"column"},{"column":"E_MAIL","alias":"aaaa","id":"a217a60b-f89e-403c-a4cb-5c88f4a3c1ad","type":"column"},{"column":"IDENTITY_CARD","id":"3879d06b-93fb-43a4-b797-6b0985321465","type":"column"}],"alias":"维度层级","id":"9e0fcd38-800e-48b9-a622-a84a1d727888","type":"level"}]},"selects":["AREA_ID","BIRTHDAY_","CLS_ID","CODE_","COMPANY_ID","COMPANY_NAME","COORDINATE_","CORP_ID","DEPT_ID","DEPT_NAME","DLRQ","DN","DUTY_ID","DUTY_NAME","EMAIL","E_MAIL","FLOWSTATUS","GUID","GUID_","IDENTITY_CARD","LAT","LOGIN_ID","LOGO_ID","LOGO_PASS","LON","MOBILE_PHONE","NAME_","OBJ_CAPTION","OBJ_DISPIDX","ORDER_NUM","PASSWD_","PERS_ID","PERS_JOBID","PERS_NAME","PERS_NOTE","PHONE_","PORTAL_ID","SEX_","SFDL","STATUS_","USER_TYPE"],"datasource":3,"query":{"sql":"select * from us_sys.tb_sys_person"},"filters":[],"expressions":[{"alias":"BDS","id":"36cc6478-848f-4b53-b798-a1e0abb7f408","type":"exp","exp":"sum(DEPT_NAME)/count(PERS_NAME)"}]},"edit":false,"delete":false},{"id":14,"userId":"1","name":"PERSONS_copy","categoryName":"????","userName":"Administrator","loginName":"admin","createTime":"2018-09-03 15:42:05.0","updateTime":"2018-09-03 15:42:05.0","data":{"schema":{"measure":[{"column":"PERS_NAME","id":"79a73f73-2e85-4e60-ab1c-81be4af77144","type":"column"},{"column":"SEX_","id":"1c8d677c-ee83-41c9-a911-b268e77e4159","type":"column"}],"dimension":[{"columns":[{"column":"DLRQ","id":"8c62f8c1-67cf-4f14-a424-534811f0668f","type":"column"},{"column":"DN","id":"b62f90b7-27bd-497c-9327-bd9e33677c88","type":"column"},{"column":"DUTY_ID","id":"b6dce98b-c651-4d35-8ec6-54367e941c38","type":"column"}],"alias":"维度层级","id":"9e0fcd38-800e-48b9-a622-a84a1d727888","type":"level"}]},"selects":["AREA_ID","BIRTHDAY_","CLS_ID","CODE_","COMPANY_ID","COMPANY_NAME","COORDINATE_","CORP_ID","DEPT_ID","DEPT_NAME","DLRQ","DN","DUTY_ID","DUTY_NAME","EMAIL","E_MAIL","FLOWSTATUS","GUID","GUID_","IDENTITY_CARD","LAT","LOGIN_ID","LOGO_ID","LOGO_PASS","LON","MOBILE_PHONE","NAME_","OBJ_CAPTION","OBJ_DISPIDX","ORDER_NUM","PASSWD_","PERS_ID","PERS_JOBID","PERS_NAME","PERS_NOTE","PHONE_","PORTAL_ID","SEX_","SFDL","STATUS_","USER_TYPE"],"datasource":3,"query":{"sql":"select * from us_sys.tb_sys_person"},"filters":[],"expressions":[{"alias":"BDS","id":"36cc6478-848f-4b53-b798-a1e0abb7f408","type":"exp","exp":"sum(DEPT_NAME)/count(PERS_NAME)"}]},"edit":false,"delete":false},{"id":8,"userId":"1","name":"TEST PERSON_VIEW","categoryName":"????","userName":"Administrator","loginName":"admin","createTime":"2018-07-30 19:35:47.0","updateTime":"2018-07-31 17:48:11.0","data":{"schema":{"measure":[{"column":"ROLE_NAME","id":"4b9105d4-2013-47a4-95f6-461c0ba1af48","type":"column"}],"dimension":[{"column":"MODULE_NAME","id":"4ffe7343-d847-485c-ae04-d8583d896f27","type":"column"},{"columns":[{"column":"SYSTEM_NAME","id":"2299cb41-b7a5-43ce-88c5-33d7368c6f1c","type":"column"}],"alias":"????","id":"fae072f5-0617-4a2c-b379-4f05332e9d16","type":"level"}]},"selects":["IF_LOGO_PAGE","MODULE_ID","MODULE_LINK","MODULE_NAME","MODULE_ORDER","PERS_ID","ROLE_ID","ROLE_NAME","SUPER_MODULE_ID","SYSTEM_ID","SYSTEM_NAME","TOPIC_ID","TOPIC_NAME","TOPIC_ORDER"],"datasource":3,"query":{"sql":"select * from us_sys.tv_sys_person_module"},"interval":"","filters":[],"expressions":[{"alias":"SS","id":"107cee32-732f-423d-bb99-23e54e7481b4","type":"exp","exp":"sum(ROLE_NAME)+min(MODULE_NAME)"}]},"edit":false,"delete":false},{"id":17,"userId":"1","name":"testcxy","categoryName":"????","userName":"Administrator","loginName":"admin","createTime":"2018-09-05 11:32:26.0","updateTime":"2018-09-11 10:38:18.0","data":{"schema":{"measure":[{"column":"DEPT_ID","id":"4ebadae8-93c3-4f4b-85bd-b7831242b1f1","type":"column"},{"column":"DUTY_NAME","id":"660662ec-c288-4bd8-9739-1e54e8070363","type":"column"},{"column":"COMPANY_ID","id":"15b37a41-11ba-43cb-b100-779a010a3a9c","type":"column"}],"dimension":[{"column":"AREA_ID","alias":"qqqq","id":"ff63f5a7-11ce-4e5c-887f-5ff2528fbc09","type":"column"},{"column":"BIRTHDAY_","id":"110b1410-9bdf-438d-9e57-2722c5a0a6d2","type":"column"}]},"selects":["AREA_ID","BIRTHDAY_","CLS_ID","CODE_","COMPANY_ID","COMPANY_NAME","COORDINATE_","CORP_ID","DEPT_ID","DEPT_NAME","DLRQ","DN","DUTY_ID","DUTY_NAME","EMAIL","E_MAIL","FLOWSTATUS","GUID","GUID_","IDENTITY_CARD","LAT","LOGIN_ID","LOGO_ID","LOGO_PASS","LON","MOBILE_PHONE","NAME_","OBJ_CAPTION","OBJ_DISPIDX","ORDER_NUM","PASSWD_","PERS_ID","PERS_JOBID","PERS_NAME","PERS_NOTE","PHONE_","PORTAL_ID","SEX_","SFDL","STATUS_","USER_TYPE"],"datasource":3,"query":{"sql":"select * from us_sys.tb_sys_person"},"filters":[],"expressions":[]},"edit":false,"delete":false},{"id":12,"userId":"1","name":"TTTTTTT","categoryName":"Default Category","userName":"Administrator","loginName":"admin","createTime":"2018-08-20 21:14:26.0","updateTime":"2018-08-20 21:33:43.0","data":{"schema":{"measure":[{"column":"LOGIN_ID","id":"79cdf5d3-a4cb-42b3-9776-467138053e66","type":"column"},{"column":"PERS_NAME","id":"4d08d9b6-f725-486a-9787-02b9abe2ba3f","type":"column"}],"dimension":[{"column":"AREA_ID","id":"23c9fb26-8f5b-4b16-be14-2c9b22a8ccd6","type":"column"}]},"selects":["AREA_ID","BIRTHDAY_","CLS_ID","CODE_","COMPANY_ID","COMPANY_NAME","COORDINATE_","CORP_ID","DEPT_ID","DEPT_NAME","DLRQ","DN","DUTY_ID","DUTY_NAME","EMAIL","E_MAIL","FLOWSTATUS","GUID","GUID_","IDENTITY_CARD","LAT","LOGIN_ID","LOGO_ID","LOGO_PASS","LON","MOBILE_PHONE","NAME_","OBJ_CAPTION","OBJ_DISPIDX","ORDER_NUM","PASSWD_","PERS_ID","PERS_JOBID","PERS_NAME","PERS_NOTE","PHONE_","PORTAL_ID","SEX_","SFDL","STATUS_","USER_TYPE"],"datasource":4,"query":{"sql":"select * from us_sys.tb_sys_person"},"filters":[],"expressions":[{"alias":"AS","id":"755da377-9133-41b6-8344-b96c10539483","type":"exp","exp":"sum(LOGIN_ID)/distinct(DEPT_NAME)"}]},"edit":false,"delete":false},{"id":13,"userId":"1","name":"TTTTTTT_copy","categoryName":"Default Category","userName":"Administrator","loginName":"admin","createTime":"2018-09-03 10:36:44.0","updateTime":"2018-09-03 10:36:44.0","data":{"schema":{"measure":[{"column":"LOGIN_ID","id":"79cdf5d3-a4cb-42b3-9776-467138053e66","type":"column"},{"column":"PERS_NAME","id":"4d08d9b6-f725-486a-9787-02b9abe2ba3f","type":"column"}],"dimension":[{"column":"AREA_ID","id":"23c9fb26-8f5b-4b16-be14-2c9b22a8ccd6","type":"column"}]},"selects":["AREA_ID","BIRTHDAY_","CLS_ID","CODE_","COMPANY_ID","COMPANY_NAME","COORDINATE_","CORP_ID","DEPT_ID","DEPT_NAME","DLRQ","DN","DUTY_ID","DUTY_NAME","EMAIL","E_MAIL","FLOWSTATUS","GUID","GUID_","IDENTITY_CARD","LAT","LOGIN_ID","LOGO_ID","LOGO_PASS","LON","MOBILE_PHONE","NAME_","OBJ_CAPTION","OBJ_DISPIDX","ORDER_NUM","PASSWD_","PERS_ID","PERS_JOBID","PERS_NAME","PERS_NOTE","PHONE_","PORTAL_ID","SEX_","SFDL","STATUS_","USER_TYPE"],"datasource":4,"query":{"sql":"select * from us_sys.tb_sys_person"},"filters":[],"expressions":[{"alias":"AS","id":"755da377-9133-41b6-8344-b96c10539483","type":"exp","exp":"sum(LOGIN_ID)/distinct(DEPT_NAME)"}]},"edit":false,"delete":false},{"id":11,"userId":"1","name":"typ","categoryName":"????","userName":"Administrator","loginName":"admin","createTime":"2018-08-16 18:07:19.0","updateTime":"2018-09-13 17:47:34.0","data":{"schema":{"measure":[{"column":"NAME_","id":"e00e0253-e5d3-4345-a830-8934ca0c2536","type":"column"},{"column":"SEX_","id":"1c85b479-0f09-4050-bf9e-fd210e8bba4c","type":"column"}],"dimension":[{"column":"DEPT_NAME","id":"8668a7ff-ac34-408f-8bba-2104524a89e1","type":"column"}]},"selects":["AREA_ID","BIRTHDAY_","CLS_ID","CODE_","COMPANY_ID","COMPANY_NAME","COORDINATE_","CORP_ID","DEPT_ID","DEPT_NAME","DLRQ","DN","DUTY_ID","DUTY_NAME","EMAIL","E_MAIL","FLOWSTATUS","GUID","GUID_","IDENTITY_CARD","LAT","LOGIN_ID","LOGO_ID","LOGO_PASS","LON","MOBILE_PHONE","NAME_","OBJ_CAPTION","OBJ_DISPIDX","ORDER_NUM","PASSWD_","PERS_ID","PERS_JOBID","PERS_NAME","PERS_NOTE","PHONE_","PORTAL_ID","SEX_","SFDL","STATUS_","USER_TYPE"],"datasource":3,"query":{"sql":"select * from us_sys.tb_sys_person"},"filters":[],"expressions":[{"alias":"2323232","id":"022860a0-3451-4389-9355-ac8618723dab","type":"exp","exp":"NAME_sum(LON)GUID"}]},"edit":false,"delete":false},{"id":18,"userId":"1","name":"xq","categoryName":"????","userName":"Administrator","loginName":"admin","createTime":"2018-09-05 11:56:02.0","updateTime":"2018-09-05 12:16:47.0","data":{"schema":{"measure":[{"column":"AREA_ID","id":"9f49a8e8-959d-400d-ba7d-42532c78e86f","type":"column"}],"dimension":[{"column":"DUTY_ID","id":"ceab5727-ad24-465f-a224-2ffcbfe757d6","type":"column"}]},"selects":["AREA_ID","BIRTHDAY_","CLS_ID","CODE_","COMPANY_ID","COMPANY_NAME","COORDINATE_","CORP_ID","DEPT_ID","DEPT_NAME","DLRQ","DN","DUTY_ID","DUTY_NAME","EMAIL","E_MAIL","FLOWSTATUS","GUID","GUID_","IDENTITY_CARD","LAT","LOGIN_ID","LOGO_ID","LOGO_PASS","LON","MOBILE_PHONE","NAME_","OBJ_CAPTION","OBJ_DISPIDX","ORDER_NUM","PASSWD_","PERS_ID","PERS_JOBID","PERS_NAME","PERS_NOTE","PHONE_","PORTAL_ID","SEX_","SFDL","STATUS_","USER_TYPE"],"datasource":3,"query":{"sql":"select * from us_sys.tb_sys_person"},"filters":[],"expressions":[]},"edit":false,"delete":false},{"id":19,"userId":"1","name":"在线数据测试","categoryName":"默认分类","userName":"Administrator","loginName":"admin","createTime":"2018-09-05 15:47:54.0","updateTime":"2018-09-13 21:09:24.0","data":{"schema":{"measure":[{"column":"LOGO_ID","id":"df0bc3b5-e227-49fd-9c26-5cc9e742aa34","type":"column"}],"dimension":[{"column":"AREA_ID","id":"164567b5-c7ff-484f-9ed6-4fd1acb0ed61","type":"column"}]},"selects":["AREA_ID","BIRTHDAY_","CLS_ID","CODE_","COMPANY_ID","COMPANY_NAME","COORDINATE_","CORP_ID","DEPT_ID","DEPT_NAME","DLRQ","DN","DUTY_ID","DUTY_NAME","EMAIL","E_MAIL","FLOWSTATUS","GUID","GUID_","IDENTITY_CARD","LAT","LOGIN_ID","LOGO_ID","LOGO_PASS","LON","MOBILE_PHONE","NAME_","OBJ_CAPTION","OBJ_DISPIDX","ORDER_NUM","PASSWD_","PERS_ID","PERS_JOBID","PERS_NAME","PERS_NOTE","PHONE_","PORTAL_ID","SEX_","SFDL","STATUS_","USER_TYPE"],"datasource":12,"query":{"sql":"select * from us_sys.tb_sys_person"},"filters":[],"expressions":[{"alias":"BDS","id":"25595877-975d-4cdc-9068-f9c9c3c18632","type":"exp","exp":"sum(SFDL)+distinct(CLS_ID)"}]},"edit":false,"delete":false}]];
});
/**
 * 获取Column模型信息
 * @return {[type]}         [description]
 */
mock.onGet('/databoard/getColumns.do').reply(function(config) {
  return [200, { "data": null, "columns": ["AREA_ID", "BIRTHDAY_", "CLS_ID", "CODE_", "COMPANY_ID", "COMPANY_NAME", "COORDINATE_", "CORP_ID", "DEPT_ID", "DEPT_NAME", "DLRQ", "DN", "DUTY_ID", "DUTY_NAME", "EMAIL", "E_MAIL", "FLOWSTATUS", "GUID", "GUID_", "IDENTITY_CARD", "LAT", "LOGIN_ID", "LOGO_ID", "LOGO_PASS", "LON", "MOBILE_PHONE", "NAME_", "OBJ_CAPTION", "OBJ_DISPIDX", "ORDER_NUM", "PASSWD_", "PERS_ID", "PERS_JOBID", "PERS_NAME", "PERS_NOTE", "PHONE_", "PORTAL_ID", "SEX_", "SFDL", "STATUS_", "USER_TYPE"], "msg": "1", "resultCount": 0 }];
});

/**
 * 保存数据集
 * @return {[type]}         [description]
 */
mock.onGet('/databoard/saveNewDataset.do').reply(function(config) {
  return [200, { "status": "1", "msg": "success", "id": null }];
});

/**
 * 更新数据集
 * @return {[type]}         [description]
 */
mock.onGet('/databoard/updateDataset.do').reply(function(config) {
  return [200, { "status": "1", "msg": "success", "id": null }];
});

/**
 * 删除数据集
 * @return {[type]}         [description]
 */
mock.onGet('/databoard/deleteDataset.do').reply(function(config) {
  return [200, { "status": "1", "msg": "success", "id": null }];
});
/********************************************xxxxxx********************************************/

//增加的接口 ，单个数据集
mock.onGet('/databoard/getSingelDataset.do').reply(function(config) {
  return [200, { "id": 17, "userId": "1", "name": "cxy11", "categoryName": "", "dataCategory": "sql3", "datasourceId": "3", "userName": "Administrator", "loginName": "admin", "createTime": "2018-09-04 15:33:33.0", "updateTime": "2018-09-04 15:33:57.0", "data": { "schema": { "measure": [{ "column": "CODE_", "id": "fc49dcc7-be44-4abe-9c82-18e8c1b2428a", "type": "column" }, { "column": "DUTY_ID", "id": "1f90ca58-c942-4ed4-a5ad-5bd85b83818a", "type": "column" }, { "column": "GUID_", "id": "4a59b0b8-5b14-4329-809f-fc147a2a04a6", "type": "column" }], "dimension": [{ "alias": "AREA_ID", "columns": [{ "column": "BIRTHDAY_", "id": "53c261f1-2761-4d63-ad39-7f9b34068f4a", "type": "column" }, { "column": "BIRTHDAY_", "id": "53c261f1-2761-4d63-ad39-7f9b34068f4a", "type": "column" }, { "column": "BIRTHDAY_", "id": "53c261f1-2761-4d63-ad39-7f9b34068f4a", "type": "column" }, { "column": "BIRTHDAY_", "id": "53c261f1-2761-4d63-ad39-7f9b34068f4a", "type": "column" }], "id": "3f00639a-67c2-4b26-9b37-18e37358f204", "type": "level" }, { "column": "BIRTHDAY_", "id": "53c261f1-2761-4d63-ad39-7f9b34068f4a", "type": "column" }, { "column": "CORP_ID", "id": "a2276257-4a3e-4d68-9486-d8dae09bc755", "type": "column" }, { "column": "OBJ_CAPTION", "id": "a80a1f2a-5b96-4205-b44d-d443b84578ab", "type": "column" }] }, "selects": ["AREA_ID", "BIRTHDAY_", "CLS_ID", "CODE_", "COMPANY_ID", "COMPANY_NAME", "COORDINATE_", "CORP_ID", "DEPT_ID", "DEPT_NAME", "DLRQ", "DN", "DUTY_ID", "DUTY_NAME", "EMAIL", "E_MAIL", "FLOWSTATUS", "GUID", "GUID_", "IDENTITY_CARD", "LAT", "LOGIN_ID", "LOGO_ID", "LOGO_PASS", "LON", "MOBILE_PHONE", "NAME_", "OBJ_CAPTION", "OBJ_DISPIDX", "ORDER_NUM", "PASSWD_", "PERS_ID", "PERS_JOBID", "PERS_NAME", "PERS_NOTE", "PHONE_", "PORTAL_ID", "SEX_", "SFDL", "STATUS_", "USER_TYPE"], "datasource": 3, "query": { "sql": "select * from us_sys.tb_sys_person" }, "filters": [], "expressions": [] }, "edit": false, "delete": false }];
});

// axios.get('/databoard/getDatasourceList.do').then(function(a, b) {
//   console.info(a.data)
// })
//得到boardList 得到列表信息

//得到widgets 的位置信息 id
mock.onGet('/dashboard/getBoardData.do').reply(function(config){
	return [200, {
	"name": "TEST2",
	"layout": {
		"rows": [{
			"type": "widget",
			"widgets": [{
				"widgetId": 17,
				"chartHeight": "41",
				"chartWidth": "20",
				"bgColor": "#804000",
				"positionX": "11",
				"positionY": "3",
				"domId": "chart_1537502278576",
				"border": ""
			}, {
				"widgetId": 6,
				"chartHeight": "38",
				"chartWidth": "43",
				"bgColor": "#07b876",
				"positionX": "37",
				"positionY": "3",
				"domId": "chart_1539582290283",
				"border": "url(imgs/cockpit/border/01.png)"
			}]
		}, {
			"type": "other",
			"others": []
		}],
		"type": "cockpit",
		"cockpitConf": {
			"screenWidth": 100,
			"viewName": "TEST2",
			"background": "#86f0f9",
			"screenHeight": 100,
			"fontColor": "#FFFFFF",
			"categoryId": ""
		}
	},
	"categoryId": "",
	"id": "5"
}]
});
//得到单个widget信息
mock.onGet('/dashboard/dashboardWidget.do').reply(function(config) {
	return [200, {
	"id": 20,
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
        "chart_type": "searchfield",
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
  }]
});
/********************************************数据源接口********************************************/
mock.onGet('/dashboard/getBoardData.do?id=5').reply(function(config) {
  return [200, {
    "id": 10,
    "userId": "1",
    "categoryId": null,
    "name": "折线图",
    "userName": "Administrator",
    "loginName": null,
    "createTime": "2018-10-11 10:07:48.0",
    "updateTime": "2018-10-11 14:46:00.0",
    "layout": {
      "rows": [{
        "type": "widget",
        "widgets": [{
          "positionY": "40",
          "border": "url(imgs/cockpit/border/01.png)",
          "chartWidth": "1024",
          "widget": {
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
            "createTime": "2018-10-11 14:41:53.0",
            "edit": false,
            "loginName": null,
            "name": "表格",
            "updateTime": "2018-10-11 14:41:53.0",
            "id": 21,
            "userName": null,
            "categoryName": "xuce",
            "delete": false,
            "userId": "1"
          },
          "roleInfo": [],
          "bgColor": "none",
          "widgetId": 21,
          "name": "表格",
          "domId": "chart_1539240331557",
          "show": false,
          "chartHeight": "468",
          "positionX": "100"
        }]
      }, {
        "type": "other",
        "others": []
      }],
      "type": "cockpit",
      "cockpitConf": {
        "screenWidth": 100,
        "viewName": "折线图",
        "background": "#000000",
        "screenHeight": 100,
        "fontColor": "#FFFFFF",
        "categoryId": ""
      }
    },
    "categoryName": null,
    "edit": false,
    "delete": false
  }];
});


export { mock }
