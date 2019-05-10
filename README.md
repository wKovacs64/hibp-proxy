# hibp-proxy

## What is this?

This is a quick-and-dirty serverless proxy for Zeit's [Now][now] platform
composed of two lambdas (one for the `haveibeenpwned.com` API and one for the
`pwnedpasswords.com` API). It was created as an example of how to leverage the
`baseUrl` option in [`hibp`][hibp] library if you need to access certain API
endpoints from the browser (as browser `User-Agent`'s are blocked for some
functions).

## What is this not?

Production-ready. :grimacing: You probably shouldn't use this proxy in
production for any kind of real product. Error-handling is essentially
non-existent and the response headers (particularly the cache-related ones)
probably need some attention.

## Run your own

[![Deploy to now][deploy-image]][deploy-link]

> Note: you must set the `hibp-proxy-ua` [secret][now-secrets].

[now]: https://zeit.co/now
[hibp]: https://github.com/wKovacs64/hibp#readme
[deploy-image]: https://deploy.now.sh/static/button.svg
[deploy-link]:
  https://deploy.now.sh/?repo=https://github.com/wKovacs64/hibp-proxy
[now-secrets]:
  https://zeit.co/docs/v2/deployments/environment-variables-and-secrets
