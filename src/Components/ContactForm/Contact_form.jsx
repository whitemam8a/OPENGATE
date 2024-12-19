import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact_form = ({ button }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Отправка данных формы через EmailJS

    emailjs.init("dbqI-RPP_c06PSbSg");

    const serviceID = "service_qaw25ne";
    const templateID = "template_na328em";

    emailjs.send(serviceID, templateID, formData).then(
      (response) => {
        console.log("Успешно отправлено: ", response);
        toast.success("Your message has been sent successfully!", {
          autoClose: 8000,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      },
      (error) => {
        console.log("Ошибка при отправке: ", error);
        toast.error("Some error occurred, try again later ", {
          autoClose: 8000,
        });
      }
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          {/* <label
          htmlFor="name"
          className="block text-lg font-medium text-gray-700"
        >
          Имя
        </label> */}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-black text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div>
          {/* <label
          htmlFor="email"
          className="block text-lg font-medium text-gray-700"
        >
          Email
        </label> */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e-mail"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-black text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div>
          {/* <label
          htmlFor="phone"
          className="block text-lg font-medium text-gray-700"
        >
          Телефон
        </label> */}
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-black text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div>
          {/* <label
          htmlFor="message"
          className="block text-lg font-medium text-gray-700"
        >
          Сообщение
        </label> */}
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
            rows="4"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-black text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-wide button-FS mt-4 w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          {button}
        </button>
      </form>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Contact_form;
