import React, { useContext } from "react";
import Swal from "sweetalert2"; // Make sure to import Swal library
import { AuthContext } from "../../providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { createUser, googleSigIn } = useContext(AuthContext);

  const handleSingUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(displayName, email, password);

    createUser(email, password, displayName)
      .then((result) => {
        // User create process, update profile
        const loggedUser = result.user;
        return updateProfile(loggedUser, {
          displayName: displayName,
        }).then(() => {
          console.log("Profile updated successfully");
          console.log(loggedUser);

          // sweet alert
          Swal.fire({
            position: "top-start",
            icon: "success",
            title: "User created successfully",
            showConfirmButton: false,
            timer: 3000,
          });
          form.reset();
        });
      })
      .catch((error) => {
        console.error("Error creating user:", error.message);
        Swal.fire({
          position: "top-start",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  const handleWithGoogleSingUp = () => {
    googleSigIn()
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "top-start",
          icon: "success",
          title: "User created successfully",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .catch((error) => {
        console.error(error.message);
        Swal.fire({
          position: "top-start",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  return (
    <>
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex mx-auto items-center justify-center xl:flex-row">
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Sign up for updates
                  </h3>
                  <form onSubmit={handleSingUp}>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="name"
                        className="inline-block mb-1 font-medium"
                      >
                        Full name
                      </label>
                      <input
                        placeholder="John Doe"
                        required=""
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="displayName"
                        name="displayName"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        E-mail
                      </label>
                      <input
                        placeholder="john.doe@example.org"
                        required=""
                        type="email"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="password"
                        className="inline-block mb-1 font-medium"
                      >
                        Password
                      </label>
                      <input
                        placeholder="password"
                        required=""
                        type="password"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="password"
                        name="password"
                      />
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-[#fc5c3f] hover:bg-[#fc5c3f] hover:opacity-80"
                      >
                        Subscribe
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 sm:text-sm text-center">
                      Already have an account?{" "}
                      <Link className="underline" to="/login">
                        Login
                      </Link>
                    </p>
                    <div className="flex items-center justify-center mt-5">
                      <span
                        onClick={handleWithGoogleSingUp}
                        className="flex items-center bg-white border border-gray-200 px-6 py-2 text-sm font-medium text-gray-800 focus:outline-none cursor-pointer"
                      >
                        <svg
                          className="h-6 w-6 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="800px"
                          height="800px"
                          viewBox="-0.5 0 48 48"
                          version="1.1"
                        >
                          <title>Google-color</title>
                          <desc>Created with Sketch.</desc> <defs> </defs>
                          <g
                            id="Icons"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g
                              id="Color-"
                              transform="translate(-401.000000, -860.000000)"
                            >
                              <g
                                id="Google"
                                transform="translate(401.000000, 860.000000)"
                              >
                                <path
                                  d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                  id="Fill-1"
                                  fill="#FBBC05"
                                ></path>
                                <path
                                  d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                  id="Fill-2"
                                  fill="#EB4335"
                                ></path>
                                <path
                                  d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                  id="Fill-3"
                                  fill="#34A853"
                                ></path>
                                <path
                                  d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                  id="Fill-4"
                                  fill="#4285F4"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                        <span>Continue with Google</span>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;