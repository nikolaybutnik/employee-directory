import React, { useState, useEffect } from 'react'
import './App.css'
import EmployeeTable from './components/EmployeeTable/EmployeeTable'
import Header from './components/Header'
import Filter from './components/Filter/Filter'
import API from './utils/API'
import RoleGenerator from './utils/RoleGenerator'

function App() {
  const [employees, setEmployees] = useState([])
  const [filter, setFilter] = useState({
    'Web Developer': true,
    'QA Engineer': true,
    'Database Administrator': true,
    'Computer Systems Analyst': true,
    'Network Administrator': true,
  })

  useEffect(() => {
    API.getEmployees().then((res) => {
      const updatedEmployees = RoleGenerator(res.results)
      setEmployees(updatedEmployees)
    })
  }, [])

  return (
    <div className="container">
      <Header />
      <Filter
        employees={employees}
        setEmployees={setEmployees}
        filter={filter}
        setFilter={setFilter}
      />
      <EmployeeTable employees={employees} setEmployees={setEmployees} />
    </div>
  )
}

export default App
