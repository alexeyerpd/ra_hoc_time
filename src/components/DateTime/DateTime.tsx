import dayjs from 'dayjs';

const HOUR_MILLISEC = 1000 * 60 * 60;
const DAY_MILLISEC = HOUR_MILLISEC * 24;

interface DateTimeProps {
    date: string;
}

export function DateTime(props: DateTimeProps) {
    return <p className="date">{props.date}</p>;
}

interface DateTimePrettyProps extends DateTimeProps {}

export function DateTimePretty(props: DateTimePrettyProps) {
    const date = getPrettyDate(props.date);
    return <DateTime date={date} />;
}

function getPrettyDate(date: string) {
    const diffMillisec = Math.abs(dayjs(date).diff());
    const diffDuration = dayjs.duration(diffMillisec);

    if (diffMillisec < HOUR_MILLISEC) {
        return `${diffDuration.get('minutes')} минут назад`;
    } else if (diffMillisec < DAY_MILLISEC) {
        return `${diffDuration.get('hours')} часов назад`;
    } else {
        return `${Math.floor(diffMillisec / DAY_MILLISEC)} дней назад`;
    }
}
