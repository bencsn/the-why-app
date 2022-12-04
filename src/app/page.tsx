import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import TextArea from "../components/TextArea";

export default function Page() {
  return (
    <form action="/api/incidents" method="post">
      <Input
        id="incident-title"
        label="Incident title"
        inputProps={{
          type: "text",
          placeholder: "A short and descriptive title",
          name: "title",
        }}
        className="mb-4"
      />
      <TextArea
        id="incident-description"
        label="Incident description (optional)"
        inputProps={{
          placeholder: "A detailed description of the incident",
          name: "description",
        }}
        className="mb-4"
      />
      <div className="flex justify-end gap-2">
        <Button variant="primary">Create an incident</Button>
      </div>
    </form>
  );
}
