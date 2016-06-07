<template>
  <div class="main-user">
    <header-vue title="用户列表"></header-vue>
    <search></search>
    <button @click="add">添加</button>
    <table-vue></table-vue>
  </div>
</template>

<script>
import HeaderVue from './HeaderVue'
import TableVue from './TableVue'
import Search from './Search'

import * as actions from '../../actions'

export default {
  vuex: {
    actions
  },
  components: {
    HeaderVue,
    TableVue,
    Search
  },
  methods: {
    add: function () {
      this.userAdd({
        id: 5,
        name: 'xx',
        age: 20,
        tel: 123
      });
    }
  }
}
</script>
