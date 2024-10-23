function header_main(){
    return `<div id="main-logo-sec">
            <div id="main-logo-sec-container">
                <div id="logo-container">
                    <img src="./assets/media/Logo-main-light.png"  title="bland_logo" alt="MAIN LOGO">
                </div>

                <div id="govt-ads-container">
                    <img src="./assets/media/Govt. Ads.jpg" alt="">
                    
                </div>
    
                <div id="Admission-btn1-container" class="admission-btn">
                    <a href=""> Admission </a>
                    <img id= "new-tag" src="./assets/media/New-tag.png" alt="">
                </div>
            </div>

            
        </div>



        <div id="Menu-bar-sec">
            <div id="menu-list-container">
                <ul id="main-list">
                    <li><a href="#"><i class="fa-solid fa-house"></i> &nbsp;Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li>
                        <a href="#">Academic &nbsp;<i class="fa-solid fa-sort-down"></i></a>
                        <ul id="menu-sub-list">
                            <li><a href="">BPUT</a></li>
                            <li><a href="">Facilities</a></li>
                            <li><a href="">Alumni</a></li>
                            <li><a href="">Gallery</a></li>
                            <li><a href="">Campus</a></li>
                            <li><a href="">Academic Calander</a></li>
                            <li><a href="">Faculty & Staff</a></li>
                            <li><a href="">Notice</a></li>
                            <li><a href="">Placements</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Admission  &nbsp;<i class="fa-solid fa-sort-down"></i></a>

                        <ul id="menu-sub-list">
                            <li><a href="">U.G Course</a></li>
                            <li><a href="">P.G Course</a></li>
                            <li><a href="">Eligibility</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Examination  &nbsp;<i class="fa-solid fa-sort-down"></i></a>

                        <ul id="menu-sub-list">
                            <li><a href="">Results</a></li>
                            <li><a href="">Forms</a></li>
                            <li><a href="">Hall ticket</a></li>
                            <li><a href="">Syllabus</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Students  &nbsp;<i class="fa-solid fa-sort-down"></i></a>

                        <ul id="menu-sub-list">
                            <li><a href="">Admission</a></li>
                            <li><a href="">Results</a></li>
                            <li><a href="">Alumni</a></li>
                            <li><a href="">Scholarship Portal</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Facilities</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>

        </div> `;
}


function footer_main(){
    return ` <div id="footer-main">
            <div id="footer-container">
                <div id="footer-brand-details-sec">
                   <div id="footer-brand-logo">
                        <img src="./assets/media/fav-icon.png" alt="">
                   </div>
                   <p class="footer-address">Berhampur, Ganjam, Odisha - 760001</p>
                   <a href=""> <span><i class="fa-solid fa-phone-volume"></i> &nbsp;</span>1800 354 125</a>
                   <a href=""> <span><i class="fa-solid fa-phone-volume"></i> &nbsp;</span>+91 8259690902</a>
                   <a href=""> <span><i class="fa-regular fa-envelope"></i> &nbsp;</span>help@thevitm.in</a>
                   <a href=""> <span><i class="fa-regular fa-envelope"></i> &nbsp;</span>admission@thevitm.in </a>

                </div>

                <div class="footer-quick-link-sec" id="footer-quick-link-sec-1">
                    <div class="footer-primary-heading">
                        <h2>Quick<span>&nbsp; Links</span> </h2>
                    </div>

                    <div  class="footer-anchor-tags">
                        <a href="">BPUT</a>
                        <a href="">Facilities</a>
                        <a href="">Alumni</a>
                        <a href="">Campus</a>
                        <a href="">Faculty & Staff</a>
                        <a href="">Placements</a>
                        <a href="">Results</a>
                        <a href="">Syllabus</a>
                        <a href="">Admission</a>
                    </div>


                </div>

                <div class="footer-quick-link-sec" id="footer-quick-link-sec-2">
                    <div class="footer-primary-heading">
                        <h2>Quick <span> &nbsp; Links</span> </h2>
                    </div>

                    <div  class="footer-anchor-tags">
                        <a href="">Career</a>
                        <a href="">Hall Ticket</a>
                        <a href="">Notice</a>
                        <a href="">Developers</a>
                        <a href="">Sitemap</a>
                        <a href="">Gallery</a>
                        <a href="">About US</a>
                        <a href="">Contact US </a>
                        <a href="">Downloads</a>
                    </div>

                </div>

                <div class="footer-social-link">
                    <div class="footer-primary-heading">
                        <h2>Social <span> &nbsp; Links</span></h2>
                    </div>

                    <div  class="footer-anchor-tags">
                        <a href=""><span><i class="fa-brands fa-facebook"></i></span>&nbsp; Facebook</a>
                        <a href=""><span><i class="fa-brands fa-linkedin"></i></span>&nbsp; Linkedin</a>
                        <a href=""><span><i class="fa-brands fa-square-instagram"></i></span>&nbsp; Instagram</a>
                        <a href=""><span><i class="fa-brands fa-x-twitter"></i></span>&nbsp; Twitter-X</a>
                        <a href=""><span><i class="fa-brands fa-youtube"></i></span>&nbsp; Youtube</a>

                    </div>


                </div>
            </div>
        </div>

        <div id="copyrights-disclaimer-sec">
            <div id="copyrights-disclaimer-container">
                <p> <span id="footer-copyright-year"></span> All <b> &copy; Copyright &nbsp; </b> reserved by <b>THE VITM.</b></p>
                <p> Developed  by Team <b>B-B-S</b> with professional support from <B>VIGNAN INSTITUTE OF TECHNOLOGY & MANAGEMENT.</B> </p>
            </div>
        </div>`;
}


document.querySelector("header").innerHTML=header_main();
document.querySelector("footer").innerHTML=footer_main();