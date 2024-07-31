import React from 'react'
import Topbar from '../../component/topbar/Topbar'
import Sidebar from '../../component/sidebar/Sidebar'
import Feed from '../../component/feed/Feed'
import Rightbar from '../../component/rightbar/Rightbar'

import "./profile.css"

export default function Profile() {
  return (
    <>
        <Topbar/>
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
             <div className="profileRightTop">
                <div className="profileCover">
                 <img className="profileCoverImg" src="assets/post/3.jpg" alt="" />
                 <img className="profileUserImg" src="assets/person/7.jpg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName  ">SadiBaral</h4>
                    <span className="profileInfoDesc  ">Hello my friends.</span>

                </div>
             </div>
             <div className="profileRightBottom">
             <Feed/>
             <Rightbar profile/>
             </div>


        </div>
       
        </div>
        
    </>
  )
}
