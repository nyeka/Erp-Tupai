import Sponsor from "@/Components/Sponsor";
import React from "react";

export default function SponsorClient({ data }) {
    return (
        <section id="sponsor">
            {data.map((item, i) => {
                return <Sponsor data={item} key={i} />;
            })}
        </section>
    );
}
