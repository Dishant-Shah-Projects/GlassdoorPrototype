import React, { Component } from 'react';
import moment from 'moment';

class PhotoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const photo = this.props.photo;
    return (
      <tr>
        <td class="summary">
          <p>
            Company: <strong>{photo.CompanyName}</strong>
          </p>

          <img style={{ width: '100px', height: '100px' }} src={photo.PhotoURL}></img>
        </td>
        <td class="submitted center"> {moment(photo.DateUploaded).format('ll')}</td>
        <td class="itemStatus hideMob center"> {photo.Status}</td>
        <td class="actions center noWrap">
          {/*<a href="/member/account/editInterview_input.htm?editId=38213485&amp;gdToken=KHHEmO68WzDfNopVTPHw_w%3AMQFMIcRK2h7CuTbpk18qNXS_vgJg3Fu1f1Y2qm_3Kre-KPP_Sch4oLGVC3Adc8V-SPEZ2WoRsCk9hoK9zZdqcA%3Ah1yX63Ywq_qPtBqVDb6WXjZFftZU3lin7oj6qHsXjqM">
                    Edit
                </a>
      &nbsp;&nbsp;|&nbsp;&nbsp;*/}
          <a
            href="#"
            onclick="return GD.account.showDeleteContentConfirm('/member/account/interviews_execute.htm?deleteId=38213485&amp;gdToken=KHHEmO68WzDfNopVTPHw_w%3AMQFMIcRK2h7CuTbpk18qNXS_vgJg3Fu1f1Y2qm_3Kre-KPP_Sch4oLGVC3Adc8V-SPEZ2WoRsCk9hoK9zZdqcA%3Ah1yX63Ywq_qPtBqVDb6WXjZFftZU3lin7oj6qHsXjqM', 'Interview');"
          >
            Delete
          </a>
        </td>
      </tr>
    );
  }
}

export default PhotoCard;
