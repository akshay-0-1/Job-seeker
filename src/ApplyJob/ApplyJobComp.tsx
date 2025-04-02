import {
  Button,
  CheckIcon,
  Divider,
  FileInput,
  LoadingOverlay,
  Notification,
  NumberInput,
  rem,
  Textarea,
  TextInput,
} from "@mantine/core";
import {
  IconArrowLeft,
  IconBookmark,
  IconCheck,
  IconPaperclip,
} from "@tabler/icons-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplyJobComp = () => {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [sec, setSec] = useState(5);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setSubmit(true);
    let x = 5;
    setInterval(() => {
      --x;
      setSec(x);
      if (x === 0) {
        navigate("/find-jobs");
      }
    }, 1000);
  };
  const handlePreview = () => {
    setPreview(!preview);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="w-2/3 m-auto">
        <LoadingOverlay
        className="!fixed"
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 1 }}
          loaderProps={{ color: "bright-sun.4", type: "bars" }}
        />
        <div className="flex justify-between ">
          <div className="flex gap-2 items-center">
            <div className="p-3 bg-mine-shaft-800 rounded-xl">
              <img className="h-14" src={`/Icons/Google.png`} alt="" />
            </div>

            <div>
              <div className="font-semibold text-2xl">Web Developer</div>
              <div className="text-lg text-mine-shaft-300">
                Google &bull; 3 days ago &bull; 122 Applicants
              </div>
            </div>
          </div>
        </div>
        <Divider my={"xl"} />
        <div className="text-xl font-semibold mb-5">
          Submit Your Application
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={
                '${preview? "text-mine-shaft-100  font-semibold" : ""}'
              }
              label="Full Name"
              withAsterisk
              placeholder="Enter Full Name"
            />
            <TextInput
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={
                '${preview? "text-mine-shaft-100  font-semibold" : ""}'
              }
              label="Full Email"
              withAsterisk
              placeholder="Enter Email"
            />
          </div>
          <div className="flex gap-10 [&>*]:w-1/2">
            <NumberInput
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={
                '${preview? "text-mine-shaft-100  font-semibold" : ""}'
              }
              label="Contact Number"
              withAsterisk
              placeholder="Enter Contact Number"
              hideControls
              min={0}
              max={9999999999}
              clampBehavior="strict"
            />
            <TextInput
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={
                '${preview? "text-mine-shaft-100  font-semibold" : ""}'
              }
              label="Enter Portfolio Url "
              withAsterisk
              placeholder="Enter Url"
            />
          </div>
          <FileInput
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={'${preview? "text-mine-shaft-100  font-semibold" : ""}'}
            withAsterisk
            leftSection={<IconPaperclip stroke={1.5} />}
            label="Attach your CV"
            placeholder="Your CV"
            leftSectionPointerEvents="none"
          />
          <Textarea
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={'${preview? "text-mine-shaft-100  font-semibold" : ""}'}
            withAsterisk
            placeholder="Type Something About Yourself..."
            label="Cover Letter"
            autosize
            minRows={4}
          />
          {!preview && (
            <Button
              onClick={handlePreview}
              color="bright-sun.4"
              variant="light"
            >
              Preview
            </Button>
          )}
          {preview && (
            <div className="flex gap-10 [&>*]:w-1/2">
              <Button
                fullWidth
                onClick={handlePreview}
                color="bright-sun.4"
                variant="outline"
              >
                Edit
              </Button>
              <Button
                fullWidth
                onClick={handleSubmit}
                color="bright-sun.4"
                variant="light"
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </div>
      <Notification
        icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />}
        className={`!border-bright-sun-400 z-[1001] !fixed top-0 left-[40%] 
          transition duration-300 ease-in-out
          ${submit ? "translate-y-16" : "-translate-y-20"}`}
        color="teal"
        title="Application Submitted Successfully!"
        mt="md"
        withCloseButton={false}
        withBorder
      >
        Redirecting to Find Job in {sec} seconds
      </Notification>
    </>
  );
};

export default ApplyJobComp;
