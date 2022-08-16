import { Link } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container>
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
            <ul>
                <div className="dropdown">
                    <li>Mengapa Erp</li>
                    <svg
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.351588 1.2516C0.576621 1.02663 0.881791 0.900256 1.19999 0.900256C1.51818 0.900256 1.82335 1.02663 2.04839 1.2516L5.99999 5.2032L9.95159 1.2516C10.0623 1.13699 10.1947 1.04557 10.3411 0.982678C10.4875 0.919787 10.645 0.886684 10.8043 0.885299C10.9636 0.883915 11.1217 0.914276 11.2691 0.974613C11.4166 1.03495 11.5506 1.12405 11.6633 1.23673C11.7759 1.3494 11.865 1.48338 11.9254 1.63085C11.9857 1.77833 12.0161 1.93635 12.0147 2.09568C12.0133 2.25502 11.9802 2.41248 11.9173 2.55888C11.8544 2.70529 11.763 2.8377 11.6484 2.9484L6.84839 7.7484C6.62335 7.97336 6.31818 8.09974 5.99999 8.09974C5.68179 8.09974 5.37662 7.97336 5.15159 7.7484L0.351588 2.9484C0.126623 2.72337 0.000244141 2.4182 0.000244141 2.1C0.000244141 1.7818 0.126623 1.47663 0.351588 1.2516Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <div className="dropdown">
                    <li>Produk</li>
                    <svg
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.351588 1.2516C0.576621 1.02663 0.881791 0.900256 1.19999 0.900256C1.51818 0.900256 1.82335 1.02663 2.04839 1.2516L5.99999 5.2032L9.95159 1.2516C10.0623 1.13699 10.1947 1.04557 10.3411 0.982678C10.4875 0.919787 10.645 0.886684 10.8043 0.885299C10.9636 0.883915 11.1217 0.914276 11.2691 0.974613C11.4166 1.03495 11.5506 1.12405 11.6633 1.23673C11.7759 1.3494 11.865 1.48338 11.9254 1.63085C11.9857 1.77833 12.0161 1.93635 12.0147 2.09568C12.0133 2.25502 11.9802 2.41248 11.9173 2.55888C11.8544 2.70529 11.763 2.8377 11.6484 2.9484L6.84839 7.7484C6.62335 7.97336 6.31818 8.09974 5.99999 8.09974C5.68179 8.09974 5.37662 7.97336 5.15159 7.7484L0.351588 2.9484C0.126623 2.72337 0.000244141 2.4182 0.000244141 2.1C0.000244141 1.7818 0.126623 1.47663 0.351588 1.2516Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <div className="dropdown">
                    <li className="hover-down">
                        <Link to="/solusi">Solusi</Link>
                    </li>
                </div>
                <div className="dropdown">
                    <li className="hover-down">
                        <Link to="/integrasi">Integrasi</Link>
                    </li>
                </div>
                <li className="hover-down">
                    <Link to="harga">Harga</Link>
                </li>
                <div className="dropdown">
                    <li>Perusahaan</li>
                    <svg
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.351588 1.2516C0.576621 1.02663 0.881791 0.900256 1.19999 0.900256C1.51818 0.900256 1.82335 1.02663 2.04839 1.2516L5.99999 5.2032L9.95159 1.2516C10.0623 1.13699 10.1947 1.04557 10.3411 0.982678C10.4875 0.919787 10.645 0.886684 10.8043 0.885299C10.9636 0.883915 11.1217 0.914276 11.2691 0.974613C11.4166 1.03495 11.5506 1.12405 11.6633 1.23673C11.7759 1.3494 11.865 1.48338 11.9254 1.63085C11.9857 1.77833 12.0161 1.93635 12.0147 2.09568C12.0133 2.25502 11.9802 2.41248 11.9173 2.55888C11.8544 2.70529 11.763 2.8377 11.6484 2.9484L6.84839 7.7484C6.62335 7.97336 6.31818 8.09974 5.99999 8.09974C5.68179 8.09974 5.37662 7.97336 5.15159 7.7484L0.351588 2.9484C0.126623 2.72337 0.000244141 2.4182 0.000244141 2.1C0.000244141 1.7818 0.126623 1.47663 0.351588 1.2516Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </ul>
            <div className="button-demo">Demo</div>
            <div className="div-tree" onClick={() => setIsOpen(true)}>
                <div className="satu"></div>
                <div className="satu"></div>
                <div className="satu"></div>
            </div>
            <Wrapper show={isOpen} onClick={() => setIsOpen(false)}>
                <div className="icon-close" onClick={() => setIsOpen(false)}>
                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fdownload_251634.png&f=1&nofb=1" />
                </div>
                <div className="menuIcon">
                    <li>Mengapa Erp</li>
                    <svg
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.351588 1.2516C0.576621 1.02663 0.881791 0.900256 1.19999 0.900256C1.51818 0.900256 1.82335 1.02663 2.04839 1.2516L5.99999 5.2032L9.95159 1.2516C10.0623 1.13699 10.1947 1.04557 10.3411 0.982678C10.4875 0.919787 10.645 0.886684 10.8043 0.885299C10.9636 0.883915 11.1217 0.914276 11.2691 0.974613C11.4166 1.03495 11.5506 1.12405 11.6633 1.23673C11.7759 1.3494 11.865 1.48338 11.9254 1.63085C11.9857 1.77833 12.0161 1.93635 12.0147 2.09568C12.0133 2.25502 11.9802 2.41248 11.9173 2.55888C11.8544 2.70529 11.763 2.8377 11.6484 2.9484L6.84839 7.7484C6.62335 7.97336 6.31818 8.09974 5.99999 8.09974C5.68179 8.09974 5.37662 7.97336 5.15159 7.7484L0.351588 2.9484C0.126623 2.72337 0.000244141 2.4182 0.000244141 2.1C0.000244141 1.7818 0.126623 1.47663 0.351588 1.2516Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <div className="menuIcon">
                    <li>Produk</li>
                    <svg
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.351588 1.2516C0.576621 1.02663 0.881791 0.900256 1.19999 0.900256C1.51818 0.900256 1.82335 1.02663 2.04839 1.2516L5.99999 5.2032L9.95159 1.2516C10.0623 1.13699 10.1947 1.04557 10.3411 0.982678C10.4875 0.919787 10.645 0.886684 10.8043 0.885299C10.9636 0.883915 11.1217 0.914276 11.2691 0.974613C11.4166 1.03495 11.5506 1.12405 11.6633 1.23673C11.7759 1.3494 11.865 1.48338 11.9254 1.63085C11.9857 1.77833 12.0161 1.93635 12.0147 2.09568C12.0133 2.25502 11.9802 2.41248 11.9173 2.55888C11.8544 2.70529 11.763 2.8377 11.6484 2.9484L6.84839 7.7484C6.62335 7.97336 6.31818 8.09974 5.99999 8.09974C5.68179 8.09974 5.37662 7.97336 5.15159 7.7484L0.351588 2.9484C0.126623 2.72337 0.000244141 2.4182 0.000244141 2.1C0.000244141 1.7818 0.126623 1.47663 0.351588 1.2516Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <div className="menuIcon">
                    <li>Solusi</li>
                </div>
                <div className="menuIcon">
                    <li>Integrasi</li>
                </div>
                <li className="menuIcon">Harga</li>
                <div className="menuIcon">
                    <li>Perusahaan</li>
                    <svg
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.351588 1.2516C0.576621 1.02663 0.881791 0.900256 1.19999 0.900256C1.51818 0.900256 1.82335 1.02663 2.04839 1.2516L5.99999 5.2032L9.95159 1.2516C10.0623 1.13699 10.1947 1.04557 10.3411 0.982678C10.4875 0.919787 10.645 0.886684 10.8043 0.885299C10.9636 0.883915 11.1217 0.914276 11.2691 0.974613C11.4166 1.03495 11.5506 1.12405 11.6633 1.23673C11.7759 1.3494 11.865 1.48338 11.9254 1.63085C11.9857 1.77833 12.0161 1.93635 12.0147 2.09568C12.0133 2.25502 11.9802 2.41248 11.9173 2.55888C11.8544 2.70529 11.763 2.8377 11.6484 2.9484L6.84839 7.7484C6.62335 7.97336 6.31818 8.09974 5.99999 8.09974C5.68179 8.09974 5.37662 7.97336 5.15159 7.7484L0.351588 2.9484C0.126623 2.72337 0.000244141 2.4182 0.000244141 2.1C0.000244141 1.7818 0.126623 1.47663 0.351588 1.2516Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </Wrapper>
        </Container>
    );
}

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    bottom: 0;
    right: 0;
    list-style: none;
    height: 100vh;
    background-color: #596780;
    text-align: start;
    width: 300px;
    z-index: 100;
    transform: ${(props) =>
        props.show ? "translateX(0)" : "translateX(150%)"};
    transition: transform 0.2s ease-in;

    .menuIcon {
        display: flex;
        gap: 18px;
        align-items: center;
        margin: 24px 24px;
        position: relative;

        ::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 1;
            width: 100%;
            height: 2px;
            background-color: white;
        }
    }

    @media screen and (max-width: 320px) {
        width: 250px;
    }

    .icon-close {
        width: 100vw;
        margin: 2em;

        img {
            cursor: pointer;
            left: 0;
            width: 16px;
        }
    }
`;

const Container = styled.nav`
    .hover-down {
        position: relative;
        :hover::after {
            content: "";
            width: 100%;
            height: 2px;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 1;
            background-color: #e6e6e6;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            animation-name: ganteng;
            animation-duration: 0.1s;
        }
    }

    @keyframes ganteng {
        0% {
            transform: scaleX(0);
        }

        100% {
            transform: scaleX(1);
        }
    }
`;
