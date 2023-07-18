const getSite = async (siteId: string) => {
  const site = await fetch(`https://api.kinsta.com/v2/sites/${siteId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.KINSTA_API_KEY}`
    }
  })

  console.log(await site.json())
}

export default getSite
