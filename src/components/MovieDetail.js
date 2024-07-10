export default function MovieDetail({ id, title, coverImg, description }) {
  return (
    <>
      <h1>{title}</h1>
      <img src={coverImg} alt={id}></img>
      <p>{description}</p>
    </>
  );
}
