import React from 'react'

const EmployeeTable = ({ employees }) => {
  console.log(employees)

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
        {/* <tr>
          <td>{employees[0].email}</td>
        </tr> */}
      </tbody>
    </table>
  )
}

export default EmployeeTable
