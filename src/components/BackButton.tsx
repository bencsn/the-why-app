"use client";

import Button from "./Button";
import BackIcon from "./BackIcon";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        router.back();
      }}
      variant="text"
    >
      <BackIcon />
    </Button>
  );
}
