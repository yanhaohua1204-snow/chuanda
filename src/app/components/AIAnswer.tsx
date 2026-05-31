import { useState, useEffect } from 'react';
import svgPaths from "../../imports/3Ai种草回答页-1/svg-95ckymxjgp";
import imgRectangle40 from "../../imports/3Ai种草回答页-1/564532f18be760d5266629ec45313ee4a6f15123.png";
import imgB33398F41D7E47308E7C63773C4908F21 from "../../imports/3Ai种草回答页-1/dfd0ef66740aa2144ce1f975519bce1c5961d993.png";
import imgImg34761 from "../../imports/3Ai种草回答页-1/af14a2bffeeed43494b68ab0526358d0b1cefdba.png";
import imgImg34801 from "../../imports/3Ai种草回答页-1/3da418f3dafb7f0730d48f71f929c8872b599b37.png";
import imgImg34841 from "../../imports/3Ai种草回答页-1/9fde5a2d94d09768db3e5440dbc29be178cf871b.png";
import imgImg34762 from "../../imports/3Ai种草回答页-1/6e4dbe070312abf2f88e948507bf8149d530d21f.png";
import img from "../../imports/3Ai种草回答页-1/80c937220674f4ea30f6d09437f340d4705bf80a.png";
import img1 from "../../imports/3Ai种草回答页-1/53e41ccb9542ff6572510c7f3819117668ba298e.png";

type Page = 'douyin' | 'ai-thinking' | 'ai-answer' | 'wardrobe' | 'journal';

interface AIAnswerProps {
  onNavigate: (page: Page) => void;
}

export default function AIAnswer({ onNavigate }: AIAnswerProps) {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const fullText = '低饱和奶油色系\n利用短上衣+高腰牛仔裤打造显高比例！';

  useEffect(() => {
    if (isTyping) {
      let currentIndex = 0;
      const timer = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(timer);
        }
      }, 80);

      return () => clearInterval(timer);
    }
  }, [isTyping]);

  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(234, 246, 228, 0.3) 0%, rgba(234, 246, 228, 0.3) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <StatusBar />
      <ContentArea typedText={typedText} />
      <ChatInput />
      <BottomNav onNavigate={onNavigate} currentPage="ai-answer" />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="-translate-x-1/2 absolute h-[44px] left-[calc(50%+6px)] top-0 w-[414px]">
      <div className="-translate-y-1/2 absolute h-[12px] right-[22px] top-1/2 w-[67px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 12">
          <g clipPath="url(#clip0_2_402)">
            <g>
              <rect height="10.3333" opacity="0.35" rx="2.16667" stroke="#1F1F1F" width="21" x="42.8333" y="0.833333" />
              <path d={svgPaths.p2f77f580} fill="#1F1F1F" opacity="0.4" />
              <rect fill="#1F1F1F" height="7.33333" rx="1.33333" width="18" x="44.3333" y="2.33333" />
            </g>
            <path d={svgPaths.p3b46d180} fill="#1F1F1F" />
            <path d={svgPaths.p192da80} fill="#1F1F1F" />
          </g>
          <defs>
            <clipPath id="clip0_2_402">
              <rect fill="white" height="12" width="67" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute h-[18px] left-[21px] overflow-clip top-1/2 w-[54px]">
        <p className="[word-break:break-word] absolute font-['SF_Pro_Display:Semibold',sans-serif] leading-[normal] left-0 not-italic right-0 text-[#1f1f1f] text-[15px] text-center top-[calc(50%-9px)] tracking-[-0.3px]">09:41</p>
      </div>
    </div>
  );
}

function ContentArea({ typedText }: { typedText: string }) {
  return (
    <div className="absolute h-[679px] left-[23px] overflow-x-clip overflow-y-auto top-[49px] w-[355px]">
      <AnalysisCard typedText={typedText} />
      <MatchingCard />
      <TopCard />
    </div>
  );
}

