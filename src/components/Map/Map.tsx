import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { motion } from "framer-motion";

import { background } from "../../app/framer/config";

import "./Map.css";

export const MapContainer = () => (
  <motion.div
    className="map"
    initial="hidden"
    animate="visible"
    variants={background}
  >
    <YMaps>
      <Map
        defaultState={{ center: [59.945303, 30.364846], zoom: 14 }}
        width="100%"
        height={500}
      >
        <Placemark
          geometry={[59.945303, 30.364846]}
          options={{
            preset: "islands#icon",
            iconColor: "#0095b6",
          }}
          modules={["geoObject.addon.balloon"]}
          properties={{
            balloonContentHeader: `<a href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.374434%2C59.942091&mode=whatshere&whatshere%5Bpoint%5D=30.364846%2C59.945303&whatshere%5Bzoom%5D=16&z=13.19">
                Открыть Яндекс.Карты
              </a>`,
          }}
        />
      </Map>
    </YMaps>
  </motion.div>
);
