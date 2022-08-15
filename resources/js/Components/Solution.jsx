import React from "react";
import Header from "./Header";
import wa from "../../assets/image/wa.png";
import check from "../../assets/image/check.png";
import dashb from "../../assets/image/dashb.png";

const Solution = ({
    bgcolor,
    color,
    colorscrol,
    datw,
    title,
    text,
    long,
    dataku,
    card,
    textsolusion,
    longsol,
    col,
}) => {
    return (
        <section
            id="solution"
            style={{ background: `${bgcolor}`, color: `${color}` }}
        >
            <Header
                colorscrol={colorscrol}
                bgcol={bgcolor}
                datw={datw}
                title={title}
                text={text}
            />
            <div className="content">
                <div className="img-content">
                    <img src={dashb} alt="ini gambar" />
                </div>
                <div className="text-content">
                    <h4>{textsolusion}</h4>
                    <p className="ptag">{longsol}</p>
                    <div className="card-info">
                        {dataku ? (
                            dataku.map((item, index) => {
                                return (
                                    <div key={index} className="info-content">
                                        <div className="circle">
                                            <img src={check} alt="ini gambar" />
                                        </div>
                                        <p>{item.text}</p>
                                    </div>
                                );
                            })
                        ) : (
                            <div>Data Not Found</div>
                        )}
                    </div>
                </div>
            </div>
            <div className="bottom-content">
                <div className="content-text">
                    <h3>{long}</h3>
                    <div
                        className="contact-text"
                        style={{ color: `${bgcolor}` }}
                    >
                        <img src={wa} alt="ini gambar" />
                        Whatsapp Kami
                    </div>
                </div>
                {card ? (
                    card.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="item"
                                style={{ background: `${colorscrol}` }}
                            >
                                <img src={item.img} alt="ini gambar" />
                                <div className="item-text">
                                    <p>{item.title}</p>
                                    <span></span>
                                    <div className="data-content">
                                        <h3 style={{ color: `${col}` }}>
                                            {item.author}
                                        </h3>
                                        <h4>{item.roles}</h4>
                                    </div>
                                </div>
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

export default Solution;
