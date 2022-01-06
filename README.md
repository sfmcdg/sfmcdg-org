# sfmcdg.org

Used to organise content for the [sfmcdg.org](https://sfmcdg.org/) page

## About

The worker script displays a page containing:

1. List of Trailblazer `groups.js` and their events
2. Contents from the [readme](https://raw.githubusercontent.com/sfmcdg/awesome-salesforce-marketingcloud/master/README.md) without the table of contents.

## Config

### wrangler.toml

```
name = "sfmcdg-org"
type = "webpack"
account_id = [REPLACE-WITH-CLOUDFLARE-WORKER-ACCOUNT-ID]
workers_dev = true
route = ""
zone_id = ""
```

## Deploying

1. Clone repo.
2. Make wrangler.toml file.
3. Use [wrangler](https://github.com/cloudflare/wrangler) publish the sfmcdg.org worker.
4. In the sfmcdg.org domain setup a worker using the route `sfmcdg.org` using the sfmcdg.org worker.
5. That is it.

## Notes

The worker script has a 24 hour cache to minimise all the fetching subrequests.

To disable the change change change the test `if (!response) {` test accordingly.
