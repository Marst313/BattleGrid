import axiosInstance from "@/Service/Config/Instance";

export const HandleLogin = async (data) => {
  try {
    const response = await axiosInstance.post("/login", data, {
      withCredentials: true,
    });

    document.cookie = `jwt=${response.data.token}; expires=${new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString()}; path=/`;

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const HandleRegister = async (data) => {
  try {
    const response = await axiosInstance.post("/signup", data, {});

    document.cookie = `jwt=${response.data.token}; expires=${new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString()}; path=/`;

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
