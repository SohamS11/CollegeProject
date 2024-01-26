import {useParams} from "react-router-dom"

const CollegeList = ()=>{
    // The id store url name and help for the fetch information for api 
    const {id} = useParams()
    return (
        <>
           <h1>{id}</h1>
        </>
    )
}

export default CollegeList