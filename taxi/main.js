
let Playlist = ["Anissa - Wejden", "TELEKINESIS - Travis Scott, SZA, Future", "Freestyle 8 - SDM", "Scarface - Booba", "Nocif - Hamza, Damso"]

class Personnage {
    constructor (name, pv){
        this.name = name 
        this.pv = pv
    }
    trajet(Playlist){
        let ChangementDeTaxi = 0
        let nombreFeuRouge = 0
        while(nombreFeuRouge < 30 && this.pv > 0){
            nombreFeuRouge += 1
            let musique = Math.floor(Math.random() * Playlist.length)
            console.log(" la musique est " + Playlist[musique] + " au feux rouge: " + nombreFeuRouge +  " et sa vie est de " + John.pv + "pv")

            if (Playlist[musique] === "Anissa - Wejden"){
                John.pv -= 1
                ChangementDeTaxi += 1
                console.log("John est tombé sur Anissa il perd alors 1 pv il doit donc chenger de taxi")
            }
            
            else {
                console.log("Jhon écoute une Masterclass")
            }
            
             
            
           
            

        }
        if( John.pv === 0){
            console.log("John à éxplosé")

        }
        
            if( nombreFeuRouge === 30 ){
            console.log("arrivé à destination au taxi: " + ChangementDeTaxi)
        }
    }

    break
}


let John = new Personnage (" John", 10 )

John.trajet(Playlist)
