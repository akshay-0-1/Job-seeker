import { Button, TextInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";
import React, { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";

const CertiInput = (props: any) => {
  const select = fields;
    const [issueDate, setIssueDate] = useState<Date | null>(new Date());
  
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">Add Certificate</div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <TextInput label="Title" withAsterisk placeholder="Input Title" />{" "}
        <SelectInput {...select[1]} />
      </div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          maxDate={new Date()}
          withAsterisk
          label="Issued At"
          value={issueDate}
          onChange={setIssueDate}
        />
        <TextInput label="Certificate Id" withAsterisk placeholder="Input Certificate Id" />{" "}
      </div>
      <div className="flex gap-5">
        <Button
          color="bright-sun.4"
          variant="outline"
          onClick={() => props.setEdit(false)}
        >
          Save
        </Button>
        <Button
          color="red.8"
          variant="light"
          onClick={() => props.setEdit(false)}
        >
          Discard
        </Button>
      </div>
    </div>
  );
};

export default CertiInput;
