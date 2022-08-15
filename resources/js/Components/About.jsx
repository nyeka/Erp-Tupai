import React from "react";
import Accordions from "./Accordions";

export default function About({ data }) {
    return (
        <section id="About">
            <div className="about-text">
                <h3>Ketaui lebih dalam</h3>
                <h4>Mengenal apa itu software ERP?</h4>
                <p>
                    Software ERP adalah sebuah software yang digunakan untuk
                    merencanakan dan mengelola sumber daya perusahaan dengan
                    harapan dapat meningkatkan produktivitas dari bisnis.
                    <br /> <br />
                    Biasanya ERP berupa paket aplikasi berbasis cloud yang
                    saling terintegrasi sesuai dengan kebutuhan perusahaan,
                    seperti mengelola keuangan, karyawan, penjualan, hingga
                    pajak.
                </p>
            </div>
            <Accordions data={data} />
        </section>
    );
}
