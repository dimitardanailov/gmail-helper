# Mail helper

Mail helper is a third party gmail application that helps you to create Gmail label, Gmail filter, Background colour and colour. Public URL is: https://fir-playgrounds.firebaseapp.com

## Browser support

I did tests on these browsers: 

- Google Chrome -> Version 71.0.3578.98 (Official Build) (64-bit)
- Firefox Quantim
- Google Chrome Canary -> Version 73.0.3650.0 (Official Build) canary (64-bit)
- Opera Version:57.0.3098.106
- Safari
- Google Chrome mobile
- Safari mobile

## Why I'm working on this tool ? 

Each day my mailbox receives a lot of emails. To reduce my reading time I've been using a lot of labels (at this moment I have 500+ diffferent labels). I'd like to introduce a new term: **structure data**. 

Structure data - email message has at least one label.

I created this tool because I'd like to **increase** my productivity. **First version could create a filter. Filter creates or update an existing label.**

### More about Gmail labels and filters

Gmail has two great features: ["Labels"](https://support.google.com/mail/answer/118708?co=GENIE.Platform%3DAndroid&hl=en) and ["Filters"](https://support.google.com/mail/answer/6579?hl=en). What's my understation about `Labels` and `Filters`. Labels are similar like folders. Filters automatically labels arriving emails. 

### Architecture

Project uses a simple archicture. Application has a simple front view. Technology stack uses

- [Native web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- Gmail API
- Firebase
- Lerna
- Webpack
- Karma
- Redux
- Jest
- TestCafe

Build tools: 
- [lerna](https://github.com/lerna/lerna)
- [webpack](https://webpack.js.org/)

#### Why this project is a mono repo ?

Juggling a multimodule project over multiple repos is like trying to teach a newborn baby how to ride a bike. I'm following a monorepo approach, all officially maintained modules are in the same repo. This is quite taboo but let's look at the pros and cons:

**Pros**
- Single lint, build, test and release process.
- Easy to coordinate changes across modules.
- Single place to report issues.
- Easier to setup a development environment.

**Cons**
- Codebase looks more intimidating.
- Repo is bigger in size.

### How to setup locally

```bash
lerna run install
lerna run build
lerna run start
lerna run test
```

### Testing

- [Automated testing with Headless Chrome](https://developers.google.com/web/updates/2017/06/headless-karma-mocha-chai)

### Github repos: 

- [Google - How to web components](https://github.com/GoogleChromeLabs/howto-components)
- [Custom elements - everywhere](https://github.com/webcomponents/custom-elements-everywhere)
- [Vaadin router](https://vaadin.com/router)
- [lit element](https://github.com/Polymer/lit-element)

### Resources / Hot links: 

#### Gmail

- [Gmail API Overview](https://developers.google.com/gmail/api/guides/)
- [Implementing Server-Side Authorization](https://developers.google.com/gmail/api/auth/web-server)
- [Choose Auth Scopes](https://developers.google.com/gmail/api/auth/scopes)
- [Access Google APIs more easily](https://developers.google.com/api-client-library/)
- [Gmail documentation](https://apis-nodejs.firebaseapp.com/gmail/index.html)
- [Browser Quickstart](https://developers.google.com/gmail/api/quickstart/js)

#### Dom 

- [Using shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)

#### Template

- [How to Use HTML <template> & <slot> With Shadow DOM](https://www.hongkiat.com/blog/html-template-slow-tag-shadow-dom/)
- [Custom Elements v1: Reusable Web Components](https://developers.google.com/web/fundamentals/web-components/customelements)
- [Let's Build Web Components! Part 5: LitElement](https://dev.to/bennypowers/lets-build-web-components-part-5-litelement-906)
- [https://open-wc.org/](https://open-wc.org/)
- [https://open-wc.org/testing/#setup](https://open-wc.org/testing/#setup)

#### Components

##### Vaadin 

- [https://vaadin.com/router](https://vaadin.com/router)

##### Material Components ([https://material-components.github.io/material-components-web-catalog](https://material-components.github.io/material-components-web-catalog))

- [Tabs](https://material-components.github.io/material-components-web-catalog/#/component/tabs)

##### Open wc resources

- full setup: https://open-wc.org/testing/testing-karma.html#default-configuration
- karma-esm plugin: https://open-wc.org/testing/karma-esm.html
- es-dev-server: https://open-wc.org/developing/es-dev-server.html
- repo: https://github.com/open-wc/open-wc