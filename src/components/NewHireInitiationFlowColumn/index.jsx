import React from "react";

import { Button, Img, Text } from "components";

const NewHireInitiationFlowColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-center justify-start w-full">
          <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
            <Text
              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
              size="txtInterBold24"
            >
              {props?.p566768}
            </Text>
            <Button
              className="border border-gray-200 border-solid cursor-pointer flex items-center justify-center min-w-[136px] rounded-lg"
              leftIcon={
                <Img
                  className="h-4 mr-2 my-px"
                  src="images/img_close.svg"
                  alt="close"
                />
              }
              color="white_A700"
              size="sm"
              variant="fill"
            >
              <div className="font-inter font-semibold text-left text-sm">
                {props?.closebutton}
              </div>
            </Button>
          </div>
          <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start w-full">
            <Button
              className="!text-teal-600 border border-gray-200 border-solid cursor-pointer font-inter font-semibold min-w-[121px] text-center text-sm"
              shape="round"
              color="white_A700"
              size="md"
              variant="fill"
            >
              {props?.personalinfobutton}
            </Button>
            <div className="flex flex-col items-start justify-start w-4">
              <Img
                className="h-4 w-4"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </div>
            <Button
              className="!text-teal-600 border border-gray-200 border-solid cursor-pointer font-inter font-semibold min-w-[62px] text-center text-sm"
              shape="round"
              color="white_A700"
              size="md"
              variant="fill"
            >
              {props?.rolebutton}
            </Button>
            <div className="flex flex-col items-start justify-start w-4">
              <Img
                className="h-4 w-4"
                src="images/img_arrowright.svg"
                alt="arrowright_One"
              />
            </div>
            <Button
              className="!text-teal-600 border border-gray-200 border-solid cursor-pointer font-inter font-semibold min-w-[112px] text-center text-sm"
              shape="round"
              color="white_A700"
              size="md"
              variant="fill"
            >
              {props?.roledetailsbutton}
            </Button>
            <div className="flex flex-col items-start justify-start w-4">
              <Img
                className="h-4 w-4"
                src="images/img_arrowright.svg"
                alt="arrowright_Two"
              />
            </div>
            <Button
              className="!text-teal-600 border border-gray-200 border-solid cursor-pointer font-inter font-semibold min-w-[131px] text-center text-sm"
              shape="round"
              color="white_A700"
              size="md"
              variant="fill"
            >
              {props?.compensationbutton}
            </Button>
            <div className="flex flex-col items-start justify-start w-4">
              <Img
                className="h-4 w-4"
                src="images/img_arrowright.svg"
                alt="arrowright_Three"
              />
            </div>
            <Button
              className="!text-deep_orange-500 border border-deep_orange-500 border-solid cursor-pointer font-inter font-semibold min-w-[115px] text-center text-sm"
              shape="round"
              color="gray_50"
              size="md"
              variant="fill"
            >
              {props?.agreementsbutton}
            </Button>
            <div className="flex flex-col items-start justify-start w-4">
              <Img
                className="h-4 w-4"
                src="images/img_arrowright.svg"
                alt="arrowright_Four"
              />
            </div>
            <Button
              className="!text-blue_gray-700 border border-gray-200 border-solid cursor-pointer font-inter font-semibold min-w-[131px] text-center text-sm"
              shape="round"
              color="white_A700"
              size="md"
              variant="fill"
            >
              {props?.additionalinfobutton}
            </Button>
            <div className="flex flex-col items-start justify-start w-4">
              <Img
                className="h-4 w-4"
                src="images/img_arrowright.svg"
                alt="arrowright_Five"
              />
            </div>
            <Button
              className="!text-blue_gray-700 border border-gray-200 border-solid cursor-pointer font-inter font-semibold min-w-[80px] text-center text-sm"
              shape="round"
              color="white_A700"
              size="md"
              variant="fill"
            >
              {props?.sourcebutton}
            </Button>
            <div className="flex flex-col items-start justify-start w-4">
              <Img
                className="h-4 w-4"
                src="images/img_arrowright.svg"
                alt="arrowright_Six"
              />
            </div>
            <Button
              className="!text-blue_gray-700 border border-gray-200 border-solid cursor-pointer font-inter font-semibold min-w-[105px] text-center text-sm"
              shape="round"
              color="white_A700"
              size="md"
              variant="fill"
            >
              {props?.equipmentbutton}
            </Button>
            <div className="flex flex-col items-start justify-start w-4">
              <Img
                className="h-4 w-4"
                src="images/img_arrowright.svg"
                alt="arrowright_Seven"
              />
            </div>
            <Button
              className="!text-blue_gray-700 border border-gray-200 border-solid cursor-pointer font-inter font-semibold min-w-[67px] text-center text-sm"
              shape="round"
              color="white_A700"
              size="md"
              variant="fill"
            >
              {props?.offerbutton}
            </Button>
            <div className="flex flex-col items-start justify-start w-4">
              <Img
                className="h-4 w-4"
                src="images/img_arrowright.svg"
                alt="arrowright_Eight"
              />
            </div>
            <Button
              className="!text-blue_gray-700 border border-gray-200 border-solid cursor-pointer font-inter font-semibold min-w-[81px] text-center text-sm"
              shape="round"
              color="white_A700"
              size="md"
              variant="fill"
            >
              {props?.reviewbutton}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

NewHireInitiationFlowColumn.defaultProps = {
  p566768: "Select Agreements, Notices and Other Documents",
  closebutton: "Save & Close",
  personalinfobutton: "Personal Info",
  rolebutton: "Role",
  roledetailsbutton: "Role Details",
  compensationbutton: "Compensation",
  agreementsbutton: "Agreements",
  additionalinfobutton: "Additional Info",
  sourcebutton: "Source",
  equipmentbutton: "Equipment",
  offerbutton: "Offer",
  reviewbutton: "Review",
};

export default NewHireInitiationFlowColumn;
