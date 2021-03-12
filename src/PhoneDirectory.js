import React,{Component} from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";
import {BrowserRouter as Router,Route} from "react-router-dom";

class PhoneDirectory extends Component{
    constructor() {
        super();
        this.state = {
            subscriberList: [
                {
                    id: 1,
                    name: "Shilpa Bhat",
                    phone: "9999999999"
                },
                {
                    id: 2,
                    name: "Srishti Gupta",
                    phone: "8888888888"
                }
            ]

        }
    }
    deleteSubscriberHandler=(subscriberId)=>{
        let subscriberList = this.state.subscriberList;
        let subscriberIndex =0;
        subscriberList.forEach(function (subscriber,index){
            if(subscriber.id===subscriber.Id){
                subscriberIndex=index;
            }

        },this);
        let newSubscribers = subscriberList;
        newSubscribers.splice(subscriberIndex,1);
        this.setState({subscribers:newSubscribers});
    }

    addSubscriberHandler=(newSubscriber)=>{
        let subscriberList = this.state.subscriberList;
        if(subscriberList.length > 0){
            newSubscriber.id=subscriberList[subscriberList.length-1].id+1;
        }
        else{
            newSubscriber.id=1;
        }
        subscriberList.push(newSubscriber);
        this.setState({subscriberList:subscriberList});
    }
    render(){
        return(
            <Router>
                <Route exact path='/' render={(props)=><ShowSubscribers {...props} subscriberList={this.state.subscriberList} deleteSubscriberHandler={this.deleteSubscriberHandler}/>}/>
                <Route exact path='/add' render={({history},props)=><AddSubscriber history={history} {...props}  addSubscriberHandler={this.addSubscriberHandler}/>}/>
            </Router>
        )
    }
}
export default PhoneDirectory;