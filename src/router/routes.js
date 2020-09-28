const _import = require('../helper/utils/view-import/' + process.env.NODE_ENV)

export default {
    routes: [{
            path: '/404',
            component: _import('404')
        },
        {
            path: '*',
            component: _import('404')
        }
    ]
}