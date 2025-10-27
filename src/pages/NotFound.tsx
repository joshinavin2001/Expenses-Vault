import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-300">
      <div className="">
        <div className="text-center">
          <h2 className="text-4xl mb-4">404</h2>
          <p className="text-gray-400 mb-4">Oops..? Page Not Found</p>
          <Link className="text-blue-500 hover:text-blue-800 underline" to={"/"} >Return To Home</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
