import React from "react";
import { UserProp } from "../../utils/interfaces";

import "./HeroInfo.css";

interface Props {
  userData: UserProp;
  currentHealth: number;
  currentMana: number;
}

const HeroInfo: React.FC<Props> = (props) => {
  const { userData, currentHealth, currentMana } = props;
  const healthPercent = Math.round((currentHealth / userData.maxHealth) * 100);
  const manaPercent = Math.round((currentMana / userData.maxMana) * 100);

  return (
    <div className="hero_info__container">
      <div className="hero_info_body__container">
        <div className="hero_info_name__container">
          <img src={require(`../../assets/icons/class/${userData.class}.png`)} width="15" height="15" alt={userData.class} />{userData.username}
        </div>

        <div className="hero_info_health__container">
          <div
            className="hero_info_health__inner"
            style={{ width: `${healthPercent}%` }}
          >
            <div className="hero_info_health__text">{healthPercent} %</div>
          </div>
        </div>
        <div className="hero_info_mana__container">
          <div
            className="hero_info_mana__inner"
            style={{ width: `${manaPercent}%` }}
          >
            <div className="hero_info_mana__text">
              {manaPercent > 10 ? `${manaPercent}%` : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroInfo;
