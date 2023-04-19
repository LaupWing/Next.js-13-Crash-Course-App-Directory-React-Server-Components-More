import Link from "next/link"
import Repo from "~/app/components/Repo"
import RepoDirs from "~/app/components/RepoDirs"

const RepoPage = ({ params: { name } }) => {
   return (
      <div className="card">
         <Link className="btn btn-back" href={"/code/repos"}>
            Back to Repositories
         </Link>
         <Repo name={name} />
         <RepoDirs name={name} />
      </div>
   )
}
export default RepoPage