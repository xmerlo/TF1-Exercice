import React from "react";
import './style.css'
import { useQuery, gql } from '@apollo/client';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

export type ProgramType = {
    id: string,
    name: string,
    image_id: string
}

export default function Program(props: ProgramType) {

    const { loading, error, data } = useQuery(GET_PROGRAM, {
        variables: { _id: props.image_id },
    });

    const img_url = data !== undefined ? data.image[0].url : null

    const max_char = 25

    return (
        <div className="program">
            <div style={{ height: "275px", position: "relative" }} className="programImg">
                <img
                    src={img_url}
                    alt={props.name.length > max_char ? props.name.slice(0, max_char) + "..." : props.name}
                    
                    style={{ maxWidth: "100%", borderRadius: 20, }}
                />
                <IconButton aria-label="delete" style={{ background: "black", color: "white", position: "absolute", bottom: 42, right: 5, borderRadius: 10, opacity: "80%" }}>
                    <AddIcon />
                </IconButton>
            </div>

            <p style={{ color: "white", width: "180px", fontSize: "initial" }}>
                {props.name.length > max_char ? props.name.slice(0, max_char) + "..." : props.name}
            </p>

        </div>
    )
}

const GET_PROGRAM = gql`

  query GetProgram($_id: uuid) {

    image(where: {id: {_eq: $_id}}) {
        id
        url
      }

  }

`;