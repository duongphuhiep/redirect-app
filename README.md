# Template project for URL Transformation and Redirection app

When we move a website to a new location. We want to inform the visitors about the new location then redirect them to the new location.

A **redirection-app** will be deployed in the old location of the website. It will welcome all visitors to the old website and

1. Transform the old URL to the new one.
   For eg from `https://old-address.com/myapp/#/devil/operations/12554` to `https://new-address.com/angle/operations/12554`

2. Display a message (and other informations) telling them that *"the website is moved"*, and that they *"will be redirected to the new URL in 5 seconds.."*
   (so that next time they would have to use the the new URL to bypasse this "5 seconds" screen)

## Usage

This is only a project template. It gives you a basic foundation for this kind of **redirection-app**.

You will have to make change to the `index.html` so that it will use

- your logo/style
- your URL transformation rules (replace the transform function in index.html)

## Test

```bash
npm install
npm run test
```

After the browser is open, you can try all kind of crazy URLs to the fictif "old website", for eg:

```url
http://localhost:8080/client/category/1/#/order/2/?token=abcd&related=456
```

each time the url will be transformed and you will be redirect to the `new-webiste`

## Deployment

We want to keep the final "redirection-app" as minimal as possible. So you should avoid to include others **local** CSS or Javascript, because it might complexify the deployment and configuration on the server. (The hassle is not worth for this kind of application)

In the end

- `index.html` is the only file need to be deployed on server (to replace the old website).
- You will have to configure your server so that all possible URLs to the old website must to be captured by this `index.html`. [This doc](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations) might help.
