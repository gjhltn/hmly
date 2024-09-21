export default () => {

  self.state={
    temperature:19.2,
    heatingOn: false
  }

  self.switchHeatingOn = () => self.state.heatingOn = true
  self.switchHeatingOff = () => self.state.heatingOn = false

  self.onmessage = (e) => {
    
    console.log("Message received from main script",e.data.eventType);
  
    
    if (e.data.eventType === "on") {
      self.switchHeatingOn()
    }
    if (e.data.eventType === "off") {
      self.switchHeatingOff()
    }

    console.log("Posting message back to main script");
    postMessage(self.state);
  };
}

