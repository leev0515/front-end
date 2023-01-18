import TimesAvailable from './TimesAvailable'
import './App.css';
import { useState } from "react";


const Nav = () => {
    const [name, setName] = useState('Name');
    const [email] = useState('Email Address');
    const [numberOfGuest] = useState(0);
    const [occasion] = useState('Occasion');

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        console.log("Thank you for submitting a reservation. A confirmation will be sent to your email.");
    };



return (
    <div className="reservation">
        <h2>Reservation</h2>
        <p>Please enter your information down below.</p>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <nav className='Field'>
                <label htmlFor='name'>Name </label>
                <input
                    id='name'
                    type="text"
                    placeholder='Name'
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                /><br></br>
                <label>Email Address </label> <input type="text" placeholder={email} name="email" required /><br></br>
                <label>Number of Guests </label><select id={numberOfGuest} placeholder='0' min='2' max='6' required>
                    <option>0</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option>
                    </select>
                    <br></br>
                <label>Occasion </label><select id={occasion} placeholder="occasion" name="occasion" required>
                    <option>Birthday</option><option>Engagement</option><option>Anniversary</option>
                </select> <br></br>
                </nav>
                <button disabled={!name} type="submit">
                    Submit
                </button>
            </fieldset>
        </form>
    </div>
    );
    }

export default Nav;