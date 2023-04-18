
async function fetchRepo(name) {
   const response = await fetch(`https://api.github.com/repos/laupwing/${name}}`)
   return await response.json()
}

const Repo = async ({ name }) => {
   const repo = await fetchRepo(name)
   console.log(repo)
   return (
      <div>Repo</div>
   )
}
export default Repo