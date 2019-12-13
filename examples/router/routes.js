function page(path) {
  return () =>
    import(/* webpackChunkName: '' */ `~/pages/${path}`).then(
      m => m.default || m
    )
}

export default [
  { path: '/', name: 'home', component: page('Home.vue') },
  {
    path: '/external-embedding',
    name: 'external-embedding',
    component: page('ExternalEmbedding.vue')
  },
  {
    path: '/tv-1',
    name: 'tv-1',
    component: page('TV1.vue')
  },
  {
    path: '/tv-2',
    name: 'tv-2',
    component: page('TV2.vue')
  },
  {
    path: '/tv-3',
    name: 'tv-3',
    component: page('TV3.vue')
  },
  {
    path: '/tv-4',
    name: 'tv-4',
    component: page('TV4.vue')
  },
  {
    path: '/tv-5',
    name: 'tv-5',
    component: page('TV5.vue')
  },
  { path: '*', component: page('errors/404.vue') }
]
