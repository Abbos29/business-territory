import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import s from './YandexMap.module.scss'

const YandexMap = () => {
  const coordinates = [55.683189, 37.891100];

  return (
    <YMaps>
      <Map
        defaultState={{ center: coordinates, zoom: 17 }}
        width="100%"
        height="clamp(6.25rem, -0.338rem + 27.03vw, 25rem)"
        className={s.map}
      >
        <Placemark geometry={coordinates} />
      </Map>
    </YMaps>
  );
};

export default YandexMap;
