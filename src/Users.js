import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
function Users() {
    let data = "Users Component"
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch("http://dummy.restapiexample.com/api/v1/employees").then(res => {
            res.json().then(data => {
                console.log(data)
                setUser(data.data)
            })
        })
    }, [])
    return (<div>
        <h1>{data}</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {user.map((item, index) =>
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.employee_name}</td>
                        <td>{item.employee_age}</td>
                    </tr>)}
            </tbody>
        </Table>
    </div>)
}

export default Users;