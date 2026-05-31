import svgPaths from "./svg-qkgwk9i0pe";
import img from "./80c937220674f4ea30f6d09437f340d4705bf80a.png";
import img1 from "./53e41ccb9542ff6572510c7f3819117668ba298e.png";
import img2 from "./564532f18be760d5266629ec45313ee4a6f15123.png";

function Status() {
  return (
    <div className="-translate-y-1/2 absolute h-[12px] right-[22px] top-1/2 w-[67px]" data-name="Status">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 12">
        <g clipPath="url(#clip0_2_402)" id="Status">
          <g id="Battery">
            <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, #1F1F1F)" width="21" x="42.8333" y="0.833333" />
            <path d={svgPaths.p2f77f580} fill="var(--fill-0, #1F1F1F)" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, #1F1F1F)" height="7.33333" id="Capacity" rx="1.33333" width="18" x="44.3333" y="2.33333" />
          </g>
          <path d={svgPaths.p3b46d180} fill="var(--fill-0, #1F1F1F)" id="Wifi" />
          <path d={svgPaths.p192da80} fill="var(--fill-0, #1F1F1F)" id="Cellular Connection" />
        </g>
        <defs>
          <clipPath id="clip0_2_402">
            <rect fill="white" height="12" width="67" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="-translate-y-1/2 absolute h-[18px] left-[21px] overflow-clip top-1/2 w-[54px]" data-name="Time Style">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Semibold',sans-serif] leading-[normal] left-0 not-italic right-0 text-[#1f1f1f] text-[15px] text-center top-[calc(50%-9px)] tracking-[-0.3px]">09:41</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[13px] size-[14px] top-[9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p20364380} id="Vector" stroke="var(--stroke-0, #8BA977)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p19547e98} id="Vector_2" stroke="var(--stroke-0, #8BA977)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M4.66667 7H9.33333" id="Vector_3" stroke="var(--stroke-0, #8BA977)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[30px] left-0 top-[51px] w-[143px]" data-name="button">
      <div className="absolute bg-[#f0f5ed] h-[30px] left-0 rounded-[17.5px] top-0 w-[143px]" />
      <p className="[word-break:break-word] absolute font-['PingFang_SC:Regular',sans-serif] leading-[normal] left-[35px] not-italic text-[#8ba977] text-[12px] top-[7px] whitespace-nowrap">DaDou一起穿吧～</p>
      <Icon />
    </div>
  );
}

function Group() {
  return (
    <div className="relative size-full" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Group">
          <mask height="10" id="mask0_2_325" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="10" x="0" y="0">
            <g id="b">
              <path d="M0 0H10V10H0V0Z" fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_2_325)">
            <path d={svgPaths.pf36ab00} fill="var(--fill-0, #1F1F1F)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute inset-[0_0_-2.08%_0] overflow-clip" data-name="Frame">
      <div className="absolute flex inset-[1.36%_0_0.68%_0] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <Group />
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute h-[22px] left-0 top-0 w-[175px]" data-name="粘贴抖音">
      <p className="[word-break:break-word] absolute font-['PingFang_SC:Semibold',sans-serif] leading-[normal] left-0 not-italic text-[#1f1f1f] text-[16px] top-0 whitespace-nowrap">粘贴抖音穿搭视频链接</p>
      <div className="absolute left-[165px] size-[10px] top-[6px]" data-name="右箭头_24">
        <Frame />
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="absolute h-[45px] left-0 top-0 w-[175px]" data-name="title">
      <p className="[word-break:break-word] absolute font-['PingFang_SC:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#b8b8b8] text-[12px] top-[28px] whitespace-nowrap">解析博主穿搭，生成搭配方案</p>
      <Component />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[81px] left-[22px] top-[18px] w-[175px]">
      <Button />
      <Title />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[11.86%_3.14%_11.26%_60.62%]">
      <div className="absolute flex inset-[13.56%_3.14%_12.99%_76.49%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-16.9252cqw,89.1361cqh)] rotate-[8.95deg] w-[hypot(83.0748cqw,10.8639cqh)]">
          <div className="pointer-events-none relative rounded-[6.721px] size-full" data-name="蒙版">
            <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[6.721px] size-full" src={img} />
            <div aria-hidden className="absolute border-[1.26px] border-solid border-white inset-[-1.26px] rounded-[7.981px] shadow-[0px_0px_3.361px_0px_rgba(0,0,0,0.25)]" />
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[13.94%_12.76%_15.81%_69.24%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-4.84603cqw,97.2151cqh)] rotate-[2.19deg] w-[hypot(95.154cqw,2.78494cqh)]">
          <div className="pointer-events-none relative rounded-[6.721px] size-full" data-name="蒙版">
            <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[6.721px] size-full" src={img1} />
            <div aria-hidden className="absolute border-[1.26px] border-solid border-white inset-[-1.26px] rounded-[7.981px] shadow-[0px_0px_3.361px_0px_rgba(0,0,0,0.25)]" />
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[11.86%_18.2%_11.26%_60.62%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-11 flex-none h-[hypot(20.5781cqw,87.2796cqh)] w-[hypot(79.4219cqw,-12.7204cqh)]">
          <div className="pointer-events-none relative rounded-[6.721px] size-full" data-name="蒙版">
            <div className="absolute inset-0 overflow-hidden rounded-[6.721px]">
              <img alt="" className="absolute h-[133.93%] left-[-10.16%] max-w-none top-[-8.04%] w-[118.41%]" src={img2} />
            </div>
            <div aria-hidden className="absolute border-[1.26px] border-solid border-white inset-[-1.26px] rounded-[7.981px] shadow-[0px_0px_3.361px_0px_rgba(0,0,0,0.25)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Remand() {
  return (
    <div className="absolute h-[118px] left-[25px] top-[48px] w-[353px]" data-name="remand">
      <div className="-translate-x-1/2 absolute bg-white h-[118px] left-1/2 rounded-[16px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.05)] top-0 w-[353px]" />
      <Frame1 />
      <Group2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[54px] left-0 top-0 w-[350px]">
      <div className="absolute bg-white h-[54px] left-0 rounded-[27px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.05)] top-0 w-[350px]" />
    </div>
  );
}

