import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import Button from "../../components/Button";
import { getAllMyIncidents } from "../../server/services/incidents";
import { getCurrentUser } from "../../server/services/users";

export default async function IncidentsPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/");
  }
  const myIncidents = await getAllMyIncidents(user.id);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-black uppercase">My incidents</h2>
        <Link href="/">
          <Button variant="secondary">New incident</Button>
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {myIncidents?.map((incident) => (
          <Link key={incident.id} href={`/incidents/${incident.id}`}>
            <div className="flex items-center justify-between border px-3 py-2 rounded hover:border-blue-500">
              <div className="flex flex-col gap-2">
                <div className="text-lg font-black">{incident.title}</div>
                <div className="text-sm text-gray-500">
                  {incident.description}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
