import Vue from 'vue';
import App from './App.vue';
import {router} from './router';
import {
  NavBar, NoticeBar, Waterfall, Row, Col, Lazyload, Button, Icon, Dialog, Search,
  Swipe, SwipeItem, Tag, List, Panel, Uploader, Field, Cell, CellGroup
}from 'vant';
// vant
Vue.use(NavBar);
Vue.use(NoticeBar);
Vue.use(Waterfall);
Vue.use(Row).use(Col);
Vue.use(Lazyload);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Dialog);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Search);
Vue.use(Tag);
Vue.use(List);
Vue.use(Panel);
Vue.use(Uploader);
Vue.use(Field);
Vue.use(Cell).use(CellGroup);
// or with options
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: '/static/default.jpg',
  loading: '/static/default.jpg',
  attempt: 1,
  listenEvents: ['scroll'],
  lazyComponent: true,
});


new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
