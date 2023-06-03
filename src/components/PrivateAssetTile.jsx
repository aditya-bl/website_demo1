import React from 'react';
import "./privateAssetTile.css";

const InvestItem = (props) => {

  const { funded, generatereturns, image, investment, investors, location, name, returns, percentagefunded } = props;
  const investImgStyle = {
    backgroundImage: `url("${image}")`
  };
  console.log(name);
  return (
    <div className="invest-item">
      <div className="invest-img" style={investImgStyle}>
        <p>Third Party</p>
      </div>
      
      <h3>{name}</h3>
      <p className='location-asset'>{location}</p>
      <div className="details">
        <div className="data">
            <div className="field">Area(sq.ft)</div>
            <div className="record">174,240</div>
        </div>
        <div className="data">
            <div className="field">Price/sq.ft</div>
            <div className="record">₹ 37</div>
        </div>
        <div className="data">
            <div className="field">Appreciation</div>
            <div className="record">87.97%</div>
        </div>
        <div className="data">
            <div className="field">Yield</div>
            <div className="record">NA</div>
        </div>
      </div>
      <div className="price-like-comment">
        <h3>₹ 65.00 L</h3>
        <div className="interact">
            <img width="20px" src="https://icons.veryicon.com/png/o/miscellaneous/ui-basic-linear-icon/like-106.png" alt="" />
            <span>0</span>
            &nbsp;&nbsp;&nbsp;
            <img width="20px" src="https://icons.veryicon.com/png/o/miscellaneous/yuan-jia-college/comment-73.png" alt="" />
            <span>0</span>
        </div>
      </div>

    </div>
  )
}

export default InvestItem