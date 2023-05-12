export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {/*params.row.username*/}
          </div>
        );
      },
    },
    {
      field: "username",
      headerName: "username",
      width: 150,
    },
    {
      field: "full_name",
      headerName: "Name",
      width: 300,
    },
    {
      field: "email",
      headerName: "Email",
      width: 300,
    },
    {
      field: "designation",
      headerName: "Designation",
      width: 150,
    },
    {
      field: "country",
      headerName: "Country",
      width: 100,
    },
    {
      field: "phone_number",
      headerName: "Phone Number",
      width: 200,
    },
];