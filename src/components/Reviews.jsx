import React from 'react'
import './reviews.css';

const names=["Ashish Kumar","Radha Ramanujan","Ojaswin","Dr. Radhika Sarda","Rajkumar Singh"];
const review=['Thanks to "aasthy" real estate investment is now pocket friendly with a small ticket price of Rs. 10,000.','In an age of high-risk investments, "aasthy" is a great tool to make low risk investments thanks to their data driven approach.',"With aasthy I was able to explore an avenue of investments which historically has been associated with lower risk and higher return.","The journey of investing in a property was so simple. Aasthy wins, by providing easy access to information, and assured returns.","One stop shop, investing in real estate truly redefined by aasthy. You can now invest in real estate at just a click of a button."];
const job=["Business Intelligence Analyst","CFO at Aliaxis SA- Ashirvad Pipes","Developer at IBM","MD/DM Infectious Diseases at AIIMS Delhi","India Head at Doxel"];
const photo=["https://aasthy.com/lp/AK.jpg","https://aasthy.com/lp/RR.jpg","https://aasthy.com/lp/OM.jpg","https://aasthy.com/lp/DRS.jpg","https://aasthy.com/lp/RJS.jpg"];



const ReviewTile =(props)=>{
    const {index} =props;
    const investImgStyle = {
        backgroundImage: `url("${photo[index]}")`
      };
    return(
        <div className="review-tile">
                <div className="photo" style={investImgStyle}>
                </div>
                <div className="testimonies">
                    <p className='review'>{review[index]}</p>
                    <br/>
                    <h4 className="name">{names[index]}</h4>
                    <p className="job">{job[index]}</p>
                </div>
        </div>
    )
}

const Reviews = () => {
  return (
    <div className="cover">
        <h1 className='heading'>Happy Aasthians</h1>
        <div className='review-container'>
          {[0,1,2,3,4,5].map((i)=>(
            <ReviewTile index={i}/>
          ))}

    </div>
    </div>
    
  )
}

export default Reviews