import React, { useState } from "react";

import { Button, Img, Input, List, Switch, Text } from "components";
import { CloseSVG } from "../../assets/images";

function NewHireInitiationFlowRowlabelOne(props) {
  const [inputvalue, setInputvalue] = useState("");
  const [inputonevalue, setInputonevalue] = useState("");
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const [selectedFile, setSelectedFile] = useState(null);


  const handleFileChange = (event) => {
    // Handle file selection
    const file = event.target.files[0];
    setSelectedFile(file);

    // Trigger file upload logic immediately
    handleUpload(file);
  };

  const handleUpload = (file) => {
    // Handle file upload logic here
    if (file) {
      console.log('Uploading file:', file);
      // Add your file upload logic here
    } else {
      console.log('No file selected');
    }
  };


  
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col gap-3 h-[1250px] md:h-auto items-start justify-start p-4 rounded-lg w-[500px] sm:w-full">
          <Text
            className="text-base text-gray-900 w-full"
            size="txtInterMedium16"
          >
            {props?.labelOne}
          </Text>
          <div className="flex flex-col gap-3 items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Input
                name="input"
                placeholder="Search"
                value={inputvalue}
                onChange={(e) => setInputvalue(e)}
                className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-inter p-0 text-left text-sm w-full"
                wrapClassName="border border-blue_gray-100 border-solid flex w-full"
                prefix={
                  <Img
                    className="cursor-pointer h-5 mr-2.5 my-auto"
                    src="images/img_search.svg"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    fillColor="#9ca3af"
                    className="cursor-pointer h-5 my-auto"
                    onClick={() => setInputvalue("")}
                    style={{
                      visibility:
                        inputvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                }
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              ></Input>
            </div>
            <Text
              className="text-gray-900 text-sm w-auto"
              size="txtInterMedium14"
            >
              {props?.text}
            </Text>
            <div className="flex sm:flex-col flex-row gap-3 items-start justify-start w-full">
              <Input
                name="selectinput"
                placeholder="Job Templates"
                className="!placeholder:text-gray-900 !text-gray-900 font-inter p-0 text-left text-sm w-full"
                wrapClassName="border border-blue_gray-100 border-solid flex flex-1 md:h-auto w-full"
                suffix={
                  <Img
                    className="mt-px mb-[5px] h-2.5 ml-[35px]"
                    src="images/img_chevrondown.svg"
                    alt="chevron-down"
                  />
                }
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              ></Input>
              <Input
                name="selectinput_One"
                placeholder="Locations"
                className="!placeholder:text-gray-900 !text-gray-900 font-inter p-0 text-left text-sm w-full"
                wrapClassName="border border-blue_gray-100 border-solid flex flex-1 md:h-auto w-full"
                suffix={
                  <Img
                    className="h-2.5 ml-[35px] my-[3px]"
                    src="images/img_chevrondown.svg"
                    alt="chevron-down"
                  />
                }
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              ></Input>
            </div>
            <div className="flex sm:flex-col flex-row gap-3 items-start justify-start w-full">
              <Input
                name="selectinput_Two"
                placeholder="Subsidiary"
                className="!placeholder:text-gray-900 !text-gray-900 font-inter p-0 text-left text-sm w-full"
                wrapClassName="border border-blue_gray-100 border-solid flex flex-1 md:h-auto w-full"
                suffix={
                  <Img
                    className="mt-px mb-[5px] h-2.5 ml-[35px]"
                    src="images/img_chevrondown.svg"
                    alt="chevron-down"
                  />
                }
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              ></Input>
              <Input
                name="selectinput_Three"
                placeholder="Seniority"
                className="!placeholder:text-gray-900 !text-gray-900 font-inter p-0 text-left text-sm w-full"
                wrapClassName="border border-blue_gray-100 border-solid flex flex-1 md:h-auto w-full"
                suffix={
                  <Img
                    className="mt-px mb-[5px] h-2.5 ml-[35px]"
                    src="images/img_chevrondown.svg"
                    alt="chevron-down"
                  />
                }
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              ></Input>
            </div>
            <div className="bg-white-A700 flex sm:flex-col flex-row gap-2 items-center justify-start px-1.5 py-2 rounded w-full">
              <div className="flex flex-1 flex-row gap-[3px] items-center justify-start w-full">
                <Text className="text-gray-900 text-sm" size="txtInterMedium14">
                  {props?.textOne}
                </Text>
                <Text
                  className="flex-1 text-gray-900 text-sm w-auto"
                  size="txtInterMedium14"
                >
                  {props?.textTwo}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Switch
                    onColor="#e5e7eb"
                    offColor="#e5e7eb"
                    onHandleColor="#ffffff"
                    offHandleColor="#ffffff"
                    value={false}
                    className="w-[40%]"
                  />
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtInterRegular16"
                    >
                      {props?.writelabeltext}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border  border-solid flex flex-col items-start justify-start rounded-lg shadow-bs w-[468px] sm:w-full">
            <List
              className="flex flex-col gap-px items-center w-full"
              orientation="vertical"
            >
              <div className="bg-gray-50_01 border border-gray-200 border-solid flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between p-5 rounded-tl-lg rounded-tr-lg w-full">
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtInterMedium16Bluegray700"
                  >
                    {props?.drugpolicies}
                  </Text>
                </div>
                <Img
                  className="h-3 w-3"
                  src="images/img_chevrondown_blue_gray_700.svg"
                  alt="chevrondown"
                />
              </div>
              <div className="bg-gray-50_01 border border-gray-200 border-solid flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between p-5 w-full">
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtInterMedium16Bluegray700"
                  >
                    {props?.employeehandbooks}
                  </Text>
                </div>
                <Img
                  className="h-3 w-3"
                  src="images/img_chevrondown_blue_gray_700.svg"
                  alt="chevrondown"
                />
              </div>
              <div className="bg-gray-50_01 border border-gray-200 border-solid flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between p-5 w-full">
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Text
                    className="text-base text-blue_gray-700 w-auto"
                    size="txtInterMedium16Bluegray700"
                  >
                    {props?.equipmentselection}
                  </Text>
                </div>
                <Img
                  className="h-3 w-3"
                  src="images/img_chevrondown_blue_gray_700.svg"
                  alt="chevrondown"
                />
              </div>
            </List>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="bg-gray-100 border border-gray-200 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-5 w-full">
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtInterMedium16"
                  >
                    {props?.noncompeteagreements}
                  </Text>
                </div>
                <Img
                  className="h-3 w-3"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                />
              </div>
              <div className="bg-white-A700 border-gray-200 border-solid border-x flex flex-col gap-2.5 items-start justify-start p-2 w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <label className="cursor-pointer flex items-center justify-between w-full" />
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <Button
                    onClick={() =>
                      document.querySelector('input[type="file"]').click()
                    }
                    className="cursor-pointer flex items-center justify-between w-full"
                    rightIcon={
                      <Img
                        className="ml-3"
                        src="images/img_arrowright_blue_gray_900_01.svg"
                        alt="arrow_right"
                      />
                    }
                    shape="square"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  >
                    <div className="font-inter font-medium text-left text-sm">
                      {props?.coloradoNonCompeteAgreement}
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-between w-full"
                    rightIcon={
                      <Img
                        className="ml-3"
                        src="images/img_arrowright_blue_gray_900_01.svg"
                        alt="arrow_right"
                      />
                    }
                    shape="square"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  >
                    <div className="font-inter font-medium text-left text-sm">
                      {props?.floridaNonCompeteAgreement}
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-between w-full"
                    rightIcon={
                      <Img
                        className="ml-3"
                        src="images/img_arrowright_blue_gray_900_01.svg"
                        alt="arrow_right"
                      />
                    }
                    shape="square"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  >
                    <div className="font-inter font-medium text-left text-sm">
                      {props?.illinoisNonCompeteAgreement}
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-between w-full"
                    rightIcon={
                      <Img
                        className="ml-3"
                        src="images/img_arrowright_blue_gray_900_01.svg"
                        alt="arrow_right"
                      />
                    }
                    shape="square"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  >
                    <div className="font-inter font-medium text-left text-sm">
                      {props?.kansasNonCompeteAgreement}
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-between w-full"
                    rightIcon={
                      <Img
                        className="ml-3"
                        src="images/img_arrowright_blue_gray_900_01.svg"
                        alt="arrow_right"
                      />
                    }
                    shape="square"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  >
                    <div className="font-inter font-medium text-left text-sm">
                      {props?.newYorkNonCompeteAgreement}
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-between w-full"
                    rightIcon={
                      <Img
                        className="ml-3"
                        src="images/img_arrowright_blue_gray_900_01.svg"
                        alt="arrow_right"
                      />
                    }
                    shape="square"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  >
                    <div className="font-inter font-medium text-left text-sm">
                      {props?.utahNonCompeteAgreement}
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_01 border border-gray-200 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-5 w-full">
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtInterMedium16Bluegray700"
                >
                  {props?.payrollhandbook}
                </Text>
              </div>
              <Img
                className="h-px max-h-px sm:w-[]"
                src="images/img_chevrondown_blue_gray_700.svg"
                alt="chevrondown"
              />
            </div>
            <div className="bg-gray-50_01 border border-gray-200 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-5 w-full">
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtInterMedium16Bluegray700"
                >
                  {props?.ptopolicy}
                </Text>
              </div>
              <Img
                className="h-px max-h-px sm:w-[]"
                src="images/img_chevrondown_blue_gray_700.svg"
                alt="chevrondown_One"
              />
            </div>
            <div className="bg-gray-50_01 border border-gray-200 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-5 w-full">
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtInterMedium16Bluegray700"
                >
                  {props?.safetymanuals}
                </Text>
              </div>
              <Img
                className="h-px max-h-px sm:w-[]"
                src="images/img_chevrondown_blue_gray_700.svg"
                alt="chevrondown_Two"
              />
            </div>
            <div className="bg-gray-50_01 border border-gray-200 border-solid flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-5 w-full">
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <Text
                  className="text-base text-blue_gray-700 w-auto"
                  size="txtInterMedium16Bluegray700"
                >
                  {props?.sexualharassment}
                </Text>
              </div>
              <Img
                className="h-px max-h-px sm:w-[]"
                src="images/img_chevrondown_blue_gray_700.svg"
                alt="chevrondown_Three"
              />
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col gap-3 h-[507px] md:h-auto items-start justify-start p-4 rounded-lg w-[500px] sm:w-full">
          <Text
            className="text-base text-gray-900 w-full"
            size="txtInterMedium16"
          >
            {props?.labelTwo}
          </Text>
          <div className="flex flex-col items-start justify-start w-full">
            <Input
              name="input_One"
              placeholder="Search"
              value={inputonevalue}
              onChange={(e) => setInputonevalue(e)}
              className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-inter p-0 text-left text-sm w-full"
              wrapClassName="border border-blue_gray-100 border-solid flex w-full"
              prefix={
                <Img
                  className="cursor-pointer h-5 mr-2.5 my-auto"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  fillColor="#9ca3af"
                  className="cursor-pointer h-5 my-auto"
                  onClick={() => setInputonevalue("")}
                  style={{
                    visibility:
                      inputonevalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={20}
                  width={20}
                  viewBox="0 0 20 20"
                />
              }
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            ></Input>
          </div>
          <div className="bg-gray-100 border border-gray-200 border-solid flex flex-col gap-6 h-full items-center justify-start p-10 sm:px-5 rounded-lg w-full">
            <Img
              className="h-16 w-14"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
            <Text
              className="leading-[150.00%] max-w-[388px] md:max-w-full text-center text-gray-600 text-xs"
              size="txtInterSemiBold12"
            >
              {props?.textThree}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}

NewHireInitiationFlowRowlabelOne.defaultProps = {
  labelOne: "Available Documents",
  text: "Filter by:",
  textOne: "53",
  textTwo: "Available Documents",
  writelabeltext: "Select All",
  drugpolicies: "Drug Policies",
  employeehandbooks: "Employee Handbooks",
  equipmentselection: "Equipment Selection",
  noncompeteagreements: "Non-Compete Agreements",
  californiaNonCompeteAgreement: "California - Non-Compete Agreement",
  coloradoNonCompeteAgreement: "Colorado - Non-Compete Agreement",
  floridaNonCompeteAgreement: "Florida - Non-Compete Agreement",
  illinoisNonCompeteAgreement: "Illinois - Non-Compete Agreement",
  kansasNonCompeteAgreement: "Kansas - Non-Compete Agreement",
  newYorkNonCompeteAgreement: "New York - Non-Compete Agreement",
  utahNonCompeteAgreement: "Utah - Non-Compete Agreement",
  payrollhandbook: "Payroll Handbook",
  ptopolicy: "PTO Policy",
  safetymanuals: "Safety Manuals",
  sexualharassment: "Sexual Harassment",
  labelTwo: "Selected Documents",
  textThree:
    "Select documents from the left panel to have employees review them and provide a signature acknowledging review",
};

export default NewHireInitiationFlowRowlabelOne;
