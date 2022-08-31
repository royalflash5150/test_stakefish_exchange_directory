import { useEffect, useState } from 'react';
import { COIN_GEC_KO_URL_EXCHANGE, PAGE_COUNT, PAGE_NO } from '../constants';

function ExchangeList() {

  const [list, setList] = useState([]);

  useEffect(() => {
    fetchRecentExchanges();
  }, []);

  const fetchRecentExchanges = () => {
    let url = COIN_GEC_KO_URL_EXCHANGE + `?per_page=${PAGE_COUNT}&page=${PAGE_NO}`;
    fetch(url).then((res) => res.json()).then((data) => {
      setList(data);
    })
  }

  return (
    <>
      <div className='grid place-content-center m-10'>
        <table className="table-auto">
          <thead>
            <tr>
              <th className='border'>#</th>
              <th className='border'>Exchange</th>
              <th className='border'>TRUST_SCORE</th>
              <th className='border'>Country</th>
              <th className='border'>URL</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map((item, idx) => (
                <tr key={idx}>
                  <td className='border p-3'>{item.trust_score_rank}</td>
                  <td className='border flex p-3 items-center'>
                    <img className="rounded-full" src={item.image} alt='logo'></img>
                    <a href={`/detail/${item.id}`} className="text-blue-700">
                      <span className='p-2'>{item.name}</span>
                    </a>
                  </td>
                  <td className='border p-3'>{item.trust_score}</td>
                  <td className='border p-3'>{item.country}</td>
                  <td className='border p-3'>{item.url}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ExchangeList;
