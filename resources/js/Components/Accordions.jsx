import { React, useState } from "react";
import right from "../../assets/image/riight.svg";
import bottom from "../../assets/image/bottom.svg";

export default function Accordions({ data }) {
    const [isSelected, setisSelected] = useState(null);

    const togle = (i) => {
        if (isSelected === i) {
            return setisSelected();
        }

        setisSelected(i);
    };
    return (
        <section id="wrapper">
            <div className="accordions">
                {data.map((item, i) => {
                    return (
                        <div className="item" key={i}>
                            <div className="title" onClick={() => togle(i)}>
                                <p>{item.title}</p>
                                <img src={isSelected === i ? bottom : right} />
                            </div>
                            <div
                                className={
                                    isSelected === i ? "show" : "descriptions"
                                }
                            >
                                {item.desc}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
