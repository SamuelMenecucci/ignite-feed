export function Post({ author, content }) {
  return (
    <>
      <h1>{author ?? "Desconhecido"}</h1>
      <p>{content} </p>
    </>
  );
}
