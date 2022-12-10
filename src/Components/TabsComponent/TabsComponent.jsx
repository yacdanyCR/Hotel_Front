import React from 'react'
import './style.css'

export const TabsComponent = () => {
    return (
        <div className="wrapper">
            <div className="tabs">
                <div className="tab">
                    <input type="radio" name="css-tabs" id="tab-1" defaultChecked className="tab-switch" />
                    <label htmlFor="tab-1" className="tab-label">Tab One</label>
                    <div className="tab-content">My father had a small estate in Nottinghamshire: I was the third of five sons. He sent me to Emanuel College in Cambridge at fourteen years old, where I resided three years, and applied myself close to my studies; but the charge of maintaining me, although I had a very scanty allowance, being too great htmlFor a narrow htmlFortune, I was bound apprentice to Mr. James Bates, an eminent surgeon in London, with whom I continued four years. </div>
                </div>
                <div className="tab">
                    <input type="radio" name="css-tabs" id="tab-2" className="tab-switch" />
                    <label htmlFor="tab-2" className="tab-label">Tab Two</label>
                    <div className="tab-content">My father now and then sending me small sums of money, I laid them out in learning navigation, and other parts of the mathematics, useful to those who intend to travel, as I always believed it would be, some time or other, my htmlFortune to do. </div>
                </div>
                <div className="tab">
                    <input type="radio" name="css-tabs" id="tab-3" className="tab-switch" />
                    <label htmlFor="tab-3" className="tab-label">Tab Three</label>
                    <div className="tab-content">When I left Mr. Bates, I went down to my father: where, by the assistance of him and my uncle John, and some other relations, I got htmlForty pounds, and a promise of thirty pounds a year to maintain me at Leyden: there I studied physic two years and seven months, knowing it would be useful in long voyages.</div>
                </div>
            </div>
            {/*  <p>Example line outside of tab box</p> */}
        </div>
    )
}

export default TabsComponent