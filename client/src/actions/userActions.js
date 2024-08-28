import axios from "axios";
 
export const registerUser=(users)=>async (dispatch)=>{
    dispatch({type:'USER_REGISTER_REQUEST'})

    try 
    {
        const response = await axios.post('http://localhost:5000/api/user/register', users)
        console.log(response);
        dispatch({type:'USER_REGISTER_SUCCESS'})
    }catch(error){
        dispatch({type:'USER_REGISTER_FAILED',payload:error})
    }

}
