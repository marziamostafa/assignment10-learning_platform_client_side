import React from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Button } from 'react-bootstrap';
import { FaFileDownload, FaMoon, FaSun, FaUserCircle } from "react-icons/fa";


const PdfDownload = ({ rootElementID, DownloadFileName }) => {
    const DownloadFile = () => {
        const input = document.getElementById(rootElementID);
        html2canvas(input, { logging: true, letterRendering: 1, useCORS: true }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png')
            const imgWidth = 200;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
            pdf.save(`${DownloadFileName}`)
        })
    }
    return (
        <div>
            <Button onClick={DownloadFile} className='btn-secondary p-3 fs-5 mt-5'> Download<FaFileDownload></FaFileDownload></Button>
        </div>
    );
};

export default PdfDownload;