function Send() {
  return (
    <div className="absolute left-[300px] size-[40px] top-[7px]" data-name="send">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="send">
          <circle cx="20" cy="20" fill="var(--fill-0, #98BE85)" id="Ellipse 1" r="20" />
          <path d={svgPaths.p348c6b00} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Chat() {
  return (
    <div className="absolute h-[54px] left-[26px] top-[728px] w-[350px]" data-name="chat">
      <Frame2 />
      <Send />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[6px] size-[22px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_2_287)" id="Icon">
          <path d={svgPaths.pe54bb80} id="Vector" stroke="var(--stroke-0, #709A5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99935" />
          <path d="M18.3333 2.75V6.41667" id="Vector_2" stroke="var(--stroke-0, #709A5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99935" />
          <path d="M20.1667 4.58333H16.5" id="Vector_3" stroke="var(--stroke-0, #709A5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99935" />
          <path d="M3.66667 15.5833V17.4173" id="Vector_4" stroke="var(--stroke-0, #709A5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99935" />
          <path d="M4.58393 16.5H2.75" id="Vector_5" stroke="var(--stroke-0, #709A5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99935" />
        </g>
        <defs>
          <clipPath id="clip0_2_287">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Zhuangxiushangjia() {
  return (
    <div className="absolute bottom-[48.89%] left-1/4 right-[27.08%] top-0" data-name="zhuangxiushangjia- 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g clipPath="url(#clip0_2_398)" id="zhuangxiushangjia- 1">
          <path d={svgPaths.p1ba08f00} fill="var(--fill-0, #8A8A8A)" id="Vector" />
          <path d={svgPaths.p1a84c000} fill="var(--fill-0, #8A8A8A)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_2_398">
            <rect fill="white" height="23" width="23" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[0_5%_4.14%_5%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5921 23">
        <g id="Group 1">
          <path d={svgPaths.p393a9100} id="Vector" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <rect height="21.2" id="Rectangle 12" rx="3.1" stroke="var(--stroke-0, #8A8A8A)" strokeWidth="1.8" width="19.7921" x="0.9" y="0.9" />
          <path d="M1.6152 16.7958H20.4832" id="Vector 1" stroke="var(--stroke-0, #8A8A8A)" strokeLinecap="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[12px] overflow-clip size-[23.992px] top-0" data-name="Icon">
      <Group1 />
    </div>
  );
}

function BottomBar() {
  return (
    <div className="absolute bg-[#f9fdf8] content-stretch flex gap-[77px] h-[109px] items-start left-0 pb-[43px] pt-[21px] px-[57px] rounded-[19px] top-[782px] w-[401.977px]" data-name="Bottom bar">
      <div className="h-[45px] relative shrink-0 w-[36px]" data-name="AIzhongcao">
        <Icon1 />
        <p className="[word-break:break-word] absolute font-['PingFang_SC:Semibold',sans-serif] leading-[normal] left-0 not-italic text-[#709a5c] text-[12px] top-[28px] whitespace-nowrap">AI搭配</p>
      </div>
      <div className="h-[45px] relative shrink-0 w-[48px]" data-name="wodeyichu">
        <p className="[word-break:break-word] absolute font-['PingFang_SC:Semibold',sans-serif] leading-[normal] left-0 not-italic text-[#8a8a8a] text-[12px] top-[28px] whitespace-nowrap">我的衣橱</p>
        <Zhuangxiushangjia />
      </div>
      <div className="h-[45px] relative shrink-0 w-[48px]" data-name="chuandashouzhang">
        <Icon2 />
        <p className="[word-break:break-word] absolute font-['PingFang_SC:Semibold',sans-serif] leading-[normal] left-0 not-italic text-[#8a8a8a] text-[12px] top-[28px] whitespace-nowrap">穿搭手帐</p>
      </div>
    </div>
  );
}

export default function Component2Ai() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(234, 246, 228, 0.3) 0%, rgba(234, 246, 228, 0.3) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="2AI种草-思考页">
      <div className="-translate-x-1/2 absolute h-[44px] left-[calc(50%+6px)] top-0 w-[414px]" data-name="状态栏">
        <Status />
        <TimeStyle />
      </div>
      <Remand />
      <Chat />
      <BottomBar />
      <p className="[word-break:break-word] absolute font-['PingFang_SC:Regular',sans-serif] leading-[normal] left-[29.72px] not-italic text-[12px] text-black top-[192.08px] whitespace-nowrap">思考中...</p>
    </div>
  );
}