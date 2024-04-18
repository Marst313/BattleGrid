import axiosInstance from "@/Service/Config/Instance";

export const HandleLogin = async (data) => {
  try {
    const response = await axiosInstance.post("/login", data);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const HandleRegister = async (data) => {
  try {
    const response = await axiosInstance.post("/signup", data, {});

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
