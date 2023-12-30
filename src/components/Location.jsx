import React, { useState } from "react";
import styled from "styled-components";
import { LocationData } from "../data";

const Location = () => {
    const [activeTab, setActiveTab] = useState("0-2KM");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const renderTabContent = (data) => {
        return Object.keys(data).map((range) => (
            <Tab key={range} active={activeTab === range}>
                <h3>{range}</h3>
                {Object.keys(data[range]).map((category) => (
                    <div key={category}>
                        <h4>{category}</h4>
                        <ul>
                            {data[range][category].map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </Tab>
        ));
    };

    return (
        <Container>
            <LeftSide>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d10970.109486265126!2d80.05290969770056!3d13.565047585924153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1splot%20no%3A%20206%20-%20lake%20view%20serenity%20pudi%2C%20tada%20-%20524401.%20tirupathi%20district%2C%20andhra%20pradesh!5e0!3m2!1sen!2sin!4v1703932568301!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </LeftSide>
            <RightSide>
                <TabsContainer>
                    {Object.keys(LocationData).map((range) => (
                        <TabButton
                            key={range}
                            onClick={() => handleTabChange(range)}
                            active={activeTab === range}
                        >
                            {range}
                        </TabButton>
                    ))}
                </TabsContainer>
                <TabContent>{renderTabContent(LocationData)}</TabContent>
            </RightSide>
        </Container>
    );
};

export default Location;

const Container = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  overflow: hidden; /* Prevent scroll bars in the container */
  background-color: var(--accent-color);
  @media (min-width: 768px) {
    flex-direction: row;
    height: auto; /* Allow the height to grow as needed */
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  iframe {
    width: 100%;
    height: 60vh; /* Set height as a percentage of the viewport height */
    max-height: 600px; /* Set a maximum height for larger screens */
    border: 3px solid #fff !important;
  }

  @media (min-width: 768px) {
    iframe {
      height: 450px;
    }
  }

  @media (min-width: 1200px) {
    iframe {
      width: 600px;
      height: 500px;
    }
  }
`;

const RightSide = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  height: 700px;
  margin-top: 20px;

  overflow-y: auto;
  @media (min-width: 768px) {
    max-width: 400px;
    height: 100%;
  }
`;

const TabsContainer = styled.div`
  width: 100%;
  max-width: 300px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    max-width: 400px;
    height: 100%;
  }

  @media (min-width: 1024px) {
    max-width: 600px;
  }
`;

const TabButton = styled.button`
  cursor: pointer;
  padding: 10px;
  background-color: ${(props) => (props.active ? "#3498db" : "#ddd")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #3498db;
    color: #fff;
  }
`;

const TabContent = styled.div`
  margin-top: 20px;
  height: 580px;
`;

const Tab = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h4 {
    margin-top: 10px;
  }
`;