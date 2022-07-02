import React from "react";
import fac2 from "../assets/fac2.jpg";
import BookingRooms from "./subComponents/BookingRooms";
import BookingRoomSwiper from "./subComponents/BookingRoomSwiper";


function BookingMain() {
  const [toggle, setToggle] = React.useState({
    a: true,
    b: false,
    c: false
  })

  function showRoom() {
    setToggle({
      a: true,
      b: false,
      c: false
    })
  }
  function showPayment() {
    setToggle({
      a: false,
      b: true,
      c: false
    })
  }
  function showTicket() {
    setToggle({
      a: false,
      b: false,
      c: true
    })
  }


  return (
    <div className="section">
      <div className="layout">
        <div className="bookingcontainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[_.7fr_1.3fr]">
          <div className="flex flex-col max-w-xs p-2 mx-auto border-primary border-2 rounded-2xl md:ml-0">
            <div className="w-full max-h-96 rounded-2xl overflow-hidden relative">
              <div><img className="object-cover" src={fac2} /></div>
              <div className="absolute w-full h-[70%] bottom-0 glass__primary rounded-t-2xl text-center p-4">
                <div className="text-h3 font-medium mb-4">The valhalla Hotels</div>
                <div className="text-small font-light"><span className="text__diff">12</span> Hotels with more than haundred rooms and exclusive service with <span className="text__diff">100K+</span> testimonials from various customer who trust our service</div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <div className="text-h3 font-medium w-fit mx-auto py-2 px-4 border-primary border-b-2 rounded-xl mb-12">Your Order</div>
              <div>

              </div>
            </div>
          </div>

          <div className="flex flex-col mt-12 text-center">
            <div className="text-h3 font-medium w-full mx-auto flex justify-around mb-12">
              <div className={`cursor-pointer py-2 ${toggle.a ? "border-primary border-b-2" : ""}`} onClick={showRoom}>Choose Room</div>
              <div className={`cursor-pointer py-2 ${toggle.b ? "border-primary border-b-2" : ""}`} onClick={showPayment}>Payment</div>
              <div className={`cursor-pointer py-2 ${toggle.c ? "border-primary border-b-2" : ""}`} onClick={showTicket}>Tickets</div>
            </div>
            {toggle.a &&
              <div>
                <div className="h-24 max-w-xs bookingroom1 mx-auto rounded-2xl overflow-hidden">
                  <div className="w-full h-full glass__primary flex items-center pl-4 text-h3 justify-center">
                    <BookingRoomSwiper />
                  </div>
                </div>
                <BookingRooms />
              </div>
            }
            {toggle.b &&
              <div>
                <div className="max-w-xl aspect-[4/3] bg-gray-600 mx-auto pl-2 py-4 pr-4">
                  <div className="w-full text-left py-2 pr-4 border-b-[1px]">Card Details</div>
                  <div>
                    <div className="grid grid-cols-[.8fr,_1.2fr] h-full items-center">
                      <div className="bg-gray-800 mt-[55%] drop-shadow-[15px_15px_15px_rgba(0,0,0,0.45)]">
                        <div className="max-w-xs aspect-[5/3] bg-gray-700 relative -top-4 -left-4 drop-shadow-[3px_3px_5px_rgba(0,0,0,0.45)] transition-all duration-500 ease hover:-top-6 hover:-left-6 cursor-pointer text-center pt-[25%]">XXX XXX XXX</div>
                      </div>
                      <div className=" text-left pl-8">
                        <div className="border-b-[1px] border-gray-400 text-small font-extralight pb-8 mt-6">Name on card</div>
                        <div className="border-b-[1px] border-gray-400 text-small font-extralight pb-8 mt-6">Card Number</div>
                        <div className="border-b-[1px] border-gray-400 text-small font-extralight pb-8 mt-6">Expired date</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
            {toggle.c &&
              <div>
                <div className="max-w-sm aspect-[5/3] glass__primary mx-auto mt-20 p-8 flex flex-col items-center justify-center rounded-xl">
                  <div className="text__diff text-5xl font-tangerin font-bold">The Valhalla Hotels</div>
                  <div className="text-normal font-light">Get Your Ticket Here</div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingMain;