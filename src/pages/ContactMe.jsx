import React, { useState } from 'react';
import './ContactMe.css';
import ContactModal from '../components/ContactModal';  // Adjust the import path as necessary

function ContactMe(){
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSendMessage = () => {
    setModalVisible(true);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  return (
    <div className="container">
      <div className="content">
        <div className="left-side">
          <div className="details">
            <i className="fas fa-map-marker-alt"></i>
            <div className="topic">Address</div>
            <div className="text">Redskapsvägen 10</div>
            <div className="text">162 43, Vällingby</div>
          </div>
          <div className="details">
            <i className="fas fa-phone-alt"></i>
            <div className="topic">Mobile</div>
            <div className="text">+46 736 135 694</div>
          </div>
          <div className="details">
            <i className="fas fa-envelope"></i>
            <div className="topic">Email</div>
            <div className="text">ashfaq.awal@gmail.com</div>
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text">Send me a message</div>
          <p>For available services or any other queries or you wish to collaborate in any work with me, do not hesitate to send me a message from here. I will be honored.</p>
          <form>
            <div className="input-box">
              <input
                type="text"
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                id="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-box message-box">
              <textarea
                id="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="button">
              <input type="button" id="sentMessage" value="Send Now" onClick={handleSendMessage} />
            </div>
          </form>
        </div>
      </div>

      <ContactModal isVisible={modalVisible} onClose={closeModal} />
    </div>
  );
};

export default ContactMe;
