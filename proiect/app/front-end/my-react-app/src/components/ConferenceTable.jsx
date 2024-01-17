import React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

const ConferenceTable = ({ conferences, deleteConference }) => {
    const columns = [
        { 
            field: "name", 
            headerName: "NAME", 
            flex: 0.1, align: 'center', 
            headerClassName: "table-header", 
            headerAlign: "center" 
        },
        { 
            field: "date", 
            headerName: "Date", 
            flex: 1,
            align: 'center', 
            headerClassName: "table-header", 
            headerAlign: "center" 
        },
        { 
            field: "location", 
            headerName: "Location", 
            flex: 1, 
            align: 'center', 
            headerClassName: "table-header", 
            headerAlign: "center" 
        },
        {
            field: "organizerId",
            headerName: "OrganizerId",
            type: "number",
            flex: 0.5,
            align: 'center',
            headerClassName: "table-header",
            headerAlign: "center"
        },
        { 
            field: "articleId", 
            headerName: "ArticleId", 
            flex: 0.5, 
            align: 'center', 
            headerClassName: "table-header", 
            headerAlign: "center" 
        },
        {
            field: "actions",
            type: "actions",
            headerName: "Remove",
            align: "center",
            headerClassName: "table-header",
            flex: 0.5,
            getActions: ({ id }) => {
                return ([
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={() => {
                            if (window.confirm("Do you want to delete this conference?")) {
                                deleteConference({ id: id });
                            };
                        }}
                        color="inherit"
                    />
                ]);
            }
        }
    ];

    return (
        <div className="table-container">
            {/* utilizarea DataGrid */}
            <DataGrid rows={conferences} columns={columns} />
        </div>
    );
}

export { ConferenceTable};