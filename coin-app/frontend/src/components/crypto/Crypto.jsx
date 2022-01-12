import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Crypto.scss';

function Crypto() {
  const location = useLocation();
  const { crypto } = location.state;
  return (
    crypto?.id ? (
      <div className="crypto-container">
        <div className="crypto-container__rank">
          <h2 className="rank__market-cap">
            Rank #
            {crypto.market_cap_rank}
          </h2>
          <div className="rank__fav">
            <em
              className="far fa-star"
              role="button"
              aria-hidden="true"
              id={crypto.id}
            />
          </div>
        </div>
        <div className="crypto-container__info">
          <picture className="info__picture">
            <source srcSet={crypto.image} />
            <img src={crypto.image} alt={crypto.name} loading="lazy" />
          </picture>
          <h2 className="info__name">
            {crypto.name}
            {' '}
            (
            {crypto.symbol.toUpperCase()}
            )
          </h2>
        </div>
        <div className="crypto-container__data">
          <div>
            <span className="data__current-price">
              Price:
              {' '}
              {crypto.current_price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
            </span>
            <span>24h:</span>
            <span
              className="data__price-change-24h"
              style={crypto.price_change_percentage_24h_in_currency < 0 ? { color: 'rgb(204,40,40)' } : { color: 'rgb(0,100,0)' }}
            >
              {`${crypto.price_change_percentage_24h_in_currency.toFixed(2)} %`}
            </span>
          </div>
          <span className="data__high-price-24h">
            High 24h:
            {' '}
            {crypto.high_24h.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
          </span>
          <span className="data__ath">
            ATH:
            {' '}
            {crypto.ath.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
          </span>
          <span className="data__market-cap">
            Market Cap:
            {' '}
            {crypto.market_cap.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
          </span>
        </div>
        <div className="crypto-container__button">
          <Link to="../">
            <button type="button">Back</button>
          </Link>
        </div>
      </div>
    ) : (
      <div>
        <Link to="../">
          <button type="button">Back</button>
        </Link>
      </div>
    )
  );
}

export default Crypto;
