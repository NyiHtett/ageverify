import { useState } from "react";
import { parseISO, differenceInYears } from "date-fns";

function App() {

  const [message, setMessage] = useState("");
  const [age, setAge] = useState();

  const handleClick = (e) =>{
    e.preventDefault();
    var birthday = new Date(parseISO(`${year}-${month}-${date}`));
    var currentTime = new Date();
    setAge(differenceInYears(currentTime,birthday));
    
    if(age >= 60){
      <div class="alert alert-primary" role="alert">
       A simple primary alert—check it out!
      </div>
       setMessage("You get your income from your pension");
    }
    else if( age >= 18 && age < 60){
      setMessage("Each month you get a salary");
    }
    else if( age < 18){
      setMessage("You get an allowance");
    }
    else{
      setMessage("The value of the age variable is not numerical");
    }
  }

  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  return (
    <div className="App">
       <head>
        <title> AgeVerifyPro </title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
       </head>

    <body>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    
    {/* navigation panel */}
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <h3 class="text-primary bg-white rounded p-2">AgeVerifyPro</h3>
    </nav>
    <br/>

    <form className="d-flex flex-column">
      <div className="d-flex justify-content-around flex-row" style ={{marginTop:"150px"}}>
  <div class="form-group">
    <input type="number" class="form-control" id="day" placeholder="Day" onChange={(e) => setDate(e.target.value)}/>
  </div>
  <div class="form-group">
    <input type="number" class="form-control" id="month" placeholder="Month" onChange={(e) => setMonth(e.target.value)}/>
  </div>
  <div class="form-group">
    <input type="number" class="form-control" id="year" placeholder="Year" onChange={(e) => setYear(e.target.value)}/>
  </div>
  </div>
  <button type="submit" style ={{width:"200px", margin:"auto", marginTop:"150px", marginBottom:"100px"}} class="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
    
  
      <div class="alert alert-primary" style ={{width:"600px", margin:"auto"}} role="alert"> 
      Age: {age}
      <br/>
      {message}
      </div>
   

    </body>
    </div>
  );
}

export default App;
