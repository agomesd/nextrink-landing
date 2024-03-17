import Link from "next/link";
import React from "react";

export function Navbar() {
  return (
    <header className="bg-background p-4 border-b-2 border-border flex justify-between items-center">
      <Link href={"/"}>
        <h1 className="text-4xl text-accent font-black">NextRink</h1>
      </Link>
    </header>
  );
}
