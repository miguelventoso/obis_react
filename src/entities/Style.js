class Style {

    getColor = (d, colors, palette) => {
        return d > colors[6] ? palette[7] :
            d > colors[5]  ? palette[6] :
            d > colors[4]  ? palette[5] :
            d > colors[3]  ? palette[4] :
            d > colors[2]   ? palette[3] :
            d > colors[1] ? palette[2] :
            d > colors[0]   ? palette[1] :
            d === 0 ? '#000000' : palette[0];
    }

    getBlack = () => {
        return '#000000';
    }

    
      
}

export default Style;