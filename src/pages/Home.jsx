import React from "react";
import "./Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home()

 {
  return (
   <div className="home">
    <nav className="nav">
      <div className="topnav">
    
        {/* Top Buttons */}
        <div className="topbtn">
          <button className="acounselling">  Academic Counselling <sup className="anew">new</sup></button>
          <button className="oursel">  Our Selections </button>
          <button className="admission">  Admission</button>
          <button className="ourcenter">  Our Centres </button>
          <button className="mocktest">Open Mock Tests</button>
          <span className="pno">📞 80813-00200</span>
        </div>
      </div>

      {/* Bottom Menu */} 

              {/* Logo */}
              <div className="botmenu">
        <div className="logo">
          <h1 className="logotext">
            <span className="NEXT">NEXT </span>
            <span className="IAS">IAS</span>
          </h1>
          <p className="botlogo">BIG LEARNINGS MADE EASY</p>
        </div>
      <div className="nav2">
        <div className="nav3">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Courses</a>
          <a href="#">Test Series</a>
          <a href="#">Current Affairs</a>
          <a href="#">Free Resources</a>
          <a href="#">Blog</a>
          <a href="#">Portals</a>
          <a href="#">Gallery</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
      </div>
    </nav> 
               <div className="bg-section">
                
                {/* welcomsection */}

                <div className="welcome">
                <h1 className="wel">Welcome to NEXT IAS</h1>
                <button><h2>Learn From Renowned & Experienced Faculties</h2></button>
                <p>"Take your preparation to the NEXT LEVEL"</p>
                </div>
                

                {/* boxes */}

                <div className="boxes">
                <div className="box1">
                <div className="logo1">
          <h1 className="logotext">
            <span className="NEXT">NEXT </span>
            <span className="IAS">IAS</span></h1>
          <p className="botlogo">BIG LEARNINGS MADE EASY</p></div>
                  <div className="btn1">
                    <button>General study</button>
                    <button>Optional</button>
                    <button>Membership</button>
                     <button>Test Series</button>
                    <button>CSAT course</button>
                    <button>Current Affairs</button>

                  </div>
                  <div className="btn2"><button>Explore English Course</button></div>
                </div>
                <div className="box2">
                <div className="logo1">
          <h1 className="logotext">
            <span className="NEXT">NEXT </span>
            <span className="IAS">IAS</span></h1>
          <p className="botlogo">BIG LEARNINGS MADE EASY</p>
          </div>
                  <div className="btn3">
                    <button>सामान्य अध्ययन</button>
                    <button>वैकल्पिक</button>
                    <button>मार्गदर्शन</button>
                     <button>परीक्षा श्रृंखला</button>
                    <button>सिविल सेवा अभिक्षमता परीक्षा पाठ्यक्रम</button>
                    <button>समसामयिक घटनाएँ</button>
                    </div>
                  <div className="btn4"><button>हिंदी कोर्सेज देखें</button></div>
                </div>
                </div>
                <div className="centerbtn">
                  <button>Delhi Centre</button>
                  <button >Jaipur Centre</button>
                </div>

                <div className="hindibtn">
                  <button>दिल्ली केंद्र</button>
                  <button>जयपुर केंद्र</button>
                </div>
                <div className="boxbtnbotm">
                  <button>Prayagraj Center</button>
                  <button>प्रयागराज केंद्र</button>
                </div>
                </div>
               {/* Carousel */}
               <div className="carosel">
<div id="demo" className="carousel slide" data-bs-ride="carousel">
  {/* Indicators */}
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"
      aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"
      aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"
      aria-label="Slide 3"></button>
  </div>

  {/* Slides */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.ytimg.com/vi/dSZ-VwGFk_E/maxresdefault.jpg" className="d-block w-100" alt="Los Angeles" />
    </div>
    <div className="carousel-item">
      <img src="https://pbs.twimg.com/media/Dy974GtWsAINhcb.jpg" className="d-block w-100" alt="Chicago" />
    </div>
    <div className="carousel-item">
      <img src="https://media.licdn.com/dms/image/v2/D5622AQHL_CNs-Pkp9A/feedshare-shrink_800/feedshare-shrink_800/0/1725466500882?e=2147483647&v=beta&t=9yF-pkOUCjJbQPcLL4HmKlw8PRAqvYTk-99MFTKSXh4" className="d-block w-100" alt="New York" />
    </div>
  </div>

  {/* Controls */}
  <div className="controlbtn1">
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
</div>

</div><div className="totalpillar">
<div className="toppillar"><h1>4 Pillars of NEXT IAS</h1></div>
<div className="pillars4">
  <div>
  
    <h1>Renowned & Experienced Faculties</h1>
    <ul>
      <li>Quality Teaching</li>
      <li>Concept Building</li>
      <li>Thorough Coverage</li>
      <li>Current based approach</li>
    </ul>
  </div>
  <div>
    <h1>Enriched Quality Content</h1>
    <ul>
      <li>Enriched & Updated Books</li>
      <li>Daily and Weekly Current Affairs Analysis & PDFs</li>
      <li>Monthly Current Affairs Magazine </li>
      <li>All India Pre and Mains Test Series</li>
      
    </ul>
  </div>
  <div>
    <h1>Dedicated Academic Coach</h1><ul>
    <li>Personalised Suppor</li>
    <li>Mentoring and Answer Writing</li>
    <li>Doubt Solving and Motivation</li>
    <li>Weekly & Monthly Class Tests</li>
    
    </ul></div>
  <div>
    <h1>Student Centric Approach</h1><ul>
    <li>Recorded lectures for back-up & revision</li>
    <li>Supportive Learning Ecosystem</li>
    <li>Robust Infrastructure</li>
    <li>Technology Enabled Academic Sphere</li>
    </ul></div>
</div>
</div>
    </div>
    
  );
}