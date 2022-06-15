import React from "react";
import {Accordion} from "react-bootstrap";
import {calculate, Generations, Pokemon, Move, Field} from '@smogon/calc';

const Rules = () => {

    const attackFormula = "30 - change in level - (accuracy/5)";

    const gen = Generations.get(5); // alternatively: const gen = 5;
    const result = calculate(
        gen,
        new Pokemon(gen, 'Turtwig', {
            item: 'Choice Specs',
            nature: 'Timid',
            level: 10
        }),
        new Pokemon(gen, 'Gastly', {
            item: 'Eviolite',
            nature: 'Calm',
            level: 10
        }),
        new Move(gen, 'Tackle')
    );
    if (typeof result.damage == "number"){
        console.log(result.damage);
    }
    else if (Array.isArray(result.damage)){
        let extract = result.damage[0];

        if (Array.isArray(extract)){
            console.log(extract[0]);
        }else {
            console.log(extract);
        }
    }

    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>How to create a character</Accordion.Header>
                <Accordion.Body>
                    Who knows
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>How to roll things</Accordion.Header>
                <Accordion.Body>
                    <p>
                        <h4>The way to roll attacks is:</h4>
                        <br/><br/>
                        <h5 style={{textAlign: "center"}}><i>{attackFormula}</i></h5>
                        <br/>
                        e.g.
                        <br/>
                        If you are level 5 and you are using Tackle on a level 7 pokemon, your accuracy is 100,
                        and the level in difference is -2 (negative because you are lower).
                        <br/>
                        So the base roll you need is 30 - (-2) - (100/5) = 30 + 2 - 10 = 12
                        <br/><br/>
                        <h4>Some attacks can increase/decrease your accuracy.</h4>
                        e.g.
                        <br/>
                        If an enemy uses sand attack on you, your minimum roll to hit will be increased by how many times
                        your accuracy is lowered.
                        <br/>
                        2 sand attacks will change your roll to hit to go from 12 → 14.
                        <br/><br/>
                        Some attacks never miss and so will not require rolls.
                    </p>

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>How do status moves work</Accordion.Header>
                <Accordion.Body>
                    <h1>Poison</h1>
                    Roll a d4<br/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );

}
export default Rules;