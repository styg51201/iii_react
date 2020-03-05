import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'
import Student from './pages/Student'
import Login from './pages/Login'
import StudentHome from './pages/StudentHome'
import ProtectedRoute from './utils/ProtectedRoute'

function StudentRouter(props) {
  const [login, setLogin] = useState(false)
  console.log('Route', Route)
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="/student">學生</Link>
          </li>
          <li>
            <Link to="/login">登入登出</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/login">
            <Login
              login={login}
              trigger={() => {
                setLogin(!login)
              }}
            />
          </Route>
          {/* ProtectedRoute => 判斷有無登入 */}
          <ProtectedRoute path="/student/:id?">
            <Student isAuth={login} />
          </ProtectedRoute>
          <ProtectedRoute exact path="/" aaa="123">
            <StudentHome isAuth={login} />
          </ProtectedRoute>
        </Switch>
      </Router>
    </>
  )
}

export default StudentRouter
