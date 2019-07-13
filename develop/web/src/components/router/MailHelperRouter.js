import {Router} from '@vaadin/router'

function loadRoutes(outlet) {
  const router = new Router(outlet)

  router.setRoutes([
    {path: '/',     component: 'mh-home-view'},
    {path: '/intro',  component: 'mh-intro-view'}
  ])
}

export default loadRoutes

