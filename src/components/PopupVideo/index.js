import Image from 'next/image';
import { PopupVideoStyle } from './styles';
import IconPlay from '../../assets/play.svg';

export function PopupVideo({ label, thumb }) {
  return (
    <PopupVideoStyle>
      <span>{label}</span>
      <button style={{ background: `url(${thumb})` }}>
        <div>
          <Image src={IconPlay} alt="Icon play" />
        </div>
      </button>
    </PopupVideoStyle>
  );
}
