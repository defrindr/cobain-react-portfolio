import React from "react";
import Timeline from "../../components/timeline";
import { IExperience } from "../../contexts/context-web-info";

interface IExperienceProps {
    data: IExperience[];
}

export default function Experience({ data }: IExperienceProps): JSX.Element {
    return (
        <>
            <Timeline title="Experiences" subtitle="" timeline={data} />
        </>
    );
}