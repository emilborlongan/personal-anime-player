import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';

interface Props {
  url: string;
}

export default function VideoPlayer({ url }: Props) {
  return (
    <Plyr
      source={{
        type: 'video',
        sources: [{ src: url, provider: 'html5' }],
      }}
    />
  );
}
