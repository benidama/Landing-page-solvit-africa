import { MapPin } from "lucide-react";
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

    // VALIDATION

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
      <div>
        <div>
          <p>Contact us</p>
          <h1>Say Hello</h1>
          <div>
            <MapPin className="h-6 w-6" />
            <div className="flex flex-col justify-center items-center">
              <h3>Address</h3>
              <p>Location KG 9 Ave, Kigali</p>
            </div>
          </div>
          <div>
            <MapPin className="h-6 w-6" />
            <div className="flex flex-col justify-center items-center">
              <h3>Address</h3>
              <p>Location KG 9 Ave, Kigali</p>
            </div>
          </div>
          <div>
            <MapPin className="h-6 w-6" />
            <div className="flex flex-col justify-center items-center">
              <h3>Address</h3>
              <p>Location KG 9 Ave, Kigali</p>
            </div>
          </div>
        </div>
        <div>
          <p>Have Question ?</p>
          <h1>Send a Message</h1>
          <form action="#" onSubmit={handleSubmit}>
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
              variant={errors.firstName ? "danger" : "default"}
            />
            {errors.message && (
              <p className="text-sm text-red-600">{errors.message}</p>
            )}
            <Button label={"Send Message"} type="submit" className="w-16" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
