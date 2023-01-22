import React, {useState} from "react";
import axios from "axios";

function useAxios(baseUrl) {
    const [responses, setResponses] = useState([]);
    const [errors, setErrors] = useState(null);
  
    const addResponseData = async (formatter = data => data, restOfUrl = "") => {
        try {
            const response = await axios.get(`${baseUrl}${restOfUrl}`);
            setResponses(data => [...data, formatter(response.data)]);
        } catch (error) {
            setErrors(error)
        }
    };

  
    return [responses, addResponseData, errors];
  }

export default useAxios;