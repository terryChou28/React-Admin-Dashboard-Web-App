import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons'

export default function Topbar() {
  return (
  <div className="topbar">
    <div className="topbarWrapper">
      <div className="topleft">
        <span className="logo">Terry Admin</span>
      </div>
      <div className="topRight">
        <div className="topbarIconContainer">
          <NotificationsNone />
          <span className="topIconBadge">2</span>
        </div>
        <div className="topbarIconContainer">
          <Language />
          <span className="topIconBadge">2</span>
        </div>
        <div className="topbarIconContainer">
          <Settings />
        </div>
        <img src="https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.6435-9/52654522_10156876479085928_5537523720102346752_n.jpg?_nc_cat=106&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=TBt9qpW2_bEAX_xfUlj&_nc_ht=scontent.fyvr4-1.fna&oh=00_AT987dEgcT1y4BWRvvSv02TQq0rRh7mPK-vDwu3WaQE6cQ&oe=629D6413" alt="" className="topAvatar" />
      </div>
    </div>
  </div>
  )
}
