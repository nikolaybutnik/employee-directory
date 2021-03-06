import React, { useState } from 'react'
import EmployeeItem from '../EmployeeItem'
import './EmployeeTable.css'

const EmployeeTable = ({ employees, setEmployees }) => {
  const [directionFirstName, setDirectionFirstName] = useState(true)
  const [directionLastName, setDirectionLastName] = useState(true)
  const [directionRole, setDirectionRole] = useState(true)

  const sortTable = (arr, num) => {
    let sortedArr
    switch (num) {
      case 0:
        sortedArr = [...arr].sort((a, b) => {
          if (directionFirstName) {
            setDirectionFirstName(false)
            return a.name.first > b.name.first
              ? 1
              : b.name.first > a.name.first
              ? -1
              : 0
          } else {
            setDirectionFirstName(true)
            return a.name.first < b.name.first
              ? 1
              : b.name.first < a.name.first
              ? -1
              : 0
          }
        })
        break
      case 1:
        sortedArr = [...arr].sort((a, b) => {
          if (directionLastName) {
            setDirectionLastName(false)
            return a.name.last > b.name.last
              ? 1
              : b.name.last > a.name.last
              ? -1
              : 0
          } else {
            setDirectionLastName(true)
            return a.name.last < b.name.last
              ? 1
              : b.name.last < a.name.last
              ? -1
              : 0
          }
        })
        break
      case 2:
        sortedArr = [...arr].sort((a, b) => {
          if (directionRole) {
            setDirectionRole(false)
            return a.role > b.role ? 1 : b.role > a.role ? -1 : 0
          } else {
            setDirectionRole(true)
            return a.role < b.role ? 1 : b.role < a.role ? -1 : 0
          }
        })
        break
      default:
        break
    }
    setEmployees(sortedArr)
  }

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
    const newArray = employeeArray.filter(
      (employee) => employee.props.checked === true
    )
    return newArray
  }

  return (
    <table>
      <tbody>
        <tr>
          <th>Photo</th>
          <th onClick={() => sortTable(employees, 0)}>
            <i className="fa fa-sort"></i> First Name
          </th>
          <th onClick={() => sortTable(employees, 1)}>
            <i className="fa fa-sort"></i> Last Name
          </th>
          <th onClick={() => sortTable(employees, 2)}>
            <i className="fa fa-sort"></i> Role
          </th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {renderTableData()}
      </tbody>
    </table>
  )
}

export default EmployeeTable
