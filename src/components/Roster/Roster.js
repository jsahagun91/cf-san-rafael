import React from "react";
import './Roster.css'

const players = [
    {name: "Gregory C. Brown", jerseyNumber: 20, position: "Goalkeeper", nationality: "🇺🇸"},
    {name: "Diego G. Gonzalez", jerseyNumber: 20, position: "Defense", nationality: "🇲🇽"},
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

