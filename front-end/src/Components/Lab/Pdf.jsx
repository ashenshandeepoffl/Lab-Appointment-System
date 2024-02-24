import React from 'react';

const PdfReportPage = () => {
  const handleDownloadPdf = () => {
    fetch('http://localhost:8080/api/v1/downloadPdf', {
      method: 'GET',
      headers: {
        'Accept': 'application/pdf',
      },
      responseType: 'blob'
    })
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);

        // Display the PDF in a new tab or window
        window.open(url, '_blank');

        // Create a download link
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'appointment_report.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Error downloading PDF:', error));
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="container">
      <header>All Appointment Report</header>
      <div className="form">
        <button onClick={handleDownloadPdf}>Click And Download</button>
        <button onClick={handleBack}>Back</button>
      </div>
    </div>
  );
};

export default PdfReportPage;
