import { Col } from "react-bootstrap";

export const PortFolioCard = ({degree,field,institution,img,grade}) => {
    return (
        <Col sm={12} md={12}>
            <div className="educ-imgbx">
                <div className="educ-txtx">
                    <h4>{degree}</h4>
                    <p>{field}</p>
                    <p>{institution}</p>
                    <p>Grade: {grade}</p>
                </div>
                <img src={img} alt=""/>
            </div>
        </Col>
    );
};

