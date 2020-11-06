// import React from "react"
// import Signup from "./Signup";
// import { Container } from "react-bootstrap"
// import { AuthProvider } from "../contexts/AuthContext";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
// import Dashboard from "./Dashboard"
// import Login from "./Login"
// import PrivateRoute from "./PrivateRoute"


// function App(){
//   return(
//     <AuthProvider>
//          <Container className="d-flex align-items-center justify-content-center" 
//     style={{minheight:"100vh"}}>

//       <div className="w-100" style={{ maxWidthh:"200px"}}>
//         <Router>
//           <AuthProvider>
//             <Switch>
//               <Route exact path="/" component={Dashboard}/>
//                <Route path="/signup" component={Signup}/>
//                <Route path="/login" component={Login}/>

//             </Switch>
//           </AuthProvider>
//         </Router>
//       </div>
//     </Container>
//     </AuthProvider>
 
//   )
// }


// export default App;
import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"

function App() {
  return (
      <div >
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
  )
}

export default App
