import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, List, Switch, Text } from "components";
import NewHireInitiationFlowColumn from "components/NewHireInitiationFlowColumn";
import NewHireInitiationFlowRowlabelOne from "components/NewHireInitiationFlowRowlabelOne";

import { CloseSVG } from "../../assets/images";

const NewHireInitiationFlowPage = () => {
  const sideBarMenu = [
    {
      label: (
        <Img
          className="h-[25px] mt-1.5 w-[25px]"
          src="images/img_home.svg"
          alt="home"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-[25px] mt-1.5 text-blue_gray-300 w-[25px]"
          src="images/img_lock.svg"
          alt="lock"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-[25px] mt-1.5 w-[25px]"
          src="images/img_home.svg"
          alt="home_One"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-[25px] mt-1.5 w-[25px]"
          src="images/img_home.svg"
          alt="home_Two"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-[25px] mt-1.5 w-[25px]"
          src="images/img_home.svg"
          alt="home_Three"
        />
      ),
    },
  ];
  const [inputvalue, setInputvalue] = React.useState("");
  const [inputonevalue, setInputonevalue] = React.useState("");

  return (
    <>
      <div className="flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
       
        <div className="flex flex-1 flex-col h-full items-start justify-start md:px-5 shadow-bs1 w-full">
          <div className="bg-gray-50_01 flex flex-col h-full items-center justify-start p-6 sm:px-5 w-full">
            <div className="flex flex-col gap-6 items-start justify-start max-w-5xl w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <NewHireInitiationFlowRowlabelOne className="flex md:flex-col flex-row gap-6 items-center justify-start w-auto md:w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewHireInitiationFlowPage;
