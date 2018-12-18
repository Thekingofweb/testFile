
import Api from './basic';
/**
 * [description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const saveNewDatasource = (params) => {
  return Api.post('/databoard/saveNewDatasource.do', params);
};
/**
 * [description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const updateDatasource = (params) => {
  return Api.post('/databoard/updateDatasource.do', params);
};
/**
 * [description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const deleteDatasource = (params) => {
  return Api.delete('/databoard/deleteDatasource.do', params);
}
/**
 * [description]
 * @return {[type]} [description]
 */
export const getDatasourceList = () => {
  return Api.get('/databoard/getDatasourceList.do');
}
/**
 * [description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const testConnection = (params) => {
  return Api.post('/databoard/test.do', params);
}
