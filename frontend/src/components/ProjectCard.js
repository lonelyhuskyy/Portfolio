import { Col } from "react-bootstrap";

export const ProjectCard = ({title, description, imgUrl, Url}) => {
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <a href={Url} className="proj-links">
                    <img src={imgUrl} alt=""/>
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </a>
            </div>
        </Col>
    );
};