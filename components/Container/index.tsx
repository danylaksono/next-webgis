import Head from "next/head";

type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

export default function Container({ title, children }: ContainerProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Next WebGIS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}