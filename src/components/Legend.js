import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import Style from '../entities/Style'

var add = true;

function display(props, div, style) {
  const grades = props.colors[props.selectedIndicator];
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
}

const Legend = (props) => {
  const map = useMap();
  const style = new Style();

  useEffect(() => {

    //if first time called (just to create div, control and add it to map)
    if(add){
      const legend = L.control({ position: "bottomleft" });

      legend.onAdd = () => {
        const div = L.DomUtil.create("div", "info legend");
        return display(props, div, style);
      };
        legend.addTo(map);
        add = false;
    }
    //if second time called just grab it and change its innerHTML
    else{
      const div = document.getElementsByClassName('info legend')[0];
      if(div) return display(props, div, style);
    }
    
  }, []);
  return null;
};

export default Legend;