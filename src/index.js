var Vue = require('vue'),
    Router = require('vue-router'),
    index = require('./index.vue');


// install router
Vue.use(Router);

//instantiate an instance of Router
var router = new Router();
// routing
router.map({
    '/': {
        component: require('./containers/login.vue')
    },
    '/login': {
        component: require('./containers/login.vue')
    },
    '/main': {
        component: require('./containers/main.vue'),
        subRoutes: {
            '/personalInfo': {
                component: require('./containers/personalInfo.vue')
            },
            '/personalDetail': {
                component: require('./containers/personalDetail.vue')
            },
            '/message': {
                component: require('./containers/message.vue')
            },
            '/more': {
                component: require('./containers/more.vue')
            }
        }
    }
});

router.beforeEach(function () {
    window.scrollTo(0, 0);
});

router.redirect({
    '*': '/'
});

router.start(index, '#app');
