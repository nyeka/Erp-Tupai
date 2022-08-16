import Navbar from "@/Layout/Navbar";
import React from "react";
import SponsorClient from "./SponsorClient";
import { data } from "@/Model/data";
import Solution from "@/Components/Solution";
import SectionFitur from "@/Components/SectionFitur";
import Feature from "@/Components/Feature";
import About from "@/Components/About";
import BottomSec from "@/Components/BottomSec";
import Footer from "@/Components/Footer";

export default function App() {
    return (
        <div>
            <Navbar />
            <SponsorClient data={data.client} />
            <Feature data={data.features} />
            <SectionFitur data={data.fitur} />
            <Solution
                datw={data.payrol2}
                title="Tim HR & People"
                text="Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances."
                long="Tingkatkan efisiensi tim HR & People tuk kesejahteraan karyawan"
                dataku={data.datarol}
                card={data.card}
                textsolusion="Automasi sistem payroll yang akurat dan efisien"
                longsol="Tidak perlu membuang waktu dalam perhitungan dan proses distribusi payroll karyawan. Sinkronisasi data HR ke payroll secara otomatis."
            />
            <Solution
                bgcolor="#fff"
                color="#0D121F"
                colorscrol="#F3F5F7"
                datw={data.payrol1}
                title="Tim Finance & Pajak"
                text="Solusi akuntansi otomatis dan akurat untuk pencatatan keuangan, stok barang, hingga pelaporan pajak."
                long="Lancarkan kinerja bisnis serta tim Finance & Pajak"
                dataku={data.datarol2}
                card={data.card2}
                col="#1d51fe"
                textsolusion="Sistem akuntansi keuangan yang akurat dan mudah digunakan oleh siapa saja"
                longsol="Tampilan yang user-friendly membuat Anda dapat mengelola keuangan perusahaan dengan mudah."
            />
            <Solution
                datw={data.payrol3}
                datasol={data.solutions3}
                title="Tim Sales & Support"
                text="Solusi omnichannel CRM end-to-end untuk mempercepat penjualan dan layanan pelanggan yang terautomasi."
                long="Percepat performa dan layanan tim Sales & Support"
                dataku={data.datarol3}
                card={data.card3}
                textsolusion="Tingkatkan penjualan dan kepuasan pelanggan dengan pelayanan yang tepat"
                longsol="Bantuan software Omnichannel CRM dapat mengotomasikan proses penjualan dan layanan ke ribuan pelanggan dengan optimal."
            />
            <About data={data.accordion} />
            <BottomSec />
            <Footer />
        </div>
    );
}
