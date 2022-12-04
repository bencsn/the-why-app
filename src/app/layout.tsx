import "src/styles/globals.css";
import { Poppins } from "@next/font/google";
import { getCurrentUser } from "../server/services/users";
import Button from "../components/Button";
import { BackButton } from "../components/BackButton";

const poppins = Poppins({ subsets: ["latin"], weight: ["200", "600", "700"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  return (
    <html className={"dark " + poppins.className}>
      <head></head>
      <body>
        <div className="min-h-screen py-32 px-4 dark:bg-darkergray">
          <div className="rounded-sm dark:text-white sm:mx-auto sm:max-w-md">
            <div className="px-5 py-4">
              <div className="mb-4">
                <BackButton></BackButton>
              </div>
              <div className="flex items-center justify-between gap-3">
                <h1 className="text-2xl font-black uppercase">The why app. </h1>
                {user && (
                  <form
                    action="/api/users/logout"
                    method="post"
                    className="text-xs"
                  >
                    <Button variant="secondary">Sign out</Button>
                  </form>
                )}
              </div>
              <div className="my-2 text-xl">
                A companion for your incident post mortem sessions
              </div>
            </div>
            <div className=" rounded bg-darkgray p-10">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
