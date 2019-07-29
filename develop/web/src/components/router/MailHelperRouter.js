import { Router } from '@vaadin/router'

class MailHelperRouter extends Router {

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

  static loadIntroPage() {
    const routes = MailHelperRouter.routes()

    const { POPSTATE } = MailHelperRouter.NavigationTrigger
    MailHelperRouter.setTriggers(POPSTATE)

    window.history.pushState({}, null, routes.INTRO)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }
}

export default MailHelperRouter