function AnalysisCard({ typedText }: { typedText: string }) {
  return (
    <div className="absolute h-[184px] left-0 right-0 top-[135px]">
      <div className="absolute bg-white h-[184px] left-0 rounded-[16px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.05)] top-0 w-[353px]" />
      <div className="absolute h-[123px] left-[18px] rounded-[8px] top-[43px] w-[93px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle40} />
      </div>
      <p className="[word-break:break-word] absolute font-['PingFang_SC:Semibold',sans-serif] leading-[16.916px] left-[123px] not-italic text-[#1f1f1f] text-[12px] top-[43px] whitespace-nowrap">歪歪waii的同款松弛通勤风！</p>
      <p className="[word-break:break-word] absolute font-['PingFang_SC:Semibold',sans-serif] leading-[16.916px] left-[18px] not-italic text-[#1f1f1f] text-[16px] top-[17px] whitespace-nowrap">穿搭视频分析</p>
      <p className="[word-break:break-word] absolute font-['PingFang_SC:Regular',sans-serif] leading-[16.916px] left-[222px] not-italic text-[#7a7a7a] text-[10px] top-[149px] whitespace-nowrap">通勤｜轻法式｜温柔知性</p>
      <div className="absolute bg-[#ebffe6] h-[8.899px] left-[249.75px] top-[103.4px] w-[78.494px]" />
      <div className="[word-break:break-word] absolute font-['PingFang_SC:Regular',sans-serif] leading-[24px] left-[123px] not-italic text-[#1f1f1f] text-[12px] top-[69px] w-[210px] whitespace-pre-wrap">
        {typedText}
      </div>
    </div>
  );
}

function MatchingCard() {
  return (
    <div className="absolute h-[523px] left-0 overflow-clip right-0 top-[334px]">
      <div className="absolute bg-white h-[523px] left-0 rounded-[16px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.05)] top-0 w-[352px]" />
      <div className="absolute contents left-[21px] top-[46px]">
        <div className="absolute h-[198px] left-[21px] top-[46px] w-[177px]">
          <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none" />
        </div>
        <div className="absolute h-[198px] left-[21px] top-[244px] w-[177px]">
          <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none" />
        </div>
        <div className="absolute left-[198px] size-[132px] top-[46px]">
          <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none" />
        </div>
        <div className="absolute left-[198px] size-[132px] top-[178px]">
          <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none" />
        </div>
        <div className="absolute left-[198px] size-[132px] top-[310px]">
          <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none" />
        </div>
        <div className="absolute h-[130px] left-[55px] top-[76px] w-[110px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[131.32%] left-[-9.97%] max-w-none top-[-12.69%] w-[116.67%]" src={imgB33398F41D7E47308E7C63773C4908F21} />
          </div>
        </div>
        <div className="absolute h-[164px] left-[43px] top-[256px] w-[132px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[98.08%] left-0 max-w-none top-[-0.26%] w-full" src={imgImg34761} />
          </div>
        </div>
        <div className="absolute h-[112px] left-[200px] top-[47px] w-[128px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[114.29%] left-0 max-w-none top-[-14.29%] w-full" src={imgImg34801} />
          </div>
        </div>
        <div className="absolute h-[114px] left-[225px] top-[313px] w-[77px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[147.54%] left-[-55.51%] max-w-none top-[-19.73%] w-[217.19%]" src={imgImg34841} />
          </div>
        </div>
        <div className="absolute left-[210px] size-[111px] top-[184px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg34762} />
        </div>
      </div>
      <RefreshButtons />
      <Tags />
      <p className="[word-break:break-word] absolute font-['PingFang_SC:Semibold',sans-serif] leading-[16.916px] left-[18px] not-italic text-[#1f1f1f] text-[16px] top-[19px] whitespace-nowrap">单品识别衣橱匹配</p>
      <p className="[word-break:break-word] absolute font-['PingFang_SC:Regular',sans-serif] leading-[16.916px] left-[21px] not-italic text-[#1f1f1f] text-[12px] top-[455px] w-[309px]">你的衣橱与该风格匹配度 87%，推荐使用现有的白色短上衣、蓝色牛仔裤、玛丽珍小白鞋进行复刻，仅需补充一条简约项链即可完成整体造型。✨</p>
    </div>
  );
}

function RefreshButtons() {
  return (
    <>
      <div className="absolute left-[177px] size-[16px] top-[51px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g>
            <circle cx="8" cy="8" fill="#98BE85" r="8" />
            <g>
              <path d={svgPaths.p24d04b80} fill="white" />
            </g>
          </g>
        </svg>
      </div>
      <div className="absolute left-[177px] size-[16px] top-[251px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g>
            <circle cx="8" cy="8" fill="#98BE85" r="8" />
            <g>
              <path d={svgPaths.p24d04b80} fill="white" />
            </g>
          </g>
        </svg>
      </div>
      <div className="absolute left-[309px] size-[16px] top-[317px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g>
            <circle cx="8" cy="8" fill="#98BE85" r="8" />
            <g>
              <path d={svgPaths.p24d04b80} fill="white" />
            </g>
          </g>
        </svg>
      </div>
      <div className="absolute left-[309px] size-[16px] top-[51px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g>
            <circle cx="8" cy="8" fill="#98BE85" r="8" />
            <g>
              <path d={svgPaths.p24d04b80} fill="white" />
            </g>
          </g>
        </svg>
      </div>
      <div className="absolute left-[309px] size-[16px] top-[185px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g>
            <circle cx="8" cy="8" fill="#98BE85" r="8" />
            <g>
              <path d={svgPaths.p24d04b80} fill="white" />
            </g>
          </g>
        </svg>
      </div>
    </>
  );
}

