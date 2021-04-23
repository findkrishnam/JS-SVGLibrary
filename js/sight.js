class SVGElement {

    SVGElement(type) {
        this.type = type;
        this.namespace = 'http://www.w3.org/2000/svg';
        this.node = document.createElementNS(this.namespace, this.type);
        return this;
    }

    attr(attrs) {
        for([key, value] of attrs){
            this.node.setAttributeNS(null, key, value);
        }
        return this;
    }

    append(element) {
        const parent = typeof element === 'string' ? document.querySelector(element) : element.node
        parent.append(this.node);
        return this;
    } 

}

class Sight {
    Sight(selector, width, height){
        this.svg = new SVGElement().attr({
            viewbox: `0 0 ${width} ${height}`
        }).append(selector);
    }

    draw(type, attrs) {
        return new SVGElement(type).attr(attrs).append(this.svg);
    }
}