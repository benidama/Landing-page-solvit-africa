import { MapPin, Mail, PhoneCall } from "lucide-react";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

const Contactus = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    console.log(event);
    setUserData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

    console.log(userData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const formErrors = {};

    if (!userData.name.trim()) {
      formErrors.name = "Name is required";
    }

    if (!userData.email.includes("@")) {
      formErrors.email = "Invalid Email address";
    }
    if (!userData.subject.trim()) {
      formErrors.subject = "Subject must be filled";
    }
    if (!userData.message.trim()) {
      formErrors.message = "Message must be filled";
    }

    console.log("Errors that is being returned", formErrors);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      alert("Form sent Successful!");
      setUserData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };
  return (
    <section>
      <div className="flex flex-col sm:flex-col md:flex-row justify-around items-start">
        <div className="flex flex-col items-start justify-start space-y-8">
          <p className="text-sm text-teal-400">Contact us</p>
          <h1 className="text-3xl text-black">Say Hello</h1>
          <div className="flex flex-row justify-center items-center gap-2">
            <div className=" border-2 border-dotted rounded-full p-2">
              <div className="bg-teal-500 p-2 rounded-full">
                <MapPin className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-start">
              <h3>Address</h3>
              <p>Location KG 9 Ave, Kigali</p>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <div className=" border-2 border-dotted rounded-full p-2">
              <div className="bg-teal-500 p-2 rounded-full">
                <Mail className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-start">
              <h3>Address</h3>
              <p>Location KG 9 Ave, Kigali</p>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <div className=" border-2 border-dotted rounded-full p-2">
              <div className="bg-teal-500 p-2 rounded-full">
                <PhoneCall className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-start">
              <h3>Address</h3>
              <p>Location KG 9 Ave, Kigali</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-teal-400">Have Question ?</p>
          <h1 className="text-3xl text-black">Send a Message</h1>
          <form action="#" onSubmit={handleSubmit} className="space-y-3">
            <Input
              label={" Name"}
              value={userData.name}
              onChange={handleChange}
              placeholder={" Name"}
              name={"name"}
              variant={errors.firstName ? "danger" : "default"}
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name}</p>
            )}
            <Input
              label={" Email"}
              value={userData.email}
              onChange={handleChange}
              placeholder={" Email"}
              name={"email"}
              variant={errors.firstName ? "danger" : "default"}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email}</p>
            )}
            <Input
              label={" Subject"}
              value={userData.subject}
              onChange={handleChange}
              placeholder={" Subject"}
              name={"subject"}
              variant={errors.firstName ? "danger" : "default"}
            />
            {errors.subject && (
              <p className="text-sm text-red-600">{errors.subject}</p>
            )}
            <Input
              label={" Message"}
              value={userData.message}
              onChange={handleChange}
              placeholder={" Message"}
              name={"message"}
              multiline
              variant={errors.firstName ? "danger" : "default"}
            />

            {errors.message && (
              <p className="text-sm text-red-600">{errors.message}</p>
            )}
            <Button label={"Send Message"} type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
