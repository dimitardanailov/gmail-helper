# Mail helper

## Why I'm working on this tool ? 

Each day my mailbox receives a lot of different "structure"  and "unstructure" data. What means "structure" and "unstructure" data.

If you want to try or use project please visit: https://fir-playgrounds.firebaseapp.com

### Structure data

Gmail has two great features: ["Labels"](https://support.google.com/mail/answer/118708?co=GENIE.Platform%3DAndroid&hl=en) and ["Filters"](https://support.google.com/mail/answer/6579?hl=en). What's my understation about `Labels` and `Filters`. Labels are similar like folders. Filters automatically labels arriving emails.

### Unstructure data

Creating filters and labels is a painful task from my experience at Gmail. You have a lot of steps to create a simple `label` and `filter`. First version creating a simple `label` by `filter keyword`.

### Architecture

I'm a learner. I'd like to use the latest technologies. Technology stack includes: 

Libraries:

- [Native web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components). Project supports only Chrome.
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