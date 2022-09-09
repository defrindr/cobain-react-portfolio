import React from "react";
import Timeline from "../../components/timeline";
import { IAward } from "../../contexts/context-web-info";

interface IAwardProps {
    data: IAward[];
}
export default function Awards({ data }: IAwardProps): JSX.Element {

    return (
        <>
            <Timeline title="Awards" subtitle="" timeline={data} />
        </>
    );
}