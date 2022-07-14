import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import axios from 'axios';


const Search = () => {
  const [term, setTerm] = useState('programming');
  const [result, setResult] = useState([]);

  useEffect(() => {
    const searchWikipedia = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        },
      });

      setResult(data.query.search);
    };

    if (term && !result.length) {
      searchWikipedia();
    } else {

      const timeoutId = setTimeout(() => {
        if (term) {
          searchWikipedia();
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }

  }, [term]);

  const renderResults = result.map((result) => {
    return (
      <div key={result.pageid} className='item'>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter SearchTerm</label>
          <input
            value={term}
            onChange={e => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderResults}
      </div>
    </div>
  );
}

export default Search;
