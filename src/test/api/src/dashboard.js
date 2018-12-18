
import Api from './basic';
/**
 * [description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const getAggregateData = (params) => {
  return Api.post('/databoard/getAggregateData.do', params);
};
/**
 * [description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const getDimensionValues = (params) => {
  return Api.get('/databoard/getDimensionValues.do', params);
};
/**
 * [description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const getBoardData = (params) => {
  return Api.get('/databoard/getBoardData.do?id=' + params.id)
}
/**
 * [description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const saveNewWidget = (params) => {
  return Api.post('/databoard/saveNewWidget.do', params);
}
/**
 * [description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const updateWidget = (params) => {
  return Api.post('/databoard/updateWidget.do', params);
}
/**
 * [description]
 * @return {[type]} [description]
 */
export const getWidgetList = () => {
  return Api.get('/databoard/getWidgetList.do');
}
/**
 * [description]
 * @return {[type]} [description]
 */
export const getBoardList = () => {
  return Api.get('/databoard/getBoardList.do');
}
/**
 * [description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const saveNewBoard = (params) => {
  return Api.post('/databoard/saveNewBoard.do', params);
}
/**
 * [description]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
export const deleteBoard = (id) => {
  return Api.post('/databoard/deleteBoard.do', { 'id': id });
}
/**
 * [description]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
export const deleteWidget = (id) => {
  return Api.post('/databoard/deleteWidget.do', { 'id': id });
}
/**
 * [description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const updateBoard = (params) => {
  return Api.post('/databoard/updateBoard.do', params);
}
/**
 * [description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const removeImage = (params) => {
  return Api.post('/databoard/removeImage.do', { 'fileName': params.fileName });
}
