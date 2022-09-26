import Head from "next/head";
import { ReactNode } from "react";
import Nav from "./Nav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Ryan&apos;s Work</title>
      </Head>
      <Nav />
      <main>{children}</main>
    </>
  );
}
