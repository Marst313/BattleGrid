import axiosInstance from "@/Service/Config/Instance";




export const HandleLogin = async () => {
    try {
        const response = await axiosInstance.post("/login",{},{
            headers:{
                Authorization:""
            }
        })

        return response.data
        
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const HandleRegister = async (data) => {
    try {
        const response = await axiosInstance.post("/signup",data,{
          
        })

        return response.data
        
    } catch (error) {
        console.log(error)
        throw error
    }
}