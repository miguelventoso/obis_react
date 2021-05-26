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

    getZeroColor = () => {
        return '#000000';
    }

    formatNumberWithCommas = (number) => {
        var rounded = Math.round(number * 100000) / 100000;
        var parts = rounded.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }

    measureUnits = (type) => {
        switch(type){
            case 'entities':
                return ' entities';
            case 'density':
                return ' entities per sqkm';
            case 'richness':
                return ' species';
            case 'redlist':
                return '%';
            case 'simpson':
                return '%';
            default:
                return ''
        }
    }

    
      
}

export default Style;