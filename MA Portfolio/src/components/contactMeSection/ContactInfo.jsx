import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  const formData = {
    phone: "+92 3043595013",
    location: "Karachi, Pakistan",
    email:"aaliqaisar2@gmail.com"
  };

  return (
    <div className="flex flex-col gap-4">
      <SingleInfo
        text={formData.email}
        Image={HiOutlineMail}
      />
      <SingleInfo
        text={formData.phone}
        Image={FiPhone}
      />
      <SingleInfo
        text={formData.location}
        Image={IoLocationOutline}
      />
    </div>
  );
};

export default ContactInfo;
