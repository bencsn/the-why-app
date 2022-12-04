import Link from "next/link";
import Button from "../../../../components/Button";
import { getIncidentById } from "../../../../server/services/incidents";

export default async function DeleteConfirmationPage({
  params,
}: {
  params: { incidentId: string };
}) {
  const incident = await getIncidentById(params.incidentId);

  if (!incident) {
    return <div>Incident not found. Perhaps it was deleted?</div>;
  }

  return (
    <div>
      <h1 className="mb-4 text-xl">
        Are you sure you want to delete {incident?.title}?
      </h1>
      <div className="flex items-center gap-2">
        <form action={`/api/incidents/${incident.id}/delete`} method="post">
          <Button variant="secondary">Yes</Button>
        </form>
        <Link href={`/incidents/${incident.id}`}><Button variant="primary">No</Button></Link>
      </div>
    </div>
  );
}
