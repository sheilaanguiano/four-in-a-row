class Token {
  constructor(index, owner){
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
  }

  /**
   * Gets associated htmlToken.
   * @return  {element}   Html element associated with token object.
   */
  get htmlToken() {
      return document.getElementById(this.id);
  }

  drawHTMLToken(){
    const tokenDiv = document.createElement("div");
    document.getElementById("game-board-underlay").appendChild(tokenDiv);
    tokenDiv.setAttribute('id', this.id);
    tokenDiv.setAttribute("class", "token");
    tokenDiv.style.backgroundColor = this.owner.color;
  }

}
