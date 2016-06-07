import * as types from '../constants'
import createAction from './createAction'

/**
 * User 模块
 * 默认匿名导出
*/
export default {
    userAll: createAction(types.USER_ALL),
    userAdd: createAction(types.USER_ADD),
    userEdit: createAction(types.USER_EDIT),
    userDelete: createAction(types.USER_DELETE),
    userFilter: createAction(types.USER_FILTER),
    userStartOperate: createAction(types.USER_START_OPERATE)
}