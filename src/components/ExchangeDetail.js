import { useEffect, useState } from 'react';
import { COIN_GEC_KO_URL_EXCHANGE } from '../constants';

function ExchangeDetail() {

  // const pageCount = 10;
  // const pageNo = 1;
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   fetchRecentExchanges();
  // }, []);

  // const fetchRecentExchanges = () => {
  //   let url = COIN_GEC_KO_URL_EXCHANGE + `?per_page=${pageCount}&page=${pageNo}`;
  //   fetch(url).then((res) => res.json()).then((data) => {
  //     setList(data);
  //   })
  // }

  // useEffect(() => {
  //   console.log(list);
  // }, [list]);


  return (
    <>
      {/* <div className='grid place-content-center m-10'>
        <table className="table-auto">
          <thead>
            <tr>
              <th className='border'>Exchange</th>
              <th className='border'>Country</th>
              <th className='border'>URL</th>
              <th className='border'>TRUST_SCORE_RANK</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map((item, idx) => (
                <tr key={idx}>
                  <td className='border flex p-3 items-center'>
                    <img className="rounded" src={item.image} alt='logo'></img>
                    <span className='p-2'>{item.name}</span>
                  </td>
                  <td className='border p-3'>{item.country}</td>
                  <td className='border p-3'>{item.url}</td>
                  <td className='border p-3'>{item.trust_score_rank}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div> */}
      Exchange Detail Page!
    </>
  );
}

export default ExchangeDetail;
