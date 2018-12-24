# Mail helper

## Why I'm working on this tool ? 

Each day my mailbox receives a lot of different "structure"  and "unstructure" data. What means "structure" and "unstructure" data.

### Structure data

Gmail has two great features: ["Labels"](https://support.google.com/mail/answer/118708?co=GENIE.Platform%3DAndroid&hl=en) and ["Filters"](https://support.google.com/mail/answer/6579?hl=en). What's my understation about `Labels` and `Filters`. Labels are similar like folders. Filters automatically labels arriving emails.

### Unstructure data

Creating filters and labels is a painful task from my experience at Gmail. You have a lot of steps to create a simple `label` and `filter`. First version creating a simple `label` by `filter keyword`.

### Architecture

I'm a learner and I'd like to use the latest technologies. Project has been using: 

- [Native web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- Gmail API 

Project is using the follow building tools: 
- lerna
- webpack

#### Why lernajs 

### Documentation: 

- [Gmail API Overview](https://developers.google.com/gmail/api/guides/)
- [Implementing Server-Side Authorization](https://developers.google.com/gmail/api/auth/web-server)
- [Choose Auth Scopes](https://developers.google.com/gmail/api/auth/scopes)
- [Access Google APIs more easily](https://developers.google.com/api-client-library/)
- [Gmail documentation](https://apis-nodejs.firebaseapp.com/gmail/index.html)