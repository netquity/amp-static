import React from 'react'
import { Link } from 'gatsby'
import TechApp from '../assets/tech-app.jpg';
import ElectricalWork from '../assets/electrical_work.jpg';

import Mike from '../assets/mike.jpg';
import Ron from '../assets/ron.jpg';

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="header" id="home">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>Electrical contracting made simple</h2>
          </div>
        </div>
      </div>
    </div>

    <div className="welcome" id="about">
    <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <div className="section-header">
              <h2>Welcome</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <p>At Amplistic, we’re focused on meeting all of your electrical contracting needs. Whether the project is big
              or small, residential or commercial, we have the expertise and experience to get the job done.</p>
            <p>We use high end technology to provide our clients with insight into their projects like never before. Our team
              is fully accountable to our clients, and we consistently go the extra mile to produce excellent outcomes. Let
              us be your company for electrical installation, servicing, maintenance, and repair!</p>
            <p>Amplistic Inc. is a fully Insured and Licensed Contractor – ECRA/ESA 7010993</p>
          </div>
          <div className="col-sm-6">
            <p>“Mike and the guys from Amplistic did a great job with the install of the new cable. Every end of the job was
              professional right up to the long hours of pulling the old cable out to installing the new. The job site was
              always kept clean and tidy. Bernie from RPOP’s which represents our client was very happy with the installation
              and has given his approval. Thanks again guys for all the hard work. You’re welcome to come back anytime.”
            </p>
            <p className="author-sub">Doug Kliest, Defence Construction Canada</p>
          </div>
        </div>
      </div>
    </div>

    <div className="technology">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <img src={TechApp} alt="Technology" />
          </div>
          <div className="col-sm-7">
            <h2>Proprietary technology</h2>
            <p>With cutting edge technology, our differentiator is in house mobile application. We strive to be completely
              transparent with our customers. All field staff are GPS tracked and our Work Logs are tagged with images. This
              provides our customers with an unparalleled level of insight into the progress of their projects.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="disciplines">
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <h2>Disciplines</h2>
            <p>With Amplistic you can count on our expertise for the electrical upgrade or repair you need for any type of
              facility. Amplistic has efficiently completed large projects in Industrial and Institutional facilities. Among
              these facilities have been large and technically challenging infrastructure upgrades for the Department of National
              Defence to the Canadian Forces Base (CFB) in North Bay (NORAD) and the iconic John Weir Foote Armoury in Hamilton.
              Our teams have also successfully completed many projects with Custom Residential and Commercial buildings like
              Hamilton Ontario’s City Hall and the Six Nations Administration Building. Regardless of the size of the project
              or the type of facility, you can be assured that you will be met with flawless execution and determination.</p>
          </div>
          <div className="col-sm-5">
            <img src={ElectricalWork} alt="Electrical Work" />
          </div>
        </div>
      </div>
    </div>

    {/* <div class="management">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="section-header dark">
              <h2>Management Team</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <img src={Mike} alt="" />
            <p class="name">Mike Butler</p>
            <p class="subtext">President</p>
            <p>Mike Butler is a highly regarded individual and professional. With 11 years in the electrical industry, Mike
              brings both commercial and residential experience to Amplistic. He is adept at using a wide range of electrical
              technologies and is always monitoring new trends and changes in the industry. Through hard work and dedication,
              Mike has been able to maximize his electrical contracting teams and provide his clients with high end service.</p>
            <p>He is a dedicated Father and Hockey Coach of the Year.</p>
            <a target="_blank" href="https://ca.linkedin.com/in/mike-butler-20428110b"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
          </div>
          <div class="col-sm-6">
            <img src={Ron} alt="" />
            <p class="name">Ronald Chan</p>
            <p class="subtext">Co-Founder / Advisor</p>
            <p>Ronald Chan is an innovator and entrepreneur focused on launching Internet, Digital Media, and business solutions.
              He has more than 25 years of technology, change management and software development experience.</p>
            <p>Almost 12 years of start-up experience and a track record of bringing products and services quickly to market
              with multiple successful startup exits. Ronald has patents filed in technology and insights from a breadth of
              experience he is able to adapt and monetize the ever changing technology industry.</p>
            <a target="_blank" href="https://ca.linkedin.com/in/rschan"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div> */}

    <div class="buckets" id="services">
    <div class="container">
      <div class="row bucket-row">
        <div class="col-sm-6">
          <div class="bucket">
            <div class="bucket-icon">
              <div class="bucket-icon__inner">
                <i class="fa fa-shield" aria-hidden="true"></i>
              </div>
            </div>
            <div class="bucket-content">
              <h2>Assurance</h2>
              <p>At Amplistic, we have been recipients of accolades for successfully executing large Department of National
                Defence Canada projects through Defence Construction Canada. After gaining active reliability status through
                background checks and fingerprinting by the RCMP, Amplistic is certified to work for sensitive government
                contracts and critical infrastructure.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="bucket">
            <div class="bucket-icon">
              <div class="bucket-icon__inner">
                <i class="fa fa-calendar" aria-hidden="true"></i>
              </div>
            </div>
            <div class="bucket-content">
              <h2>Consulting</h2>
              <p>Our relationships with our clients are built on cooperation and trust. Our success is not built upon a simple
                client-supplier relationship, but a partnership. We view all of our partnerships with a long term lens, and
                the primary focus of our consultation services is doing what is best for your company long term. We will
                not be satisfied with any inefficient or sub-standard systems. By employing the latest technologies and methodologies
                we will provide the most technically and cost-effective design possible.</p>
            </div>
          </div>
        </div>
      </div> 
      <div class="row bucket-row">
        <div class="col-sm-6">
          <div class="bucket">
            <div class="bucket-icon">
              <div class="bucket-icon__inner">
                <i class="fa fa-bell" aria-hidden="true"></i>
              </div>
            </div>
            <div class="bucket-content">
              <h2>Emergencies</h2>
              <p>We believe in value first, not value added. By reviewing your current electrical system state we will assess
                any potential problem areas and focus on preventative maintenance. That means identifying issues before they
                occur. We can also formulate or augment an existing disaster recovery plan with state-of-the art solutions
                to match any budget.</p>
              <p>Building managers, condo corporations, and offices with a service level agreement with Amplistic are confident
                that we are always ready to respond if any electrical system is compromised.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="bucket">
            <div class="bucket-icon">
              <div class="bucket-icon__inner">
                <i class="fa fa-heartbeat" aria-hidden="true"></i>
              </div>
            </div>
            <div class="bucket-content">
              <h2>Safety First</h2>
              <p>Job and site safety is our highest priority. Ensuring we operate in a safe and compliant manner is a cornerstone
                of our corporate culture. Working to mitigate any risks or potential issues is the underlying goal of our
                team regardless of project size. We are fully insured and regular compliance and education training is enforced
                with all of our staff.</p>
            </div>
          </div>
        </div>
      </div> 
      <div class="row bucket-row">
        <div class="col-sm-6">
          <div class="bucket">
            <div class="bucket-icon">
              <div class="bucket-icon__inner">
                <i class="fa fa-home" aria-hidden="true"></i>
              </div>
            </div>
            <div class="bucket-content">
              <h2>Residential</h2>
              <p>We can fully manage and complete any type of residential renovation. Custom home wiring is our specialty,
                and our attention to detail and careful execution is exactly what you’re looking for. Whether you need a
                kitchen redesign, a new basement renovation or an installation of pot lights, you can trust us with completing
                your project right the first time.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="bucket">
            <div class="bucket-icon">
              <div class="bucket-icon__inner">
                <i class="fa fa-handshake-o" aria-hidden="true"></i>
              </div>
            </div>
            <div class="bucket-content">
              <h2>Accountability</h2>
              <p>Our complex project management methodologies ensure that your project is executed with precision and accuracy.
                We want your experience to be as simple as our name. The technologies we implement allow you to have instant,
                real-time insights to the progress of your project.</p>
            </div>
          </div>
        </div>
      </div> 
      <div class="row bucket-row">
        <div class="col-sm-6">
          <div class="bucket">
            <div class="bucket-icon">
              <div class="bucket-icon__inner">
                <i class="fa fa-building" aria-hidden="true"></i>
              </div>
            </div>
            <div class="bucket-content">
              <h2>Commercial</h2>
              <p>Amplistic provides complete electrical services for a wide range of commercial projects. Projects covered
                include, but are not limited to, airports, rail, stadiums, restaurants, retail stores, and high rise office
                buildings.</p>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
  

  </Layout>
)

export default IndexPage
