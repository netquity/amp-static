import React from 'react'
import Slider from "react-slick";

import Layout from '../components/layout'

const Data = [
  {
    title: "Industrial",
    description: 'Amplistic has faced technically challenging and large infrastructure upgrades to significant Industrial buildings in Ontario. Our teams have completely upgraded the interior and exterior electrical framework to John Foote V.C. Armoury, the National Historic Site and home to the Royal Hamilton Light Infantry.  The pinnacle of our accolades comes from a major electrical upgrade to the life support and utility facility in the Canadian Forces Base at North American Aerospace Defence Command (NORAD). Facing logistical challenges and working on sensitive government contracts hallmarks Amplistic\'s diligence and has prepared us to be the ideal contracting company for your Industrial project.',
    photos: [
      require('../assets/industrial/1.png'),
      require('../assets/industrial/2.png'),
      require('../assets/industrial/3.png'),
      require('../assets/industrial/4.png'),
      require('../assets/industrial/5.png'),
      require('../assets/industrial/6.png'),
    ]
  },
  {
    title: "Commercial",
    description: "Amplistic has successfully completed many projects for Institutional facilities. Our teams have completed interior electrical upgrades to elementary schools in the Hamilton-Wentworth District. Amplistic has also installed new circuits for sensitive machinery and lighting fixtures at St. Joseph's Hospital, Fontbonne building and offices spaces in Hamilton's City Hall have also been successful projects which our team has had experience with. No matter the size or type of Institutional facility, you can count on Amplistic's expertise in various Institutional buildings to complete your Institutional project correctly and on time.",
    photos: [
      require('../assets/commercial/1.png'),
      require('../assets/commercial/2.png'),
    ]
    
  },
  {
    title: "Residential",
    description: "Amplistic has been a part of many residential projects that range from interior and exterior lighting upgrades to installing new electrical fixtures in a newly renovated space. Our most recent work has involved installing exterior pot lights, designing and installing landscape lighting on a new residential build. The Amplistic team has also installed new pot lights, inaugurated new circuits and electrical layouts for new appliances in remodelled kitchens and installed smoke detectors.  Amplistic can design interior and exterior electrical installations to refresh your residential house together with our team we can help bring your design plans to life.",
    photos: [
      require('../assets/residential/1.png'),
      require('../assets/residential/2.png'),
      require('../assets/residential/3.png'),
    ]
  }
]

export default class CaseStudies extends React.Component{
  state = {
    selectedIndex: 0,
  }
  render(){
    const selected = Data[this.state.selectedIndex];
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Layout isDark={false}>
        <div className="case-studies-container">
          <div className="container">
            <ul className="case-studies-menu">
            {Data.map((section, index) => (
              <li className={index === this.state.selectedIndex ? 'active' : ''}><button onClick={() => this.setState({ selectedIndex: index })}>{section.title}</button></li>
            ))}
            </ul>
            <div style={{marginBottom: '2.5em', marginTop: '2.5em', width: '100%', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              <Slider {...settings}>
                {selected.photos.map((photo, index) => (
                  <img height="200" src={photo} alt={`${selected.title} image #${index+1}`} />
                ))}
              </Slider>
            </div>
            <p style={{marginBottom: '2.5em'}}>{selected.description}</p>
          </div>
        </div>
      </Layout>
    )
  }
}
