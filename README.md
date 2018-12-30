# Mail helper

If you want to try or use project please visit: https://fir-playgrounds.firebaseapp.com

## Browser support

I did tests on these browsers: 

- Google Chrome -> Version 71.0.3578.98 (Official Build) (64-bit)
- Firefox Quantim
- Google Chrome Canary -> Version 73.0.3650.0 (Official Build) canary (64-bit)
- Opera Version:57.0.3098.106

## Why I'm working on this tool ? 

Each day my mailbox receives a lot of emails. To reduce my reading time I've been using a lot of labels (at this moment I have 500+ diffferent labels). I'd like to introduce a new term: **structure data**. 

Structure data - email message has at least one label.

I created this tool because I'd like to **increase** my productivity. **First version could create a filter. Filter creates or update an existing label.**

### More about Gmail labels and filters

Gmail has two great features: ["Labels"](https://support.google.com/mail/answer/118708?co=GENIE.Platform%3DAndroid&hl=en) and ["Filters"](https://support.google.com/mail/answer/6579?hl=en). What's my understation about `Labels` and `Filters`. Labels are similar like folders. Filters automatically labels arriving emails. 

### Architecture

I don't have deadline or budget restrictions :) I decided to use **only** the latest techologies trends. Technology stack includes: 

- [Native web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components).
- Gmail API 
- Fireabase

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
http-server ./develop/web/dist
```

### Resources / Hot links: 

- [Gmail API Overview](https://developers.google.com/gmail/api/guides/)
- [Implementing Server-Side Authorization](https://developers.google.com/gmail/api/auth/web-server)
- [Choose Auth Scopes](https://developers.google.com/gmail/api/auth/scopes)
- [Access Google APIs more easily](https://developers.google.com/api-client-library/)
- [Gmail documentation](https://apis-nodejs.firebaseapp.com/gmail/index.html)
- [Using shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
- [How to Use HTML <template> & <slot> With Shadow DOM](https://www.hongkiat.com/blog/html-template-slow-tag-shadow-dom/)
- [How to components](https://github.com/GoogleChromeLabs/howto-components)
- [Html as Custom Element](https://github.com/domenic/html-as-custom-elements)
- [Element.attachShadow()](https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow)