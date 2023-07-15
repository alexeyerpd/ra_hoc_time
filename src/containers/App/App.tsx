import * as React from 'react';
import {VideoList} from 'components/VideoList/VideoList';
import dayjs from 'dayjs';

import '../../styles/root.scss';
import './App.scss';

export function App() {
    const [list] = React.useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: dayjs().add(-10, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: dayjs().add(-2, 'hours').format('YYYY-MM-DD HH:mm:ss'),
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: dayjs().add(10, 'days').format('YYYY-MM-DD HH:mm:ss'),
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00',
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00',
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00',
        },
    ]);

    return <VideoList list={list} />;
}
