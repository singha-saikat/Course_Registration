import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Dashboard from "../Dashbord/Dashboard";

const AllCart = () => {
  const [courses, setCourses] = useState([]);
  const [dashboard, setDashboard] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    fetch("./../../../public/course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleSelectBtn = (course) => {
    let credit = course.credit_hours;
    let price = course.course_price;
    const isExist = dashboard.find((item) => item.id == course.id);

    if (isExist) {
      return [...dashboard];
    } else {
      dashboard.forEach((item) => {
        credit = credit + item.credit_hours;
        price = price + item.course_price;
      });
      const remaining = 20 - credit;
      if (credit > 20 && remaining < 0) {
        toast.warn("You have exceeded the credit limit!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        toast.warn("You have no credit hour!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return [...dashboard];
      } else {
        setRemaining(remaining);
        setCredit(credit);
        setPrice(price);
        setDashboard([...dashboard, course]);
      }
    }

    const newCourseAdd = [...dashboard, course];
    setDashboard(newCourseAdd);
  };

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
      <Dashboard
        dashboard={dashboard}
        remaining={remaining}
        credit={credit}
        price={price}
      ></Dashboard>
      <ToastContainer />
    </div>
  );
};

export default AllCart;
