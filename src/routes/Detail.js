import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';

export default function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState();

  useEffect(() => {
    const getDetail = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setDetail(json.data.movie);
      setLoading(false);
    };
    getDetail();
  }, [id]);
  console.log(detail);
  return (
    <div>
      {loading ? (
        'Loading...'
      ) : (
        <MovieDetail
          title={detail?.title}
          coverImg={detail?.medium_cover_image}
          id={detail?.id}
          description={detail?.description_intro}
        />
      )}
    </div>
  );
}
