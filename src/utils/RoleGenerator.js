const RoleGenerator = (arr) => {
  const devRoles = [
    'Web Developer',
    'QA Engineer',
    'Database Administrator',
    'Computer Systems Analyst',
    'Network Administrator',
  ]

  return arr.map((item) => ({
    ...item,
    role: devRoles[Math.floor(Math.random() * 5)],
  }))
}

export default RoleGenerator
