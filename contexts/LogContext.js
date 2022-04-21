import React, {useEffect, useRef} from 'react';
import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import logsStorage from '../storages/logsStorage';

const LogContext = createContext();

export function LogContextProvider({children}) {
    const initialLogsRef = useRef(null);
    const [logs, setLogs] = useState([]);
    const onCreate = ({title, body, date}) => {
        const log = {
            id: uuidv4(),
            title,
            body,
            date,
        };
        setLogs([log, ...logs]);
    };

    // useEffect에서 AsyncStorage 사용
    useEffect(() => {
        // 이 안에서 async ()를 만들어 바로 호출한다(IIFE 패턴)
        (async () => {
            const savedLogs = await logsStorage.get();
            if (savedLogs) {
                initialLogsRef.current = savedLogs;
                setLogs(savedLogs);
            }
        })();
    }, []);

    useEffect(() => {
        if (logs === initialLogsRef.current) {
            return;
        }
        logsStorage.set(logs);
    }, [logs]);

    // 수정
    const onModify = modified => {
        // logs[]를 순회해서 id가 일치하면 log를 교체. 그렇지 않으면 유지
        const nextLogs = logs.map(log =>
            log.id === modified.id ? modified : log,
        );
        setLogs(nextLogs);
    };

    // 삭제
    const onRemove = id => {
        const nextLogs = logs.filter(log => log.id !== id);
        setLogs(nextLogs);
    };
    return (
        <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
            {children}
        </LogContext.Provider>
    );
}

export default LogContext;
