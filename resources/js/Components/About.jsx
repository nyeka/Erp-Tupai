import React from "react";

export default function About() {
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
            <div className="acomponion">
                <p>
                    Apa saja contoh aplikasi ERP yang digunakan perusahaan di
                    Indonesia?
                </p>
                <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.751612 11.6483C0.526647 11.4233 0.400269 11.1181 0.400269 10.7999C0.400269 10.4817 0.526647 10.1765 0.751612 9.9515L4.70321 5.9999L0.751612 2.0483C0.533023 1.82198 0.412069 1.51886 0.414803 1.20422C0.417537 0.889585 0.54374 0.58861 0.76623 0.366121C0.98872 0.143631 1.2897 0.0174279 1.60433 0.0146938C1.91897 0.0119597 2.22209 0.132913 2.44841 0.351503L7.24841 5.1515C7.47338 5.37654 7.59976 5.68171 7.59976 5.9999C7.59976 6.3181 7.47338 6.62327 7.24841 6.8483L2.44841 11.6483C2.22338 11.8733 1.91821 11.9996 1.60001 11.9996C1.28182 11.9996 0.976646 11.8733 0.751612 11.6483Z"
                        fill="#0D121F"
                    />
                </svg>
            </div>

            {/* <div className="container">
                <div className="accordions">
                    <div className="accordion">
                        <input type="checkbox" id="first" />
                        <label className="acc-label" for="first">
                            Header 1
                        </label>
                        <div className="acc-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Alias dolor laboriosam dolorem.
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    );
}
