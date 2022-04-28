import React, { Component } from 'react'

 class DecideActivity extends Component {
     constructor(props) {
         super(props);
         this.state={
            latitude:0,
            error:'',
            
        }; 
        window.navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            this.setState({
                latitude:position.coords.latitude
            });
            
          },
          (err) =>{
              console.log(err);
              this.setState({
                  error: err.message
              })
    
          }
          );
     }
     componentWillUnmount(){
         this.setState({
             latitude:0
         });
     }
     DecideActivity(lat)
     {
         const currrentMounth=new Date().getMonth() //güncel tarih ve ay bilgisi
         const summer ={
             text:"yüzmeye gidebilirsin",
             iconName:"sun"
         }
         const winter ={
            text:"spor salonuna  gidebilirsin",
            iconName:"snowflake"
        }
         if(lat < 0){
             //north
           return currrentMounth> 3 && currrentMounth < 8 ? winter :summer;
            }
            else{
            //  sorth
           return currrentMounth> 8 || currrentMounth < 5 ? winter :summer;
        }}
              
     
   
  render() {
  
      const{latitude,error}=this.state;
      console.log(this.DecideActivity(latitude));
      if(latitude!==0 && !error)
      {
          const activity= this.DecideActivity(latitude);
          return(
            <h2 className="ui header">  
            <i className= { `${activity.iconName} outline icon`}></i> 
                   <div className ="content">
            {activity.text}
            </div>
          </h2>
             
             
          )
      }
      else if(latitude ===0 && error)
      {
          return(
              <div>
              error:{error}
              </div>
          )
      }

    return (
      <div>
      Loading...
      </div>
    )
  }
}
export default DecideActivity
