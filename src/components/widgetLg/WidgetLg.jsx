import "./widgetLg.css";

export default function WidgetLg() {

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
            src="https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.6435-9/137051684_4241554922525405_2757720841713573760_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=RjpT5aAIKGAAX9cnBhJ&_nc_ht=scontent.fyvr3-1.fna&oh=00_AT8OVq3uTugL6WAv59iZWlIizMLyGhJ8253vbMHmAwPwhg&oe=62A61453" 
            alt="" 
            className="widgetLgImg" 
            />
            <span className="widgetLgName"></span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
            src="https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.18169-9/14993337_10154623153658954_2249240204065324204_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=QIahInzC3JcAX95peek&_nc_ht=scontent.fyvr3-1.fna&oh=00_AT_mCcYEPWDJ5wHF3Ru4m6g2FN2swQPHWYIIy8rDSVUYRw&oe=62A491FA" 
            alt="" 
            className="widgetLgImg" 
            />
            <span className="widgetLgName"></span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
            src="https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.18169-9/14993337_10154623153658954_2249240204065324204_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=QIahInzC3JcAX95peek&_nc_ht=scontent.fyvr3-1.fna&oh=00_AT_mCcYEPWDJ5wHF3Ru4m6g2FN2swQPHWYIIy8rDSVUYRw&oe=62A491FA" 
            alt="" 
            className="widgetLgImg" 
            />
            <span className="widgetLgName"></span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
            src="https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.6435-9/137051684_4241554922525405_2757720841713573760_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=RjpT5aAIKGAAX9cnBhJ&_nc_ht=scontent.fyvr3-1.fna&oh=00_AT8OVq3uTugL6WAv59iZWlIizMLyGhJ8253vbMHmAwPwhg&oe=62A61453" 
            alt="" 
            className="widgetLgImg" 
            />
            <span className="widgetLgName"></span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  )
}