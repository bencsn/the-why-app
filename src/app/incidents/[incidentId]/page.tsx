import React from "react";
import Input from "../../../components/Input";
import { getIncidentById } from "../../../server/services/incidents";

export default async function IncidentPage({
  params,
}: {
  params: { incidentId: string };
}) {
  const incidentId = params.incidentId;
  const incident = await getIncidentById(incidentId);

  return (
    <div>
      <Input
        label="Off the top of your head, why did the incident happen?"
        id="first-notice"
      />
    </div>
  );
}
