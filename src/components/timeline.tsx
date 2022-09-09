import React from "react";

interface ITimelineList {
    title: string;
    subtitle: string;
    starttime: Date;
    endtime: Date | null;
    description: string | null;
}

interface ITimeline {
    title: string;
    subtitle: string;
    timeline: ITimelineList[] | []
}


export default function Timeline(children: ITimeline): JSX.Element {
    return (
        <>
            <h1 className="display-3 mt-3 font-strong">{children.title}</h1>
            {
                children.subtitle &&
                <p className="display-4">{children.subtitle}</p>
            }
            <ul className="timeline" >
                {
                    children.timeline.map((item: ITimelineList, index: number) => {
                        // mencari selisih waktu
                        let diff = item.endtime ? item.endtime.getTime() - item.starttime.getTime() : 0;
                        let diffDays = diff / (1000 * 3600 * 24);
                        let diffText = "";

                        let diffYears = Math.floor(diffDays / 365);
                        diffDays = diffDays % 365;
                        let diffMonths = Math.round(diffDays / 30);


                        if (diffMonths >= 12) {
                            diffMonths = 0;
                            diffYears += 1;
                        }

                        if (diffMonths >= 1) {
                            diffText += `${Math.ceil(diffMonths)} months`;
                        }

                        if (diffYears >= 1) {
                            diffText += `${Math.ceil(diffYears)} years`;
                        }


                        // waktu format month string and year string
                        let starttimeMonth = item.starttime.toLocaleString("en-us", { month: "long" });
                        let starttimeYear = item.starttime.getFullYear();
                        let endtimeMonth = item.endtime ? item.endtime.toLocaleString("en-us", { month: "long" }) : "";
                        let endtimeYear = item.endtime ? item.endtime.getFullYear() : "";

                        let displayTime = `${starttimeMonth} ${starttimeYear}`;
                        if (endtimeMonth !== "" && endtimeYear !== "") {
                            displayTime += ` - ${endtimeMonth} ${endtimeYear}`;
                        }
                        if (diffText !== "") {
                            displayTime += ` ( ${diffText} )`;
                        }

                        return (
                            <li className="timeline-item mb-5" key={index}>
                                <h5 className="fw-bold display-6">{item.title}</h5>
                                <p className="display-7">{item.subtitle}</p>
                                <p className="p-0 pb-3 m-0 text-secondary display-7 fw-light">{displayTime}</p>
                                {
                                    item.description &&
                                    <p className="p-0 m-0 text-secondary display-7 fw-light">{item.description}</p>
                                }
                            </li>
                        )
                    }
                    )
                }
            </ul>
        </>
    );
}