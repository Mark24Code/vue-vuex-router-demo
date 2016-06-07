import * as types from './constants'

/**
 * User 模块
*/
export const userAll = createAction(types.USER_ALL)
export const userAdd = createAction(types.USER_ADD)
export const userEdit = createAction(types.USER_EDIT)
export const userDelete = createAction(types.USER_DELETE)
export const userFilter = createAction(types.USER_FILTER)
export const userStartOperate = createAction(types.USER_START_OPERATE)

/**
 * 和 flux createAction 的概念差不多
*/
function createAction(type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}