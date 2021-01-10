import React from 'react'

const EmployeeItem = ({ picture, fname, lname, email, phone }) => {
  return (
    <tr>
      <td>
        <img src={picture} alt={`${fname} ${lname}`} />
      </td>
      <td>{fname}</td>
      <td>{lname}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  )
}

export default EmployeeItem
