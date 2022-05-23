export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    headerName: 'User',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={
              params.row.img ||
              'https://www.fdc66.fr/wp-content/uploads/2020/07/no-avatar.png'
            }
            alt="avatar"
          />
          {params.row.username}
        </div>
      )
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 230,
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 100,
  },
  {
    field: 'city',
    headerName: 'City',
    width: 100,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 130,
  },
]

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 180,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 310,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];
