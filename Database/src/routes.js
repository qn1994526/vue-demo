import VueRouter from 'vue-router';

import Main from './components/Login/index.vue';
import Staff from './components/Staff/index.vue';
import Manager from './components/Manager/index.vue';
import Mister from './components/Mister/index.vue';

import Add from './components/Common/Add.vue';
import CPass from './components/Common/Password.vue';

import Smain from './components/Staff/Main.vue';
import Schange from './components/Staff/Change.vue';

import Mmain from './components/Staff/Main.vue';
import Mall from './components/Manager/All.vue';

import MImain from './components/Mister/Main.vue';
import MIall from './components/Mister/All.vue';


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Main },

    { path: '/staff/', component: Staff ,
	  children:[
	  	{path: '', component: Smain},
	  	{path: 'home', component: Smain},
	  	{path: 'change', component: Schange},	 
	  	{path: 'cpass', component: CPass},	 
	  ]
	},

   	{ path: '/mister/', component: Mister ,
   	  children:[
	  	{path: '', component: MImain},
	  	{path: 'home', component: MImain},
	  	{path: 'all', component: MIall},
	  	{path: 'add', component: Add},
	  	{path: 'cpass', component: CPass}	 	 
	  ]
	},

   	{ path: '/manager/', component: Manager ,
      children:[
	  	{path: '', component: Mmain},
	  	{path: 'home', component: Mmain},	 
	  	{path: 'all', component: Mall},	 
	  	{path: 'add', component: Add},
	  	{path: 'cpass', component: CPass},	 	 
	  ]
	},

	{ path: '*', component: Main }
  ]
});

export default router;