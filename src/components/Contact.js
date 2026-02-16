const Contact = () => {
  return (
    <div className="my-4 mx-auto w-6/12 py-8 border-2 border-gray-200 rounded-md shadow-lg">
      <h1 className="text-center font-bold text-2xl p-2">Contact Us</h1>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <input
          type="text"
          name=""
          id=""
          className="border-2 border-gray-200 rounded-md py-1 px-2  shadow-lg box-border"
          placeholder="Enter Name"
        />
        <input
          type="text"
          name=""
          id=""
          className="border-2 border-gray-200 rounded-md py-1 px-2  shadow-lg box-border"
          placeholder="Enter Contact Number"
        />
        <button className="bg-black text-white font-bold border-2 border-gray-200 py-1 px-2 rounded-md shadow-lg cursor-pointer hover:bg-gray-200 hover:text-black hover:border-black">
          Submit
        </button>
      </div>
    </div>
  );
};
export default Contact;
