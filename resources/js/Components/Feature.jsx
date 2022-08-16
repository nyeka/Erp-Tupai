import React from "react";
import dashbord from "../../assets/image/dashbord.png";

export default function Feature({ data }) {
    return (
        <section id="features">
            <div
                className="text-features"
            >
                <h3>Mengapa Pilih rapi.ind</h3>
                <h4>Optimalkan proses bisnis dengan solusi ERP lengkap</h4>
                <div className="content">
                    {data ? (
                        data.map((item, i) => {
                            return (
                                <div className="card" key={i}>
                                    <img src={item.img} alt="ini gambar" />
                                    <div className="card-konten">
                                        <h2>{item.title}</h2>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div>Data Not Found</div>
                    )}
                </div>
            </div>
            <div
                className="image-card"
            >
                <img src={dashbord} alt="ini gambar" />
            </div>
        </section>
    );
}
