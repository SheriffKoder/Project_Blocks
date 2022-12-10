/*

Object Constructor

var person = new Object();  //like a function-constructor but is empty
person.name = "diego";
person.getName = function () {
    return this.name;
}






*/



.container {
    margin: 0px auto;
    perspective: 900px;
    position: relative;

    width: 450px;

}

.frames {
  width: 44px;
  transform-style: preserve-3d;
  transition:  rotateX(-10deg) rotateY(30deg) rotateZ(0deg)
              translate3d(230px, 70px, 0px);
}

.strip {
  transform-style: preserve-3d;
  animation: spin 20s infinite linear;

}


.strip div {
  position: absolute;
  background: linear-gradient(to right, black, grey);
  border: solid rgb(145,87,0);
  border-width: thin 0;
  height: 320px;
  width: 60px;
  opacity: 1;

}

.strip div:after {
  content: "";
  position: absolute;
  width: 66px;
  bottom: -40px;
  box-shadow: 0px 20px 40px 10px rgba(0,0,0,0.3);
  
}

.strip .s {
  background-position: 913px;
  transform: rotateY(15deg) translateZ(200px);
}