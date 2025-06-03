import { TiArrowSortedDown } from "react-icons/ti";
import WhatsAppChat from '../components/WhatsAppChat/WhatsAppChat';

const SupportSystem = () => {
  return (
    <div className="w-full p-6">
      <div className="flex items-start justify-center gap-1 p-4 border border-[#DDDDDD] rounded-[10px]">
        {/* left */}
        <div className="w-full bg-[#F7F7F7CC] rounded-md">
          <h3 className="text-[20px] text-[#454545] m-2">Your Private Chat</h3>
          <div className="border-b border-gray-300"></div>

          <div className="flex flex-col items-start m-2">
            {/* time message */}
            <div className="flex items-center justify-center gap-1 text-primary text-[14px] font-semibold">
              Today
              <span>
                <TiArrowSortedDown className="text-primary" />
              </span>
            </div>

            {/* chats */}
            <div className="my-4 flex flex-col items-start justify-start gap-2">

           
            <div className="w-full flex items-start justify-start gap-3">
              {/* user-img */}
              <div className="h-[45px] w-[45px] rounded-full">
                <img src="/images/Ellipse 868.png" alt="user-img" />
              </div>
               {/* user-name */}
              <div className="flex flex-col items-start justify-center">
                <h3>user-name</h3>
              {/* last-message */}
                <p className="text-[#808080] text-[12px]">last message</p>
              </div>
            </div>
             <div className="w-full flex items-start justify-start gap-3">
              {/* user-img */}
              <div className="h-[45px] w-[45px] rounded-full">
                <img src="/images/Ellipse 868.png" alt="user-img" />
              </div>
               {/* user-name */}
              <div className="flex flex-col items-start justify-center">
                <h3>user-name</h3>
              {/* last-message */}
                <p className="text-[#808080] text-[12px]">last message</p>
              </div>
            </div>
             <div className="w-full flex items-start justify-start gap-3">
              {/* user-img */}
              <div className="h-[45px] w-[45px] rounded-full">
                <img src="/images/Ellipse 868.png" alt="user-img" />
              </div>
               {/* user-name */}
              <div className="flex flex-col items-start justify-center">
                <h3>user-name</h3>
              {/* last-message */}
                <p className="text-[#808080] text-[12px]">last message</p>
              </div>
            </div>
             <div className="w-full flex items-start justify-start gap-3">
              {/* user-img */}
              <div className="h-[45px] w-[45px] rounded-full">
                <img src="/images/Ellipse 868.png" alt="user-img" />
              </div>
               {/* user-name */}
              <div className="flex flex-col items-start justify-center">
                <h3>user-name</h3>
              {/* last-message */}
                <p className="text-[#808080] text-[12px]">last message</p>
              </div>
            </div>

            
            
             </div>

             <div className="flex items-center justify-center gap-1 text-primary text-[14px] font-semibold">
              That Week
              <span>
                <TiArrowSortedDown className="text-primary" />
              </span>
            </div>

          </div>
        </div>

        {/* right */}
        <div className="w-full bg-[#F7F7F7CC] rounded-md p-2">
          Wesam Ali
          <WhatsAppChat />
        </div>
      </div>
    </div>
  );
};

export default SupportSystem;
