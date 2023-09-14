const DashboardDisplay = ({ course }) => {
  console.log(course);
  const { course_name } = course;
  return (
    <div>
      <ol type="1">
        <li>{course_name}</li>
      </ol>
    </div>
  );
};

export default DashboardDisplay;
