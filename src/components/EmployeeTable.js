import React from 'react'
import EmployeeItem from './EmployeeItem'

const EmployeeTable = ({ employees }) => {
  console.log(employees)

  const renderTableData = () => {
    const employeeArray = employees.map((employee, index) => (
      <EmployeeItem
        key={index}
        picture={employee.picture.medium}
        fname={employee.name.first}
        lname={employee.name.last}
        role={employee.role}
        email={employee.email}
        phone={employee.phone}
        checked={employee.checked}
      />
    ))
    console.log(employeeArray)
    const newArray = employeeArray.filter(
      (employee) => employee.props.checked === true
    )
    // console.log(newArray)
    return newArray
  }

  return (
    <table>
      <tbody>
        <tr>
          <th>Photo</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Role</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {renderTableData()}
      </tbody>
    </table>
  )
}

export default EmployeeTable
