const Alert = ({ type, text }) => {
  return (
    <div className='absolute top-16 sm:top-10 left-2 right-2 sm:left-0 sm:right-0 flex justify-center items-center z-50'>
      <div
        className={`p-2 ${
          type === "danger" ? "bg-red-800" : "bg-blue-800"
        } items-center text-indigo-100 leading-none rounded-lg sm:rounded-full flex flex-col sm:flex-row sm:inline-flex gap-2 sm:gap-0 max-w-[95vw]`}
        role='alert'
      >
        <p
          className={`flex rounded-full ${
            type === "danger" ? "bg-red-500" : "bg-blue-500"
          } uppercase px-2 py-1 text-xs font-semibold sm:mr-3 shrink-0`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className='text-left text-sm sm:text-base'>{text}</p>
      </div>
    </div>
  );
};

export default Alert;
