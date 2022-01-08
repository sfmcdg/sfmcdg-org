import html from './html.js'
import contentTypes from './content-types.js'
import groups from './groups.js'
import Scraper from './scraper.js'


addEventListener('fetch', event => {
  event.respondWith(handleRequest(event))
})

async function handleRequest(event) {

  let cache = caches.default;

  let response = await cache.match(event.request);

  if (!response) {

    let readme

    try {

      let response = await fetch('https://raw.githubusercontent.com/sfmcdg/awesome-salesforce-marketingcloud/master/README.md')
      readme = await response.text();
      readme = readme.match(/## Salesforce Marketing Cloud Developer Group.*/gis)[0]
    } catch (err) {
      console.error(err)
    }

    const requestURL = new URL(event.request.url)
    const path = requestURL.pathname
    let filterLocation=''
    let active=['inactive','inactive','inactive','inactive']
    if (path === '/asia-pacific') {
      filterLocation = 'Asia Pacific'
      active[0]='active'
    }
    if (path === '/europe-middleeast-africa') {
      filterLocation = 'Europe, Middle East, Africa'
      active[1]='active'
    }
    if (path === '/north-america') {
      filterLocation = 'North America'
      active[2]='active'
    }
    if (path === '/south-america') {
      filterLocation = 'South America'
      active[3]='active'
    }

    const locations = groups.filter(({ location }) => location === filterLocation )
    let content = await Promise.all(locations.map(async (group) => {
      let scraper, result, join, heading, upcoming, about
      try {
        scraper = await new Scraper().fetch(group.url)
      } catch (err) {
        console.error(err)
      }
      result = await scraper.querySelector('#about div,#upcoming-events ul li:first-child *').getText({spaced:true})
      if (result['#upcoming-events ul li:first-child *'][0] != undefined) {
        join=`<p class="m-2 mt-3"><button type="button" class="btn btn-primary btn-sm">LEARN MORE &amp; RSVP DETAILS</button></p>`
        upcoming=`<div class="card border-primary m-2"><div class="card-header"><small class="text-muted">Next ${result['#upcoming-events ul li:first-child *'][1].toLowerCase()} on ${result['#upcoming-events ul li:first-child *'][0].slice(0, -1)}</small></div><div class="card-body"><h5 class="card-title"><strong>${result['#upcoming-events ul li:first-child *'][2]}</strong></h5><p class="card-text">${result['#upcoming-events ul li:first-child *'][3]}</div></div>`
      }
      else {
        join=`<p class="m-2 mt-3"><button type="button" class="btn btn-primary btn-sm">LEARN MORE</button></p>`
        upcoming=``
      }
      if (result['#about div'][0] != undefined) {
        about=`<p class="m-2"><small class="text-muted">${result['#about div'][0]}</small></p>`
      }
      else {
        about=``
      }
      return `
        <a href="${group.url}" class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="m-2">${group.name}</h5>
          </div>${about}${upcoming}${join}
        </a>
        `
      }))

      response = new Response( html.replace('{{README}}',readme.replace(/`/g,'\\`').replace(/## /g,'##### ')).replace('{{ACTIVE0}}',active[0]).replace('{{ACTIVE1}}',active[1]).replace('{{ACTIVE2}}',active[2]).replace('{{ACTIVE3}}',active[3]).replace('{{GROUPS}}',content.join('')),
      {
        headers: {
          'content-type': contentTypes.html,
          'cache-control': 'max-age=86400'
        }
      })

      event.waitUntil(cache.put(event.request, response.clone()))
  }

  return response

}
