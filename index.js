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
    let active=['inactive','inactive','inactive']
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

    const locations = groups.filter(({ location }) => location === filterLocation )
    let content = await Promise.all(locations.map(async (group) => {
      let scraper, result, join, heading, upcoming, about
      try {
        scraper = await new Scraper().fetch(group.url)
      } catch (err) {
        console.error(err)
      }
      result = await scraper.querySelector('#about div,#upcoming-events ul li:nth-child(1) *,#upcoming-events ul li:nth-child(2) *,#upcoming-events ul li:nth-child(3) *,#upcoming-events ul li:nth-child(4) *,#upcoming-events ul li:nth-child(5) *,#upcoming-events ul li:nth-child(6) *,#upcoming-events ul li:nth-child(7) *,#upcoming-events ul li:nth-child(8) *,#upcoming-events ul li:nth-child(9) *,#upcoming-events ul li:nth-child(10) *').getText({spaced:true})
      if (result['#upcoming-events ul li:nth-child(1) *'][0] != undefined) {
        join=`<p class="m-2 mt-3"><button type="button" class="btn btn-primary btn-sm">LEARN MORE &amp; RSVP DETAILS</button></p>`
        upcoming=`<div class="card border-primary m-2"><div class="card-header"><small class="text-muted">Next ${result['#upcoming-events ul li:nth-child(1) *'][1].toLowerCase()} on ${result['#upcoming-events ul li:nth-child(1) *'][0].slice(0, -1)}</small></div><div class="card-body"><h5 class="card-title"><strong>${result['#upcoming-events ul li:nth-child(1) *'][2]}</strong></h5><p class="card-text">${result['#upcoming-events ul li:nth-child(1) *'][3]}</div></div>`
        for (let i = 2; i < 11; i++) {
          if (result[`#upcoming-events ul li:nth-child(${i}) *`][0] != undefined) {
            upcoming=upcoming+`<div class="card border-primary m-2"><div class="card-header"><small class="text-muted">Next ${result[`#upcoming-events ul li:nth-child(${i}) *`][1].toLowerCase()} on ${result[`#upcoming-events ul li:nth-child(${i}) *`][0].slice(0, -1)}</small></div><div class="card-body"><h5 class="card-title"><strong>${result[`#upcoming-events ul li:nth-child(${i}) *`][2]}</strong></h5><p class="card-text">${result[`#upcoming-events ul li:nth-child(${i}) *`][3]}</div></div>`
          }
        }
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
            <p><span class="badge bg-secondary">${group.country}</span></p>
          </div>${about}${upcoming}${join}
        </a>
        `
      }))

      response = new Response( html.replace('{{README}}',readme.replace(/`/g,'\\`').replace(/## /g,'##### ')).replace('{{ACTIVE0}}',active[0]).replace('{{ACTIVE1}}',active[1]).replace('{{ACTIVE2}}',active[2]).replace('{{GROUPS}}',content.join('')),
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
