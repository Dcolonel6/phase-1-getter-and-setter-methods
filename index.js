// Add your Circle class here
class Circle{
   
    constructor(radius){
        this.radius = radius
    }

    get diameter(){        
        return this.radius * 2
    }
    get circumference(){        
        return this.diameter * Math.PI
    }
    get area(){        
        return Math.PI  * this.radius * this.radius
    }
    set diameter(d){
        if(d > 0){
            this.radius = d / 2
        }        
        console.error(`${d} is less than 0`)
    }
    set circumference(circum){        
        if(circum > 0){
            this.radius = circum / (2 * Math.PI )            
        }
        console.error(`${circum} is less than 0`)
    }
    set area(area){   
        if(area > 0){            
            this.radius = Math.sqrt(area/Math.PI )
        }     
        console.error(`${area} is less than 0`)
    }

}
