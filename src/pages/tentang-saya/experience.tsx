import React from "react";
import Timeline from "../../components/timeline";

export default function Experience(): JSX.Element {

    const data = [
        {
            "title": "Developer",
            "subtitle": "PT Promedia Citra Informatindo",
            "starttime": new Date("2020-09-01"),
            "endtime": new Date(),
            "description": "Work as a team, meet with clients, design database models, build APIs used by Android apps and IoT devices. Some of what I do is create a company profile website, website management information system, and several products from vendors"
        },
        {
            "title": "Backend Developer",
            "subtitle": "Lanis IT Support",
            "starttime": new Date("2020-11-01"),
            "endtime": new Date("2021-02-01"),
            "description": "Work as a team, create application ERDs, design database models, create backend templates, build APIs used by Android applications and IoT devices, integration with several third-party modules"
        },
        {
            "title": "Intern Developer",
            "subtitle": "CV. Inovasi Digital Indonesia",
            "starttime": new Date("2018-09-01"),
            "endtime": new Date("2019-03-01"),
            "description": "Work as a team. Some of the projects that i have worked on are inputing master data, change template of company profile, creating crud master data, and meet client to installing application in client device."
        }
    ];

    return (
        <>
            <Timeline title="Experience" subtitle="" timeline={data} />
        </>
    );
}