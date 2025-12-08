"use client";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

export default function RedirectHome({ id }: { id: string }) {
  // const router = useRouter();

  // useEffect(() => {
  //   router.replace("/");
  // }, [router]);

  return (
    <div>
      <h1>Redirecting to home... {id}</h1>
    </div>
  );
}
