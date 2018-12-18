
// 引用axios
import Axios from 'axios'
//引入Qs
import Qs from 'qs';
//导入配置
import * as config from "../../../static/json/config.json";
import '../../style/common/nprogress.styl';
import NProgress from 'nprogress';
// 添加请求拦截器
Axios.interceptors.request.use(function(config) {
  NProgress.start();
  // 在发送请求之前做些什么
  return config;
}, function(error) {
  NProgress.done();
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function(response) {
  NProgress.done();
  // 对响应数据做点什么
  return response;
}, function(error) {
  //终止进度条
  NProgress.done();
  //判断状态
  let status = _.get(error, 'response.status');
  if (status === 401) {
    artDialog.error('系统授权信息失效，点击"确定"按钮，将返回到登录页面！', () => {
      window.location.href = basePath;
    });
  }
  throw new Error(error);
});
/**
/**
 * 自定义判断元素类型JS
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

/**
 * 参数过滤函数
 * @param  {[type]} o [description]
 * @return {[type]}   [description]
 */
function filterNull(o) {
  if (typeof o === 'object') {
    for (var key in o) {
      if (o[key] === null) {
        delete o[key]
      }
      if (toType(o[key]) === 'string') {
        o[key] = o[key].trim()
      } else if (toType(o[key]) === 'object') {
        o[key] = filterNull(o[key])
      } else if (toType(o[key]) === 'array') {
        o[key] = filterNull(o[key])
      }
    }
  }
  return o
}

/**
 * [apiAxios description]
 * @param  {[type]} method [description]
 * @param  {[type]} url    [description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
function apiAxios(method, url, params) {
  //服务配置
  let service = config.service || {};
  //获取令牌
  const token = $.cookie('access_token') || '';
  // 配置API接口地址
  let root = String.format('http://{0}:{1}', service.ip, service.port);
  //判断参数
  if (!params) {
    params = {}
  } else {
    params = filterNull(params);
    //设置令牌
    params['token_seat'] = "token_seat";
  }
  //如果存在令牌
  if (token) {
    //设置令牌
    params['access_token'] = token;
  }
  //返回对象
  let options = {
    method: method,
    withCredentials: true,
    url: url,
    headers: {
      'Content-Type': config.oauth.ContentType,
      'Authorization': config.oauth.Authorization
    },
    transformRequest: [function(params) {
      // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，
      // 这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装
      // 了，不需要另外安装）
      params = Qs.stringify(params);

      return params;
    }],
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null
  };
  return Axios(options);
}
//导出对象
export default {
  /**
   * [get description]
   * @param  {[type]} url    [description]
   * @param  {[type]} params [description]
   * @return {[type]}        [description]
   */
  get: function(url, params) {
    return apiAxios('GET', url, params);
  },
  /**
   * [post description]
   * @param  {[type]} url    [description]
   * @param  {[type]} params [description]
   * @return {[type]}        [description]
   */
  post: function(url, params) {
    return apiAxios('POST', url, params);
  },
  /**
   * [put description]
   * @param  {[type]} url    [description]
   * @param  {[type]} params [description]
   * @return {[type]}        [description]
   */
  put: function(url, params) {
    return apiAxios('PUT', url, params);
  },
  /**
   * [delete description]
   * @param  {[type]} url    [description]
   * @param  {[type]} params [description]
   * @return {[type]}        [description]
   */
  delete: function(url, params) {
    return apiAxios('DELETE', url, params);
  },
  /**
   * 系统登录
   * @param  {[type]} url    [description]
   * @param  {[type]} params [description]
   * @return {[type]}        [description]
   */
  oauth: function(url, params) {
    return apiAxios('POST', url, params);
  },
  /*
   * axios对象
   * */
  axios: Axios
}
