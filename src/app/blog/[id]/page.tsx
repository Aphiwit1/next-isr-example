interface Post {
  id: string;
  title: string;
  content: string;
}

// // Next.js will invalidate the cache when a
// // request comes in, at most once every 60 seconds.
// export const revalidate = 60;

// // We'll prerender only the params from `generateStaticParams` at build time.
// // If a request comes in for a path that hasn't been generated,
// // Next.js will server-render the page on-demand.
// export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const ids = ["1", "2", "3"];
  return ids.map((id) => {
    return {
      id: id,
    };
  });
}

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <main>
      <h1>{params.id}</h1>
    </main>
  );
}
