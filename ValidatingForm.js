import { useState} from 'react';
import "./sam.css";
function ValidatingForm() {
    const initValues={username:'',email:'',password:''}
    const [formValues,setFormValues]=useState(initValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
    const Change=(event)=>{
        const{id,value}=event.target;
        setFormValues({...formValues,[id]:value});
        console.log(formValues);
    }
    const Submit=(event)=>{
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    const validate=(val)=>{
        const errors={};
        const reg=new RegExp("[0-9]+")
        const prg=new RegExp("[A-Z]+") 
        const prg1=new RegExp("[a-z]+")
        const prg2=new RegExp("[!@#$%^&*]+")
        if(!val.username)
        errors.username="Username is Required";
        if(!val.email)
        errors.email="Email is Required";
        if(!val.password)
        errors.password="Password is Required";
        if(reg.test(val.password) &&prg.test(val.password)&&prg1.test(val.password)&&prg2.test(val.password))
        errors.password="Password is strong";
        if(reg.test(val.password) && !prg.test(val.password) && !prg1.test(val.password) && !prg2.test(val.password) ||!reg.test(val.password) && prg.test(val.password) && !prg1.test(val.password) && !prg2.test(val.password)||reg.test(val.password) && !prg.test(val.password) && prg1.test(val.password) && !prg2.test(val.password) ||reg.test(val.password) && !prg.test(val.password) && !prg1.test(val.password) && prg2.test(val.password))
        errors.password="Password is weak";
        if(reg.test(val.password) && prg.test(val.password) && !prg1.test(val.password) && !prg2.test(val.password) ||reg.test(val.password) && !prg.test(val.password) && prg1.test(val.password) && !prg2.test(val.password)||reg.test(val.password) && !prg.test(val.password) && !prg1.test(val.password) && prg2.test(val.password) ||!reg.test(val.password) && prg.test(val.password) && prg1.test(val.password) && !prg2.test(val.password)||!reg.test(val.password) && prg.test(val.password) && !prg1.test(val.password) && prg2.test(val.password)||!reg.test(val.password) && !prg.test(val.password) && prg1.test(val.password) && prg2.test(val.password))
        errors.password="Password is Good";
        if(reg.test(val.password) && prg.test(val.password) && prg1.test(val.password) && !prg2.test(val.password) ||reg.test(val.password) && prg.test(val.password) && !prg1.test(val.password) && prg2.test(val.password)||reg.test(val.password) && !prg.test(val.password) && prg1.test(val.password) && prg2.test(val.password) ||!reg.test(val.password) && prg.test(val.password) && prg1.test(val.password) && prg2.test(val.password))
        errors.password="Password is Good";
        return errors;
    }
    return ( 
        <>
        <div className='container'>
            
            <center>
            {
                Object.keys(formErrors).length===0 && isSubmit?
                (<h1 style={{color:"black"}}>Signed In Successfully</h1>)
                :(<pre>{}</pre>)
            }
        <form onSubmit={Submit}>
            <h1>Dynamic Form</h1><br></br><br></br>
            <div className='row'>
                <label>User Name:&nbsp;</label>
                <input type="text" id='username' placeholder='Type User Name Here' 
                value={formValues.username} onChange={Change}/>
            </div><br>
            </br>
            <p  style={{color:"red"}}>{formErrors.username}</p>
            <div className='row'>
                <label>E-mail:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="email" id='email' placeholder='Type Email-id Here'
                 value={formValues.email} onChange={Change}/>
            </div><br>
            </br>
            <p  style={{color:"red"}}>{formErrors.email}</p>
            <div className='row'>
                <label>Password:&nbsp;</label>
                <input type="password" id='password' 
                placeholder='Type Password Here' value={formValues.password} onChange={Change}/>
            </div><br>
            </br>
            <p  style={{color:"red"}}>{formErrors.password}</p>
            <div className='row'>
                <button className='btn btn-primary'>Login</button>
            </div>
        </form>
        </center></div>
        </>
     );
}
export default ValidatingForm;