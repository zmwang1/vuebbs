import VueRouter from 'vue-router'

import home from '../components/nav/home.vue'
import login from '../components/nav/login.vue'
import all from '../components/nav/all.vue'
import contents from '../components/nav/contents.vue'
import people from '../components/nav/people.vue'
import my from '../components/nav/my.vue'
import message from '../components/nav/message.vue'
import elite from '../components/nav/elite.vue'
import week from '../components/nav/week.vue'
import share from '../components/nav/share.vue'
import ques from '../components/nav/ques.vue'
import recruit from '../components/nav/recruit.vue'
import publish from '../components/nav/publish.vue'
import more from '../components/nav/more.vue'

var router = new VueRouter({
	routes: [
		{path:'/home', component: home, 
		children:[
			{path:'/all',component:all},
			{path:'/', component: all},
			{path:'/elite',component:elite},
			{path:'/week',component: week},
			{path:'/share',component:share},
			{path:'/ques',component:ques},
			{path:'/recruit',component:recruit}
		]
	},
		{path: '/', component: login},
		{path: '/contents/:id',component: contents},
		{path:'/people/:id',component: people},
		{path:'/my',component: my},
		{path:'/message',component:message},
		{path:'/login',component:login},
		{path:'/publish',component:publish},
		{path:'/more',component:more}
	] 
});

export default router;