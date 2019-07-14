export const routes = {
  MAIN: '/',
  INTRO: '/intro',
}

export const routesComponennts = [
  { path: routes.MAIN, component: 'gh-home-view' },
  { path: routes.INTRO, component: 'gh-intro-view'},
  { path: '(.*)', component: 'gh-not-found-view' }
]
