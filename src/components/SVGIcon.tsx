import React from "react";
import IconUSBC from '../../assets/USBC.svg'
import IconEdit from '../../assets/Edit.svg'
import IconWifi from '../../assets/Wifi.svg'
import IconIot from '../../assets/IoT.svg'
import IconLaptop from '../../assets/Laptop.svg'

interface SVGIconProps {
    type: string;
}

const iconTypes = {
  iconUSBC: IconUSBC,
  iconEdit: IconEdit,
  iconWifi: IconWifi,
  iconIot: IconIot,
  iconLaptop: IconLaptop,
};

const SVGIcon = ({ type, ...props }) => {
  let SVGIcon = iconTypes[type];
  return <SVGIcon {...props} />;
};

export default SVGIcon;