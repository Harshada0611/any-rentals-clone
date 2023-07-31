const ContactForm = () => {
  return (
    <div className="w-[90%] m-auto border-[1px] rounded-xl px-4 py-2 mt-6 lg:mt-0">
      <div className="text-xl font-semibold">GET IN TOUCH</div>
      <form className="flex flex-col gap-2 mt-6">
        <div>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Full Name"
            required
          />
        </div>
        <div>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Email Address"
            required
          />
        </div>
        <div>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Contact Number"
            required
          />
        </div>
        <div>
          <textarea
            type="text"
            className="h-[7rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Message"
            required
          />
        </div>
        <div className="flex justify-center mt-3">
          <button className="bg-blue-500 w-[10rem] h-[3rem] rounded-xl text-black font-semibold hover:bg-blue-400 ">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