function Tags() {
  return (
    <>
      <div className="absolute bg-[#f0f5ed] h-[16px] left-[30px] rounded-[8px] top-[419px] w-[55px]" />
      <div className="absolute bg-[#f0f5ed] h-[16px] left-[30px] rounded-[8px] top-[221px] w-[55px]" />
      <div className="absolute bg-[#fff5f5] h-[16px] left-[207px] rounded-[8px] top-[154px] w-[59px]" />
      <div className="absolute bg-[#fff5f5] h-[16px] left-[207px] rounded-[8px] top-[419px] w-[59px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['PingFang_SC:Semibold',sans-serif] h-[16px] justify-center leading-[0] left-[58px] not-italic text-[#8ba977] text-[10px] text-center top-[427px] w-[40px]">
        <p className="leading-[normal]">我的衣橱</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['PingFang_SC:Semibold',sans-serif] h-[16px] justify-center leading-[0] left-[58px] not-italic text-[#8ba977] text-[10px] text-center top-[229px] w-[40px]">
        <p className="leading-[normal]">我的衣橱</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] left-[237px] not-italic text-[#fda6d3] text-[10px] text-center top-[162px] whitespace-nowrap">
        <p className="leading-[normal]">DaDou推荐</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['PingFang_SC:Semibold',sans-serif] justify-center leading-[0] left-[237px] not-italic text-[#fda6d3] text-[10px] text-center top-[427px] whitespace-nowrap">
        <p className="leading-[normal]">DaDou推荐</p>
      </div>
      <div className="absolute bg-[#f0f5ed] h-[16px] left-[207px] rounded-[8px] top-[287px] w-[55px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['PingFang_SC:Semibold',sans-serif] h-[16px] justify-center leading-[0] left-[235px] not-italic text-[#8ba977] text-[10px] text-center top-[295px] w-[40px]">
        <p className="leading-[normal]">我的衣橱</p>
      </div>
    </>
  );
}

function TopCard() {
  return (
    <div className="absolute h-[118px] left-[2px] top-[-1px] w-[353px]">
      <div className="-translate-x-1/2 absolute bg-white h-[118px] left-1/2 rounded-[16px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.05)] top-0 w-[353px]" />
      <div className="absolute h-[81px] left-[22px] top-[18px] w-[175px]">
        <div className="absolute h-[30px] left-0 top-[51px] w-[143px]">
          <div className="absolute bg-[#f0f5ed] h-[30px] left-0 rounded-[17.5px] top-0 w-[143px]" />
          <p className="[word-break:break-word] absolute font-['PingFang_SC:Regular',sans-serif] leading-[normal] left-[35px] not-italic text-[#8ba977] text-[12px] top-[7px] whitespace-nowrap">DaDou一起穿吧～</p>
          <div className="absolute left-[13px] size-[14px] top-[9px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <g>
                <path d={svgPaths.p20364380} stroke="#8BA977" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
                <path d={svgPaths.p19547e98} stroke="#8BA977" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
                <path d="M4.66667 7H9.33333" stroke="#8BA977" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute h-[45px] left-0 top-0 w-[175px]">
          <p className="[word-break:break-word] absolute font-['PingFang_SC:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#b8b8b8] text-[12px] top-[28px] whitespace-nowrap">解析博主穿搭，生成搭配方案</p>
          <p className="[word-break:break-word] absolute font-['PingFang_SC:Semibold',sans-serif] leading-[normal] left-0 not-italic text-[#1f1f1f] text-[16px] top-0 whitespace-nowrap">粘贴抖音穿搭视频链接</p>
        </div>
      </div>
      <div className="absolute contents inset-[11.86%_3.14%_11.26%_60.62%]">
        <div className="absolute flex inset-[13.56%_3.14%_12.99%_76.49%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="flex-none h-[hypot(-16.9252cqw,89.1361cqh)] rotate-[8.95deg] w-[hypot(83.0748cqw,10.8639cqh)]">
            <div className="pointer-events-none relative rounded-[6.721px] size-full">
              <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[6.721px] size-full" src={img} />
              <div aria-hidden className="absolute border-[1.26px] border-solid border-white inset-[-1.26px] rounded-[7.981px] shadow-[0px_0px_3.361px_0px_rgba(0,0,0,0.25)]" />
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[13.94%_12.76%_15.81%_69.24%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="flex-none h-[hypot(-4.84603cqw,97.2151cqh)] rotate-[2.19deg] w-[hypot(95.154cqw,2.78494cqh)]">
            <div className="pointer-events-none relative rounded-[6.721px] size-full">
              <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[6.721px] size-full" src={img1} />
              <div aria-hidden className="absolute border-[1.26px] border-solid border-white inset-[-1.26px] rounded-[7.981px] shadow-[0px_0px_3.361px_0px_rgba(0,0,0,0.25)]" />
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[11.86%_18.2%_11.26%_60.62%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="-rotate-11 flex-none h-[hypot(20.5781cqw,87.2796cqh)] w-[hypot(79.4219cqw,-12.7204cqh)]">
            <div className="pointer-events-none relative rounded-[6.721px] size-full">
              <div className="absolute inset-0 overflow-hidden rounded-[6.721px]">
                <img alt="" className="absolute h-[133.93%] left-[-10.16%] max-w-none top-[-8.04%] w-[118.41%]" src={imgRectangle40} />
              </div>
              <div aria-hidden className="absolute border-[1.26px] border-solid border-white inset-[-1.26px] rounded-[7.981px] shadow-[0px_0px_3.361px_0px_rgba(0,0,0,0.25)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatInput() {
  return (
    <div className="absolute h-[54px] left-[26px] top-[728px] w-[350px]">
      <div className="absolute bg-white h-[54px] left-0 rounded-[27px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.05)] top-0 w-[350px]" />
      <div className="absolute left-[300px] size-[40px] top-[7px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <g>
            <circle cx="20" cy="20" fill="#98BE85" r="20" />
            <path d={svgPaths.p348c6b00} fill="white" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function BottomNav({ onNavigate, currentPage }: { onNavigate: (page: Page) => void; currentPage: Page }) {
  return (
    <div className="absolute bg-[#f9fdf8] content-stretch flex gap-[77px] h-[109px] items-start left-0 pb-[43px] pt-[21px] px-[57px] rounded-[19px] top-[782px] w-[401.977px]">
      <button
        onClick={() => onNavigate('ai-answer')}
        className="h-[45px] relative shrink-0 w-[36px]"
      >
        <div className="absolute left-[6px] size-[22px] top-[2px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g clipPath="url(#clip0_2_287)">
              <path d={svgPaths.pe54bb80} stroke="#709A5C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99935" />
              <path d="M18.3333 2.75V6.41667" stroke="#709A5C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99935" />
              <path d="M20.1667 4.58333H16.5" stroke="#709A5C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99935" />
              <path d="M3.66667 15.5833V17.4173" stroke="#709A5C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99935" />
              <path d="M4.58393 16.5H2.75" stroke="#709A5C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99935" />
            </g>
            <defs>
              <clipPath id="clip0_2_287">
                <rect fill="white" height="22" width="22" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p className="[word-break:break-word] absolute font-['PingFang_SC:Semibold',sans-serif] leading-[normal] left-0 not-italic text-[#709a5c] text-[12px] top-[28px] whitespace-nowrap">AI搭配</p>
      </button>

      <button
        onClick={() => onNavigate('wardrobe')}
        className="h-[45px] relative shrink-0 w-[48px]"
      >
        <p className="[word-break:break-word] absolute font-['PingFang_SC:Semibold',sans-serif] leading-[normal] left-0 not-italic text-[#8a8a8a] text-[12px] top-[28px] whitespace-nowrap">我的衣橱</p>
        <div className="absolute bottom-[48.89%] left-1/4 right-[27.08%] top-0">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
            <g clipPath="url(#clip0_2_398)">
              <path d={svgPaths.p1ba08f00} fill="#8A8A8A" />
              <path d={svgPaths.p1a84c000} fill="#8A8A8A" />
            </g>
            <defs>
              <clipPath id="clip0_2_398">
                <rect fill="white" height="23" width="23" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </button>

      <button
        onClick={() => onNavigate('journal')}
        className="h-[45px] relative shrink-0 w-[48px]"
      >
        <div className="absolute left-[12px] overflow-clip size-[23.992px] top-0">
          <div className="absolute inset-[0_5%_4.14%_5%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5921 23">
              <g>
                <path d={svgPaths.p393a9100} stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                <rect height="21.2" rx="3.1" stroke="#8A8A8A" strokeWidth="1.8" width="19.7921" x="0.9" y="0.9" />
                <path d="M1.6152 16.7958H20.4832" stroke="#8A8A8A" strokeLinecap="round" strokeWidth="1.8" />
              </g>
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-['PingFang_SC:Semibold',sans-serif] leading-[normal] left-0 not-italic text-[#8a8a8a] text-[12px] top-[28px] whitespace-nowrap">穿搭手帐</p>
      </button>
    </div>
  );
}
