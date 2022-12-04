import React from "react";

export default function IncidentPage({
  params,
}: {
  params: { incidentId: string };
}) {
  const incidentId = params.incidentId;

  return <div>Incident goes here</div>;
}
