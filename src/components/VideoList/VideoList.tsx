import {DateTimePretty} from 'components/DateTime/DateTime';
import {cn} from 'utils/classname';

import './VideoList.scss';

const block = cn('video-list');

interface VideoProps {
    url: string;
    date: string;
}

function Video(props: VideoProps) {
    return (
        <div className={block('video')}>
            <iframe
                src={props.url}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>
            <DateTimePretty date={props.date} />
        </div>
    );
}

interface VideoListProps {
    list: VideoProps[];
}

export function VideoList(props: VideoListProps) {
    return (
        <div className={block()}>
            {props.list.map((item, idx) => (
                <Video key={idx} url={item.url} date={item.date} />
            ))}
        </div>
    );
}
