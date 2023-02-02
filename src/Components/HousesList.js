import React from "react";
import {House} from "./House";
import { housesApi } from "../HousesAPI";
import { NewHouseForm } from "./NewHouseForm";

export default class HousesList extends React.Component {
    
    state = {
        houses: []
    };

    componentDidMount() {
        this.fetchHouses();
    };

    fetchHouses = async () => {
        const houses = await housesApi.get();
        this.setState({ houses });
    };

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        this.fetchHouses();
    };

    deleteHouse = async (houseId) => {
        await housesApi.delete(houseId);
        this.fetchHouses();
    }

    createHouse = async (houseName) => {
        await housesApi.post({ name: houseName });
        this.fetchHouses();
    }

    addNewHouse = (houseName) => this.createHouse(houseName)

    render() {
        return (
            <div>
                <div className="house-form"><NewHouseForm addNewHouse={this.addNewHouse} /> </div>
            <div>
                
                {this.state.houses.map((house) => (
                    <div className="houses">
                    <House
                        house={house}
                        key={house._id}
                        updateHouse={this.updateHouse}
                        />
                        <br></br>
                        <button onClick={(e) => this.deleteHouse(house)}>Delete House</button>
                        <hr></hr>
                </div>
                ))}
                </div>
                </div>
                
        )
    }
}