SELECT 
    `eventName`, `date`, `time`, 
    DATETIME('now'),
    DATE('now') || ' ' || TIME('now') AS `GMT`, 
    DATE('now', 'localtime') || ' ' || TIME('now', 'localtime') AS 'Local Time',
    DATE('now', '+9 hours') || ' ' || TIME('now', '+9 hours') AS 'KST'
    FROM `Event`
        WHERE REPLACE(`date`, '/', '-') >= DATE('now', '+9 hours') 
        AND `time` >= TIME('now', '+9 hours')
    ORDER BY `date`, `time` ASC;

    
SELECT 
    `eventName`, `date`, `time` 
    FROM `Event`
    ORDER BY `date`, `time` ASC;

    
SELECT `eventName`, `date`, `time`, `category`,
    (SELECT DATE('now', '+8 hours')) AS krDate,
    (SELECT TIME('now', '+8 hours')) AS krTime
    FROM Event 
    WHERE REPLACE(date, '/', '-') >= krDate
        AND time > krTime
    ORDER BY date ASC, time ASC;
    
    
select datetime('now') `GMT`, (select date('now')) || ' ' || (select time('now')) AS `date and time`;


SELECT
    `eventName`, 
    DATETIME('now', 'utc', '+9 hours') AS `krDateTime`,
    REPLACE(`date`, '/', '-') || ' ' || `time` AS `eventDateTime`
FROM `Event`
    WHERE `krDateTime` <= `eventDateTime`
ORDER BY `date` ASC;
--LIMIT 1;


