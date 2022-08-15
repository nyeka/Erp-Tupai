import React from "react";
import contact from "../../assets/image/contact.png";

const SectionFitur = ({ data }) => {
    return (
        <section id="fitur">
            <div className="fitur-text">
                <h3>Solusi Dari Kami</h3>
                <p>Solusi all-in-one untuk berbagai tim di bisnis Anda</p>
            </div>
            <div className="card-container">
                {data ? (
                    data.map((item, i) => {
                        return (
                            <div className="card-features" key={i}>
                                <div className="img">
                                    <img src={item.img} alt="ini gambar" />
                                </div>
                                <h2>{item.title}</h2>
                                <p>{item.text}</p>
                            </div>
                        );
                    })
                ) : (
                    <div>Data Not Found</div>
                )}
            </div>
        </section>
    );
};

export default SectionFitur;
