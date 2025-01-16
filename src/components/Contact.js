const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4"> Contact Us Page </h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Message"
        />
        <button className="border border-black text-white bg-[#fc8019] font-bold rounded-lg p-2 m-2 transform transition duration-50  hover:scale-95">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
