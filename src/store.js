class Store {
    constructor () {

        this.state = {
            axeX: 1,
            axeY: 1,
            degre: 90

        }
    }
    getDegre () {
        return this.state.degre
    }
    setDegre (deg) {
        this.state.degre += deg
        if( this.state.degre == 360 )
        {
            this.state.degre = 0
        }
        else if (this.state.degre == 270)
        {
            this.state.degre = -90;
        }
        else if (this.state.degre == -270)
        {
            this.state.degre = 90;
        }
    }
    moveOn () {
        this.state.axeX +=1
    }
}

export var gameData = new Store();