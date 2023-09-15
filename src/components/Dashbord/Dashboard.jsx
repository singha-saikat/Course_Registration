import DashboardDisplay from "../DashbordDisplay/DashboardDisplay";

const Dashboard = ({ dashboard,credit ,remaining}) => {
 
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <h3 className="text-blue-600">Credit Hour Remaining {remaining} hr</h3>
        
        <hr  className="m-2"/>
        {
            dashboard.map((course,index) => <DashboardDisplay key={index} course={course} index={index} ></DashboardDisplay>)
        }
         
        
        
      </div>
    </div>
  );
};

export default Dashboard;
