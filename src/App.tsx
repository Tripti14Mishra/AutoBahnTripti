
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { Select,Button,FormControl,Input,InputLabel, MenuItem, SelectChangeEvent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


 interface formState{
  userID:any;
  ID:any;
  Title:any;
 completion: Boolean;
 DB:[];
}


 



class App extends React.Component<formState>{
  
  constructor(props:any)
  {
    super(props);
    this.state={
      userID:'',
      ID:'',
      Title:'',
      completion:false,
      DB:[]
      
    }
    this.onSubmit=this.onSubmit.bind(this);
  }
 
  public onCompletionChange = (event: SelectChangeEvent): void => {
    this.setState({completion:event.target.value as string});
  }

   

  public onchangeuserID = (event): void=> {
    this.setState({userID: event.target.value});
  };
  public onchangeID = (event): void=> {
    this.setState({ID: event.target.value});
  };
  public onchangetitle = (event): void=> {
    this.setState({Title: event.target.value});
  };
 
  

  public async componentDidMount(){
 
   this.Dashboard();
    }

   public async  onSubmit(event:any){
      
      let siteurl=` https://jsonplaceholder.typicode.com`;
      console.log(siteurl)
      
      
       var JSONObject= JSON.stringify({"userId":this.state.userID,"id": this.state.ID,"title": this.state.Title,"completed": this.state.completion});
      await fetch(siteurl, {
          method: 'POST',
          headers: new Headers({
              'Content-Type': 'application/json',
          }),
          body: JSONObject,
      }).then(async (response) => await response.json())
          .then(async (data) => {
           alert("Your Action was recorded successfully!")
           var t= document.querySelectorAll(".Formstyle");
           t[0].setAttribute("hidden", "true");
          
           
              
          });
    
    }
    
    public async Dashboard(){

        
      let siteurl=` https://jsonplaceholder.typicode.com`;
      
        try {
          fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {

                 console.log(json);
                 this.setState({DB:json})
                
                  });
             
            }
            catch(e){
              alert("Error");
            }

    }
    

  

    public render(): React.ReactElement{
        return (
          <div className="App">
            <header className="App-header">
              
                <h1 className="App-title">Welcome to Sample for Practical Test</h1>
              </header>
              <div className="Formstyle" hidden={false}>
               <FormControl className="user text">
                  <InputLabel htmlFor="my-input">User ID</InputLabel>
                  <Input id="userID" aria-describedby="my-helper-text" onChange={this.onchangeuserID}/>
                </FormControl>
                <FormControl className="user text">
                  <InputLabel htmlFor="my-input">ID</InputLabel>
                  <Input id="idvalue" aria-describedby="my-helper-text" onChange={this.onchangeID}/>
                </FormControl>
                <br></br>
                <br></br>
                <FormControl className="user text">
                  <InputLabel htmlFor="my-input">Title</InputLabel>
                  <Input id="title" aria-describedby="my-helper-text" onChange={this.onchangetitle}/>
                </FormControl>
                <FormControl className="user dropdown">
                  <InputLabel htmlFor="my-input">Completion Status</InputLabel>
                  <Select id="status"  aria-describedby="my-helper-text"  onChange={this.onCompletionChange}>
                    
                    <MenuItem value="true">True</MenuItem>
                    <MenuItem value="false">False</MenuItem>
                  </Select>
                </FormControl>
                <br></br>
                <br></br>
                <br></br>
    
                <Button variant="contained" color="success" onClick={this.onSubmit}>
                  Save
                </Button>
    
        </div>

        <div className='Dashboard' >
        <TableContainer >
              <Table  aria-label="simple table"  sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                   
                    <TableCell >User ID</TableCell>
                    <TableCell >ID</TableCell>
                    <TableCell >Title</TableCell>
                    <TableCell>Completion Status</TableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>

                              
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          
                          <TableCell  >{this.state.DB.userId}</TableCell>
                          <TableCell >{this.state.DB.id}</TableCell>
                          <TableCell >{this.state.DB.title}</TableCell>
                          <TableCell>{this.state.DB.completed}</TableCell>
                        </TableRow>

                        </TableBody>
               
              
              </Table>
            </TableContainer>
        </div>
          

          </div>
        );
    }
}



export default App;


