
import Api from './basic';
/**
 * [description]
 * @return {[type]}  [description]
 */
export const getDatasetList = () => {
  return Api.get('/databoard/getDatasetList.do', {});
};
/**
 * [description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const getColumns = (params) => {
  return Api.post('/databoard/getColumns.do', params);
}
/**
 * [description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const saveNewDataset = (params) => {
  return Api.get('/databoard/saveNewDataset.do', params);
}
/**
 * [description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const updateDataset = (params) => {
  return Api.post('/databoard/updateDataset.do', params);
}
/**
 * [description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const deleteDataset = (params) => {
  return Api.get('/databoard/deleteDataset.do', params);
}
/**
 * [description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const getSingelDataset = (params) => {
  return Api.get('/databoard/getSingelDataset.do', params);
}
/**
 * [description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const testExpression = (params) => {
  return Api.post('/databoard/testExpression.do', params);
}
