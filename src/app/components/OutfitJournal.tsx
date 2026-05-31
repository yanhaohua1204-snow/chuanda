import Component from "../../imports/穿搭手账-1/穿搭手账-3-642";
import svgPaths from "../../imports/穿搭手账-1/svg-esb9xrzkw4";

type Page = 'douyin' | 'ai-thinking' | 'ai-answer' | 'wardrobe' | 'journal';

interface OutfitJournalProps {
  onNavigate: (page: Page) => void;
}

export default function OutfitJournal({ onNavigate }: OutfitJournalProps) {
  return (
    <div className="size-full relative">
      <Component />
      <BottomNav onNavigate={onNavigate} />
    </div>
  );
}

function BottomNav({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <div className="absolute bg-[#f9fdf8] content-stretch flex gap-[77px] h-[109px] items-start left-[0.41px] pb-[43px] pt-[21px] px-[57px] rounded-[19px] top-[781px] w-[401.977px] z-50">
      <button
        onClick={() => onNavigate('ai-answer')}
        className="h-[45px] relative shrink-0 w-[36px]"
      >
        <div className="absolute left-[6px] size-[22px] top-[2px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g clipPath="url(#clip0_2_375)">
              <path d={svgPaths.pe54bb80} stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99935" />
              <path d="M18.3333 2.75V6.41667" stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99935" />
              <path d="M20.1667 4.58333H16.5" stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99935" />
              <path d="M3.66667 15.5833V17.4173" stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99935" />
              <path d="M4.58393 16.5H2.75" stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99935" />
            </g>
            <defs>
              <clipPath id="clip0_2_375">
                <rect fill="white" height="22" width="22" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p className="[word-break:break-word] absolute font-['PingFang_SC:Semibold',sans-serif] leading-[normal] left-0 not-italic text-[#8a8a8a] text-[12px] top-[28px] whitespace-nowrap">AI搭配</p>
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
                <path d={svgPaths.p393a9100} stroke="#709A5C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                <rect height="21.2" rx="3.1" stroke="#709A5C" strokeWidth="1.8" width="19.7921" x="0.9" y="0.9" />
                <path d="M1.6152 16.7958H20.4832" stroke="#709A5C" strokeLinecap="round" strokeWidth="1.8" />
              </g>
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-['PingFang_SC:Semibold',sans-serif] leading-[normal] left-0 not-italic text-[#709a5c] text-[12px] top-[28px] whitespace-nowrap">穿搭手帐</p>
      </button>
    </div>
  );
}
