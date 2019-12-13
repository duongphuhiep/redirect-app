# Template project for URL Transformation and Redirection app

Status: work in progress..

When we move a website to a new location. We want to inform the visitors about the new location then redirect them to the new location.

A "redirection-app" will be deployed in the old location of the website. It will welcome all visitors to the old website and

1. Transform the old URL to the new one.
   For eg from "https://old-address.com/myapp/#/devil/operations/12554" to https://new-address.com/devil/operations/12554

2. Display a message (and other informations) telling them that "the website is moved", and that they "will be redirected to the new URL in 5 seconds.."
   (so that next time they would have to use the the new URL to bypasse this 5 seconds screen)

## This is only a project template

It gives you a basic foundation for this kind of "redirection-app".
You will have to develop your own app with your

- logo/style
- URL transformation rules (replace the transform javascript)
- and other information

  according to your situation.

## Requirement

You will have to configure your server so that all possible URLs to the old website must to be captured by the "redirection-app"

https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
