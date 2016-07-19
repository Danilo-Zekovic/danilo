import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Experience from './Experience'
import { CardStack, Card } from 'react-cardstack'
import work from './json/work'
import Deck from './Deck'


export default React.createClass({
  render() {
    return (
      <div>
        <Header
          title={'Work'}
          image={'http://2.bp.blogspot.com/-GIS3_Ms5uHg/T8pLfIYZGNI/AAAAAAAAT48/FCFXTOdBsJs/s1600/young-justice-nightwing-robin-wallpaper.jpg'}
        />

      <div className="container-fluid white">
          <div className="container text-center">
            <h2 className="subtitle">Nightwing Report ć</h2>
            <p>Although I aspire to one day change the world with my code, one
              of the biggest passions in my life is learning. I want to start my
              career by tackling problems for my clients and growing in my
              experience with each line of code. I enjoy expressing creativity,
              which I hope to use in creating software that impacts people's
              lives.
            </p>
          </div>
        </div>

        <div className="container-fluid blue">

        	<div className="container cardstack">
        		<CardStack
        			height={500}
        			width="100%"
        			background="#0052cc"
        			hoverOffset={25}>

        			{work.map((experience, i) =>
        				<Card
        					key={i}
        					background={'#2980B9'}>

                  <Deck
                    date= {experience.date}
                  	title= {experience.title}
                  	jobTitle= {experience.jobTitle}
                  	position= {experience.position}
                  	location= {experience.location}
                  	technologies= {experience.technologies}
                  	project= {experience.project}
                    />
        				</Card>
        			)}

        		</CardStack>
        	</div>
        </div>
      </div>
    )
  }
})
