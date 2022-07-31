import React from "react";

interface ILogoProps {
  showLogo: boolean;
}

const Logo: React.FC<ILogoProps> = ({ showLogo }) => {
  return (
    <div className="logo">
      {showLogo && (
        <img
          className="logo__img"
          src={require("../images/cover-logo.png")}
          alt="logo"
        />
      )}
      <p className="logo__text">
        Слон<span className="logo__text-emphasis">УМ</span>
      </p>
    </div>
  );
};

export default Logo;
