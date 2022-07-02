import React from "react";

function Footer() {
  return (
    <div className="section mt-40 bg-primary_hover">
      <div className="layout">
        <div className="footer__container flex flex-col text-left pb-4 pt-8 gap-y-12 text-normal font-light md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-20 lg:grid-cols-3 mx-auto">
          <div>
            <div className="text-normal font-semibold mb-4">THE VALHALLA</div>
            <div><span className="text__diff">12</span> Hotels with more than haundred rooms and exclusive service with <span className="text__diff">100K+</span> testimonials from various customer who trust our service.</div>
            <div className="w-fit py-2 px-8 mt-4 bg-dark rounded-full cursor-pointer"><a href="/book">Book Now</a></div>
          </div>
          <div className="text-left flex flex-col gap-y-4 lg:text-right">
            <div className="text-normal font-semibold mb-2">Contact Us</div>
            <div>Jln. Mendungan, Pabelan, Sukoharjo, Surakarta</div>
            <div>thevalhallahotels@gmail.com</div>
            <div>+62 821 3820 3902</div>
          </div>
          <div className="flex gap-8 lg:col-start-2 lg:row-start-1 lg:justify-center lg:items-end">
            <div><i class="uil uil-instagram nav__icons"></i></div>
            <div><i class="uil uil-twitter nav__icons"></i></div>
            <div><i class="uil uil-facebook-f nav__icons"></i></div>
          </div>
        </div>
        <div className="text-small font-light text-center text-primary pb-2 mt-4">&#169; TheValhallaHotels. All right reserved</div>
      </div>
    </div>
  )
}

export default Footer;