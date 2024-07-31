import React from 'react'
import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from '../online/Online'

export default function Rightbar({profile}) {

  const HomeRightBar =()=>{
return(
  <>
  <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
          <b>  Taylor Swift</b> and <b>3 others  </b> have birthday today.
          </span>
        </div>
        <img  className="rightbarAd" src="assets/post/3.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
         <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user = {u}/>
          ))}
         
         </ul>
  </>
);
  };

  const ProfileRightbar = ()=>{
    return ( 
      <>
      <h4 className="rightbarTitle"> User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoKey"> Kathmandu</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoKey"> Kathmandu</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship status:</span>
          <span className="rightbarInfoKey"> Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle"> Following </h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/person/5.jpg" alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/person/4.jpg" alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/person/3.jpg" alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/person/2.jpg" alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/person/1.jpg" alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/person/6.jpg" alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
      </div>
      </>
    )
  }

  return (

    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightBar/>}
      </div>
    </div>
  )
}
