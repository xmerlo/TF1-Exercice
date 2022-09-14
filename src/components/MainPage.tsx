import React from "react";
import './style.css'
import { useQuery, gql } from '@apollo/client';
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Program, { ProgramType } from "./Program";
import { LeftArrow, RightArrow } from "./Arrows";

export default function MainPage() {

    const { loading, error, data } = useQuery(GET_PROGRAMS);

    const programs = data !== undefined ? data.program : []


    const menu = programs.map((p: ProgramType) => {
        return (
            <Program id={p.id} name={p.name} image_id={p.image_id} />
        );
    });

    return (
        <div className="lists">
            <ScrollMenu
                LeftArrow={LeftArrow}
                RightArrow={RightArrow}
            >
                {menu}
            </ScrollMenu>
        </div>
    )
}

const GET_PROGRAMS = gql`

  query GetPrograms {

    program(limit: 20) {
        id
        name
        image_id
    }

  }

`;