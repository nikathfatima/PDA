const ProfileCard = ({ title, handle, image, desc }) => {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{handle}</p>
          </div>
          <div className="content">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
