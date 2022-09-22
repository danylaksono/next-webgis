import Head from "next/head";

type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

export function Container({ title, children }: ContainerProps) {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Next WebGIS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
}


export default Container;