import React from 'react';
import "./Widgets.css";

const WidgetsSm = () => {
    return (
        <div className="WidgetLg">
            <h3 className="widgetLgTitle">Latest Transaction</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img  src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e" alt="img" className="widgetLgImg"/>
                        <span className="widgetLgName">Tobe Luka</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$123.00</td>
                    <td className="widgetLgStatus"><button></button></td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetsSm;
