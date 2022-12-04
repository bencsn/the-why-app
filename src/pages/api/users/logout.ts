import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    res.setHeader("Set-Cookie", `user=; path=/; HttpOnly`);
    res.redirect(`/`);
  } else {
    // methods not allowed
    res.status(405).json({ message: "Method not allowed" });
  }
}
