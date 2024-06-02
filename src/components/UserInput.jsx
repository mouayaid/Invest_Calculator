import { useState } from "react"

export default function UserInput({onChangeInput, userinput}) {
    return <section id="user-input">
        <div className="input-group" >
            <p>
                <label>INITIAL INVESTMENT</label>
                < input type="number" value={userinput.awalInves} required onChange={ (event)=> onChangeInput('awalInves' , event.target.value ) } ></input>
            </p>

            <p>
        <label>ANNUAL INVESTMENT</label>
        <input type="number" required value={userinput.annualInves} onChange={(event)=> onChangeInput('annualInves', event.target.value)} ></input>
        </p>
        </div>
        <div className="input-group">
        <p>
        <label>EXPECTED RETURN</label>
        <input type="number" required value={userinput.expectedReturn} onChange={(event) => onChangeInput('expectedReturn', event.target.value)} ></input>
        </p>

        <p>
        <label>DURATION</label>
        <input type="number" required value={userinput.duration} onChange={(event) => onChangeInput('duration', event.target.value)} ></input>
        </p>


        </div>

    </section>
}