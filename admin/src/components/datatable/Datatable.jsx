import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch.js'
import axios from 'axios'

const Datatable = ({ columns }) => {
  const location = useLocation()
  const path = location.pathname.split('/')[1]

  const [list, setList] = useState([])
  const { data } = useFetch(`/${path}`)

  useEffect(() => {
    setList(data)
  }, [data])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/${path}/${id}`)
      setList(list.filter((item) => item._id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  const capitalizeFirstLetter = (string) => {
    const capitalizedPath = string.charAt(0).toUpperCase() + string.slice(1)
    return capitalizedPath
  }

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 140,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: 'none' }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        )
      },
    },
  ]

  return (
    <div className="datatable">
      <div className="datatableTitle">
        {capitalizeFirstLetter(path)}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        className="datagrid"
        getRowId={(row) => row._id}
      />
    </div>
  )
}

export default Datatable
