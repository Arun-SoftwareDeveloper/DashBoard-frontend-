import React from "react";
import "../Styles/Aside.css";

const Aside = () => {
  const notificationsData = [
    { id: 1, text: "You solved a bug" },
    { id: 2, text: "New query assigned to you" },
    { id: 3, text: "Happy Birthday!!!" },
  ];

  const contactsData = [
    {
      id: 1,
      name: "John Doe",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/640px-Outdoors-man-portrait_%28cropped%29.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      image:
        "https://img.freepik.com/free-photo/handsome-man-black-suit-with-white-shirt-posing-attractive-guy-with-fashion-hairstyle-confident-man-with-short-beard-adult-boy-with-brown-hair_186202-8527.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1707091200&semt=ais",
    },
    {
      id: 3,
      name: "Rock",
      image:
        "https://media.istockphoto.com/id/997770954/photo/handsome-young-businessman.jpg?s=612x612&w=0&k=20&c=Sl3ZVfk7T86oeIHK-GPS_rq9q0AKOz26pEYHgVBKobY=",
    },
  ];

  const activitiesData = [
    { id: 1, text: "Completed Task A" },
    { id: 2, text: "Started Project X" },
    { id: 3, text: "Meeting with Team" },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <div className="container bg-light text-dark p-4">
            <div className="p-4"></div>
            <div className="p-4">
              <h2 className="mb-4">Notifications</h2>
              {notificationsData.map((item) => (
                <div key={item.id} className="mb-2 d-flex align-items-center">
                  <i
                    className="fas fa-bell mr-2"
                    style={{ marginRight: "15px" }}
                  ></i>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="p-4">
              <h2 className="mb-4">Contacts</h2>
              <div className="row">
                {contactsData.map((contact) => (
                  <div
                    key={contact.id}
                    className="mb-2 col-md-4 d-flex align-items-center"
                  >
                    <img
                      src={contact.image}
                      alt={contact.name}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        marginRight: "15px",
                      }}
                      className="mr-3"
                    />
                    <span>{contact.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4">
              <h2 className="mb-4">Activities</h2>
              {activitiesData.map((activity) => (
                <div
                  key={activity.id}
                  className="mb-2 d-flex align-items-center"
                >
                  <i
                    className="fas fa-list-check mr-2"
                    style={{ marginRight: "15px" }}
                  ></i>
                  <span>{activity.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
