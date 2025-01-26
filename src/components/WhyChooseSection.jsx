import { Container, Row, Col } from "reactstrap";
import Heading from "../UI_components/Heading";
import { DangerGuardIcon, SuccessRightIcon, PurpleSmileIcon, PinkMenIcon } from '../data/icons'

const features = [
    {
        iconClass: <DangerGuardIcon />,
        title: "Confidential & Safe",
        description: "All your private information is safe with us.",
        colorClass: '#fef3ef',
        colorBorder: '#ffd4c4'
    },
    {
        iconClass: <SuccessRightIcon />,
        title: "No Hidden Fee",
        description: "Everything is put before you with no hidden charges or conditions.",
        colorClass: "#f1fbf3",
        colorBorder: "#bcffc9"
    },
    {
        iconClass: "",
        title: "",
        description: "",
        colorClass: "",
        colorBorder: "transparent"
    },
    {
        iconClass: <PurpleSmileIcon />,
        title: "Guaranteed Satisfaction",
        description: "We ensure that you stay 100% satisfied with our offered services.",
        colorClass: "#edf3ff",
        colorBorder: "#bfd4ff"
    },
    {
        iconClass: <PinkMenIcon />,
        title: "Expert CA/CS Assistance",
        description: "Prompt support from our in-house expert professionals.",
        colorClass: "#fbf1fb",
        colorBorder: "#ffd3ff"
    },
    {
        iconClass: <DangerGuardIcon />,
        title: "Confidential & Safe",
        description: "All your private information is safe with us.",
        colorClass: '#f7fcf9',
        colorBorder: '#adffce',
    }
];

const WhyChooseSection = () => {
    return (
        <section className="why_choose_section section-space">
            <Container fluid>
                <Row className="content">
                    <Col className=" mb-4" xs="12" md={12} lg={6}>
                        <Heading
                            subheading={"WELCOME TO REGISTERKARO.IN"}
                            subheadingcolor={"var(--primary-color)"}
                            mainHeading={`Why Choose <span class='primary-text'> Register Karo </span>`}
                            mainheadingcolor={"var(--blue-color)"}
                            align="left"
                        />
                        <p className="para-4">
                            It is with consistent services and results that build trust with the people and that in
                            turn help us to serve the business better.
                        </p>
                    </Col> 

                    {features?.map((feature, index) => (
                        <Col key={index} xs={12} sm={6} md={6} lg={3} className="feature-card text-center">
                            {!feature.title == "" ? (
                                <div className="feature-box"
                                    style={{
                                        backgroundColor: feature.colorClass,
                                        borderColor: feature.colorBorder 
                                    }}
                                >
                                    <div className={"icon-container"}>
                                        {feature.iconClass}
                                    </div>
                                    <h5 className="head-4 fw-500">{feature.title}</h5>
                                    <p className="para-4">{feature.description}</p>
                                </div>
                            ): ""}

                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default WhyChooseSection;
