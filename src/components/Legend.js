import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";
import Style from '../entities/Style'

var add = true;

function display(props, div) {
  const style = new Style();
  const grades = props.colors[props.selectedIndicator];
      let labels = [];
      let from;
      let to;

      labels.push('<b style={text-align:"center"}>Legend</b><br/>')

      for (let i = grades.length; i >= 0; i--) {
        if(grades[i-1] === undefined) from = 0;
        else from = style.formatNumberWithCommas(grades[i-1]);
        if(grades[i] != undefined)to = style.formatNumberWithCommas(grades[i]);

        labels.push(
          '<i style="background:' +
            props.selectedColorPalette[i] +
            '"></i>' +
            from +
            (to ? "&ndash;" + to : "+")
        );
      }
      labels.push(
        '<i style="background:' +
          style.getZeroColor() +
          '"></i>' +
          0
      );
      div.innerHTML = labels.join("<br/><br/>");
      return div;
}

const Legend = (props) => {
  const map = useMap();

  useEffect(() => {

    //if first time called, create div and add it to map)
    if(add){
      const legend = L.control({ position: "bottomleft" });

      legend.onAdd = () => {
        const div = L.DomUtil.create("div", "info legend");
        return display(props, div);
      };
      legend.addTo(map);
      add = false;
    }
    //if second time called just grab it and change its innerHTML
    else{
      const div = document.getElementsByClassName('info legend')[0];
      if(div) return display(props, div);
    }
    
  });
  return null;
};

export default Legend;