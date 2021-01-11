import React from 'react'

const Filter = ({ employees, setEmployees, filter, setFilter }) => {
  //   console.log(setEmployees)
  const checkboxHandler = (event) => {
    setFilter({ ...filter, [event.target.value]: !filter[event.target.value] })
    console.log(filter)
    console.log(employees)
    console.log(event.target.value)
    const filteredEmployees = employees.map((employee) => {
      if (employee.role === event.target.value) {
        return { ...employee, checked: !employee.checked }
      } else {
        return employee
      }
    })
    setEmployees(filteredEmployees)
  }

  return (
    <div>
      <h4>Filter Employees by Role</h4>
      <div className="checkbox">
        <input
          type="checkbox"
          value="Web Developer"
          checked={filter['Web Developer']}
          onChange={checkboxHandler}
        ></input>
        <label>Web Developer</label>
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          value="QA Engineer"
          checked={filter['QA Engineer']}
          onChange={checkboxHandler}
        ></input>
        <label>QA Engineer</label>
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          value="Database Administrator"
          checked={filter['Database Administrator']}
          onChange={checkboxHandler}
        ></input>
        <label>Database Administrator</label>
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          value="Computer Systems Analyst"
          checked={filter['Computer Systems Analyst']}
          onChange={checkboxHandler}
        ></input>
        <label>Computer Systems Analyst</label>
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          value="Network Administrator"
          checked={filter['Network Administrator']}
          onChange={checkboxHandler}
        ></input>
        <label>Network Administrator</label>
      </div>
    </div>
  )
}

export default Filter
