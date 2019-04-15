class Space {
  constructor (x, y, id, token){
    this.x = x;
    this.y = y;
    this.id = `space-${x}-${y}`;
    this.token = null;
    this.diameter = 76;
    this.radius = this.diameter/2;

  }
  /**
    * Draw SVG space

    the id attribute is set to the space object's id property value. Each of the following attributes is specific to SVG and deals with placement, size and color
    */

  drawSVGSpace(){
    const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    svgSpace.setAttributeNS(null, "id", this.id);
    svgSpace.setAttributeNS(null, "cx", (this.x * this.diameter) + this.radius);
    svgSpace.setAttributeNS(null, "cy", (this.y * this.diameter) + this.radius);
    svgSpace.setAttributeNS(null, "r", this.radius - 8);
    svgSpace.setAttributeNS(null, "fill", "black");
    svgSpace.setAttributeNS(null, "stroke", "none");

    document.getElementById("mask").appendChild(svgSpace);

  }

}
/*
X and Y are the coordinate values of the Space on the board, this way we know what space bject is located where. this is really important to know when it comes to dropping tokens into the board.

Token property is a way to represent whether or  not a given space is holding a token. In other words is a way to tell if a token has been dropped into that particular space.

A "render method" is a term the teacher user to describe a way to create the visual components associated with each of our JS objects. These methods write the HTML visual components and attach the HTML to the DOM

*/
