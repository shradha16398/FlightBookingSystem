export class Search {
    pnrNo: any;
    seatNo:any;
    name: any;
    flightNo:any;
    startPoint: any;
    endPoint: any;
    deptTime: any;
    flightDate:any;
    duration: any;
    sex:any;
    classType: any;
    payment: any; 

    constructor(pnrNo: any,seatNo: any,name: any,flightNo: any, startPoint: any,endPoint: any,deptTime: any,flightDate: any,duration: any,sex: any,classType: any,payment: any){
        this.pnrNo = pnrNo;
		this.seatNo = seatNo;
		this.name = name;
		this.flightNo = flightNo;
		this.startPoint = startPoint;
		this.endPoint = endPoint;
		this.deptTime = deptTime;
		this.flightDate = flightDate;
		this.duration = duration;
		this.sex = sex;
		this.classType = classType;
		this.payment = payment;
    }
}