import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import '../styles/CVFormato.css';

function CV() {
  
  const handleDownloadCV = () => {
    // Crear un enlace temporal para descargar el PDF
    const link = document.createElement('a');
    link.href = "/assets/EsauLuisCV.pdf";
    link.download = 'EsauLuisCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewCV = () => {
    // Abrir el PDF en una nueva pestaña
    window.open("/assets/EsauLuisCV.pdf", "_blank");
  };

  return (
    <div id="cv" className="cv-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="cv-title">Mi CV</h2>
            <p className="cv-description">
              Download or view my resume in PDF format
            </p>
            <div className="cv-buttons">
              <Button
                variant="primary"
                className="cv-btn me-3"
                onClick={handleViewCV}
              >
                <PictureAsPdfIcon className="me-2" />
                view CV
              </Button>
              <Button className="cv-btn" onClick={handleDownloadCV}>
                <DownloadIcon className="me-1" />
                Download CV
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CV; 