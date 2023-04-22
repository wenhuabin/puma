/*
 * Author: Huabin Wen
 * Start: Sat Apr 22 2023 22:57:45 GMT+0800 (China Standard Time)
 * End: Sun Apr 23 2023 05:57:50 GMT+0800 (China Standard Time)
*/
import {Component} from 'react';
import { CLOSE, TABLE_HEAD, TABLE_TITLE, DETAIL_TITLE, STATUS_COLOR_MAP, CN_MOCK_FLIGHTS, EN_MOCK_FLIGHTS } from '../../data/flights';
import 'scss/screen.scss';

console.log(CN_MOCK_FLIGHTS);

class Screen extends Component {
  constructor(props){
	super(props);
    this.state = {
        LANG: 'CN',
        showDetail: false,
        detail: null,
        pointer: null
    };
    this.renderTableItem = this.renderTableItem.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.renderDetail = this.renderDetail.bind(this);
    this.toggleShowStatus = this.toggleShowStatus.bind(this);
    this.toggleLang = this.toggleLang.bind(this);
  }

  componentDidMount(){
      this.toggleLang();
  }

  toggleLang(){
      let pointer = setInterval(()=>{
          this.setState({
              LANG: this.state.LANG == 'EN' ? 'CN' : 'EN'
          })
      }, 10000);

      this.setState({
          pointer: pointer
      })
  }

  renderTableItem(data){
    return data.map(flight=>
      <tr key={flight.flightNo} onClick={()=>this.toggleShowStatus(flight)}>
        <td>{flight.sta}</td>
        <td>
          <div className={flight.flightClassName}>{flight.flightNo}</div>
        </td>
        <td>
          <div className={flight.fromClassName}>{flight.fromAndVia}</div>
        </td>
        <td>{flight.eta}</td>
        <td className={`${STATUS_COLOR_MAP[flight.statusType]}`}>
          <div className={flight.statusClassName}>{flight.status}</div>
        </td>
      </tr>)
  }

  toggleShowStatus(detail){
      this.setState({
          detail: detail ? detail : this.state.detail
      }, ()=>{
        if(!this.state.show){
            clearInterval(this.state.pointer);
            this.setState({
                show: !this.state.show,
                pointer: null
            });
        }else{
            this.toggleLang();
            this.setState({
                show: !this.state.show
            });
        }
      });
  }

  renderTable(){
    let LANG = this.state.LANG,
        data = LANG == 'CN' ? CN_MOCK_FLIGHTS : EN_MOCK_FLIGHTS;
    return (
       <div className="flights-table-box">
           <div className="table-title">{TABLE_TITLE[LANG]}</div>
            <table className="flights-table">
                <thead>
                    <tr>
                      <th>{TABLE_HEAD[LANG].sta}</th>
                      <th>{TABLE_HEAD[LANG].flight}</th>
                      <th>{TABLE_HEAD[LANG].fromAndVia}</th>
                      <th>{TABLE_HEAD[LANG].eta}</th>
                      <th>{TABLE_HEAD[LANG].status}</th>
                    </tr>
                </thead>
                <tbody>
                    { this.renderTableItem(data) }
                    { this.renderTableItem(data) }
                    { this.renderTableItem(data) }
                </tbody>
            </table>
       </div>
    )
  }

  renderDetail(){
      let detail = this.state.detail,
          LANG = this.state.LANG;
      return detail ? (
        <div className="flight-detail detail-fade-in" onClick={()=>this.toggleShowStatus(detail)}>
          <div className="flight-detail-title">{DETAIL_TITLE[LANG]}</div>
          <div>{TABLE_HEAD[LANG].flight}: {detail.flightNo}</div>
          <div>{TABLE_HEAD[LANG].company}: {detail.company}</div>
          <div>{TABLE_HEAD[LANG].sta}: {detail.sta}</div>
          <div>{TABLE_HEAD[LANG].fromAndVia}: {detail.fromAndVia}</div>
          <div>{TABLE_HEAD[LANG].eta}: {detail.eta}</div>
          <div>{TABLE_HEAD[LANG].status}: {detail.status}</div>
        </div>
      ) : null ;
  }
	
  render() {
    let LANG = this.state.LANG;
    return (
        <div className="airport-screen">
                <div className="all-flights">
                    { this.renderTable() }
                    { this.renderTable() }
                    { this.renderTable() }
                </div>
                { this.state.show ? <div className="detail-mask fade-in">
                    <div className="close" onClick={()=>this.toggleShowStatus()}>{CLOSE[LANG]}</div>
                    { this.renderDetail() }
                    </div> : null }
        </div>
	);
  }
};
                //<div className={`${show ? "flight-detail fade-out" : "flight-detail fade-in"}`}>

export default Screen;
