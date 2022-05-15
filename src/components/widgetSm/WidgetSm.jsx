import "./widgetSm.css";
import {Visibility} from "@material-ui/icons"

export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
              <img 
              src="https://scontent.fyvr2-1.fna.fbcdn.net/v/t39.30808-6/278155510_164952922563233_8602661701732310072_n.jpg?_nc_cat=110&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=3xAaVoYCr6sAX_ZY6IS&tn=mtNXHpHLaPia3CFA&_nc_ht=scontent.fyvr2-1.fna&oh=00_AT8oNhQe9D71K32J8TC59epnnWzuMfg83Mn21m5x6ZPD9Q&oe=62855567" 
              alt="" 
              className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Rainy Li</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                display
              </button>
            </li>
            <li className="widgetSmListItem">
              <img 
              src="https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.18169-9/14993337_10154623153658954_2249240204065324204_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=QIahInzC3JcAX95peek&_nc_ht=scontent.fyvr3-1.fna&oh=00_AT_mCcYEPWDJ5wHF3Ru4m6g2FN2swQPHWYIIy8rDSVUYRw&oe=62A491FA" 
              alt="" 
              className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Gabriel Lee</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                display
              </button>
            </li>
            <li className="widgetSmListItem">
              <img 
              src="https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.6435-9/137051684_4241554922525405_2757720841713573760_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=RjpT5aAIKGAAX9cnBhJ&_nc_ht=scontent.fyvr3-1.fna&oh=00_AT8OVq3uTugL6WAv59iZWlIizMLyGhJ8253vbMHmAwPwhg&oe=62A61453" 
              alt="" 
              className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Annie Hsieh</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                display
              </button>
            </li>
            <li className="widgetSmListItem">
              <img src="" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUsername"></span>
                <span className="widgetSmUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                display
              </button>
            </li>
            <li className="widgetSmListItem">
              <img src="" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUsername"></span>
                <span className="widgetSmUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                display
              </button>
            </li>
        </ul>
    </div>
  )}