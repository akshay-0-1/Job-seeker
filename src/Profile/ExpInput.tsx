import React, { useState } from "react";
import fields from "../Data/Profile";
import { Anchor, Button, Checkbox, Textarea } from "@mantine/core";
import SelectInput from "./SelectInput";
import { MonthPicker, MonthPickerInput } from "@mantine/dates";

const ExpInput = (props: any) => {
  const [checked, setChecked] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());


  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const select = fields;
  const [desc, setDesc] = useState(
    "As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process."
  );

  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">
        {props.add ? "Add" : "Edit"} Experience
      </div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <SelectInput {...select[0]} />
        <SelectInput {...select[1]} />
      </div>
      <SelectInput {...select[2]} />
      <Textarea
        withAsterisk
        label="Job Description"
        value={desc}
        onChange={(event) => setDesc(event.currentTarget.value)}
        placeholder="Enter Job Description.."
        autosize
        minRows={3}
      />
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          maxDate={endDate || undefined}
          withAsterisk
          label="Started At"
          placeholder="Pick Date.."
          value={startDate}
          onChange={setStartDate}
        />
        <MonthPickerInput
          disabled={checked}
          maxDate={new Date()}
          minDate={startDate || undefined}
          withAsterisk
          label="End At"
          placeholder="End Date.."
          value={endDate}
          onChange={setEndDate}
        />
      </div>
      <Checkbox
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        autoContrast
        label="Currently working here"
      />
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

export default ExpInput;
