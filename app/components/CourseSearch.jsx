"use client"
import { useState } from "react"

const CourseSearch = ({ getSearchResults }) => {
   const [query, setQuery] = useState("")
   const handleSubmit = async (e) => {
      e.preventDefault()
      const res = await fetch(`/api/courses/search?query=${search}`)
      const courses = await res.json()
      getSearchResults(courses)
   }

   return (
      <form 
         onSubmit={handleSubmit}
         className="search-form"
      >
         <input 
            type="text" 
            placeholder="Search Courses..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input" 
         />
         <button 
            className="search-button" 
            type="submit"
         >
            Search
         </button>
      </form>
   )
}
export default CourseSearch