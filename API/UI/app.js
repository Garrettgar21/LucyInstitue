const routes=[
    {path:'/home',component:home},
    {path:'/image',component:image},
    {path:'/user',component:user}
]

const router=new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')