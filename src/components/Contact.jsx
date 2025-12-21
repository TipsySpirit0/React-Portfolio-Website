export default function Contact() {
  return (
    <section
      id="contact"
      className="p-5 lg:p-20 flex justify-center bg-mainbg dark:bg-mainbg-dark"
    >
      <div className="md:w-[85%] grid lg:grid-cols-2 gap-8 lg:gap-0">
        <div className="flex flex-col gap-5 lg:py-5 lg:px-15">
          <h1 className="text-5xl lg:mb-3 text-primarytext dark:text-primarytext-dark">
            Get in{" "}
            <span className="text-primaryaccent dark:text-primaryaccent-dark">
              Touch
            </span>
          </h1>
          <p className="text-wrap text-lg text-secondarytext dark:text-secondarytext-dark">
            Say hello at{" "}
            <span className="border-b-2 border-secondaryaccent dark:border-secondaryaccent-dark">
              tobitobe66@gmail.com
            </span>
            . Whether you have a job opportunity, a project idea, or just want
            to have a chat, feel free to reach out.
          </p>
          <div className="flex flex-row gap-5 items-center flex-wrap">
            <a
              href="#"
              className="border-b-2 text-primarytext dark:text-primarytext-dark border-secondaryaccent dark:border-secondaryaccent-dark font-semibold"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="lg:w-[75%] mx-4 lg:mx-auto bg-white p-10 rounded-lg shadow-lg">
          <form className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryaccent"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryaccent"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryaccent"
            ></textarea>
            <button
              type="submit"
              className="bg-primaryaccent text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition w-fit mx-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div></div>
    </section>
  );
}
