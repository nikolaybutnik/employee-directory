// import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css'
import EmployeeTable from './components/EmployeeTable'
import Header from './components/Header'
import API from './utils/API'
import RoleGenerator from './utils/RoleGenerator'

function App() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    // API.getEmployees().then((res) => setEmployees(res.results))
    API.getEmployees().then((res) => {
      // console.log(res.results)
      const updatedEmployees = RoleGenerator(res.results)
      setEmployees(updatedEmployees)
      console.log(updatedEmployees)
    })
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
