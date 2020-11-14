let coin = {
    state: 0,
    flip: function() {
        coin.state = Math.floor(Math.random() * 2)
        return this.state
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
         
         if (this.state === 0) {
             return "Head"

         }
         else {
             return "Tail"
         }
           
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');
        if (this.state === 0) {
            image.src = './images/headcoin.jpg'

        }
        else {
            image.src = './images/cointail.jpg'
        } 
           
        /* 3. Set the properties of this image element to show either face-up
    or face-down, depending on whether this.state is 0 or 1.*/
    return image
}
};
 console.log(coin.flip())
 console.log(coin.toString())
 console.log(coin.toHTML())
 let images = document.createElement('div');
 images.append(coin.toHTML());
 document.body.append(images);
function display20flips(newcoin) {
    for (let s = 1; s <= 20; s++) {
        console.log(s + " " + newcoin.toString())
        //document.writeIn(newcoin.toString())
    }
}
display20flips(coin)
function display20images(displayImg) {
    for (let t = 1; t <= 20; t++) {
        displayImg.toHTML()
    }
}
display20images(coin)