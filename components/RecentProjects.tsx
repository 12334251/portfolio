/* eslint-disable @next/next/no-img-element */
"use client";

import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalProvider,
  ModalTrigger,
} from "./ui/animated-modal";
import { FiSmartphone, FiGithub, FiGlobe } from "react-icons/fi";

const RecentProjects = () => {
  return (
    <ModalProvider>
      <div className="pb-20" id="projects">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
          {projects.map(
            ({
              id,
              title,
              des,
              img,
              iconLists,
              link,
              gitLink,
              mobileAppLink,
              appStoreLink,
              playStoreLink,
            }) => (
              <Modal key={id}>
                <ModalTrigger className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
                  <PinContainer title={gitLink} href={gitLink}>
                    <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                      <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                        <img src="/bg.png" alt="bg-img" />
                      </div>
                      <img
                        src={img}
                        alt={title}
                        className={`z-10 absolute bottom-0 ${
                          appStoreLink || playStoreLink ? "w-[90%] h-[90%]" : ""
                        }`}
                      />
                    </div>
                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                      {title}
                    </h1>
                    <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                      {des}
                    </p>
                    <div className="flex items-center justify-between mt-7 mb-3">
                      <div className="flex items-center">
                        {iconLists.map((icon, index) => (
                          <div
                            key={icon}
                            className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                            style={{
                              transform: `translateX(-${5 * index * 2}px)`,
                            }}
                          >
                            {/* CHECK IF ICON IS EXPRESS JS */}
                            {icon === "/expressjs-icon.svg" ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="p-2 w-full h-full text-white opacity-80"
                              >
                                <path d="m13.78 16.92 3.35-4.54.42.55 2.87 4a1.26 1.26 0 0 0 1.58.6l-4-5.33a.56.56 0 0 1 0-.82l2.1-2.74 1.55-2a1.18 1.18 0 0 0-1.49.55l-3 4-3-4a1.31 1.31 0 0 0-1.58-.55l4 5.2-4.29 5.77a1.23 1.23 0 0 0 1.49-.69M9.93 7.19a4.81 4.81 0 0 0-7.57 2.73L2 11.65v1a5 5 0 0 1 .11.57 5.42 5.42 0 0 0 1.37 3.2 5.24 5.24 0 0 0 6.09.78 4.49 4.49 0 0 0 2.15-3.3c-.52-.16-.81-.07-1 .49a3.36 3.36 0 0 1-2.15 2.39c-3.25 1.09-5.8-1.05-5.66-4.59h8.9c.1-2-.3-3.76-1.88-5m-7 4.22C3 8.77 4.76 7 7.16 7c2.18 0 3.77 1.84 3.83 4.4z"></path>
                              </svg>
                            ) : icon === "/aws-svgrepo-com.svg" ? (
                              <div className="rounded-full bg-white lg:w-7 lg:h-7 w-5 h-5 flex justify-center items-center">
                                <img src={icon} alt={icon} className="p-1" />
                              </div>
                            ) : (
                              <img src={icon} alt={icon} className="p-2" />
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                          Check Live Site
                        </p>
                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                      </div>
                    </div>
                  </PinContainer>
                </ModalTrigger>
                <ModalBody>
                  <ModalContent>
                    <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                      Take a look at my{" "}
                      <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                        {(() => {
                          const items: string[] = [];
                          if (mobileAppLink) items.push("mobile app");
                          if (appStoreLink) items.push("App Store app");
                          if (playStoreLink) items.push("Play Store app");
                          if (link) items.push("website");
                          if (gitLink) items.push("GitHub repo");

                          if (items.length === 1) {
                            return items[0];
                          } else if (items.length === 2) {
                            return items.join(" and ");
                          } else {
                            return (
                              items.slice(0, -1).join(", ") +
                              ", and " +
                              items[items.length - 1]
                            );
                          }
                        })()}
                      </span>{" "}
                      — enjoy! 🚀
                    </h4>
                    <div className="relative w-[80vw] max-w-[100%] aspect-[16/9] overflow-hidden rounded-2xl bg-[#13162d] mx-auto">
                      <img
                        src="/bg.png"
                        alt="dark‐frame background"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <img
                        src={img}
                        alt={title}
                        className={`absolute inset-0 m-auto object-contain ${
                          appStoreLink || playStoreLink
                            ? "w-[90%] h-[90%] bottom-0 mb-0"
                            : " w-full h-full"
                        }`}
                      />
                    </div>
                  </ModalContent>
                  {appStoreLink || playStoreLink ? (
                    <ModalFooter className="flex flex-wrap justify-center gap-4 px-4 py-3">
                      {appStoreLink && (
                        <a
                          href={appStoreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-md hover:from-indigo-600 hover:to-blue-600 transition-colors duration-150"
                        >
                          <span className="flex items-center justify-center mr-2 w-6 h-6 bg-white/30 rounded-full">
                            <FaApple className="w-4 h-4 text-white" />
                          </span>
                          App Store App
                        </a>
                      )}
                      {playStoreLink && (
                        <a
                          href={playStoreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-md hover:from-indigo-600 hover:to-blue-600 transition-colors duration-150"
                        >
                          <span className="flex items-center justify-center mr-2 w-6 h-6 bg-white/30 rounded-full">
                            <FaGooglePlay className="w-4 h-4 text-white" />
                          </span>
                          Play Store App
                        </a>
                      )}
                      {gitLink && (
                        <a
                          href={gitLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center w-full sm:w-auto px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors duration-150"
                        >
                          <span className="flex items-center justify-center mr-2 w-6 h-6 bg-white/20 rounded-full">
                            <FiGithub className="w-4 h-4 text-white" />
                          </span>
                          GitHub Repo
                        </a>
                      )}
                      {link && (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-md hover:from-green-600 hover:to-teal-600 transition-colors duration-15"
                        >
                          <span className="flex items-center justify-center mr-2 w-6 h-6 bg-white/30 rounded-full">
                            <FiGlobe className="w-4 h-4 text-white" />
                          </span>
                          Visit Website
                        </a>
                      )}
                    </ModalFooter>
                  ) : (
                    <ModalFooter className="flex flex-wrap justify-center gap-4 px-4 py-3">
                      {mobileAppLink && (
                        <a
                          href={mobileAppLink}
                          rel="noopener noreferrer"
                          className="inline-flex items-center w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-md hover:from-indigo-600 hover:to-blue-600 transition-colors duration-150"
                        >
                          <span className="flex items-center justify-center mr-2 w-6 h-6 bg-white/30 rounded-full">
                            <FiSmartphone className="w-4 h-4 text-white" />
                          </span>
                          View Mobile App
                        </a>
                      )}
                      <a
                        href={gitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center w-full sm:w-auto px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors duration-150"
                      >
                        <span className="flex items-center justify-center mr-2 w-6 h-6 bg-white/20 rounded-full">
                          <FiGithub className="w-4 h-4 text-white" />
                        </span>
                        GitHub Repo
                      </a>
                      {link && (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-md hover:from-green-600 hover:to-teal-600 transition-colors duration-15"
                        >
                          <span className="flex items-center justify-center mr-2 w-6 h-6 bg-white/30 rounded-full">
                            <FiGlobe className="w-4 h-4 text-white" />
                          </span>
                          Visit Website
                        </a>
                      )}
                    </ModalFooter>
                  )}
                </ModalBody>
              </Modal>
            )
          )}
        </div>
      </div>
    </ModalProvider>
  );
};

export default RecentProjects;
