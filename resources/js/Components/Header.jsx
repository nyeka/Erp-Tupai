import React from "react";

const Header = ({ colorscrol, datw, title, text }) => {
    return (
        <section id="header">
            <div className="header-text">
                <h3>Solusi Dari Kami</h3>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="roll" style={{ background: `${colorscrol}` }}>
                <ul>
                    {datw
                        ? datw.map((item, index) => (
                              <li key={index}>{item.title}</li>
                          ))
                        : null}
                </ul>
            </div>
        </section>
    );
};

export default Header;
