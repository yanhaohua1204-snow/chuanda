import Component1 from "../../imports/1抖音挂载页-1/1抖音挂载页-3-646";

interface DouyinEntryProps {
  onEnter: () => void;
}

export default function DouyinEntry({ onEnter }: DouyinEntryProps) {
  return (
    <div className="size-full relative" onClick={onEnter}>
      <Component1 />
    </div>
  );
}
