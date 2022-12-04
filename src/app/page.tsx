import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import { getCurrentUser } from "../server/services/users";
import Link from "next/link";

export default async function Page() {
  const user = await getCurrentUser();
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
        {user && (
          <Link href="/incidents">
            <Button type="button" variant="secondary">
              Skip
            </Button>
          </Link>
        )}
      </div>
    </form>
  );
}
