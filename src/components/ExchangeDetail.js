import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { COIN_GEC_KO_URL_EXCHANGE } from '../constants';

function ExchangeDetail() {

  const [detail, setDetail] = useState([]);
  let params = useParams();

  useEffect(() => {
    fetchExchangeDetail();
  }, []);

  const fetchExchangeDetail = () => {
    let url = COIN_GEC_KO_URL_EXCHANGE + "/" + params.id;
    fetch(url).then((res) => res.json()).then((data) => {
      setDetail(data);
    })
  }

  return (
    <>
      <div className="mt-10 flex justify-center items-center">
        <div className="self-center content-center text-center justify-center items-center">
          <img className="rounded-lg" src={detail.image} alt="logo"></img>
        </div>
      </div>
      <span>{detail.name}</span>

      <div className="my-10">
        <div><b>Country: </b>{detail.country}</div>
        <div><b>Trust Score: </b>{detail.trust_score}</div>
        <div><b>Trust Score Rank: </b>{detail.trust_score_rank}</div>
        <div><b>Established Year: </b>{detail.year_established}</div>
        <div><b>Facebook_URL: </b>{detail.facebook_url}</div>
        <div><b>Reddit_URL: </b>{detail.reddit_url}</div>
        <div><b>Description: </b>{detail.description ? detail.description : "None"}</div>
      </div>

      <div className='m-10 flex justify-center items-center'>
        <a href="/" className='border-2 rounded-md px-4 py-1 hover:bg-gray-200'>Back</a>
      </div>
    </>
  );
}

export default ExchangeDetail;
