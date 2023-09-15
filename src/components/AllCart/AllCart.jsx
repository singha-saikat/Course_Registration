import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Dashboard from "../Dashbord/Dashboard";

const AllCart = () => {
  const [courses, setCourses] = useState([]);
  const [dashboard, setDashboard] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remaining,setRemaining] =useState(0);
  useEffect(() => {
    fetch("./../../../public/course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const handleSelectBtn = (course) => {
    let credit = course.credit_hours;
    const isExist = dashboard.find((item) => item.id == course.id);

    if (isExist) {
      return [...dashboard];
    } else {
      dashboard.forEach((item) => {
        credit = credit + item.credit_hours;
      });
      const remaining = 20 - credit;
      if(credit > 20){
        alert('hello')
      }
      else{
        setRemaining(remaining)
        setCredit(credit)
        setDashboard([...dashboard,course])
      }
    }

    const newCourseAdd = [...dashboard, course];
    setDashboard(newCourseAdd);
  };
  // const handleCredit = (id,credit_hours) =>{
  //   const newCredit = credit + credit_hours;
  //   setCredit(newCredit)

  // }

  return (
    <div className="md:flex gap-4">
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <Cart
            key={course.id}
            course={course}
            handleSelectBtn={handleSelectBtn}
          ></Cart>
        ))}
      </div>
      <Dashboard dashboard={dashboard} credit={credit} remaining={remaining} ></Dashboard>
    </div>
  );
};

export default AllCart;
