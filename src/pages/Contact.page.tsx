import { useEffect, useState } from "react";
import { animatePageIn } from "../animation/page.anim";
import { Template } from "../template";
import { Socials } from "../data";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const access_key = import.meta.env.VITE_web3form_AccessKey;
const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  useEffect(() => {
    animatePageIn();
  }, []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSent(true);
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", access_key);
    const email:any = formData.get("email");
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

    const isValidEmail = emailRegex.test(email);

    if (isValidEmail) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        (event.target as HTMLFormElement).reset();
        toast.success("Message sent successfully");
      } else {
        console.log("Error", data);
        setIsSent(false);

        toast.error("failed to send message");
      }
    } else {
      toast.error("Invalid Email Id");
    }
    setIsSent(false);
  };

  return (
    <Template page="Contact">
      <div className="Project p-5 w-full h-screen sm:h-[89vh] bg-background">
        <p className="text-4xl">Contact</p>
        <div className="w-full h-fit mt-0 sm:mt-10 flex flex-col items-center sm:flex-row sm:justify-center gap-10">
          {/* form */}
          <form
            onSubmit={onSubmit}
            className=" w-full p-3 sm:p-0 sm:w-[500px] flex flex-col gap-10"
          >
            <div>
              <p className="text-xl sm:text-2xl"> Your Name ?</p>
              <input
                autoComplete="name"
                className="w-full bg-transparent mt-1 h-[50px] text-lg sm:text-xl  border-b border-Navborder px-2  outline-none"
                placeholder="enter u name"
                type="text"
                name="name"
                required
              />
            </div>

            <div>
              <p className="text-xl sm:text-2xl"> Your Email ?</p>
              <input
                autoComplete="email"
                className="w-full bg-transparent mt-1 h-[50px] text-lg sm:text-xl  border-b border-Navborder px-2  outline-none"
                placeholder="enter u email"
                type="text"
                name="email"
                required
              />
            </div>

            <div>
              <p className="text-xl sm:text-2xl">Your Message ?</p>
              <textarea
                rows={5}
                cols={5}
                name="message"
                className="w-full bg-transparent  mt-1 h-[50px] text-lg sm:text-xl border-b border-Navborder px-2 rounded-md outline-none"
                placeholder="enter u name"
                required
              />
            </div>

            <button
              type="submit"
              className="w-28 h-12  cursor-pointer  flex justify-center items-center rounded-full bg-[#827EFC]"
            >
              {!isSent ? (
                "send"
              ) : (
                <svg className="loader" viewBox="20 24 60 55">
                  <circle
                    className="spin"
                    stroke="white"
                    strokeWidth={3}
                    strokeDashoffset={0}
                    strokeLinecap="round"
                    fill="none"
                    r="20"
                    cy="50"
                    cx="50"
                  ></circle>
                </svg>
              )}
            </button>
          </form>
          {/* details */}
          <div className="flex flex-col gap-10 self-start ">
            <div>
              <p className="mb-5 text-sm font-semibold">Contact details : </p>
              <a
                href="mailto:nikhildaivanapally@gmail.com"
                className="border-[1px] border-gray-600 p-3 rounded-full"
              >
                nikhildaivanapally@gmail.com
              </a>
            </div>
            <div>
              <p className="mt-5 text-sm font-semibold">socials : </p>
              <ul className="flex gap-10">
                {Socials.map((el) => {
                  return (
                    <Link to={"/"} key={el}>
                      {el}
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Contact;
