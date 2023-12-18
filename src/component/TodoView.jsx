const TodoView = () => {
  const current = new Date()
  const options = { weekday: 'short', month: 'long', day: 'numeric' }
  const formattedDate = current.toLocaleDateString('en-US', options)

  return (
    <div className="flex items-center ">
      <div className="items-center flex-wrap mt-10">
        <strong className="mb-10 text-3xl">{formattedDate}</strong>
        <span className="flex mt-2 mb-10 text-gray-500 text-xl">Jod your tasks ahead with us!</span>
        <span className="animate-bounce text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </span>
      </div>
      <img src="studywithcoffee-preview.png" alt="studypic" className="w-100" />
    </div>
  )
}

export default TodoView
