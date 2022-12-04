"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function IncidentsPage() {
  const [incidentId, setIncidentId] = React.useState<string>("");
  const router = useRouter()
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/incidents/${incidentId}`);
      }}
    >
      <Input
        label="Incident ID"
        inputProps={{
          type: "text",
          placeholder: "Enter an incident ID",
          name: "incidentId",
          value: incidentId,
          onChange: (e) => setIncidentId(e.target.value),
        }}
        id="incident-id"
        className="mb-3"
      />
      <div className="flex justify-end">
        <Button variant="primary">Go to incident</Button>
      </div>
    </form>
  );
}
