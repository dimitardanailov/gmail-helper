import { Router } from '@vaadin/router'

function loadRoutes(outlet) {
  const router = new Router(outlet)

  router.setRoutes([
    {path: '/',     component: 'mh-home-view'},
    {path: '/intro',  component: 'mh-intro-view'}
  ])
}

export class MailHelperRouter extends Router {

  static init(outlet) {
    const router = new MailHelperRouter(outlet)
    router.setRoutes(MailHelperRouter.routesComponennts())

    return router
  }

  static routes() {
    return {
      MAIN: '/',
      INTRO: '/intro',
    }
  }

  static routesComponennts() {
    const routes = MailHelperRouter.routes()

    return [
      { path: routes.MAIN, component: 'gh-home-view' },
      { path: routes.INTRO, component: 'gh-intro-view'},
      { path: '(.*)', component: 'gh-not-found-view' }
    ]
  }
}

export default loadRoutes

