import React, { Component } from 'react'
import '../css/TeamGrid.css';

class TeamGridComponent extends Component {

    constructor(){
        super();

        this.state = {
            
        }

    }

	render() {
        return(
            <div className="field" >
                <div className="first-line">
                    <div className="player"><button>10</button></div>
                    <div className="player"><button>5</button></div>
                    <div className="player"><button>3</button></div>
                </div>
                <div className="second-line">
                    <div className="player"><button>14</button></div>
                    <div className="player"><button>1</button></div>
                    <div className="player"><button>8</button></div>
                </div>
            </div>
        )
	}
}
export default TeamGridComponent;
