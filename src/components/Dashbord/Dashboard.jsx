import DashboardDisplay from "../DashbordDisplay/DashboardDisplay";

const Dashboard = ({ dashboard }) => {
 
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <h3 className="text-blue-600">Credit Hour Remaining 7 hr</h3>
        
        <hr  className="m-2"/>
        {
            dashboard.map((course,index) => <DashboardDisplay key={index} course={course}></DashboardDisplay>)
        }
        
      </div>
    </div>
  );
};

export default Dashboard;
