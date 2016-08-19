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
            <h2 className="subtitle">Portofolio Work</h2>
            <p>Here you can find the projects that I specifically worked on in the
              past few years. My minor projects and source codes can be found on my
              <a src="https://github.com/Danilo-Zekovic"> GitHub</a>. 
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
