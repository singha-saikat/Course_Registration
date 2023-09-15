import DashboardDisplay from "../DashbordDisplay/DashboardDisplay";

const Dashboard = ({ dashboard, remaining, credit ,price }) => {
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl p-4">
        <h3 className="text-blue-600 text-left">Credit Hour Remaining {remaining} hr</h3>

        <hr/>
        {dashboard.map((course, index) => (
          <DashboardDisplay
            key={index}
            course={course}
            index={index}
          ></DashboardDisplay>
        ))}
        <div>
          <hr className="mt-4" />
          <h3 className="text-left font-medium mt-2 ">
            Total Credit Hour :{credit}
          </h3>
          <hr className="mt-4" />
          <h3 className="text-left font-medium mt-2">Total Price : {price} USD</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
