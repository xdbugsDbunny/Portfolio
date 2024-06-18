import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CiUser } from "react-icons/ci";

const DialogBox = ({ onClose }) => {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = React.useRef();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => {
          setOpen(false);
          onClose();
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left font-['Nova_Round'] ">
                      <Dialog.Title
                        as="div"
                        className="text-base flex items-center font-semibold leading-6 text-gray-900"
                      >
                        <h1 className="text-[3vw]">Hello </h1>
                        <CiUser size={'3vw'}  />
                        <br/>
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-[1.5vw] text-gray-500">
                          This Webiste is Developed By Suraj Singh Negi and 
                          design is inspired by{" "}
                          <a
                            href="https://ochi.design"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[1.8vw] font-semibold text-blue-500 underline "
                          >
                            Ochi.design
                          </a>{" "}
                          and{" "}
                          <a
                            href="https://asingla.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[1.8vw] font-semibold text-blue-500 underline "
                          >
                            Anirudh Singhal
                          </a>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                    
                  >
                    Okay
                  </button>
                  <a
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto cursor-pointer"
                    href="https://ochi.design"
                  >
                    Ochi
                  </a>
                  <a
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto cursor-pointer"
                    href="https://asingla.netlify.app/"
                  >
                    Anirudh
                  </a>
                  <a
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto cursor-pointer"
                    href="https://www.youtube.com/watch?v=AZXYSlxj0vU"
                  >
                    Tutorial
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default DialogBox;
