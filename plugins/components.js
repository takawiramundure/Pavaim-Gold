import Vue from 'vue'
import Logo from '~/components/Logo.vue'
import MainNav from '~/components/MainNav.vue'
import HeaderTest from '~/components/HeaderTest.vue'
import FooterTest from '~/components/FooterTest.vue'
import MainFooter from '~/components/MainFooter.vue'
import MainSlider from '~/components/HomePage/MainSlider.vue'
import ContentWrapper from '~/components/HomePage/ContentWrapper.vue'

Vue.component('logo', Logo)
Vue.component('main-nav', MainNav)
Vue.component('main-footer', MainFooter)
Vue.component('main-slider', MainSlider)
Vue.component('content-wrapper', ContentWrapper)
Vue.component('footer-test', FooterTest)
Vue.component('header-test', HeaderTest)