import { Link, routes } from '@redwoodjs/router'
import AddIcon from './../Assets/more.png'
import PersonalIcon from './../Assets/contacts.png'
import ListIcon from './../Assets/list.png'
import SettingIcon from './../Assets/setting.png'
import './DashboardPanel.css'

const DashboardPanel = () => {
  return (
    <div className="dashboardPanel">
      <div>
        <Link to={routes.userDashboard()}>
          <img src={PersonalIcon} className="panelIcon" />{' '}
        </Link>
        <Link to={routes.addPost()}>
          <img src={AddIcon} className="panelIcon" />{' '}
        </Link>
        <Link to={routes.user()}>
          <img src={SettingIcon} className="panelIcon" />{' '}
        </Link>
        {/* <Link to={routes.postsList()}>
          <img src={ListIcon} className="panelIcon" />{' '}
        </Link> */}
      </div>
    </div>
  )
}

export default DashboardPanel
