import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Dashboard from "../Dashbord/Dashboard";

const AllCart = () => {
    const [courses ,setCourses] = useState([])
    useEffect(() =>{
        fetch('./../../../public/course.json')
        .then( res => res.json())
        .then (data => setCourses(data))
    },[])
    return (
        <div className="flex gap-4">
            <div className="w-3/4 grid grid-cols-3 gap-4">
                {courses.map(course => <Cart 
                key={course.id} 
                course={course}
                ></Cart>)
                }
            </div>
            <Dashboard></Dashboard>
        </div>
    );
};

export default AllCart;