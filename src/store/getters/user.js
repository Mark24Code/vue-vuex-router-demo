/**
 * user 模块的 getters 
 * 这里 getters 函数的命名基本靠近 vuex getters 的绑定
 * 这样能利用 es2015 json 的特性，减少编写量，也许这不是很好的模式
 * 
 * 偏好写成 function，而非官方的 const 的方式
 * 至于为什么，就因为我认为这样写更优雅直观，哈哈
*/

export function getUsers (state) {
    return state.user.users.filter(user => {
        return user.name.indexOf(state.user.searchName) !== -1
    })
}