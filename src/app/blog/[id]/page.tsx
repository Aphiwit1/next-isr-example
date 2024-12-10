export async function generateStaticParams() {
  const ids = ["1", "2", "3"];
  return ids.map((id) => {
    return {
      id: id,
    };
  });
}

export default async function Page({ params }: any) {
  return (
    <main>
      <h1>{params.id}</h1>
    </main>
  );
}
