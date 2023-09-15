const DashboardDisplay = ({ course, index }) => {
  
  const { course_name } = course;
  return (
    <div className="text-left w-full inline text-gray-500">
      <div>
        {index + 1}.{course_name}
      </div>
      <div>
        
        {/* <p>Total Credit Hour :{credit}</p> */}
      </div>
    </div>
  );
};

export default DashboardDisplay;
