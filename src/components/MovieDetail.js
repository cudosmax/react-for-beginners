export default function MovieDetail({ id, title, coverImg, summary }) {
  return (
    <>
      <h1>{title}</h1>
      <img src={coverImg} alt={id}></img>
      <p>{summary}</p>
    </>
  );
}
