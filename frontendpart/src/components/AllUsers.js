
import { useQuery } from "@apollo/client"
import { GET_USERS } from "../services"


const AllUsers = ()=>{
    const {loading, error, data} = useQuery(GET_USERS);
  
    if(error){
        return(
            <div><h4>Something is wrong</h4></div>
        )
    }
    if(loading){
        return(
            <div>
                <h3>Data is loading...</h3>
            </div>
        )
    }
    console.log("data",data.getUsers)
 
    

    return(
        <div>
            <h1>All users</h1>
            <ul>
                {
                    data.getUsers.map((e)=>
                      (
                            <div id={e.id}>
                                <p>{e.name}</p>
                                <p>{e.age}</p>
                                <p>{e.city}</p>
                                <p><button className="bg-green-500 text-white rounded p-1 border">Read more</button></p>
                            </div>
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default AllUsers