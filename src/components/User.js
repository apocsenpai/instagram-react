import { useState } from "react";

export default function User() {
  const userData = {
    profileName: "catanacomics",
    username: "Catana",
    userImage: "./assets/catanacomics 1.svg",
  };
  return (
    <div data-test="user" className="user-info">
      <UserInfo
        profileName={userData.profileName}
        username={userData.username}
        userImage={userData.userImage}
      />
    </div>
  );
}

function UserInfo({ profileName, username, userImage }) {
  const [name, setName] = useState(username);
  const [image, setImage] = useState(userImage);

  function changeImage() {
    const newImage = prompt("Coloque o link da imagem aí mané: ");
    setImage(!newImage ? userImage : newImage);
  }

  function changeName() {
    const newName = prompt("Digita teu nome aí mané: ");
    setName(!newName ? username : newName);
  }

  return (
    <div>
      <div className="img-wrap">
        <img data-test="profile-image" onClick={changeImage} src={image} alt="" />
      </div>
      <div>
        <p data-test="name">{profileName}</p>
        <p>
          {name} <ion-icon data-test="edit-name" onClick={changeName} name="pencil"></ion-icon>
        </p>
      </div>
    </div>
  );
}
