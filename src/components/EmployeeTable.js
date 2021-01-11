import React from 'react'
import EmployeeItem from './EmployeeItem'

const EmployeeTable = ({ employees, setEmployees }) => {
  // console.log(employees)

  const sortTable = (arr, num) => {
    let sortedArr
    switch (num) {
      case 0:
        sortedArr = [...arr].sort((a, b) =>
          a.name.first > b.name.first ? 1 : b.name.first > a.name.first ? -1 : 0
        )
        break
      case 1:
        sortedArr = [...arr].sort((a, b) =>
          a.name.last > b.name.last ? 1 : b.name.last > a.name.last ? -1 : 0
        )
        break
      case 2:
        sortedArr = [...arr].sort((a, b) =>
          a.role > b.role ? 1 : b.role > a.role ? -1 : 0
        )
        break
      default:
        break
    }
    // console.log(arr)

    // console.log(sortedArr)
    setEmployees(sortedArr)
  }

  // useEffect(
  //   (employees) => {
  //     sortTable(employees)
  //   },
  //   [employees, sortTable]
  // )

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
    // console.log(employeeArray)
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
          <th onClick={() => sortTable(employees, 0)}>
            <i className="fa fa-sort"></i>First Name
          </th>
          <th onClick={() => sortTable(employees, 1)}>
            <i className="fa fa-sort"></i>Last Name
          </th>
          <th onClick={() => sortTable(employees, 2)}>
            <i className="fa fa-sort"></i>Role
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
