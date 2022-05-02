import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export function HeadTitle({ children }) {
  const fixed_name = " - WikiNote"
  return (
    <>
      <Head>
        <title>{children + fixed_name}</title>
        <meta property="og:title" content={children + fixed_name} key="title" />
      </Head>
      <div className="pb-1" />
      <h1 className="px-1 font-bold text-4xl text-base-900 border-solid border-b-4">
        {children}
      </h1>
      <div className="pb-2" />
    </>
  );
}

export function ContentH2({ children }) {
  return (
    <>
      <div className="pb-1" />
      <div className="border-dashed border-b-[3px] bg-base-500 pt-5">
        <h2 className="font-semibold text-base-900 text-2xl">{children}</h2>
      </div>
      <div className="pb-2" />
    </>
  );
}

export function ContentH3({ children }) {
  return (
    <>
      <div className="pb-2" />
      <div className="border-dotted border-b-2 bg-base-500 pt-2">
        <h2 className="font-semibold text-base-800 text-xl">{children}</h2>
      </div>
      <div className="pb-2" />
    </>
  );
}

export function ContentCode({ children }) {
  return (
    <>
      <div className="pt-1" />
      <div className="rounded-md bg-base-800 pb-3 pt-3 shadow-md shadow-slate-800/50 overflow-x-auto">
        <code className="pl-4 z-10 text-base-100 py-3">{children}</code>
      </div>
      <div className="pb-2" />
    </>
  );
}

export function ContentP({ children }) {
  return (
    <>
      <p className="text-base-700">{children}</p>
    </>
  );
}

export function ContentB({ children }) {
  return (
    <>
      <p className="text-base-800 font-bold">{children}</p>
    </>
  )
}

export function ContentA({ href, children }) {
  return (
    <>
      <Link href={href} passHref>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-1 text-base-600 hover:text-sky-600 cursor-pointer"
        >
              {children}
        </a>
      </Link>
    </>
  );
}

export function ContentDel({ children }) {
  return (
    <>
      <p className="text-base-600 line-through">{children}</p>
    </>
  )
}

export function ContentUl({ children }) {
  return (
    <>
      <ul className="list-disc pl-7">{children}</ul>
    </>
  )
}

export function ContentImg({ children }) {
  return (
    <>
      <ul className="list-disc pl-7">{children}</ul>
    </>
  )
}
