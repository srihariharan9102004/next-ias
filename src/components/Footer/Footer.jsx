import React from 'react';   // Import React (needed for older versions)
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"
function Footer() {
  return (
    <footer className="footer  min-vh-100    " >
      {/* topfooter */}
        <div className='foot1   ' style={{width:'100%' ,height :'300px',}}>
               <div className="logo pt-5">
          <h1 className="logotext col-sm-row-1">
            <span className="NEXT">NEXT </span>
            <span className="IAS">IAS</span>
          </h1>
          <p className="botlogo">BIG LEARNINGS MADE EASY</p>
        </div>
        <pre  className='footspan'>Next Generation Institute for UPSC Civil Services <br></br>Examination Preparation.</pre>
<div className="about container-fluid d-flex justify-content-end  col-sm-justify-content-start">
  <div className="col-12 col-md-6 ">
    <div className="row">
      <div className="col-12 col-md-4">
        <ul className="list-unstyled">
          <li><a className="nav-link" href="#">Admission</a></li>
          <li><a className="nav-link" href="#">About Us</a></li>
          <li><a className="nav-link" href="#">About CSE</a></li>
          <li><a className="nav-link" href="#">Faculty Panel</a></li>
          <li><a className="nav-link" href="#">Careers</a></li>
        </ul>
      </div>

      <div className="col-12 col-md-4 " >
        <ul className="list-unstyled">
          <li><a className="nav-link" href="#">Gallery</a></li>
          <li><a className="nav-link" href="#">Video Gallery</a></li>
          <li><a className="nav-link" href="#">Privacy Policy</a></li>
          <li><a className="nav-link" href="#">Terms and Conditions</a></li>
          <li><a className="nav-link" href="#">Blog</a></li>
        </ul>
      </div>

      <div className="col-12 col-md-4 ">
        <ul className="list-unstyled">
          <li><a className="nav-link" href="#">UPSC CSE Posts</a></li>
          <li><a className="nav-link" href="#">FAQs</a></li>
          <li><a className="nav-link" href="#">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>


        </div>



        <hr className='foothr'></hr>



        <div className='foot2 grid'style={{width:'100%' }} >

       <div className='foot2bot contianer row ms-5'>
        {/* delhi */}
        <div className='  delhi ms-5 mt-2  col-2  col-md-2 col-sm-5 ps-4'>
          <br />
         <h5> NEXT IAS (Delhi)</h5>
        <br />
          <h6>Old Rajinder Nagar</h6>
          <pre className='pre1'><b>Vivekananda House,</b><br />
          6B, Pusa Road,<br />
          Old Rajinder Nagar,<br />
          Metro Pillar no. 111,<br />
           Near Karol Bagh Metro,<br />
           New Delhi - 110060</pre>
            <pre ><b>Tagore House,</b><br />
          Tagore House,<br />
          27-B, Pusa Road,<br />
           Metro Pillar no. 118,<br /> Near Karol Bagh Metro,<br />
          New Delhi-110060</pre>
          <a href='#' className='call'>8081300200</a><br />
          <a href='#'>mailinfo@nextias.com</a>
          </div>

          {/* (Mukherjee Nagar) */}
          <div className=' mt-2  col-3   col-md-3 col-sm-5 p-4'> 
            <i ></i>
            <h5 className='bi bi-6-square'>NEXT IAS (Mukherjee Nagar)</h5>
        <br />
            <pre className='pre2'>637, Banda Bahadur Marg,<br />
                Mukherjee Nagar,<br />
                 Delhi-110009</pre>
                 <a href='#'>call9311667076</a ><br />
                 <br />
                 <a href='#'>mailinfohindi@nextias.com</a>
          </div>

          {/* NEXT IAS (Jaipur) */}
          <div className='  col-3  mt-2  col-md-3 col-sm-5 p-4 '>
            <h5>NEXT IAS (Jaipur)</h5>
            <pre className='pre3'>
              NEXT IAS - Plot No - 6 & 7, 3rd Floor,<br />
              Sree Gopal Nagar, Gopalpura Bypass,<br />
               Above Zudio Showroom<br />
               Jaipur (Rajasthan) - 302015
            </pre>
             <a href='#'>call9358200511</a ><br />
              <a href='#'>mail infojaipur@nextias.com</a ><br />
          </div>
          {/* NEXT IAS (Prayagraj) */}
          <div className='  col-2 p-4  col-md-2 col-sm-5 mt-2 me-5 '>
            <h5>NEXT IAS (Prayagraj)</h5>
            <pre className='pre4'>31/31, Sardar Patel Marg<br />
                 Civil Lines, Prayagraj,<br />
                 Uttar Pradesh - 211001</pre>
                  <a href='#'>call9958857757</a ><br />
              <a href='#'> infoprayagraj@nextias.com</a ><br />

          </div>
       </div>



        </div>
   
    </footer>
  );
}

export default Footer;  // Export to use elsewhere