import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const entries = props.entries.map((val, idx) => {
        return (
                <tr key={idx}>
                    <td>{val.fname}</td>
                    <td>{val.lname}</td>
                </tr>
        )
    })

    return (<tbody>{entries}</tbody>)
}

class Table extends Component {
    render() {
        const { entry_data } = this.props

        return (
            <table>
                <TableHeader />
                <TableBody entries={entry_data} />

            </table>
        )
    }
}

export default Table