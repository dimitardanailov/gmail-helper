import { Router } from '@vaadin/router'

class MailHelperRouter extends Router {

  static init(outlet) {
    const router = new MailHelperRouter(outlet)
    router.setRoutes(MailHelperRouter.routesComponennts())

    return router
  }

  static routes() {
    return {
      HOME: '/',
      INTRO: '/intro',
    }
  }

  static routesComponennts() {
    const routes = MailHelperRouter.routes()

    return [
      { path: routes.HOME, component: 'gh-home-view' },
      { path: routes.INTRO, component: 'gh-intro-view'},
      { path: '(.*)', component: 'gh-not-found-view' }
    ]
  }

  static loadHomePage() {
    const routes = MailHelperRouter.routes()
    MailHelperRouter.navigateTo(routes.HOME)
  }

  static loadIntroPage() {
    const routes = MailHelperRouter.routes()
    MailHelperRouter.navigateTo(routes.INTRO)
  }

  static navigateTo(route) {
    const { POPSTATE } = MailHelperRouter.NavigationTrigger
    MailHelperRouter.setTriggers(POPSTATE)

    window.history.pushState({}, null, route)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }
}

export default MailHelperRouter

