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
        auth: true,
        component: require('./containers/main.vue'),
        subRoutes: {
            '/personalInfo': {
                component: require('./containers/personalInfo.vue')
            },
            '/personalDetail': {
                component: require('./containers/personalDetail.vue')
            },
            '/hierarchy': {
                component: require('./containers/hierarchy/container.vue'),
                subRoutes: {
                    '/': {
                        component: require('./containers/hierarchy/horizontal.vue')
                    },
                    '/horizontal': {
                        component: require('./containers/hierarchy/horizontal.vue')
                    },
                    '/vertical': {
                        component: require('./containers/hierarchy/vertical.vue')
                    }
                }
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

router.beforeEach(function (transition) {
    if (transition.to.auth) {
        var currentUserId = window.sessionStorage.getItem('current_user_id');
        if (!currentUserId || currentUserId === '') {
            transition.redirect('/login');
        } else {
            transition.next();
        }
    } else {
        transition.next();
    }
    window.scrollTo(0, 0);
});

router.redirect({
    '*': '/'
});

router.start(index, '#app');