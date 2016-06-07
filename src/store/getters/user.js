/**
 * user 模块的 getters 
 * 这里 getters 函数的命名基本靠近 vuex getters 的绑定
 * 这样能利用 es2015 json 的特性，减少编写量，也许这不是很好的模式
*/

export function users (state) {
    return state.users.filter(user => {
        return user.name.indexOf(state.searchName) !== -1
    })
}