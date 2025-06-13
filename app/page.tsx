import Link from "next/link";

export default function Home() {
  const url = "/en?emptyParam=&nonEmptyParam=value"
  return (
    <div className="flex flex-col p-4">
      <Link
        className="underline text-blue-600"
        href={url}
      >
        {url}
      </Link>

      <span className="text-sm">
        *Middleware redirects any path to &#39;/&#39;
      </span>

      <span className="mt-8 font-bold text-lg">
        Result
      </span>

      <span>
        <span className="font-bold">Local:</span> /?emptyParam=&nonEmptyParam=value
      </span>
      <span>
        <span className="font-bold">Vercel:</span> /?nonEmptyParam=value
      </span>
    </div>
  );
}
