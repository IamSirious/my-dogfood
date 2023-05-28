import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { ChevronLeft } from "react-bootstrap-icons";

const Breadcrumb = ({title, children}) => {
const navigate = useNavigate();

    return (
        <Container>
            <Link to="#" className="text-muted text-decoration-none" onClick={() => navigate(-1)}><ChevronLeft/>&nbsp;Назад</Link>
            <h1>{title}</h1>
            {children}
        </Container>
    )
}

export default Breadcrumb;