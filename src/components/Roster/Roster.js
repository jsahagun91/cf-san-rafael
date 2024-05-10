import React from "react";
import './Roster.css'

const players = [
    {name: "Gregory C. Brown", jerseyNumber: 20, position: "Goalkeeper", nationality: "🇺🇸"},
    {name: "Diego G. Gonzalez", jerseyNumber: 20, position: "Defense", nationality: "🇲🇽"},
    {name: "Wilson S. Barahona", jerseyNumber: 20, position: "Forward", nationality: "🇺🇸"},
    {name: "Angel Hidalgo", jerseyNumber: 20, position: "Midfield", nationality: "🇺🇸"},
    {name: "Dave A. Mazariegos", jerseyNumber: 20, position: "Midfield", nationality: "🇺🇸"},
    {name: "Brennan R. Blondin", jerseyNumber: 20, position: "Forward", nationality: "🇺🇸"},
    {name: "Leonel R. De Leon", jerseyNumber: 20, position: "Defense", nationality: "🇬🇹"},
    {name: "Adrian D. Pleitaz", jerseyNumber: 20, position: "Forward", nationality: "🇸🇻"},
    {name: "Keven Nguyen", jerseyNumber: 20, position: "Midfield", nationality: "🇺🇸"},
    {name: "Jonathan A. Villeda", jerseyNumber: 20, position: "Defense", nationality: "🇺🇸"},
    {name: "Dennis A. Hernandez", jerseyNumber: 20, position: "Forward", nationality: "🇸🇻"},
    {name: "Luis D. Pleitez", jerseyNumber: 20, position: "Defense", nationality: "🇸🇻"},
    {name: "Santiago Perez", jerseyNumber: 20, position: "Midfield", nationality: "🇲🇽"},
    {name: "Omar Garcia", jerseyNumber: 20, position: "Defense", nationality: "🇲🇽"},
    {name: "Jose T. Yama Ortiz", jerseyNumber: 20, position: "Goalkeeper", nationality: "🇲🇽"},
    {name: "Jhovani I. Barrera", jerseyNumber: 20, position: "Forward", nationality: "🇲🇽"},

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
                    {/* <th>Jersey #</th> */}
                    <th>Position</th>
                    <th>Nationality</th>
                  </tr>
                </thead>
                <tbody>
                    {players.map(player => (
                        <tr key={player.name}>
                            <td>{player.name}</td>
                            {/* <td>{player.jerseyNumber}</td> */}
                            <td>{player.position}</td>
                            <td>{player.nationality}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default Roster;

