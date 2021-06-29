const Contact = () => (
  <div className="min-h-screen hero bg-base-200">
    <div className="flex-col hero-content lg:flex-row-reverse">
      <div className="text-center">
        <h1 className="my-3 text-3xl font-semibold text-base-content">
          Contact Us
        </h1>
        <p className="text-base-content">
          Fill up the form below to send us a message.
        </p>
      </div>
      <div className="m-7">
        <form action="https://api.web3forms.com/submit" method="POST" id="form">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm text-base-content"
            >
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              required
              className="input input-primary input-bordered"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-base-content"
            >
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@company.com"
              required
              className="input input-primary input-bordered"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm text-base-content"
            >
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="+1 (555) 1234-567"
              required
              className="input input-primary input-bordered"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm text-base-content"
            >
              <span className="label-text">Your Message</span>
            </label>

            <textarea
              rows={5}
              name="message"
              id="message"
              placeholder="Your Message"
              className="input input-primary input-bordered"
              required
            ></textarea>
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full px-3 py-4 rounded-md text-primary-content bg-primary focus:bg-primary-focus focus:outline-none"
            >
              Send Message
            </button>
          </div>
          <p
            className="text-base text-center text-base-content"
            id="result"
          ></p>
        </form>
      </div>
    </div>
  </div>
)

export default Contact
