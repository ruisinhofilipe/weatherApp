const BackgroundImgContainer = ({ photoUrl }) => {
  const sectionStyle = {
    backgroundImage: `url(${photoUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 0.6,
  };

  return (
    <section className="backgroundImgContainer" style={sectionStyle}></section>
  );
};

export default BackgroundImgContainer;
