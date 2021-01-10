import React from 'react'
import EmployeeItem from './EmployeeItem'

const EmployeeTable = ({ employees }) => {
  console.log(employees)

  const renderTableData = () => {
    return employees.map((employee, index) => (
      <EmployeeItem
        key={index}
        picture={employee.picture.medium}
        fname={employee.name.first}
        lname={employee.name.last}
        email={employee.email}
        phone={employee.phone}
      />
    ))
  }

  return (
    <table>
      <tbody>
        <tr>
          <th>Photo</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {renderTableData()}
      </tbody>
    </table>
  )
}

export default EmployeeTable
