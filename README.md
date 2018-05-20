Simple static blog made with [Next.js](https://github.com/zeit/next.js) and [MDX](https://github.com/mdx-js/mdx)
================================================================================================================

Deployment
----------

Build a static website and deploy using [now.sh](https://zeit.co/now):

```shell
$ npm install && npm run export && cd out && now deploy
```


TODO
----

- ✅ some basic CSS
- ✅ layout for posts
- more info in this readme - how to create post, post attributes
- add more complex post example - with image, custom component, video
- try to retrieve post title from the markdown `<h1>` title
- describe deployment process using webhooks, CI etc.
- automate deployment of this example
