import Vue from 'vue'
import Antd from 'ant-design-vue/lib'
import transition from 'vue2-transitions'
import ScrollMagic from 'scrollmagic'
import gsap from 'gsap';
// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

window.ScrollMagic = ScrollMagic;
window.Gsap=gsap
Vue.use(transition)
Vue.use(ScrollMagic)
Vue.use(Antd)
