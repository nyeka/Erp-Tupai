import React from "react";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-card">
                    <div className="card-name">
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.5 7.5H22.5M25.5 13.5H4.5H25.5ZM25.5 13.5C26.2956 13.5 27.0587 13.8161 27.6213 14.3787C28.1839 14.9413 28.5 15.7044 28.5 16.5V25.5C28.5 26.2956 28.1839 27.0587 27.6213 27.6213C27.0587 28.1839 26.2956 28.5 25.5 28.5H4.5C3.70435 28.5 2.94129 28.1839 2.37868 27.6213C1.81607 27.0587 1.5 26.2956 1.5 25.5V16.5C1.5 15.7044 1.81607 14.9413 2.37868 14.3787C2.94129 13.8161 3.70435 13.5 4.5 13.5H25.5ZM25.5 13.5V10.5C25.5 9.70435 25.1839 8.94129 24.6213 8.37868C24.0587 7.81607 23.2956 7.5 22.5 7.5L25.5 13.5ZM4.5 13.5V10.5C4.5 9.70435 4.81607 8.94129 5.37868 8.37868C5.94129 7.81607 6.70435 7.5 7.5 7.5L4.5 13.5ZM7.5 7.5V4.5C7.5 3.70435 7.81607 2.94129 8.37868 2.37868C8.94129 1.81607 9.70435 1.5 10.5 1.5H19.5C20.2956 1.5 21.0587 1.81607 21.6213 2.37868C22.1839 2.94129 22.5 3.70435 22.5 4.5V7.5H7.5Z"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        rapi.ind
                    </div>
                    <p>
                        Partner untuk segala kebutuhan sistem perkantoran Anda.
                    </p>
                </div>
                <div className="about">
                    <h3>Perusahaan</h3>
                    <ul>
                        <li>Tentang Tupai</li>
                        <li>Tupai University</li>
                        <li>Karir</li>
                        <li>Hubungi kami</li>
                        <li>Pusat bantuan</li>
                        <li>Kebijakan Privasi</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="about">
                    <h3>Produk</h3>
                    <ul>
                        <li>Tupai Talenta</li>
                        <li>Tupai Jurnal</li>
                        <li>Tupai Klikpajak</li>
                        <li>Tupai Flex</li>
                        <li>Tupai Qontak</li>
                        <li>Tupai e-Sign</li>
                    </ul>
                </div>
                <div className="about">
                    <h3>Ikuti Kami</h3>
                    <ul>
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
            <span></span>
            <div className="text-footer">
                <p>&copy; Copyright 2022 CV Trisya Media Teknologi.</p>
            </div>
        </footer>
    );
}
