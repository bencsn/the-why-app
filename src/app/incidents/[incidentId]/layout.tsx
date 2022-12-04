import React from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { getIncidentById } from "../../../server/services/incidents";
import { getCurrentUser } from "../../../server/services/users";
import Link from "next/link";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { incidentId: string };
}) {
  const incident = await getIncidentById(params.incidentId);

  if (!incident) {
    return (
      <div>
        <div className="mb-4 text-xl">
          Sorry - we could not find the incident in our database
        </div>
        <div className="flex gap-2">
          <Link href="/incidents">
            <Button variant="secondary">Back</Button>
          </Link>
          <Link href="/">
            <Button variant="primary">Create new</Button>
          </Link>
        </div>
      </div>
    );
  }

  const user = await getCurrentUser();

  if (!user) {
    return (
      <form action={`/api/incidents/${params.incidentId}/users`} method="post">
        <Input
          label="Your user display name"
          id="user-display-name"
          hint="This is the name that will be displayed to other users in the session."
          className="mb-4"
          inputProps={{
            type: "text",
            placeholder: "Enter your display name",
            name: "name",
          }}
        />
        <Button variant="primary">Create user</Button>
      </form>
    );
  }

  return (
    <div>
      <div className="mb-3">
        <h1 className="text-2xl font-bold">{incident.title}</h1>
        <div>{user.name}</div>
      </div>
      {children}
    </div>
  );
}
