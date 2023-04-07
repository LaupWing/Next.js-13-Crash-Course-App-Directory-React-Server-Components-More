import Repo from "~/app/components/Repo"

const RepoPage = ({ params: { name } }) => {
   return (
      <div className="card">
         <h2>{ name }</h2>
         <p>Repo Details</p>
         <Repo name={name} />
      </div>
   )
}
export default RepoPage