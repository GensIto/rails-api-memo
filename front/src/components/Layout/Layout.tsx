import { ReactNode, FC } from "react";
import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Title = {
  title: string;
  children: ReactNode;
};

export const Layout: FC<Title> = ({ children, title = "Gens Blog" }) => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center font-mono text-gray-800'>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className='w-screen min-h-screen h-full bg-gray-800 p-6'>
        {children}
      </main>
      <Footer />
    </div>
  );
};
