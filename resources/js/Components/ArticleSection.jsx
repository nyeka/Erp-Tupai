import React from "react";
import dash from "../../assets/image/dash.png";
import wa from "../../assets/image/wa.png";
import stats from "../../assets/image/stats.png";
import TextCirlce from "../../assets/image/text-circle.png";

export default function ArticleSection() {
    return (
        <section id="article">
            <div className="card-text">
                <div className="text-card" >
                    <h3>Software erp tupai tech</h3>
                    <h4>Software ERP untuk operasional bisnis lebih efisien</h4>
                    <p>
                        ERP software dari Tupai dirancang untuk meningkatkan
                        efisiensi operasional perusahaan melalui solusi otomasi
                        bisnis yang aman dan terintegrasi.
                    </p>
                    <div className="contact-text">
                        <img src={wa} alt="ini gambar" />
                        Whatsapp Kami
                    </div>
                </div>
                <div className="image-btn" >
                    <div className="btn-layang">
                        <img src={stats} alt="ini gambar" />
                    </div>
                    <img src={dash} alt="ini gambar" />
                    <div className="btn-text">
                        <img src={TextCirlce} alt="ini gambar" />
                    </div>
                </div>
            </div>
        </section>
    );
}
