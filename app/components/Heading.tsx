export default function Heading({ title, id }: { title: string, id: string }) {
  return (
    <>
      <h1 id={id} className="text-4xl py-5">{title}</h1>
    </>
  );
}
