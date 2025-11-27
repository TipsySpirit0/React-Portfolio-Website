export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-ghostwhite p-5 lg:p-20 flex justify-center"
    >
      <div className="md:w-[85%] grid lg:grid-cols-2 gap-8 lg:gap-0">
        <div className="flex flex-col gap-5 lg:py-5 lg:px-15">
          <h1 className="text-5xl lg:mb-3">
            Get in <span className="text-frenchblue">Touch</span>
          </h1>
          <p className="text-wrap text-lg text-gray-500">
            Say hello! Whether you have a job opportunity, a project idea, or
            just want to have a chat, feel free to reach out.
          </p>
          <div className="flex flex-row gap-5 items-center flex-wrap">
            <a href="#" className="border-b-2 border-amberglow font-semibold">
              Resume
            </a>
            <h1 className="border-b-2 border-amberglow">
              tobitobe66@gmail.com
            </h1>
          </div>
        </div>

        <div className="lg:w-[75%] mx-4 lg:mx-auto bg-white p-10 rounded-lg shadow-lg">
          <form className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-frenchblue"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-frenchblue"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-frenchblue"
            ></textarea>
            <button
              type="submit"
              className="bg-frenchblue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition w-fit mx-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
