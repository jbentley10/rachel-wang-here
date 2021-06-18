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
  const entry = await client.getEntry('2Iz7POLFBf5F36chHcBoOs')
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

export async function fetchBeHereNowMembership() {
  const entry = await client.getEntry('nupzxDJx0ChUlbcGkUGZu')
  if (entry.fields) return entry

  console.log(`Error getting Entry.`)
}

export async function fetchPractice() {
  const entry = await client.getEntry('2wKgTEnUWO7YnyGXKkyp1m')
  if (entry.fields) return entry

  console.log(`Error getting Entry.`)
}

export async function fetchHeresWhereToBegin() {
  const entry = await client.getEntry('5tmz9lSwMyaOOKRbnS4ctz')
  if (entry.fields) return entry

  console.log(`Error getting Entry.`)
}

export async function fetchProgramOfferings() {
  const entry = await client.getEntry('6PPhQ8w3DU8Kz1voQ6cqZL')
  if (entry.fields) return entry

  console.log(`Error getting Entry.`)
}

export async function fetchFreeMeditations() {
  const entry = await client.getEntry('461RsUfaqhtUnROz8KvEEo')
  if (entry.fields) return entry

  console.log(`Error getting Entry.`)
}


export async function fetchUnderConstruction() {
  const entry = await client.getEntry('UhQ3GRNGk6nq3nukotWDR')
  if (entry.fields) return entry

  console.log(`Error getting Entry.`)
}