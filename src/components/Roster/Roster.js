import React from "react";
import './Roster.css'

const players = [
    {name: "I. Barba", jerseyNumber: 20, position: "Midfielder"},
    {name: "W. Barahona", jerseyNumber: 19, position: "Midfielder"},
    {name: "J. Barrera", jerseyNumber: 18, position: "Midfielder"},
    {name: "B. Blondin", jerseyNumber: 17, position: "Midfielder"},
    {name: "G. Brown", jerseyNumber: 16, position: "Midfielder"},
    {name: "E. Bualezuela", jerseyNumber: 15, position: "Midfielder"},
    {name: "P. Bran", jerseyNumber: 14, position: "Midfielder"},
    {name: "M. Cortez", jerseyNumber: 14, position: "Midfielder"},
    {name: "H. Deleon", jerseyNumber: 13, position: "Midfielder"},
    {name: "L. Deleon", jerseyNumber: 12, position: "Midfielder"},
    {name: "A. Estrada", jerseyNumber: 11, position: "Midfielder"},
    {name: "G. Estrada", jerseyNumber: 10, position: "Midfielder"},
    {name: "L. Estrada", jerseyNumber: 9, position: "Midfielder"},
    {name: "O. Garcia", jerseyNumber: 8, position: "Midfielder"},
];

function Roster() {
    return (
        <>
        <h2>Roster</h2>
        <div className="roster">
            <table>
                <thead>
                  <tr>
                    <th>Player</th>
                    <th>Jersey #</th>
                    <th>Position</th>
                  </tr>
                </thead>
                <tbody>
                    {players.map(player => (
                        <tr key={player.name}>
                            <td>{player.name}</td>
                            <td>{player.jerseyNumber}</td>
                            <td>{player.position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default Roster;

