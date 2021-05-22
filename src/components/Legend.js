import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import Style from '../entities/Style'

const Legend = (props) => {
  const map = useMap();
  const style = new Style();

  useEffect(() => {
    // get color depending on population density value

    const legend = L.control({ position: "bottomleft" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      const grades = props.colors.shannon;
      let labels = [];
      let from;
      let to;

      labels.push('<b style={text-align:"center"}>Legend</b><br/>')

      for (let i = grades.length; i >= 0; i--) {
        from = grades[i-1];
        if(from === undefined) from = 0;
        to = grades[i];

        labels.push(
          '<i style="background:' +
            style.getColorList()[i] +
            '"></i> ' +
            from +
            (to ? "&ndash;" + to : "+")
        );
      }
      labels.push(
        '<i style="background:' +
          style.getBlack() +
          '"></i> ' +
          0
      );
      div.innerHTML = labels.join("<br>");
      return div;
    };

    legend.addTo(map);
  }, []);
  return null;
};

export default Legend;