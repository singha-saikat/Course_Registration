import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Dashboard from "../Dashbord/Dashboard";

const AllCart = () => {
    const [courses ,setCourses] = useState([])
    const [dashboard,setDashboard] = useState([])
    const [credit,setCredit] = useState(0)
    useEffect(() =>{
        fetch('./../../../public/course.json')
        .then( res => res.json())
        .then (data => setCourses(data))
    },[])
    const handleSelectBtn = (course) =>{
        const newCourseAdd = [...dashboard,course]
        setDashboard(newCourseAdd)
        
    }
    const handleCredit = (course) =>{
        const newCredit = [...credit,course]
        setCredit(newCredit)

    }
    

    return (
        <div className="md:flex gap-4">
            <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map(course => <Cart 
                key={course.id} 
                course={course}
                handleSelectBtn={handleSelectBtn}
                handleCredit={handleCredit}
                ></Cart>)
                }
            </div>
            <Dashboard dashboard={dashboard} credit={credit} ></Dashboard>
        </div>
    );
};

export default AllCart;