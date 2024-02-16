// ContactUs.jsx

const ContactUs = () => {
  return (
    <div className="bg-gray-200 container mx-auto max-w-[700px] p-6  rounded-lg shadow-lg mt-20">
      <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="John Doe"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="john@example.com"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
