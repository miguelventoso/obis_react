class Style {

    getColor = (d, colors) => {
        return d > colors[6] ? '#800026' :
            d > colors[5]  ? '#BD0026' :
            d > colors[4]  ? '#E31A1C' :
            d > colors[3]  ? '#FC4E2A' :
            d > colors[2]   ? '#FD8D3C' :
            d > colors[1] ? '#FEB24C' :
            d > colors[0]   ? '#FED976' :
            d === 0 ? '#000000' : '#FFEDA0';
    }

    getColorList = () => {
        return ['#FFEDA0', '#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#BD0026', '#800026']
    }

    getBlack = () => {
        return '#000000';
    }

    
      
}

export default Style;