const API = {
  getEmployees: () => {
    return fetch(
      'https://randomuser.me/api/?results=40&inc=picture,name,email,phone&noinfo&nat=ca'
    ).then((res) => res.json())
  },
}

export default API
