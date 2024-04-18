class slider{
    constructor(){
        this.images = []
        this.images[0] = "img/111.jpg"
        this.images[1] = "img/222.jpg"
        this.images[2] = "img/333.jpg"
        this.images[3] = "img/444.jpg"
        this.images[4] = "img/555.jpg"
        this.images[5] = "img/666.jpg"

        this.links=[]
        this.links[0]="https://youtu.be/0S5uDbenoiw?si=q6t19OzoTG0aeVuw"
        this.links[1]="https://youtu.be/UXGEURExVhI?si=KMcGXV8qAtT6hUI6"
        this.links[2]="https://youtu.be/fCjTnzPRt2s?si=Z0Qj07B0I7_NS2dS"
        this.links[3]="https://youtu.be/IrsQWATqo_Q?si=PbOuqq99IrFYMf1e"
        this.links[4]="https://youtu.be/FmVDVzAVn7c?si=VA0srDjAW0vl6yuL"
        this.links[5]="https://youtu.be/Pet8J3S1JWc?si=vjsscAH4hNAOYIbD"
        this.counter = 0

        this.playSlider()

        setInterval(()=>{
            this.playSlider()
        },3000)

    }
    playSlider(){
        if(this.counter< this.images.length - 1){
            this.counter++
        }else{
            this.counter = 0
        }

        document.slider_show.src = this.images[this.counter]
        document.getElementById("LinkImg").href= this.links[this.counter]
    }
}
onload = new slider();
