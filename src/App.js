// import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css'
import EmployeeTable from './components/EmployeeTable'
import Header from './components/Header'
import API from './utils/API'

function App() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    API.getEmployees().then((res) => setEmployees(res.results))
  }, [])

  // useEffect(() => {
  //   console.log('Employee Array:')
  //   console.log(employees)
  // }, [employees])

  return (
    <>
      <Header />
      <EmployeeTable employees={employees} />
    </>
  )
}

export default App
