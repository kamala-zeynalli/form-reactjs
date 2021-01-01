import React, {Component} from 'react';
class Form extends Component{

    constructor(props) {
        super(props);
        this.state = {
            username: '' ,
            email: '' ,
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleChange (event) {
        event.preventDefault();
        this.setState( {
        [event.target.name] :event.target.value
        })
       
    }

   onSubmit(event ) {
       event.preventDefault();
       if (this.state.username!=""&& this.state.email!=""&& this.state.password!="") {
           alert("SUCCESS")
       }
       else{
         alert("Someting went wrong.")
       }
   }
    render() {
        return(
         <div className="header-text">
             <h2 className="join">Join to us for Learning Code With WebAcademy </h2>
             <h3>Register now</h3>
             <form onSubmit={this.handleSubmit}>
                
             <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              /> 
             <br/>
               <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              />
              <br/>
               <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              /> 
              <br/>
             <button onClick={this.onSubmit}>click</button>
             </form>
         </div>
        )
    }
}
export default Form;