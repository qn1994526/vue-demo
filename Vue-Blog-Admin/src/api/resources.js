import Vue from 'vue'
import VueResource from 'vue-resource'

// API路径
const API_ROOT = "http://suvllian.com/sadmin/index.php";

Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
export const getResource = Vue.resource(API_ROOT);
export const postResource = Vue.resource(API_ROOT);