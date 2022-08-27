import React from "react";
import Timeline from "../../components/timeline";

export default function Awards(): JSX.Element {

    const data = [
        {
            "title": "3rd Position",
            "subtitle": "Student Competency Competition",
            "starttime": new Date("2020-02-01"),
            "endtime": null,
            "description": "3rd Position of student competency competitions (LKS) Web Technology Provinsi Jawa Timur"
        },
        {
            "title": "2nd Position",
            "subtitle": "Student Competency Competition",
            "starttime": new Date("2019-12-01"),
            "endtime": null,
            "description": "2nd Position of student competency competitions (LKS) Web Technology Karisidenan Madiun"
        },
    ];

    return (
        <>
            <Timeline title="Awards" subtitle="" timeline={data} />
        </>
    );
}