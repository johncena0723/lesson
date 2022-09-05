import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers =  async () =>{
        const response = await axios.get("http://localhost:5000/users");
    if (response.status === 200) {
        setData(response.data);
    }
    };
    console.log("data=>", data);
    return (
        <div>                               
<h2> Home</h2>
        </div>
    )
}

export default Home;