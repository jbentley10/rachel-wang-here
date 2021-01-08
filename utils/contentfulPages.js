const space = process.env.CONTENTFUL_SPACE
const accessToken = process.env.CONTENTFUL_ACCESS_TOKENen

const client = require('contentful').createClient({
  space: 'ns0m0zesnn32',
  accessToken: 'kVF5scwFcwl0rBgnPcO3l0TtwJjp-kSmYn3Gh9wBk5s',
})

export async function fetchSidebar() {
  const entry = await client.getEntry('7gMWRWuDVJ1WZNrllgHIPq')
  if (entry.fields) return entry
  
  console.log(`Error getting Entry.`)
}

export async function fetchHomepage() {
  const entry = await client.getEntry('6zWeHkoyyGIJGeijxexGAq')
  if (entry.fields) return entry

  console.log(`Error getting Entry.`)
}

export async function fetchAbout() {
  const entry = await client.getEntry('Q35hYov06qy19Seb77m4X')
  if (entry.fields) return entry

  console.log(`Error getting Entry.`)
}

export async function fetchFooter() {
  const entry = await client.getEntry('3WYiOFozmx5PQsZcsvSbqX')
  if (entry.fields) return entry

  console.log(`Error getting Entry.`)
}

export async function fetchResources() {
  const entry = await client.getEntry('4zvUdIOo57x6HmzHmhdd7K')
  if (entry.fields) return entry

  console.log(`Error getting Entry.`)
}

export async function fetchPrivateResources() {
  const entry = await client.getEntry('2Eff8wDa3UJGkousW59PCt')
  if (entry.fields) return entry

  console.log(`Error getting Entry.`)
}

export async function fetchElevateHereMembership() {
  const entry = await client.getEntry('nupzxDJx0ChUlbcGkUGZu')
  if (entry.fields) return entry

  console.log(`Error getting Entry.`)
}

export async function fetchPractice() {
  const entry = await client.getEntry('2wKgTEnUWO7YnyGXKkyp1m')
  if (entry.fields) return entry

  console.log(`Error getting Entry.`)
}