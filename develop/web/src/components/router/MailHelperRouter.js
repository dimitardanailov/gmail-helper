import {Router} from '@vaadin/router'

function loadRoutes() {
  const router = new Router(outlet)

  router.setRoutes([
    {path: '/',     component: 'x-home-view'},
    {path: '/users',  component: 'x-user-list'},
    {path: '/users/:user', component: 'x-user-profile'},
    {path: '(.*)', component: 'x-not-found-view'},
  ])
}

export default loadRoutes

export class MailHelperRouter {
  
  get outlet() {
    return this._outlet
  }

  set outlet(outlet) {
    this._outlet = outlet
  }

  constructor(outlet) {
    this._outlet = outlet
  }

  loadRoutes() {
    
  }
}


