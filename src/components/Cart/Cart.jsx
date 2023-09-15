const Cart = ({ course, handleSelectBtn }) => {
  const { course_name, image_url, course_detail, course_price, credit_hours } =
    course;

    const handleSelectBTn = () =>{
      handleSelectBtn(course);
     
      // handleCredit(id,credit_hours);

    };
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl h-full p-2 ">
        <figure className="w-full h-48 p-4">
          <img src={image_url} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body p-0  items-center w-full">
          <h2 className="card-title ">{course_name}</h2>
          <p>{course_detail}</p>
          <div className="flex gap-8 md:gap-12 lg:gap-16 justify-between">
            <p>$ Price: {course_price}</p>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 6.042C10.3516 4.56336 8.2144 3.74694 6 3.75C4.948 3.75 3.938 3.93 3 4.262V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.042C13.6483 4.56328 15.7856 3.74685 18 3.75C19.052 3.75 20.062 3.93 21 4.262V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.9969 13.6484 18.8134 12 20.292M12 6.042V20.292"
                  stroke="#1C1B1B"
                  // eslint-disable-next-line react/no-unknown-property
                  stroke-width="1.5"
                  // eslint-disable-next-line react/no-unknown-property
                  stroke-linecap="round"
                  // eslint-disable-next-line react/no-unknown-property
                  stroke-linejoin="round"
                />
              </svg>
              <p>Credit: {credit_hours} </p>
            </div>
          </div>

          <div>
            
            <button
              onClick={handleSelectBTn}
              className="btn  lg:btn-wide   bg-blue-500 mb-4"
            >
              Select
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
