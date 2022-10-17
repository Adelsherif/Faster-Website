import React from 'react';
import Style from '../../styles/Face.module.css';

export default function Face() {
return (
    <div className={Style.face}>
        <div className={Style.inner}>
            <h3>Safe & Faster</h3>
            <h2>Logistics Services</h2>
            <form>
                <input type="text" placeholder='Tracking Id' />
                <input type="submit" value="Track & Trace" />
            </form>
        </div>
    </div>
  )
}
