const DashboardDisplay = ({ course, index }) => {
  console.log(course);
  const { course_name } = course;
  return (
    <div className="text-left w-full inline">
      <div>
        {index + 1}.{course_name}
      </div>
      <div>
        <hr />
        <p>Total Credit Hour :</p>
      </div>
    </div>
  );
};

export default DashboardDisplay;
