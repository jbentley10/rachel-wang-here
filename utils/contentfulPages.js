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