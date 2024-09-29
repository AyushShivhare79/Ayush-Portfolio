export default function Heading({ title }: { title: string }) {
  return (
    <>
      <h1 className="text-4xl py-5">{title}</h1>
    </>
  );
}
