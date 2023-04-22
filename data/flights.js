function testIfScrollNeeded(str, maxLen){
    let reg = /[\u4E00-\u9FA5]+/,
        len = 0;

    try{
        for(let i=0; i<str.length; i++){
          if(reg.test(str[i])){
              len += 2;
          }else{
              len += 1;
          }
        }
    }catch(e){};

    return  len > maxLen ? 'word-scroll' : '';
}

function addScrollFlg(flights){
    let result = [];
    for(let i=0; i<flights.length; i++){
        let flight = flights[i];
        flight.flightClassName = testIfScrollNeeded(flight.flightNo, 6);
        flight.fromClassName = testIfScrollNeeded(flight.fromAndVia, 9);
        flight.statusClassName = testIfScrollNeeded(flight.status, 8);
        result.push(flight);
    }
    return result;
}


export const TABLE_HEAD = {
    CN: {
        sta: '计划',
        eta: '预计',
        flight: '航班号',
        fromAndVia: '前站/经停',
        status: '状态',
        company: '航空公司名称'
    },
    EN: {
        sta: 'STA',
        eta: 'ETA',
        flight: 'Flight',
        fromAndVia: 'From/Via',
        status: 'Status',
        company: 'Company Name'
    }
}

export const TABLE_TITLE = {
    CN: '国内到达航班动态（T2）',
    EN: 'Domestic Arrivals(T2)'
}

export const DETAIL_TITLE = {
    CN: '航班详细信息',
    EN: 'Details of Flight'
}
export const CLOSE = {
    CN: '关闭',
    EN: 'Close'
}

export const STATUS_COLOR_MAP = {
    0: "status-arriving",
    1: 'status-arrived',
    2: 'status-unnormal',
};

export const CN_MOCK_FLIGHTS = addScrollFlg([{
    company: '国航',
    sta: '16:30',
    eta: '16:35',
    flightNo: 'HU7436',
    fromAndVia: '北京/呼和浩特',
    status: "天气原因/延误/前方起飞",
    statusType: 2 
},{
    company: '国航',
    sta: '16:30',
    eta: '16:35',
    flightNo: 'HU7936',
    fromAndVia: '北京',
    status: "到达",
    statusType: 1 
},{
    company: '国航',
    sta: '16:30',
    eta: '16:35',
    flightNo: 'MU7431',
    fromAndVia: '北京',
    status: "到达",
    statusType: 2 
},{
    company: '国航',
    sta: '16:30',
    eta: '16:35',
    flightNo: 'MU9936',
    fromAndVia: '三亚/长沙',
    status: "前方起飞",
    statusType: 0 
},{
    company: '国航',
    sta: '16:30',
    eta: '16:35',
    flightNo: 'HU7436 MU2333',
    fromAndVia: '北京',
    status: "",
    statusType: 0 
}]);

export const EN_MOCK_FLIGHTS = addScrollFlg([{
    company: 'Air China',
    sta: '16:30',
    eta: '16:35',
    flightNo: 'HU7436',
    fromAndVia: 'Beijing/Huhehaote',
    status: "Weather Reason/Delay/Arriving",
    statusType: 2 
},{
    company: 'Air China',
    sta: '16:30',
    eta: '16:35',
    flightNo: 'HU7936',
    fromAndVia: 'Beijing',
    status: "Arrived",
    statusType: 1 
},{
    company: 'Air China',
    sta: '16:30',
    eta: '16:35',
    flightNo: 'MU7431',
    fromAndVia: 'Hangzhou',
    status: "Arrived",
    statusType: 2 
},{
    company: 'Air China',
    sta: '16:30',
    eta: '16:35',
    flightNo: 'MU9936',
    fromAndVia: 'Sanya/Changsha',
    status: "Arriving",
    statusType: 0 
},{
    company: 'Air China',
    sta: '16:30',
    eta: '16:35',
    flightNo: 'HU7436 MU2333',
    fromAndVia: 'Shanghai',
    status: "",
    statusType: 0 
}]);
