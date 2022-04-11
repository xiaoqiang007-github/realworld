import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('date', function (value, PARAMS) {
  // 返回处理后的值


  return dayjs(value).format(PARAMS || 'MMMM D, YYYY')
})