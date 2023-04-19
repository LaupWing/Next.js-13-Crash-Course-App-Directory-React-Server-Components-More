async function fetchRepoContents(name) {
   const response = await fetch(
      `https://api.github.com/repos/bradtraversy/${name}/contents`
   )
   const contents = await response.json()
   return contents
}

const RepoDirs = async ({ name }) => {
   const contents = await fetchRepoContents(name)

   return <div>RepoDirs</div>
}
export default RepoDirs
